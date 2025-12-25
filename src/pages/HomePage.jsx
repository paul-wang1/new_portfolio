import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * HomePage Component
 *
 * The main landing page of the portfolio.
 * Note: About section removed (now has its own page)
 * Note: Projects section removed (now has its own page)
 * Note: Skills section moved to the top (right after Hero)
 *
 * Structure:
 * - Navigation (sticky header)
 * - Hero (landing section)
 * - Skills (technical skills - now positioned prominently at top)
 * - Experience (leadership and work)
 * - Contact (get in touch)
 * - Footer
 *
 * Customization:
 * - Reorder sections by changing the order of components
 * - All content is controlled via src/data/portfolioData.js and src/data/skills.js
 */

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Skills />  {/* Moved to top for visibility */}
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
