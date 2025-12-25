import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

/**
 * ProjectsPage Component
 *
 * Dedicated page for displaying all projects.
 * Projects are shown as a single list (no categorization).
 * Each project card links to its detailed project page.
 *
 * Structure:
 * - Navigation (sticky header)
 * - Projects (all projects in priority order)
 * - Footer
 */

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
