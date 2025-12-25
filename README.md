# Paul Wang - Portfolio Website

A modern, multi-page portfolio website built with React, React Router, and Tailwind CSS. Features dedicated project pages with full media support (images, videos, PDFs), earth tone design theme, and extremely easy content management.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the repository:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 🌟 Key Features

- ✅ **Multi-page navigation** with React Router
- ✅ **Dedicated project pages** with detailed content
- ✅ **Full media support** - images, YouTube videos, PDFs
- ✅ **Earth tone light theme** - warm, professional color palette
- ✅ **Separate About Me page** - showcase personality beyond technical skills
- ✅ **Centralized color management** - easy theme customization
- ✅ **Simple skill management** - clean list format, easy to edit
- ✅ **Fully responsive** - mobile, tablet, desktop
- ✅ **Fast performance** - optimized for speed

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/              # Project images (organized by project)
│   │   │   ├── iot-water-monitoring/
│   │   │   │   ├── hero.jpg       # Main project image
│   │   │   │   └── [other-images].jpg
│   │   │   └── [other-projects]/
│   │   └── about/                 # Photos for About Me page
│   ├── files/
│   │   └── projects/              # Project PDFs
│   └── resume.pdf                 # Your resume
├── src/
│   ├── components/                # Reusable components
│   │   ├── Navigation.jsx         # Persistent navigation (with routing)
│   │   ├── Hero.jsx              # Landing section
│   │   ├── Projects.jsx          # Project cards (links to project pages)
│   │   ├── Skills.jsx            # Technical skills (simple list)
│   │   ├── Experience.jsx        # Leadership & work experience
│   │   ├── Contact.jsx           # Contact section
│   │   └── Footer.jsx            # Footer
│   ├── pages/                     # Page components
│   │   ├── HomePage.jsx          # Main landing page
│   │   ├── ProjectsPage.jsx      # All projects page
│   │   ├── ProjectPage.jsx       # Individual project detail
│   │   └── AboutMePage.jsx       # About Me page
│   ├── data/
│   │   ├── portfolioData.js      # ⭐ Main content (personal info, projects, experience)
│   │   └── skills.js             # ⭐ Technical skills (super easy to edit)
│   ├── config/
│   │   └── colors.js             # 🎨 Centralized color theme
│   ├── App.jsx                   # Router setup
│   └── index.css                 # Global styles
├── tailwind.config.js            # Tailwind config (imports colors)
└── package.json                  # Dependencies
```

## ✏️ Customizing Your Portfolio

### 📝 Adding a New Project (with Full Media Support)

Projects now support comprehensive content including images, videos, and PDFs!

#### Step 1: Create Project Entry

Edit `src/data/portfolioData.js` and add to the `projects` array:

```javascript
{
  // BASIC INFO
  id: 6,                          // Increment the ID
  slug: "my-awesome-project",     // URL-friendly identifier (used in routes)
  title: "My Awesome Project",
  type: "IoT & Embedded Systems", // Shown as a tag (not for filtering)

  // CARD DISPLAY (shown on projects page)
  description: "Brief description for the project card...",

  // HERO IMAGE
  heroImage: "/images/projects/my-awesome-project/hero.jpg",

  // DETAILED CONTENT (for project page)
  problem: "What problem does this solve?",
  solution: "How did you solve it?",
  implementation: `Detailed implementation explanation...

You can use multiple paragraphs here.

Key features:
- Feature 1
- Feature 2
- Feature 3`,

  // MEDIA (all optional)
  images: [
    {
      path: "/images/projects/my-awesome-project/schematic.jpg",
      caption: "Circuit schematic showing the design"
    },
    {
      path: "/images/projects/my-awesome-project/pcb.jpg",
      caption: "Finished PCB assembly"
    }
  ],

  videos: [
    {
      youtubeId: "dQw4w9WgXcQ",  // Just the video ID from YouTube URL
      caption: "Project demonstration and overview"
    }
  ],

  pdf: {
    path: "/files/projects/my-awesome-project/documentation.pdf",
    title: "Technical Documentation"
  },

  // TECH STACK (free-form - add whatever you want!)
  techStack: ["ESP32", "Python", "MQTT", "React", "Whatever you used"],

  // LINKS
  githubUrl: "https://github.com/username/repo",  // Optional
  liveUrl: "https://example.com",                 // Optional

  // DISPLAY
  featured: true  // Show as featured project
}
```

#### Step 2: Add Project Images

1. Create a folder for your project:
```bash
mkdir -p public/images/projects/my-awesome-project
```

2. Add your images:
- `hero.jpg` - Main project image (required) - **Recommended: 1200x675px**
- Additional images (optional) - **Recommended: 800x600px**

3. For PDFs:
```bash
mkdir -p public/files/projects/my-awesome-project
# Add your PDF here
```

💡 **See `public/MEDIA_GUIDE.md` for detailed instructions on organizing media files.**

### 🎯 Managing Technical Skills

Skills are now in their own file for easy editing!

Edit `src/data/skills.js`:

```javascript
export const skills = {
  // ADD A NEW CATEGORY
  "Your New Category": [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ],

  // MODIFY EXISTING CATEGORIES
  "Languages": [
    "Python",  // Reorder by cut and paste
    "C++",
    "Rust",    // Add new skills anywhere
  ],

  // Skills display in the order you define them here!
}
```

**Tips:**
- ✅ Add skills by adding to any array
- ✅ Remove skills by deleting them
- ✅ Reorder skills within categories by cut and paste
- ✅ Create new categories by adding new objects
- ✅ Move skills between categories by cut and paste

### 👤 Updating About Me Page

Edit the `aboutMe` object in `src/data/portfolioData.js`:

```javascript
export const aboutMe = {
  title: "About Me",
  subtitle: "Your subtitle here",

  // Personal bio (casual, not resume-like)
  personalBio: [
    "First paragraph about you...",
    "Second paragraph...",
    "Third paragraph..."
  ],

  // Photos (add to public/images/about/)
  photos: [
    {
      path: "/images/about/tennis.jpg",
      caption: "Caption for this photo"
    }
  ],

  // Hobbies
  hobbies: [
    "Club Tennis",
    "IoT Tinkering",
    "Whatever you enjoy"
  ],

  // Fun facts
  funFacts: [
    "Interesting fact about you",
    "Another fun fact"
  ]
}
```

### 🎨 Customizing Colors (Earth Tone Theme)

All colors are centralized in `src/config/colors.js` for easy theme customization!

```javascript
// Edit src/config/colors.js
export const colors = {
  primary: {
    600: '#16a34a',  // Main brand color (forest green)
    // ... other shades
  },
  secondary: {
    600: '#57534e',  // Supporting color (warm brown)
    // ... other shades
  },
  // ... more color scales
}
```

**The file has detailed comments explaining:**
- What each color is used for
- How to generate color scales
- Tips for maintaining readability
- Quick reference for common usage

Changes here automatically update the entire site!

### 📄 Updating Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  tagline: "Your hero section tagline",
  bio: [
    "Paragraph 1...",
    "Paragraph 2..."
  ],
  resumeFile: "/resume.pdf"
}
```

