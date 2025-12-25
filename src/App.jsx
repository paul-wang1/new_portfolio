import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import AboutMePage from './pages/AboutMePage';

/**
 * Main App Component
 *
 * Sets up React Router for multi-page navigation.
 *
 * Routes:
 * - / - Home page (Hero, Skills, Experience, Contact)
 * - /projects - Projects listing page
 * - /project/:slug - Individual project detail page
 * - /about - About Me page (personal, casual content)
 *
 * Note: Navigation is persistent across all pages
 *
 * Customization:
 * - Add new routes by importing page components and adding <Route> elements
 * - All content is controlled via src/data/portfolioData.js and src/data/skills.js
 */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
