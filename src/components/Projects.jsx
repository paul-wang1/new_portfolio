import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

/**
 * Projects Component
 *
 * Displays all projects as a single list in priority order (no categorization).
 * Each project card is clickable and links to a dedicated project page.
 *
 * Customization:
 * - Add new projects in src/data/portfolioData.js
 * - Set featured: true for projects you want to highlight
 * - Projects display in the order they appear in the data file
 * - Project type is shown as a tag (not used for filtering)
 *
 * Features:
 * - Single list of all projects
 * - Click to view detailed project pages
 * - Featured project highlighting
 * - Tech stack preview
 * - Responsive grid layout
 */

const Projects = ({ showViewAllButton = false }) => {
  return (
    <section id="projects" className="section-padding bg-neutral-100">
      <div className="section-container-wide">
        {/* Section Header - BOLD & EDITORIAL */}
        <div className="mb-24 max-w-4xl">
          <h2 className="heading-section text-neutral-900 mb-6">
            Selected Work
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
            Exploring robotics, embedded systems, and intelligent automation
          </p>
        </div>

        {/* Projects Grid - Magazine-style layout with generous spacing */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className="group block animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`grid grid-cols-1 ${
                index % 2 === 0 ? 'lg:grid-cols-5' : 'lg:grid-cols-5'
              } gap-8 lg:gap-12 items-center`}>
                {/* Project Info - Asymmetric layout */}
                <div className={`lg:col-span-2 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                } space-y-6`}>
                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="inline-block text-sm font-semibold text-primary-700 uppercase tracking-wider">
                      Featured Project
                    </span>
                  )}

                  {/* Project Type */}
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                    {project.type}
                  </div>

                  {/* Title - Large and bold */}
                  <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description - Generous line height */}
                  <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack - Minimal pills */}
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-primary-100/50 text-primary-700 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-4 py-2 bg-neutral-200 text-neutral-600 text-sm font-medium">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* View Details - Minimal link */}
                  <div className="flex items-center gap-3 text-primary-700 group-hover:text-primary-600 font-semibold text-lg pt-4">
                    View Project
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Project Visual - Hero Image */}
                <div className={`lg:col-span-3 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                    {project.heroImage ? (
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="text-6xl mb-4 opacity-30">
                            {project.featured ? '⭐' : '🔧'}
                          </div>
                          <p className="text-neutral-600 font-medium">
                            Project Image
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Link */}
        {showViewAllButton && projects.length > 0 && (
          <div className="mt-24 text-center">
            <Link
              to="/projects"
              className="inline-block px-12 py-4 bg-primary-600 text-neutral-50 font-semibold text-lg hover:bg-primary-700 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        )}

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-600 text-xl">
              No projects added yet. Add your first project in the data file!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
