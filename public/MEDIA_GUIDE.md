# Media File Organization Guide

This guide explains how to organize images, videos, and other media files for your portfolio.

## Folder Structure

```
public/
├── images/
│   ├── projects/           # Project-specific images
│   │   ├── iot-water-monitoring/
│   │   │   ├── hero.jpg           # Main project image (required)
│   │   │   ├── pcb-design.jpg     # Additional images (optional)
│   │   │   └── deployment.jpg     # Additional images (optional)
│   │   ├── iot-temperature-pcb/
│   │   │   └── hero.jpg
│   │   └── [other-projects]/
│   │       └── hero.jpg
│   └── about/              # Photos for About Me page
│       ├── tennis.jpg
│       ├── malawi.jpg
│       └── lab.jpg
├── files/
│   └── projects/           # Project PDFs and documents
│       └── iot-water-monitoring/
│           └── technical-report.pdf
└── resume.pdf              # Your resume (referenced in navigation)
```

## Adding Images to a Project

### Step 1: Create Project Folder
For each project, create a folder matching the project's `slug` from portfolioData.js:
```
public/images/projects/[project-slug]/
```

Example: For project with slug "iot-water-monitoring", create:
```
public/images/projects/iot-water-monitoring/
```

### Step 2: Add Hero Image
Every project should have a hero image (the main image shown on the project page):
```
public/images/projects/iot-water-monitoring/hero.jpg
```

Recommended size: 1200x675px (16:9 aspect ratio)
Supported formats: .jpg, .jpeg, .png, .webp

### Step 3: Add Additional Images (Optional)
Add any additional images you want to show in the Implementation section:
```
public/images/projects/iot-water-monitoring/pcb-design.jpg
public/images/projects/iot-water-monitoring/deployment.jpg
public/images/projects/iot-water-monitoring/circuit-diagram.png
```

Then reference them in portfolioData.js:
```javascript
images: [
  {
    path: "/images/projects/iot-water-monitoring/pcb-design.jpg",
    caption: "Custom PCB layout showing sensor connections"
  },
  {
    path: "/images/projects/iot-water-monitoring/deployment.jpg",
    caption: "Field deployment in rural Malawi"
  }
]
```

## Adding YouTube Videos to a Project

You don't need to download or store videos - just reference the YouTube video ID.

### Step 1: Get YouTube Video ID
From URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
Video ID: `dQw4w9WgXcQ`

### Step 2: Add to Project Data
```javascript
videos: [
  {
    youtubeId: "dQw4w9WgXcQ",
    caption: "System demonstration and overview"
  }
]
```

## Adding PDFs to a Project

### Step 1: Add PDF File
```
public/files/projects/iot-water-monitoring/technical-report.pdf
```

### Step 2: Reference in Project Data
```javascript
pdf: {
  path: "/files/projects/iot-water-monitoring/technical-report.pdf",
  title: "Technical Documentation"
}
```

## Adding Photos to About Me Page

### Step 1: Add Photos
```
public/images/about/tennis.jpg
public/images/about/malawi.jpg
public/images/about/lab.jpg
```

Recommended size: 800x600px or similar
Formats: .jpg, .jpeg, .png

### Step 2: Reference in Data File
Edit `src/data/portfolioData.js`:
```javascript
export const aboutMe = {
  ...
  photos: [
    {
      path: "/images/about/tennis.jpg",
      caption: "Playing tennis at a club tournament"
    },
    {
      path: "/images/about/malawi.jpg",
      caption: "Working on IoT deployment in Malawi"
    }
  ]
}
```

## File Naming Best Practices

✅ **Good:**
- `hero.jpg`
- `pcb-design.jpg`
- `field-deployment.png`
- `circuit-diagram.pdf`

❌ **Avoid:**
- `IMG_1234.jpg` (not descriptive)
- `my photo with spaces.jpg` (spaces can cause issues)
- `FINAL_VERSION_2_REALLY_FINAL.pdf` (too long)

## Image Optimization Tips

1. **Compress images** before uploading to reduce file size
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: Under 500KB for most images

2. **Use appropriate dimensions**
   - Hero images: 1200x675px (16:9)
   - Gallery images: 800x600px
   - Thumbnails: 400x300px

3. **Choose the right format**
   - Photos: .jpg (better compression)
   - Graphics/logos: .png (transparency support)
   - Modern browsers: .webp (best compression)

## Troubleshooting

**Image not showing up?**
- Check that the file path matches exactly (case-sensitive)
- Verify the image is in the `public/` directory
- Check browser console for 404 errors
- Make sure the path starts with `/` (e.g., `/images/projects/...`)

**PDF not loading?**
- Ensure PDF is in `public/files/projects/[project-slug]/`
- Check that the path in portfolioData.js is correct
- Some browsers block PDF embeds - download link is always provided

**YouTube video not embedding?**
- Verify you're using the video ID, not the full URL
- Check that the video is public (not private or unlisted)
- Ensure youtubeId is in quotes in the data file