### 📊 Adding Experience/Leadership

In `src/data/portfolioData.js`, add to the `experience` array:

```javascript
{
  id: 4,
  role: "Your Role",
  organization: "Organization Name",
  period: "2024 - Present",
  location: "City, State",
  description: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2",
    "Achievement or responsibility 3"
  ],
  type: "leadership"  // or "work", "extracurricular"
}
```

## 🗺️ Site Navigation

The portfolio is now a multi-page app with React Router:

- **/** - Home page (Hero, Skills, Experience, Contact)
- **/projects** - All projects page
- **/project/:slug** - Individual project detail pages
- **/about** - About Me page

Navigation is persistent across all pages.

## 🚢 Deploying Your Portfolio

### Deploy to Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects React + Vite - just click "Deploy"
6. Done! Your site is live in ~1 minute 🎉

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

**Important for React Router:** Add a `_redirects` file to `public/`:
```
/*    /index.html   200
```
This ensures routing works correctly.

### Deploy to GitHub Pages

1. Install the deployment package:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add a `.nojekyll` file to `public/` folder

4. Deploy:
```bash
npm run deploy
```

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## 📸 Adding Media to Projects

See `public/MEDIA_GUIDE.md` for comprehensive instructions on:
- Organizing project images
- Adding YouTube videos
- Including PDFs
- Best practices for image optimization
- Troubleshooting media issues

