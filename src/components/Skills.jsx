import { skills } from '../data/skills';

/**
 * Skills Component
 *
 * Displays your technical skills in a simple, clean list format organized by category.
 * Now positioned near the top of the page for easy visibility.
 *
 * Customization:
 * - Edit skills in src/data/skills.js (much easier to manage now!)
 * - Add/remove skills within categories
 * - Reorder skills by cut and paste
 * - Create new categories as needed
 * - Move skills between categories
 */

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-primary-50/30">
      <div className="section-container-wide">
        {/* Section Header - LARGE & BOLD */}
        <div className="mb-20 max-w-4xl">
          <h2 className="heading-section text-primary-700 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
            A comprehensive toolkit for building intelligent robotic systems and embedded solutions
          </p>
        </div>

        {/* Skills Grid - Clean, spacious layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header - Minimal underline */}
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6 pb-3 border-b border-primary-600/30">
                {category}
              </h3>

              {/* Skills List - Clean, generous spacing */}
              <ul className="space-y-3">
                {skillList.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-neutral-700 text-lg"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
