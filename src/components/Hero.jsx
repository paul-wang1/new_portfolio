import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';

/**
 * Hero Component
 *
 * The landing section of your portfolio.
 *
 * Customization:
 * - Update personalInfo in portfolioData.js to change text content
 * - Modify gradient colors in the className (from-primary-600 to-primary-400)
 * - Adjust animation timing by changing animation-delay values
 * - Change background pattern or add your own background image
 */

const Hero = () => {
  // Map icon names to actual icon components
  const iconMap = {
    github: FiGithub,
    linkedin: FiLinkedin,
    email: FiMail,
  };

  const scrollToNext = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-600 overflow-hidden">
      {/* Subtle geometric background element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neutral-50 rounded-full blur-3xl transform translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neutral-50 rounded-full blur-3xl transform -translate-x-1/2" />
      </div>

      {/* Content */}
      <div className="section-container-wide relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 animate-fade-in">
            {/* Headshot - Left side */}
            <div className="flex-shrink-0 animate-slide-up">
              <img
                src="/headshot.jpeg"
                alt={`${personalInfo.name} headshot`}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-neutral-100 shadow-2xl"
              />
            </div>

            {/* Text content - Right side */}
            <div className="flex-1 space-y-8">
              {/* Large, bold name - HERO TYPOGRAPHY */}
              <h1 className="heading-hero text-neutral-50 mb-6 animate-slide-up">
                {personalInfo.name}
              </h1>

              {/* Title - Large and confident */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-100 mb-8 animate-slide-up tracking-wide" style={{ animationDelay: '0.1s' }}>
                {personalInfo.currentYear} {personalInfo.title}
              </h2>

              {/* Education - Clean and minimal */}
              <div className="text-lg sm:text-xl md:text-2xl text-neutral-100 space-y-2 mb-12 animate-slide-up font-light" style={{ animationDelay: '0.2s' }}>
                <p>{personalInfo.major} • {personalInfo.minor}</p>
                <p>{personalInfo.university} • {personalInfo.graduationDate}</p>
              </div>

              {/* Tagline - Generous spacing */}
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-100 max-w-4xl leading-relaxed mb-16 animate-slide-up font-light" style={{ animationDelay: '0.3s' }}>
                {personalInfo.tagline}
              </p>

              {/* CTA Buttons - Minimal and clean */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="#contact"
                  className="inline-block px-10 py-4 bg-neutral-100 text-primary-700 font-semibold text-lg rounded-none hover:bg-neutral-50 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="inline-block px-10 py-4 border-2 border-neutral-100 text-neutral-100 font-semibold text-lg rounded-none hover:bg-neutral-100 hover:text-primary-700 transition-all duration-300"
                >
                  View Projects
                </a>
              </div>

              {/* Social Links - Clean minimal icons */}
              <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
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
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-neutral-100 hover:text-neutral-50 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <FiChevronDown className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
