// ========================================
// COLOR THEME CONFIGURATION
// ========================================
// This file defines the color palette for your portfolio.
// The earth tone light theme uses natural, warm colors for a professional yet approachable feel.
//
// HOW TO USE:
// - These colors are automatically loaded into Tailwind CSS
// - Use them in your components like: bg-primary-600, text-secondary-700, etc.
// - The number suffix (50-950) indicates lightness: 50 is lightest, 950 is darkest
//
// CUSTOMIZATION GUIDE:
// - Primary: Main brand color, used for buttons, links, highlights (currently deep forest green)
// - Secondary: Supporting color for accents and emphasis (currently warm brown/chocolate)
// - Accent: Used for special highlights and interactive elements (currently slate blue)
// - Neutral: Background and text colors (currently cream/beige backgrounds, charcoal text)
//
// TIPS FOR CHANGING COLORS:
// 1. Keep the same structure (50-950 scale) for consistency
// 2. Test readability - ensure good contrast between text and backgrounds
// 3. Use lighter shades (50-200) for backgrounds
// 4. Use darker shades (600-900) for text and important elements
// 5. Use tools like https://uicolors.app to generate color scales

export const colors = {
  // PRIMARY: Deep Forest Green - Main brand color (BOLD & PROMINENT)
  // Used for: Full-width hero sections, large color blocks, primary buttons, navigation highlights
  primary: {
    50: '#f0f9f4',    // Very light mint - subtle backgrounds
    100: '#d1f0dd',   // Light mint - soft accents
    200: '#a3e1bb',   // Soft green
    300: '#75d299',   // Medium light green
    400: '#47c377',   // Bright green
    500: '#2ea162',   // Mid forest green
    600: '#2C5F2D',   // DEEP FOREST GREEN - PRIMARY COLOR (bold, rich, prominent)
    700: '#234d24',   // Darker forest - hover states
    800: '#1a3a1b',   // Very dark green
    900: '#122812',   // Almost black green
    950: '#091509',   // Deepest green
  },

  // SECONDARY: Warm Brown/Chocolate - Supporting color (RICH & BOLD)
  // Used for: Alternating full-width sections, subheaders, warm accents
  secondary: {
    50: '#faf8f5',    // Almost white with warm tint
    100: '#f5f1e8',   // Very light warm beige
    200: '#ebe3d5',   // Light warm beige
    300: '#d4c4a8',   // Warm tan
    400: '#a89174',   // Medium brown
    500: '#8b6f47',   // Warm brown
    600: '#6B4423',   // WARM CHOCOLATE BROWN - SECONDARY COLOR (rich, bold)
    700: '#563619',   // Dark chocolate
    800: '#422914',   // Very dark brown
    900: '#2d1c0e',   // Almost black brown
    950: '#190f07',   // Deepest brown
  },

  // ACCENT: Slate Blue - Interactive elements (SOPHISTICATED)
  // Used for: Links, active states, call-to-action accents
  accent: {
    50: '#f8fafc',    // Very light blue-gray
    100: '#f1f5f9',   // Light blue-gray
    200: '#e2e8f0',   // Soft blue-gray
    300: '#cbd5e1',   // Light slate
    400: '#94a3b8',   // Medium slate
    500: '#4A5568',   // SLATE BLUE - ACCENT COLOR (deep, sophisticated)
    600: '#3d4757',   // Deep slate - hover states
    700: '#2d3748',   // Dark slate
    800: '#1e293b',   // Very dark slate
    900: '#0f172a',   // Almost black slate
    950: '#020617',   // Deepest slate
  },

  // NEUTRAL: Cream/Beige and Charcoal - Backgrounds and text (WARM & INVITING)
  // Used for: Page backgrounds, text on dark sections, body text
  neutral: {
    50: '#fdfcfb',    // Almost white - brightest
    100: '#F5F1E8',   // CREAM/BEIGE - MAIN BACKGROUND COLOR (warm, inviting)
    200: '#ebe7de',   // Light beige
    300: '#d9d3c7',   // Soft beige - borders
    400: '#b8b0a0',   // Medium tan-gray
    500: '#948b7a',   // Gray-brown - secondary text
    600: '#6e6758',   // Dark tan-gray
    700: '#2D3748',   // RICH CHARCOAL - MAIN TEXT COLOR (strong, readable)
    800: '#252e3b',   // Very dark charcoal - headings
    900: '#1a1f2b',   // Almost black - important headings
    950: '#0f1218',   // Pure charcoal
  },
};

// ========================================
// SEMANTIC COLOR MAPPINGS
// ========================================
// These are semantic names that map to specific colors for different UI purposes
// This makes it easier to maintain consistent color usage across your site

export const semanticColors = {
  // Page structure
  background: colors.neutral[100],      // Main page background (warm cream)
  surface: colors.neutral[50],          // Card/component backgrounds (almost white)
  border: colors.neutral[300],          // Borders and dividers (soft beige)

  // Text colors
  textPrimary: colors.neutral[900],     // Main headings (almost black)
  textSecondary: colors.neutral[700],   // Body text (rich charcoal)
  textMuted: colors.neutral[500],       // Less important text (gray-brown)
  textOnPrimary: colors.neutral[100],   // Text on dark backgrounds (cream)
  textOnDark: colors.neutral[50],       // Text on very dark backgrounds (near white)

  // Interactive elements - BOLD COLORS
  brandPrimary: colors.primary[600],    // Deep forest green - hero sections, major elements
  brandSecondary: colors.secondary[600], // Warm chocolate brown - alternating sections
  brandAccent: colors.accent[500],      // Slate blue - links, accents

  // State colors
  hover: colors.primary[700],           // Hover state for primary elements
  active: colors.primary[800],          // Active/pressed state
  focus: colors.accent[500],            // Focus rings and outlines

  // Utility colors
  success: colors.primary[600],         // Success states
  warning: '#f59e0b',                   // Warning states (amber)
  error: '#ef4444',                     // Error states (red)
  info: colors.accent[500],             // Info states
};

// ========================================
// QUICK REFERENCE GUIDE
// ========================================
/*

COMMON USAGE EXAMPLES:

Buttons:
  bg-primary-600 text-white hover:bg-primary-700
  bg-secondary-600 text-white hover:bg-secondary-700
  bg-accent-500 text-white hover:bg-accent-600

Text:
  text-neutral-900 (headings)
  text-neutral-700 (body)
  text-neutral-500 (muted)

Backgrounds:
  bg-neutral-100 (page background)
  bg-neutral-50 (cards)
  bg-primary-50 (light accent areas)

Borders:
  border-neutral-300
  border-primary-600

Accents:
  text-primary-600 (links, highlights)
  text-accent-500 (special links)

*/

export default colors;
