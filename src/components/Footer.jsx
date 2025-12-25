import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';

/**
 * Footer Component
 *
 * Displays footer information and social links.
 *
 * Customization:
 * - Update personalInfo in portfolioData.js
 * - Modify social links in socialLinks array
 * - Change background color and styling as needed
 * - Add additional footer sections if desired
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Map icon names to components
  const iconMap = {
    email: FiMail,
    github: FiGithub,
    linkedin: FiLinkedin,
  };

  return (
    <footer className="bg-primary-600 text-neutral-100 section-padding-sm">
      <div className="section-container-wide">
        {/* Main Footer Content - Minimal & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-50">
              {personalInfo.name}
            </h3>
            <p className="text-lg text-neutral-200 leading-relaxed max-w-md">
              {personalInfo.currentYear} {personalInfo.title} at {personalInfo.university},
              passionate about robotics, embedded systems, and product management.
            </p>
            <p className="text-neutral-200 text-lg">
              Seeking Summer 2026 Embedded Systems Internships
            </p>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-50">Connect</h3>

            {/* Social Links - Minimal icons */}
            <div className="flex gap-6">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.icon !== 'email' ? '_blank' : undefined}
                    rel={link.icon !== 'email' ? 'noopener noreferrer' : undefined}
                    className="text-neutral-100 hover:text-neutral-50 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <Icon className="w-7 h-7" />
                  </a>
                );
              })}
            </div>

            {/* Email */}
            <p className="text-neutral-200 text-lg">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-neutral-50 transition-colors"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="pt-12 border-t border-neutral-100/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-200">
            <p>
              &copy; {currentYear} {personalInfo.name}.
            </p>
            <p className="text-sm">
              Based in Medford, MA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
