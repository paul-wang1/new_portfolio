import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';

/**
 * Contact Component
 *
 * Displays contact information and social links.
 *
 * Customization:
 * - Update personalInfo in portfolioData.js to change contact details
 * - Add more social links in socialLinks array
 * - Modify the card layout and styling
 * - Add a contact form if needed
 */

const Contact = () => {
  // Map icon names to components
  const iconMap = {
    email: FiMail,
    github: FiGithub,
    linkedin: FiLinkedin,
  };

  return (
    <section id="contact" className="section-padding bg-secondary-600">
      <div className="section-container-wide">
        {/* Section Header - LARGE & BOLD on colored background */}
        <div className="mb-20 max-w-4xl">
          <h2 className="heading-section text-neutral-50 mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed font-light">
            I'm actively seeking robotics internship opportunities for Summer 2026.
            Let's build something impactful.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info - Minimal, clean layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group text-center space-y-4 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 text-neutral-100 group-hover:text-neutral-50 transition-colors">
                <FiMail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">Email</h3>
                <p className="text-neutral-200 break-all group-hover:text-neutral-50 transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center space-y-4 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 text-neutral-100 group-hover:text-neutral-50 transition-colors">
                <FiLinkedin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">LinkedIn</h3>
                <p className="text-neutral-200 group-hover:text-neutral-50 transition-colors">
                  Connect with me
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center space-y-4 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 text-neutral-100 group-hover:text-neutral-50 transition-colors">
                <FiGithub className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">GitHub</h3>
                <p className="text-neutral-200 group-hover:text-neutral-50 transition-colors">
                  View my code
                </p>
              </div>
            </a>
          </div>

          {/* CTA Buttons - Minimal, clean */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block px-12 py-4 bg-neutral-100 text-secondary-700 font-semibold text-lg hover:bg-neutral-50 transition-all duration-300 text-center"
            >
              Send an Email
            </a>
            <a
              href={personalInfo.resumeFile}
              download
              className="inline-block px-12 py-4 border-2 border-neutral-100 text-neutral-100 font-semibold text-lg hover:bg-neutral-100 hover:text-secondary-700 transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </div>

          {/* Location Info */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-neutral-200 text-lg">
              <FiMapPin className="w-5 h-5" />
              <span>Based in Medford, MA • Open to relocation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
