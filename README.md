<div align="center">

# 🚀 Personal Portfolio — React + Tailwind CSS

**A fully modular, glassmorphic personal portfolio with gradient animations, custom cursor, EmailJS contact form, and 6 distinct pages.**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.3-FF6B35?style=for-the-badge&logo=gmail&logoColor=white)](https://emailjs.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br/>

[🌐 Live Demo](https://karthicyadhav-s.netlify.app/) &nbsp;•&nbsp;

</div>

---

## ✨ Features

- 🎨 **Glassmorphism UI** — frosted glass cards with `backdrop-blur` throughout
- 🌈 **Gradient everything** — buttons, text, cursor, borders, and progress bars
- 🖱️ **Custom gradient cursor** — animated dot + trailing ring that follows your mouse
- 📱 **Fully responsive** — mobile-first with animated hamburger menu
- ⚡ **Smooth page transitions** — `fadeIn` animation on every route change
- 🔭 **Scroll-triggered animations** — elements reveal as you scroll via `IntersectionObserver`
- 📧 **EmailJS contact form** — real email delivery with validation, no backend needed
- 🎠 **Certificate carousel** — prev / current / next slider with dot + counter navigation
- 🏃 **Infinite skill marquee** — auto-scrolling strip of all your technologies
- 📊 **Animated skill bars** — knowledge-level progress bars that fill on scroll
- 📄 **CV download** — one-click resume PDF download from the hero section
- 🧩 **Fully modular** — every section is a separate component & page file

---

## 🗂 File Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
├── public/
│   ├── resume.pdf           ← 📄 Drop your CV here
│   └── avatar.jpg           ← 🖼  Drop your photo here
│
└── src/
    ├── main.jsx             ← Vite entry point
    ├── App.jsx              ← Router shell
    │
    ├── data/
    │   └── portfolio.js     ← ✏️  ALL your content lives here
    │
    ├── hooks/
    │   └── index.js         ← useInView, useScrolled
    │
    ├── styles/
    │   └── index.css        ← Tailwind directives + globals
    │
    ├── components/
    │   ├── GradientCursor.jsx       Custom animated cursor
    │   ├── Navbar.jsx               Sticky nav + mobile menu
    │   ├── Footer.jsx               Quick links + socials
    │   ├── ProjectCard.jsx          Single project card
    │   ├── SkillBar.jsx             Animated progress bar card
    │   ├── SkillMarquee.jsx         Infinite scrolling skill strip
    │   ├── CertificateCarousel.jsx  Prev/current/next slider
    │   └── ui/
    │       ├── GlassCard.jsx        Reusable glass surface
    │       ├── GradientBtn.jsx      Primary & outline buttons
    │       ├── SectionHeader.jsx    Label + title + subtitle
    │       └── index.js             Barrel export
    │
    └── pages/
        ├── Home.jsx          Hero, CTA buttons, social icons
        ├── About.jsx         Animated avatar, timeline, stats
        ├── Projects.jsx      Project grid with live/code links
        ├── Skills.jsx        Marquee + skill grid with bars
        ├── Certificates.jsx  Carousel slider
        └── Contact.jsx       EmailJS form + contact cards
```

---

## ⚡ Quick Start

```bash
# 1. Clone
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install
npm install

# 3. Dev server
npm run dev
# → http://localhost:5173

# 4. Production build
npm run build
npm run preview
```

---

## ✏️ Customisation

### Step 1 — Your info · `src/data/portfolio.js`

This is the **single source of truth**. Edit it and everything updates automatically.

```js
export const META = {
  name: "Your Name",
  role: "Full-Stack Developer & UI/UX Designer",
  email: "hello@yourname.dev",
  phone: "+91 98765 43210",
  location: "Chennai, Tamil Nadu 🇮🇳",
  cvLink: "/resume.pdf",       // must match filename in public/
  availableForWork: true,
};
```

| Export | Controls |
|--------|---------|
| `META` | Name, role, email, phone, location, CV link |
| `SOCIALS` | Social icons + links in hero & footer |
| `TIMELINE` | Career history on About page |
| `STATS` | Years / Projects / Clients counters |
| `PROJECTS` | Project cards — emoji, title, tags, demo & code links |
| `ALL_SKILLS` | Chips in the infinite marquee |
| `SKILL_CARDS` | Progress bar skills + percentage levels |
| `CERTIFICATES` | Certificate carousel cards |
| `NAV_LINKS` | Navigation menu items |

---

### Step 2 — Resume · `public/resume.pdf`

```
public/
└── resume.pdf    ← drop your PDF here
```

To rename it, update `cvLink` in `portfolio.js`:
```js
cvLink: "/john-doe-resume.pdf"
```

---

### Step 3 — Avatar photo · `public/avatar.jpg`

```
public/
└── avatar.jpg    ← drop your photo here (min 256×256px, square crop)
```

Tip: change `object-top` → `object-center` in `About.jsx` if your face is centered.

---

### Step 4 — EmailJS · `src/pages/Contact.jsx`

Open the file and fill in the three credentials at the top:

```js
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
```

**Getting your credentials:**

| Step | Where | Copy |
|------|-------|------|
| 1 | [emailjs.com](https://emailjs.com) → Email Services → Add Service | `SERVICE_ID` |
| 2 | Email Templates → Create Template | `TEMPLATE_ID` |
| 3 | Account → API Keys | `PUBLIC_KEY` |

**Variables to use inside your EmailJS template:**
```
{{from_name}}  {{from_email}}  {{subject}}  {{message}}  {{to_name}}
```

---

### Add a new page

```
1. Create   src/pages/NewPage.jsx
2. Add it to the PAGES map in  src/App.jsx
3. Add the label to NAV_LINKS in  src/data/portfolio.js
```

---

## 🎨 Design Tokens

| Token | Value | Used for |
|-------|-------|---------|
| Violet | `#a78bfa` | Primary gradient, cursor, active nav |
| Cyan | `#06b6d4` | Secondary gradient, badges, links |
| Pink | `#f472b6` | Tertiary gradient, footer |
| Background | `#080c14` | Page background |
| Glass | `rgba(255,255,255,0.05)` | Card surfaces |
| Border | `rgba(255,255,255,0.10)` | Card borders |

---

## 📦 Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| `react` + `react-dom` | 18.2 | UI framework |
| `vite` | 5.1 | Build tool & dev server |
| `tailwindcss` | 3.4 | Utility-first CSS |
| `@emailjs/browser` | 4.3 | Contact form email delivery |
| Font Awesome 6 | CDN | Icons |
| Clash Display | CDN (fontshare) | Display / heading font |
| DM Sans | Google Fonts | Body font |

---

## 🚀 Deployment

### Vercel _(recommended — zero config)_
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder at netlify.com/drop
```

### GitHub Pages
```js
// vite.config.js — add:
base: '/your-repo-name/'
```
```bash
npm run build
# Push dist/ to your gh-pages branch
```

---

## 📄 License

MIT © [Karthicyadhav](https://github.com/yyav-dev)

---

<div align="center">

Made with ❤️ and lots of ☕ in Coimbatore, India

⭐ **Star this repo if you found it helpful!**

</div>
