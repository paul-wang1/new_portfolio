# Deployment Guide

Quick reference for deploying your portfolio website to various platforms.

## Prerequisites

Before deploying, make sure you:
1. Have updated all content in `src/data/portfolioData.js`
2. Added your resume PDF to the `public/` folder
3. Tested the build locally: `npm run build`
4. Committed your code to a Git repository

## Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Fastest deployment (~1 minute)
- Free for personal projects
- Automatic HTTPS
- Custom domain support
- Automatic deployments on git push

**Steps:**

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "Add New..." → "Project"

4. Import your GitHub repository

5. Vercel will auto-detect the settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. Click "Deploy"

7. Your site will be live at `https://your-project-name.vercel.app`

**Custom Domain:**
- In your Vercel project settings → Domains
- Add your custom domain and follow DNS instructions

## Option 2: Netlify

**Steps:**

1. Push your code to GitHub (see Vercel steps above)

2. Go to [netlify.com](https://netlify.com) and sign in

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy site"

7. Your site will be live at `https://your-site-name.netlify.app`

**Custom Domain:**
- Site settings → Domain management → Add custom domain

## Option 3: GitHub Pages

**Steps:**

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Also update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'  // Add this line (use your repo name)
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages → / (root)

6. Your site will be live at `https://yourusername.github.io/portfolio`

## Quick Comparison

| Platform | Speed | Free | Custom Domain | Auto Deploy | Best For |
|----------|-------|------|---------------|-------------|----------|
| **Vercel** | ⚡⚡⚡ | ✅ | ✅ | ✅ | Most users |
| **Netlify** | ⚡⚡ | ✅ | ✅ | ✅ | Alternative to Vercel |
| **GitHub Pages** | ⚡ | ✅ | ✅ | Manual | GitHub-only workflow |

## Post-Deployment Checklist

After deploying:

- [ ] Visit your live site and test all sections
- [ ] Test on mobile and desktop
- [ ] Verify all links work (GitHub, LinkedIn, email)
- [ ] Test resume download button
- [ ] Check smooth scrolling navigation
- [ ] Test project filters
- [ ] Verify animations work correctly
- [ ] Add your portfolio URL to:
  - [ ] Your resume
  - [ ] LinkedIn profile
  - [ ] GitHub profile README
  - [ ] Email signature

## Updating Your Portfolio

With Vercel/Netlify automatic deployments:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Your site will automatically redeploy!

With GitHub Pages:

1. Make changes locally
2. Run `npm run deploy`

## Environment Variables (If Needed)

If you later add features that need API keys:

**Vercel:**
- Project Settings → Environment Variables

**Netlify:**
- Site settings → Build & deploy → Environment

**Format in code:**
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

## Troubleshooting

**Build fails on deployment:**
- Check that `npm run build` works locally
- Verify all dependencies are in `package.json` (not globally installed)
- Check for syntax errors in `portfolioData.js`

**Blank page after deployment:**
- Verify the base path in `vite.config.js` (GitHub Pages only)
- Check browser console for errors
- Ensure `dist` folder is being deployed

**Resume not downloading:**
- Make sure `resume.pdf` is in the `public/` folder
- Check the `resumeFile` path in `portfolioData.js`
- Verify the file was included in the build

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages Docs: https://docs.github.com/pages

---

Good luck with your deployment! 🚀
