# Bhagyalaxmi Solar Presentation

## Current State
Full 8-slide solar presentation website with a dark navy/gold theme. The main background uses deep navy (oklch 0.16) with golden amber accents. The hero slide (Slide1Title) has an animated sun orb and horizontal line decorations, but no illustration image.

## Requested Changes (Diff)

### Add
- AI-generated solar hero illustration image in Slide1Title (already generated at `/assets/generated/solar-hero.dim_1200x600.jpg`)
- Display the hero illustration prominently on the title/home slide

### Modify
- Global theme: change from dark navy to a cream/off-white background with steel blue accents
- index.css: update all OKLCH color tokens to use cream (light warm off-white ~oklch 0.97 0.02 90) as background and steel blue (~oklch 0.45 0.10 220) as the primary accent
- App.tsx: update inline background gradients, navbar, and button colors to cream/steel palette
- Slide1Title.tsx: add the hero illustration image, update text colors to work on light background
- All slides: update card backgrounds, text colors, and borders to suit the new light theme

### Remove
- Nothing removed

## Implementation Plan
1. Update `index.css` CSS variables: cream background, steel blue primary, dark navy text
2. Update `App.tsx` inline styles: navbar background to cream/light, gradient background to cream, navigation buttons/dots to steel
3. Update `Slide1Title.tsx`: add hero image below logo/badge, adjust text colors for light background
4. Update remaining slides (Slide2–Slide8) inline colors to work on cream background
