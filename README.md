<div align="center">

# 🚀 My React Portfolio

**A high-performance, animation-rich developer portfolio featuring immersive 3D experiences.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-6366f1?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio-url.com)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Powered-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)

[Live Demo](https://your-portfolio-url.com) · [Report a Bug](https://github.com/your-username/your-repo/issues) · [Request a Feature](https://github.com/your-username/your-repo/issues)

![Portfolio Preview](./docs/preview.png)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Performance](#-performance)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

This portfolio showcases my work, skills, and experience as a **Frontend Developer**. It combines a clean, modern UI with smooth animations and interactive **3D scenes** to create a memorable first impression, while staying fast and accessible on every device.

---

## ✨ Features

- 🧊 **Interactive 3D scenes** powered by Three.js and React Three Fiber
- 🎬 **Smooth animations** and scroll-based transitions with Framer Motion and GSAP
- 🖱️ **Micro-interactions**: hover effects, magnetic buttons, custom cursor
- 📱 **Fully responsive**: optimized for mobile, tablet, and desktop
- 🌗 **Dark / Light mode** with persisted user preference
- ⚡ **Blazing fast** dev experience and builds with Vite + HMR
- 🔍 **SEO-friendly**: meta tags, Open Graph, and semantic HTML
- ♿ **Accessible**: keyboard navigation, ARIA labels, reduced-motion support
- 📨 **Working contact form** with validation
- 🧩 **Modular architecture** with reusable components

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Core** | React, Vite, JavaScript (ES6+) |
| **3D** | Three.js, React Three Fiber, Drei |
| **Animation** | Framer Motion, GSAP, Lenis (smooth scroll) |
| **Styling** | Tailwind CSS / CSS Modules |
| **Forms** | EmailJS / Formspree |
| **Tooling** | ESLint, Prettier |
| **Deployment** | Vercel / Netlify |

> 💡 Update this table to match the dependencies in your `package.json`.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo.git

# 2. Navigate to the project folder
cd your-repo

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ Never commit your `.env` file. Make sure it is listed in `.gitignore`.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 📁 Project Structure

```
├── public/                # Static assets (favicon, 3D models, fonts)
├── src/
│   ├── assets/            # Images, icons, textures
│   ├── components/        # Reusable UI components
│   │   ├── 3d/            # Three.js / R3F scenes and models
│   │   ├── ui/            # Buttons, cards, cursor, loaders
│   │   └── layout/        # Navbar, Footer
│   ├── sections/          # Hero, About, Skills, Projects, Contact
│   ├── hooks/             # Custom React hooks
│   ├── data/              # Projects, skills, and social links
│   ├── utils/             # Helper functions
│   ├── styles/            # Global styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚡ Performance

Heavy 3D and animation work needs care. This project follows these practices:

- **Lazy loading** for 3D scenes and heavy sections with `React.lazy` + `Suspense`
- **Compressed 3D models** (Draco / `.glb`) and optimized textures
- **Limited pixel ratio** on the canvas (`dpr={[1, 2]}`) to protect mobile GPUs
- **`frameloop="demand"`** for scenes that don't need constant rendering
- **Respecting `prefers-reduced-motion`** to disable heavy animations when requested
- **Code splitting** and tree-shaking through Vite
- **Cleanup of GSAP / Three.js resources** on unmount to avoid memory leaks

---

## 🎨 Customization

1. **Personal info**: edit the files in `src/data/` (projects, skills, social links).
2. **Colors & theme**: update the CSS variables (or Tailwind config) in `src/styles/`.
3. **3D models**: replace the `.glb` files in `public/models/` and adjust the scene in `src/components/3d/`.
4. **SEO**: update the title, description, and Open Graph tags in `index.html`.

---

## 🌍 Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

Set `base: '/your-repo/'` in `vite.config.js`, then deploy the `dist/` folder.

---

## 🗺️ Roadmap

- [x] Responsive layout
- [x] 3D hero section
- [x] Scroll animations
- [x] Dark / Light mode
- [ ] Blog section
- [ ] Multi-language support (EN / AR)
- [ ] Case-study pages for each project
- [ ] Performance score 95+ on Lighthouse

---

## 🤝 Contributing

Suggestions and improvements are welcome:

1. Fork the project
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "feat: add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

---

## 📬 Contact

**MEDO** · Frontend Developer

- 🌐 Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)
- 💼 LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- 🐙 GitHub: [@your-username](https://github.com/your-username)
- ✉️ Email: your@email.com

---

<div align="center">

⭐ If you like this project, give it a star!

Built with ❤️ using React, Three.js, and a lot of coffee.

</div>