**Quick checklist for project media:**
- [ ] Create folder: `public/images/projects/[project-slug]/`
- [ ] Add hero image: `hero.jpg` (1200x675px recommended)
- [ ] Add additional images as needed
- [ ] Reference images in `portfolioData.js`
- [ ] Add YouTube video IDs (not full URLs)
- [ ] Add PDFs to `public/files/projects/[project-slug]/`

## 🎯 Common Tasks

### Remove the About Section from Home Page
It's already removed! About content is now on a dedicated `/about` page.

### Reorder Homepage Sections
Edit `src/pages/HomePage.jsx`:
```javascript
<main>
  <Hero />
  <Skills />      // Move these around
  <Experience />  // to change order
  <Contact />
</main>
```

### Change Navigation Menu Items
Edit `navItems` in `src/data/portfolioData.js`:
```javascript
export const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
  { name: "Contact", href: "/#contact" }
]
```

### Adjust Skills Display
Skills now use a clean, simple list format. To modify:
- Edit content: `src/data/skills.js`
- Edit styling: `src/components/Skills.jsx`

## 🆘 Troubleshooting

### Port already in use?
```bash
lsof -ti:5173 | xargs kill
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images not showing?
- Check that file paths start with `/` (e.g., `/images/projects/...`)
- Verify images are in the `public/` directory
- Check browser console for 404 errors
- Ensure file names match exactly (case-sensitive)

### Routing not working after deployment?
- For Netlify: Add `_redirects` file to `public/` with content: `/*    /index.html   200`
- For GitHub Pages: Add `.nojekyll` file to `public/`

### Build errors?
- Check for syntax errors in `portfolioData.js` and `skills.js`
- Ensure all arrays and objects have proper commas
- Check that all quotes are properly closed

## 📚 Tech Stack

- **React 19** - UI framework
- **React Router DOM** - Multi-page navigation
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling with custom earth tone theme
- **React Icons** - Icon library

## 📝 Content Update Checklist

Before deploying, make sure you've updated:

**Personal Info:**
- [ ] Name, email, and contact info in `portfolioData.js`
- [ ] Bio paragraphs
- [ ] Social media links
- [ ] Resume PDF in `public/` folder

**Projects:**
- [ ] All project descriptions and tech stacks
- [ ] Project slugs (URL-friendly)
- [ ] Hero images for all projects
- [ ] GitHub links for public projects
- [ ] Additional images, videos, or PDFs as needed

**Skills:**
- [ ] Updated all skill categories in `skills.js`
- [ ] Added any new technologies you've learned

**About Me:**
- [ ] Personal bio (casual tone)
- [ ] Photos added to `public/images/about/`
- [ ] Hobbies and fun facts

**Experience:**
- [ ] All leadership roles and work experience
- [ ] Updated dates and descriptions

**Testing:**
- [ ] Tested on mobile, tablet, and desktop
- [ ] All project links work
- [ ] All images load correctly
- [ ] Navigation works across all pages
- [ ] Ran `npm run build` successfully

## 💡 Best Practices

### Content Management
- Keep all content in data files (`portfolioData.js`, `skills.js`)
- Don't edit component files unless changing layout/design
- Use the file comments as a guide

### Media Files
- Compress images before uploading
- Use descriptive filenames (not IMG_1234.jpg)
- Keep hero images around 1200x675px
- Aim for under 500KB per image

### Project Organization
- Order projects by priority in the array
- Most important/impressive projects first
- Set `featured: true` for your best 3-4 projects

### Color Customization
- All color changes should happen in `src/config/colors.js`
- Maintain the same color scale structure (50-950)
- Test color contrast for accessibility

## 🚀 What's New in This Version

This portfolio has been significantly enhanced with:

✨ **Multi-page architecture** with React Router
✨ **Dedicated project pages** with Problem → Solution → Implementation structure
✨ **Full media support** for images, YouTube embeds, and PDFs
✨ **Earth tone color theme** with centralized color management
✨ **Separate About Me page** for personal content
✨ **Simplified skills section** with easy-to-edit data file
✨ **Better organization** with pages/, data/, and config/ folders
✨ **Enhanced maintainability** with clear documentation

---

**Built with ❤️ using React, React Router & Tailwind CSS**

*Optimized for easy content management and professional presentation*
