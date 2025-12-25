import { FiBriefcase, FiAward, FiUsers } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

/**
 * Experience Component
 *
 * Displays your leadership roles, work experience, and extracurriculars.
 *
 * Customization:
 * - Add new experience in portfolioData.js
 * - Change icons by modifying the iconMap
 * - Adjust the timeline style by modifying border colors and spacing
 * - Update type categories (leadership, extracurricular, work, etc.)
 */

const Experience = () => {
  // Map experience types to icons
  const iconMap = {
    leadership: FiBriefcase,
    extracurricular: FiUsers,
    work: FiAward,
  };

  return (
    <section id="experience" className="section-padding bg-neutral-50">
      <div className="section-container-wide">
        {/* Section Header - LARGE & BOLD */}
        <div className="mb-24 max-w-4xl">
          <h2 className="heading-section text-neutral-900 mb-6">
            Experience & Leadership
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
            Leading technical teams and making impact through technology
          </p>
        </div>

        {/* Experience Timeline - Cleaner, more spacious */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {/* Experience Items */}
            {experience.map((exp, index) => {
              const Icon = iconMap[exp.type] || FiBriefcase;

              return (
                <div
                  key={exp.id}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Content Card - Flat design with color blocks */}
                  <div className="bg-neutral-100 border-l-4 border-primary-600 p-8 md:p-10 hover:border-secondary-600 transition-colors duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-primary-600" />
                          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary-700 font-semibold mb-1">
                          {exp.organization}
                        </p>
                        <p className="text-neutral-600">
                          {exp.location}
                        </p>
                      </div>
                      <div>
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description - Generous spacing */}
                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-neutral-700 text-lg leading-relaxed"
                        >
                          <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
