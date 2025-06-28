# Assignment 6: Responsive Photo Gallery with CSS Grid

## 📱 Overview
Build a responsive product showcase webpage using HTML and CSS Grid that adapts to different screen sizes, following a mobile-first approach.

## 🎯 Objectives
- Create a responsive product grid layout
- Implement mobile-first design principles
- Use media queries for device breakpoints
- Apply relative units for flexible sizing

## 🛠️ Technical Requirements

### Mobile-First Approach
- Style for phones first, then use media queries for larger screens
- Ensure the layout is optimized for small screens before expanding

### CSS Grid Implementation
- Use `grid-template-columns` with `repeat(auto-fit, minmax(..., 1fr))` for responsive columns
- Create a flexible grid that automatically adjusts based on viewport size

### Media Queries
- Implement breakpoints for tablets (768px+) and desktops (1024px+)
- Adjust `grid-template-columns` properties within media queries

### Relative Units
- Use relative units (%, rem, em, vh, vw) instead of fixed pixels
- Ensure text and elements scale proportionally with screen size

### Testing Requirements
- Use browser developer tools (device toolbar) to test responsive behavior
- Verify layout adapts correctly to different screen dimensions
<!-- 
## 🖼️ Expected Results
- Desktop: 3-4 product columns
- Tablet: 2-3 product columns
- Mobile: Single column, vertically stacked -->

## 💻 Live Demo
[View Project](https://ved7482.github.io/web-projects/assignments/6-responsive-photo-gallery)

## 📚 Resources
- [MDN: CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [MDN Web Docs - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS-Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)