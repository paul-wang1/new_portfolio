import { useParams, Link, Navigate } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiExternalLink, FiDownload, FiAlertCircle, FiCheckCircle, FiCode } from 'react-icons/fi';
import { getProjectBySlug } from '../data/portfolioData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/**
 * ProjectPage Component
 *
 * Displays detailed information about a single project including:
 * - Hero image
 * - Problem, Solution, Implementation sections
 * - Inline images with captions
 * - YouTube video embeds
 * - PDF viewer and download
 * - Tech stack tags
 * - Project links
 */

/**
 * FormatImplementationText Component
 * Renders implementation text with enhanced formatting:
 * - **Bold text** for section headers
 * - Bullet points with custom styling
 * - Code-like styling for technical terms
 */
const FormatImplementationText = ({ text }) => {
  const lines = text.split('\n');

  return (
    <div className="space-y-4">
      {lines.map((line, index) => {
        // Empty lines
        if (line.trim() === '') {
          return <div key={index} className="h-2"></div>;
        }

        // Bold section headers (e.g., **Custom PCB Design:**)
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <h4 key={index} className="text-xl font-bold text-neutral-900 mt-6 mb-3 flex items-center gap-2">
              <FiCode className="w-5 h-5 text-primary-600" />
              {parts[1]}
            </h4>
          );
        }

        // Bullet points
        if (line.trim().startsWith('-')) {
          const content = line.trim().substring(1).trim();
          return (
            <div key={index} className="flex items-start gap-3 pl-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></span>
              <p className="text-lg text-neutral-700 leading-relaxed flex-1">{content}</p>
            </div>
          );
        }

        // Regular paragraphs
        return (
          <p key={index} className="text-lg text-neutral-700 leading-relaxed">
            {line}
          </p>
        );
      })}
    </div>
  );
};

const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  // If project not found, redirect to projects page
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Persistent Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-20">
        {/* Back Button */}
        <div className="section-container py-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors group"
          >
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <div className="section-container pb-12">
          {/* Project Type Tag */}
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 text-sm font-bold rounded-full mb-6 shadow-sm border border-primary-300">
            {project.type}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
            {project.title}
          </h1>

          {/* Brief Description */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FiGithub className="w-5 h-5" />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FiExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
            )}
          </div>

          {/* Hero Image */}
          {project.heroImage && (
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-neutral-200 hover:ring-primary-300 transition-all duration-300">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        {/* Content Sections */}
        <div className="bg-white py-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              {/* Problem Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-secondary-100 text-secondary-700 rounded-xl flex items-center justify-center shadow-sm">
                    <FiAlertCircle className="w-5 h-5" />
                  </span>
                  Problem
                </h2>
                <div className="pl-13">
                  <div className="bg-neutral-50 border-l-4 border-secondary-600 p-6 rounded-r-lg">
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>
              </section>

              {/* Solution Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center shadow-sm">
                    <FiCheckCircle className="w-5 h-5" />
                  </span>
                  Solution
                </h2>
                <div className="pl-13">
                  <div className="bg-primary-50/30 border-l-4 border-primary-600 p-6 rounded-r-lg">
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </section>

              {/* Implementation Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center shadow-sm">
                    <FiCode className="w-5 h-5" />
                  </span>
                  Implementation
                </h2>
                <div className="pl-11 space-y-6">
                  {/* Implementation text with enhanced formatting */}
                  <FormatImplementationText text={project.implementation} />

                  {/* Inline Images */}
                  {project.images && project.images.length > 0 && (
                    <div className="space-y-10 mt-12">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.images.map((image, index) => (
                          <figure key={index} className="space-y-4 group">
                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-neutral-100">
                              <img
                                src={image.path}
                                alt={image.caption}
                                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>
                            {image.caption && (
                              <figcaption className="text-sm text-neutral-600 leading-relaxed px-2">
                                <span className="font-semibold text-primary-700">→</span> {image.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Inline Videos */}
                  {project.videos && project.videos.length > 0 && (
                    <div className="space-y-8 mt-8">
                      {project.videos.map((video, index) => (
                        <figure key={index} className="space-y-3">
                          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${video.youtubeId}`}
                              title={video.caption || `Video ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          {video.caption && (
                            <figcaption className="text-sm text-neutral-600 italic text-center">
                              {video.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}

                  {/* PDF Section */}
                  {project.pdf && (
                    <div className="mt-12 p-8 bg-gradient-to-br from-neutral-50 to-primary-50/10 border-2 border-neutral-200 rounded-2xl shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <FiDownload className="w-6 h-6 text-primary-600" />
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {project.pdf.title || 'Technical Documentation'}
                        </h3>
                      </div>

                      {/* PDF Embed */}
                      <div className="mb-6 rounded-xl overflow-hidden shadow-2xl border border-neutral-300" style={{ height: '600px' }}>
                        <iframe
                          src={project.pdf.path}
                          className="w-full h-full"
                          title={project.pdf.title}
                        />
                      </div>

                      {/* Download Link */}
                      <a
                        href={project.pdf.path}
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                      >
                        <FiDownload className="w-5 h-5" />
                        Download Full Documentation
                      </a>
                    </div>
                  )}
                </div>
              </section>

              {/* Tech Stack Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                  Technologies & Tools
                </h2>
                <div className="bg-gradient-to-br from-neutral-50 to-primary-50/20 p-8 rounded-2xl border border-neutral-200">
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-5 py-2.5 bg-white text-primary-700 font-semibold rounded-lg border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Bottom Navigation */}
              <div className="pt-8 border-t border-neutral-300">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors group"
                >
                  <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Back to All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectPage;
