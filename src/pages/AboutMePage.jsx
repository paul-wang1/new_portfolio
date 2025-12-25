import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { aboutMe, personalInfo } from '../data/portfolioData';

/**
 * AboutMePage Component
 *
 * A dedicated page for personal, casual content about you.
 * Shows your personality beyond the technical resume.
 *
 * Features:
 * - Personal bio (more casual than professional bio)
 * - Photo gallery with captions
 * - Hobbies and interests
 * - Fun facts
 *
 * Customization:
 * - Edit content in src/data/portfolioData.js (aboutMe object)
 * - Add photos to /public/images/about/
 * - Update photos array in portfolioData.js with paths and captions
 */

const AboutMePage = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Persistent Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 to-neutral-50 py-20">
          <div className="section-container">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">
              {aboutMe.title}
            </h1>
            <p className="text-2xl text-neutral-700">
              {aboutMe.subtitle}
            </p>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="section-container py-16">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/images/hero_about.png"
                alt={personalInfo.name}
                className="w-64 h-64 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Personal Bio Section */}
        <div className="section-container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {aboutMe.personalBio.map((paragraph, index) => (
                <p key={index} className="text-lg text-neutral-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Photos Section */}
        {aboutMe.photos && aboutMe.photos.length > 0 && (
          <div className="bg-white py-16">
            <div className="section-container">
              <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                A Few Snapshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {aboutMe.photos.map((photo, index) => (
                  <figure
                    key={index}
                    className="group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={photo.path}
                        alt={photo.caption}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.parentElement.style.display = 'none';
                        }}
                      />
                    </div>
                    {photo.caption && (
                      <figcaption className="mt-3 text-center text-neutral-700 font-medium">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hobbies & Interests Section */}
        <div className="section-container py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              What I Love Doing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutMe.hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                  <span className="text-neutral-800 font-medium">{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Interested in collaborating on a project or just want to chat about technology and engineering? I'd love to hear from you!
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutMePage;
