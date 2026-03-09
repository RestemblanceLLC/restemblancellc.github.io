# Project Structure Guide

This website uses a simple static-file structure based on the HTML5 UP "Forty" theme.

## Root Files

- `index.html`  
  Main homepage.

- `ABOUT.html`  
  About page.

- `CONTACT.html`  
  Contact page.

- `SERVICES.html`  
  Services and subscription plans.

- `DONATE.html`  
  Donation page.

- `TERMS.html`  
  Master Services Agreement and Terms of Use.

- `PRIVACY.html`  
  Privacy Policy.

- `LICENSE.html`  
  Website Use License Agreement.

- `README.md`  
  Project overview and setup notes.

- `.gitignore`  
  Excludes unnecessary files from version control.

---

## Assets Folder

### `assets/css/`
Contains site styling.

Typical files:
- `main.css` — primary stylesheet
- `noscript.css` — fallback styling when JavaScript is disabled

### `assets/js/`
Contains JavaScript files for site behavior.

Typical files:
- `jquery.min.js`
- `jquery.scrolly.min.js`
- `jquery.scrollex.min.js`
- `browser.min.js`
- `breakpoints.min.js`
- `util.js`
- `main.js`

### `assets/sass/`
Contains Sass source files if you edit the theme at the source level.

Use this folder only if you are customizing styles in Sass instead of editing `main.css` directly.

---

## Images Folder

### `images/`
Stores all website images, logos, and visual assets.

Examples:
- homepage banners
- STEM program images
- donation graphics
- branding assets

Use clear file names, such as:
- `restemblance-logo.png`
- `stem-students-laptop.jpg`
- `donation-banner.jpg`

---

## Recommended Organization

A clean project layout:

```text
/
├── index.html
├── ABOUT.html
├── CONTACT.html
├── SERVICES.html
├── DONATE.html
├── TERMS.html
├── PRIVACY.html
├── LICENSE.html
├── README.md
├── .gitignore
│
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── noscript.css
│   ├── js/
│   │   ├── jquery.min.js
│   │   ├── jquery.scrolly.min.js
│   │   ├── jquery.scrollex.min.js
│   │   ├── browser.min.js
│   │   ├── breakpoints.min.js
│   │   ├── util.js
│   │   └── main.js
│   └── sass/
│
└── images/
    ├── logo.png
    ├── banner.jpg
    └── other-images.jpg
