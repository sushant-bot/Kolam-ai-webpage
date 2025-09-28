
# 🌸 Kolam AI – Traditional Art Meets Modern Technology

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern web application that bridges **traditional South Indian Kolam art** with **cutting-edge AI technology**, developed for **Smart India Hackathon 2025**.

---

## 🌟 Overview

Kolam AI is an innovative platform that combines the beauty of **Kolam patterns** with **artificial intelligence**. It offers **pattern recognition, AI-assisted generation, and educational resources** to preserve and promote this ancient art form.

---

## ✨ Features

### 🎨 Core Features

* 🌀 **AI Pattern Recognition** – Identify and classify Kolam patterns
* 🖼 **Interactive Gallery** – Explore traditional + AI-generated Kolams
* 🎲 **AI Pattern Generator** – Create unique Kolam designs
* 📚 **Learning Hub** – History, culture, and techniques of Kolam art
* 📱 **Mobile App Integration** – QR code download for mobile experience

### 🔧 Technical Features

* ⚡ **Responsive Design** – Optimized for all devices
* 🚀 **Performance** – Next.js image & code optimization
* 🎨 **Modern UI/UX** – Glassmorphism, smooth animations
* ♿ **Accessibility** – WCAG-compliant
* 📦 **PWA Ready** – Works as a Progressive Web App

### 🎭 Interactive Elements

* Dynamic hero section with animated backgrounds
* Hover effects, micro-interactions, and smooth transitions
* Touch-friendly mobile interactions

---

## 🚀 Getting Started

### Prerequisites

* Node.js ≥ 18
* npm ≥ 9 / yarn / pnpm
* Git

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/kolam-ai-webpage.git
cd kolam-ai-webpage

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# edit .env.local with your values

# Run development server
npm run dev
```

👉 Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🏗 Project Structure

```
kolam-ai-webpage/
├── app/                    # Next.js 14 App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable UI components
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── optimized-image.tsx
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── app-download-section.tsx
├── lib/                    # Utility functions
├── public/                 # Static assets (images, qr codes, icons)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

* **Primary Orange:** `#FB923C`
* **Gradient:** `#7C3AED → #EC4899`
* **Typography:** Inter (fluid, responsive)
* **UI Style:** Glassmorphism + gradients + depth shadows

---

## 🔧 Configuration

### Environment Variables (`.env.local`)

```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://api.your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX   # optional analytics
```

---

## 📱 Mobile App Integration

* **QR Code Location:** `/public/qr/frame.png`
* **Usage:** Shown in "Download App" section
* **Format:** High-res PNG

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Other Options

* **Netlify** (static deployment)
* **AWS Amplify** (full-stack hosting)
* **Docker** (containerized deployment)

---

## 🧪 Testing

```bash
npm run test          # Unit tests
npm run test:watch    # Watch mode
npm run test:e2e      # End-to-end tests
npm run test:coverage # Coverage report
```

---

## 🔍 Performance

✅ **Lighthouse Scores**

* Performance: 95+
* Accessibility: 100
* Best Practices: 100
* SEO: 95+

Optimizations:

* Next.js image optimization
* Code splitting + lazy loading
* WebP/AVIF formats
* Preloading fonts

---

## 🤝 Contributing

1. Fork repo
2. Create branch → `git checkout -b feature/awesome-feature`
3. Commit → `git commit -m "Add awesome feature"`
4. Push → `git push origin feature/awesome-feature`
5. Open Pull Request

**Standards:**

* Strict TypeScript
* ESLint (Airbnb config)
* Prettier formatting
* Conventional commits

---

## 🙏 Acknowledgments

* 🎨 Traditional Kolam artists
* ⚛️ Next.js + React teams
* 🎨 Tailwind CSS & Lucide Icons
* 🚀 Smart India Hackathon 2025

---

## 📊 Project Status

* **Version:** 1.0.0
* **Status:** 🚧 Active Development
* **Last Updated:** September 2025
* **Next Release:** TBD

Built with ❤️ for Smart India Hackathon 2025</strong>  

