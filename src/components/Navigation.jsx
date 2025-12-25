import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems, personalInfo } from '../data/portfolioData';

/**
 * Navigation Component
 *
 * Features:
 * - Sticky navigation that appears on scroll
 * - Mobile-responsive hamburger menu
 * - React Router integration for page navigation
 * - Smooth scrolling to sections (for anchor links)
 * - Active link highlighting
 *
 * Customization:
 * - Edit navItems in portfolioData.js to change menu items
 * - Navigation now supports both routes (/about) and anchors (/#contact)
 */

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll events for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation clicks (supports both routes and anchor links)
  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);

    // If it's an anchor link (starts with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If it's an anchor link on home page (like /#contact)
    else if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      if (path === '/' || path === '') {
        // We're going to home page with anchor
        if (location.pathname === '/') {
          // Already on home page, just scroll
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to home page, then scroll
          navigate('/');
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    }
    // Otherwise, let React Router handle it
  };

  // Check if a nav item is active
  const isActive = (href) => {
    if (href.startsWith('#')) {
      return location.pathname === '/' && location.hash === href;
    }
    if (href.includes('#')) {
      const [path] = href.split('#');
      return location.pathname === path || (path === '/' && location.pathname === '/');
    }
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white border-b border-neutral-200 shadow-sm'
          : 'bg-primary-900/30 backdrop-blur-sm'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <Link
            to="/"
            className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled
                ? 'text-primary-700 hover:text-primary-600'
                : 'text-neutral-50 hover:text-neutral-100'
            }`}
          >
            {personalInfo.name.split(' ')[0]}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? isActive(item.href)
                      ? 'text-primary-700'
                      : 'text-neutral-700 hover:text-primary-700'
                    : isActive(item.href)
                      ? 'text-neutral-50 font-semibold'
                      : 'text-neutral-100 hover:text-neutral-50'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <a
              href={personalInfo.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold px-6 py-2.5 transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-600 text-neutral-50 hover:bg-primary-700'
                  : 'bg-neutral-100 text-primary-700 hover:bg-neutral-50'
              }`}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled
                ? 'text-neutral-700 hover:text-primary-600'
                : 'text-neutral-100 hover:text-neutral-50'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in bg-neutral-100 -mx-6 px-6 mt-2">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-left px-4 py-3 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-700 font-semibold'
                      : 'text-neutral-700 hover:text-primary-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={personalInfo.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-neutral-50 bg-primary-600 hover:bg-primary-700 px-4 py-3 transition-colors text-center mt-4"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
