# Kolam AI - Traditional Art Meets Modern Technology

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern web application that bridges traditional Indian Kolam art with cutting-edge AI technology, developed for Smart India Hackathon 2025.

## 🌟 Overview

Kolam AI is an innovative platform that combines the beauty of traditional South Indian Kolam patterns with artificial intelligence. Our web application offers pattern recognition, generation, and learning tools to preserve and promote this ancient art form.

## ✨ Features

### 🎨 **Core Features**
- **AI Pattern Recognition**: Advanced AI algorithms to identify and classify Kolam patterns
- **Interactive Gallery**: Comprehensive collection of traditional and AI-generated Kolam designs
- **Pattern Generator**: Create unique Kolam patterns using AI assistance
- **Learning Hub**: Educational resources about Kolam art history and techniques
- **Mobile App Integration**: Seamless QR code download for mobile experience

### 🔧 **Technical Features**
- **Responsive Design**: Optimized for all device types and screen sizes
- **Performance Optimized**: Fast loading with Next.js image optimization
- **Modern UI/UX**: Glassmorphism design with smooth animations
- **Accessibility**: WCAG compliant with screen reader support
- **PWA Ready**: Progressive Web App capabilities

### 🎭 **Interactive Elements**
- Dynamic hero section with animated backgrounds
- Enhanced hover effects and micro-interactions
- Smooth scrolling and page transitions
- Interactive pattern showcase
- Mobile-optimized touch interactions

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:

```bash
Node.js 18.0 or later
npm 9.0 or later (or yarn/pnpm)
Git
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sushant-bot/kolam-ai-webpage.git
cd kolam-ai-webpage
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
kolam-ai-webpage/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main homepage
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   │   ├── button.tsx    # Custom button component
│   │   ├── optimized-image.tsx # Performance-optimized images
│   │   ├── kolam-logo.tsx # Animated logo component
│   │   └── ...
│   ├── app-download-section.tsx # QR code download section
│   ├── kolam-gallery.tsx # Pattern gallery component
│   └── ...
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── images/           # Image gallery
│   ├── qr/              # QR codes for app download
│   ├── favicon.ico      # Website favicon
│   └── ...
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#FB923C` - Main brand color
- **Purple Gradient**: `#7C3AED` to `#EC4899` - Hero backgrounds
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Inter Font**: Clean, modern typeface for optimal readability
- **Responsive Sizing**: Fluid typography that scales across devices

### Components
- **Glassmorphism Cards**: Backdrop blur effects with subtle transparency
- **Gradient Backgrounds**: Dynamic color transitions
- **Shadow System**: Consistent depth and elevation
- **Enhanced Badges**: Animated gradient badges with glow effects

## 🔧 Recent Improvements

### ✅ **Performance Optimizations**
- **Optimized Images**: Next.js Image component with WebP/AVIF support
- **Lazy Loading**: Smart loading for better performance
- **Bundle Optimization**: Reduced bundle sizes and efficient code splitting

### ✅ **Enhanced UI/UX**
- **Custom Favicon**: Added personalized favicon
- **Improved Logo Animation**: Smooth hover effects without rotation loops
- **Enhanced Popular Badge**: Animated gradient badge with glow effects
- **QR Code Integration**: Easy mobile app download with styled QR section

### ✅ **Accessibility Features**
- **Reduced Motion Support**: Respects user preferences for animations
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and alt text

## 📱 Mobile App Integration

The website includes a QR code section for easy mobile app download:
- **Location**: `/public/qr/frame.png`
- **Format**: High-resolution PNG
- **Integration**: Automatic display in download section with enhanced styling

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure environment variables**
3. **Deploy automatically on push**

```bash
npm install -g vercel
vercel --prod
```

### Other Platforms

The application can be deployed on:
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

```dockerfile
# Example Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## 🔍 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

### Optimization Features
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Efficient bundle sizes
- Optimized fonts and CSS

## 🤝 Contributing

We welcome contributions to Kolam AI! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```
3. **Make your changes**
4. **Commit your changes**
```bash
git commit -m 'Add some amazing feature'
```
5. **Push to the branch**
```bash
git push origin feature/amazing-feature
```
6. **Open a Pull Request**

### Coding Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb configuration with custom rules
- **Prettier**: Consistent code formatting
- **Commit Convention**: Conventional commits format

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Smart India Hackathon 2025 Team**
- **Frontend Developer**: Team Member
- **AI/ML Engineer**: Team Member
- **Designer**: Team Member
- **Backend Developer**: Team Member

## 📞 Support

For support, email us at support@kolamai.com or join our Discord server.

## 🙏 Acknowledgments

- **Traditional Artists**: For preserving the Kolam art form
- **Next.js Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide Icons**: For beautiful, consistent icons
- **Smart India Hackathon**: For providing the platform

## 📊 Project Status

- **Version**: 1.0.0
- **Status**: Active Development
- **Last Updated**: September 2025
- **Next Release**: TBD

## 🔄 Recent Updates

### v1.0.0 (Latest)
- ✅ Added custom favicon integration
- ✅ Enhanced logo hover animations
- ✅ Optimized image loading performance
- ✅ Improved QR code section design
- ✅ Enhanced "Most Popular" badge with animations
- ✅ Added accessibility improvements

---

<p align="center">
  <strong>Built with ❤️ for Smart India Hackathon 2025</strong>
</p>

<p align="center">
  <a href="http://localhost:3000">🌐 Live Demo</a> •
  <a href="https://github.com/sushant-bot/kolam-ai-webpage/issues">🐛 Report Bug</a> •
  <a href="https://github.com/sushant-bot/kolam-ai-webpage/issues">✨ Request Feature</a>
</p>