import { personalInfo } from '../data/portfolioData';

/**
 * About Component
 *
 * Displays your bio and background information.
 *
 * Customization:
 * - Update bio array in portfolioData.js to change content
 * - Modify the layout by adjusting grid classes
 * - Add an image by uncommenting the image section and adding your photo
 * - Change accent colors from primary-600 to any color in your palette
 */

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          {/* Hero Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <img
                src="/images/hero_about.png"
                alt={personalInfo.name}
                className="w-64 h-64 rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Facts */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">
                Education
              </p>
              <p className="text-gray-900 font-medium">
                {personalInfo.major}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Minor: {personalInfo.minor}
              </p>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">
                Graduation
              </p>
              <p className="text-gray-900 font-medium">
                {personalInfo.graduationDate}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {personalInfo.university}
              </p>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">
                Focus Areas
              </p>
              <p className="text-gray-900 font-medium">
                Robotics & IoT
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Embedded Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
