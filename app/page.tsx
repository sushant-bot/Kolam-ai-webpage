import Link from "next/link"
import {
  Palette,
  Users,
  Camera,
  Download,
  Play,
  Trophy,
  Smartphone,
  QrCode,
  Crown,
  Sparkles,
  Check,
  Star,
  Zap,
  Heart,
  Globe,
} from "lucide-react"
import KolamGallery from "@/components/kolam-gallery"
import AppDownloadSection from "@/components/app-download-section"
import { OptimizedImage } from "@/components/ui/optimized-image"

import { Button } from "@/components/ui/button"
import { GradientBackground } from "@/components/ui/gradient-background"
import { KolamHeroAnimation } from "@/components/ui/kolam-hero-animation"
import { KolamLogo } from "@/components/ui/kolam-logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <GradientBackground />

      <header className="nav-premium sticky top-0 z-50 w-full">
        <div className="container flex h-16 lg:h-20 items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center space-x-3 logo-enhanced">
            <KolamLogo className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
            <span className="text-hero-gradient font-bold text-xl lg:text-2xl text-reveal">Kolam AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 xl:gap-12">
            {["Features", "Gallery", "Pricing", "Download"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-magnetic relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex lg:hidden gap-6 overflow-x-auto scrollbar-hide">
            {["Features", "Gallery", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-magnetic flex-shrink-0 text-xs font-medium text-muted-foreground transition-all duration-300 hover:text-primary whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="hero-new relative min-h-[80vh] flex items-center justify-center py-8 sm:py-12 lg:py-16 overflow-hidden">
          {/* Enhanced gradient background with visual patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/30 via-transparent to-pink-200/30"></div>
          
          {/* Traditional Kolam grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg width="60" height="60" className="absolute inset-0 w-full h-full">
              <pattern id="kolam-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#ff6b6b" />
                <circle cx="10" cy="10" r="1" fill="#ff9a9e" />
                <circle cx="50" cy="10" r="1" fill="#ff9a9e" />
                <circle cx="10" cy="50" r="1" fill="#ff9a9e" />
                <circle cx="50" cy="50" r="1" fill="#ff9a9e" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#kolam-grid)" />
            </svg>
          </div>
          
          {/* Moving background orbs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/25 to-blue-200/25 rounded-full blur-2xl animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-red-200/20 rounded-full blur-2xl animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-gradient-to-r from-yellow-200/25 to-orange-200/25 rounded-full blur-xl animate-pulse" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}></div>
          
          {/* Floating moving shapes */}
          <div className="absolute top-1/3 left-1/5 w-20 h-20 opacity-15">
            <div className="w-full h-full bg-gradient-to-r from-orange-300 to-pink-300 rounded-full animate-ping" style={{animationDuration: '6s'}}></div>
          </div>
          <div className="absolute top-2/3 right-1/5 w-16 h-16 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-purple-300 to-blue-300 transform rotate-45 animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          </div>
          
          {/* Animated geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10">
            <div className="w-full h-full border-2 border-orange-300 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 opacity-15">
            <div className="w-full h-full border-2 border-pink-300 rotate-45 animate-pulse" style={{animationDuration: '4s'}}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-10 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute bottom-40 right-1/5 w-2 h-2 bg-red-400 rounded-full opacity-55 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
          
          {/* Cleaner floating decorative dots with enhanced animations */}
          <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20" style={{animation: 'drift 8s ease-in-out infinite'}}></div>
          <div className="absolute top-32 left-16 w-3 h-3 bg-orange-500 rounded-full opacity-30" style={{animation: 'float-across 6s ease-in-out infinite', animationDelay: '1s'}}></div>
          
          <div className="absolute bottom-32 right-16 w-10 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-25 float-gentle animate-pulse" style={{animationDuration: '4s', animation: 'drift 10s ease-in-out infinite, pulse 4s ease-in-out infinite'}}></div>
          <div className="absolute top-1/2 right-12 w-4 h-4 bg-purple-400 rounded-full opacity-35" style={{animation: 'float-across 7s ease-in-out infinite', animationDelay: '2s'}}></div>
          
          <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 float-gentle" style={{animation: 'drift 9s ease-in-out infinite', animationDelay: '1.5s'}}></div>

          <div className="container relative z-10 text-center px-4 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-4 lg:space-y-8">
              {/* Glassmorphism intro badge */}
              <div className="inline-flex items-center gap-2 lg:gap-3 bg-white/20 backdrop-blur-md border border-white/30 px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg text-sm lg:text-base">
                <Sparkles className="h-4 w-4 lg:h-5 lg:w-5 text-orange-500" />
                <span className="font-semibold text-orange-600">
                  ✨ Introducing Kolam AI - Where Tradition Meets Innovation
                </span>
                <div className="w-6 h-6 lg:w-7 lg:h-7 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-lg">
                  🔮
                </div>
              </div>

              {/* Simplified gradient text hero design */}
              <div className="space-y-4 lg:space-y-6 relative">
                {/* Clean decorative kolam pattern SVG */}
                <div className="flex justify-center mb-6">
                  <svg width="60" height="60" viewBox="0 0 100 100" className="text-orange-500 opacity-70">
                    <circle cx="50" cy="50" r="6" fill="currentColor" />
                    <circle cx="30" cy="30" r="3" fill="currentColor" />
                    <circle cx="70" cy="30" r="3" fill="currentColor" />
                    <circle cx="30" cy="70" r="3" fill="currentColor" />
                    <circle cx="70" cy="70" r="3" fill="currentColor" />
                    <path d="M50,25 Q35,50 50,75 Q65,50 50,25" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M25,50 Q50,35 75,50 Q50,65 25,50" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>

                <h1 className="font-black hero-text-responsive leading-tight tracking-tight">
                  <div className="hero-gradient-text mb-2 lg:mb-3">
                    Preserve Indian
                  </div>
                  <div className="hero-gradient-text mb-2 lg:mb-3">
                    Heritage
                  </div>
                  <div className="hero-gradient-text">
                    Through AI Magic
                  </div>
                </h1>

                <p className="max-w-2xl mx-auto text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm p-4 lg:p-6 rounded-xl shadow-lg border border-white/30">
                  Create stunning traditional Kolam patterns with cutting-edge AI technology. Experience the perfect
                  fusion of ancient Indian artistry and modern innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="btn-premium btn-ripple group"
                  asChild
                >
                  <a 
                    href="https://youtu.be/uMHfwhhN3_E?si=Yj3sMvhz_3sA7XPq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 icon-float" />
                    Experience Demo
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card-premium border-white/20 hover:border-primary/50 px-6 py-3 bg-transparent btn-ripple"
                >
                  <Download className="mr-2 h-5 w-5 icon-float" />
                  Download Free
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 lg:gap-6 mt-8 lg:mt-12 max-w-3xl mx-auto">
                {[
                  { number: "50+", icon: "🎨", label: "AI Patterns" },
                  { number: "10+", icon: "👥", label: "Artists" },
                  { number: "25+", icon: "🪔", label: "Festivals" },
                ].map((stat, index) => (
                  <div key={index} className="glass-card-premium stats-bounce p-4 lg:p-6 text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-hero-gradient mb-1 text-reveal">
                      {stat.number}
                    </div>
                    <div className="text-xl lg:text-2xl mb-1 icon-float" style={{ animationDelay: `${index}s` }}>
                      {stat.icon}
                    </div>
                    <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="container space-y-16 lg:space-y-24 py-20 lg:py-32 px-4 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-hero-gradient font-bold text-3xl lg:text-5xl xl:text-6xl">Revolutionary Features</h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Experience the future of traditional art with our AI-powered platform that honors ancient traditions while
              embracing cutting-edge technology.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                icon: Palette,
                title: "AI Pattern Generation",
                description:
                  "Create infinite unique Kolam patterns using advanced AI trained on authentic traditional designs.",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: Camera,
                title: "AR Visualization",
                description: "Preview your Kolam designs in real-world spaces with immersive augmented reality.",
                gradient: "from-pink-500 to-purple-500",
              },
              {
                icon: Users,
                title: "Global Community",
                description: "Connect with artists worldwide and participate in cultural festivals and challenges.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Trophy,
                title: "Festival Competitions",
                description: "Join seasonal celebrations with themed competitions and cultural prizes.",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: Smartphone,
                title: "Smart Drawing Tools",
                description: "Intelligent brushes that help create perfect symmetrical patterns with ease.",
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: Play,
                title: "Master Tutorials",
                description: "Learn from traditional artists with step-by-step video guidance.",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: QrCode,
                title: "Pattern Recognition",
                description: "Scan real Kolam patterns to get digital versions and cultural insights.",
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: Download,
                title: "Offline Creation",
                description: "Access your favorite patterns and tools even without internet connection.",
                gradient: "from-cyan-500 to-blue-500",
              },
            ].map((feature, index) => (
              <div key={index} className="glass-card-premium feature-card-magnetic card-tilt p-6 lg:p-8 group">
                <div
                  className={`inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 transition-all duration-300 group-hover:scale-110 icon-float`}
                >
                  <feature.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="font-bold text-lg lg:text-xl mb-3 text-hero-gradient text-reveal">{feature.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container space-y-16 py-20 lg:py-32 px-4 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-hero-gradient font-bold text-3xl lg:text-5xl xl:text-6xl">Artistic Masterpieces</h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Explore our curated collection of traditional and AI-generated Kolam patterns, each telling a unique story
              of cultural heritage and innovation.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                src: "/traditional-lotus-pattern.png",
                title: "Sacred Lotus",
                description: "Traditional lotus symbolizing purity and spiritual awakening",
                category: "Traditional",
              },
              {
                src: "/Geometric-Mandala.png",
                title: "Geometric Mandala",
                description: "Modern interpretation of ancient mandala designs",
                category: "Modern",
              },
              {
                src: "/Peacock-Grace.png",
                title: "Peacock Grace",
                description: "Elegant peacock motif representing beauty and divinity",
                category: "Traditional",
              },
              {
                src: "/Rangoli-Flower-Burst.png",
                title: "Festival Burst",
                description: "Vibrant celebration pattern for special occasions",
                category: "Festival",
              },
              {
                src: "/Minimalist-Dots.png",
                title: "Minimalist Dots",
                description: "Simple yet profound dot-based sacred geometry",
                category: "Minimalist",
              },
              {
                src: "/AI-Fusion.png",
                title: "AI Fusion",
                description: "Revolutionary AI-generated traditional fusion",
                category: "AI-Generated",
              },
              {
                src: "/traditional-kolam-pattern-with-rice-flour-dots.jpg",
                title: "Rice Flour Dots",
                description: "Classic dot-based Kolam with traditional rice flour technique",
                category: "Traditional",
              },
              {
                src: "/colorful-rangoli-kolam-diwali-festival.jpg",
                title: "Diwali Rangoli",
                description: "Vibrant festival Kolam for Diwali celebrations",
                category: "Festival",
              },
              {
                src: "/geometric-star-kolam-pattern-symmetrical.jpg",
                title: "Star Geometry",
                description: "Symmetrical star pattern with intricate geometric details",
                category: "Geometric",
              },
              {
                src: "/floral-vine-kolam-pattern-traditional-south-indian.jpg",
                title: "Floral Vines",
                description: "Delicate vine and flower motifs in traditional style",
                category: "Traditional",
              },
              {
                src: "/modern-abstract-kolam-ai-generated-colorful.jpg",
                title: "Abstract AI",
                description: "Contemporary abstract interpretation by AI",
                category: "AI-Generated",
              },
              {
                src: "/temple-kolam-pattern-sacred-geometry-spiritual.jpg",
                title: "Temple Sacred",
                description: "Sacred geometry patterns used in temple courtyards",
                category: "Sacred",
              },
            ].map((image, index) => (
              <div key={index} className="glass-card-premium card-tilt overflow-hidden group">
                <div className="image-hover-advanced aspect-square relative">
                  <OptimizedImage
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full"
                    width={400}
                    height={400}
                    loading={index < 6 ? "eager" : "lazy"}
                    priority={index < 4}
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-hero-gradient text-reveal">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="btn-premium btn-ripple">
              <Palette className="mr-2 h-5 w-5 icon-float" />
              Explore Full Gallery
            </Button>
          </div>
        </section>

        <section id="pricing" className="container space-y-16 py-20 lg:py-32 px-4 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-hero-gradient font-bold text-3xl lg:text-5xl xl:text-6xl">Choose Your Journey</h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Start your cultural art journey with our flexible plans designed for every artist.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Free Plan */}
            <div className="glass-card-premium pricing-card-premium card-tilt p-8 lg:p-10 relative">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-green-500 icon-float" />
                  <h3 className="font-bold text-2xl text-reveal">Free</h3>
                </div>
                <p className="text-muted-foreground">Perfect for exploring Kolam art</p>
              </div>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl lg:text-5xl font-bold text-hero-gradient">₹0</span>
                <span className="ml-2 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {["100+ basic patterns", "Community gallery", "Simple tutorials", "Basic drawing tools"].map(
                  (feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 icon-float" />
                      <span className="text-sm lg:text-base">{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="btn-premium btn-ripple w-full mt-8">Start Free</Button>
            </div>

            {/* Premium Plan */}
            <div className="glass-card-premium pricing-card-premium card-tilt p-8 lg:p-10 relative border-2 border-primary/30">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="popular-badge text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  Most Popular
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <Crown className="h-6 w-6 text-yellow-500 icon-float" />
                  <h3 className="font-bold text-2xl text-reveal">Premium</h3>
                </div>
                <p className="text-muted-foreground">For serious artists and enthusiasts</p>
              </div>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl lg:text-5xl font-bold text-hero-gradient">₹799</span>
                <span className="ml-2 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "5000+ premium patterns",
                  "AI pattern generation",
                  "AR preview & tutorials",
                  "Festival collections",
                  "Advanced tools",
                  "Offline mode",
                  "Priority support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 icon-float" />
                    <span className="text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="btn-premium btn-ripple w-full mt-8">Start Premium</Button>
            </div>

            {/* Master Plan */}
            <div className="glass-card-premium pricing-card-premium card-tilt p-8 lg:p-10 relative">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-purple-500 icon-float" />
                  <h3 className="font-bold text-2xl text-reveal">Master</h3>
                </div>
                <p className="text-muted-foreground">For institutions and cultural centers</p>
              </div>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl lg:text-5xl font-bold text-hero-gradient">₹2,399</span>
                <span className="ml-2 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Everything in Premium",
                  "Unlimited AI generations",
                  "Custom pattern creation",
                  "Classroom management",
                  "Cultural database",
                  "White-label options",
                  "Dedicated support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 icon-float" />
                    <span className="text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="btn-premium btn-ripple w-full mt-8"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        <section id="gallery" className="container space-y-6 sm:space-y-8 py-8 md:py-12 lg:py-24 px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-6xl gradient-text">
              Kolam Gallery
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground text-sm sm:text-base lg:text-lg lg:leading-7">
              Discover a collection of stunning Kolam patterns created by artists from around the world. Filter by
              category, difficulty, and festival to find the perfect inspiration for your next creation.
            </p>
          </div>
          <KolamGallery />
        </section>

        <section id="download" className="container space-y-6 sm:space-y-8 py-8 md:py-12 lg:py-24 px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-6xl gradient-text">
              Download Kolam AI
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground text-sm sm:text-base lg:text-lg lg:leading-7">
              Get the Kolam AI app for your smartphone and start creating beautiful Kolam patterns today. Available for
              free on iOS and Android with premium features.
            </p>
          </div>
          <AppDownloadSection />
        </section>

        <section className="container py-20 lg:py-32 px-4 lg:px-8">
          <div className="glass-card-premium card-tilt cta-pulse max-w-5xl mx-auto p-8 lg:p-12 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-hero-gradient font-bold text-3xl lg:text-5xl text-reveal">
                  Ready to Create Magic?
                </h2>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Join thousands of artists preserving Indian heritage through AI-powered creativity. Start your journey
                  into the beautiful world of traditional Kolam art today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <Button size="lg" className="btn-premium btn-ripple">
                  <Zap className="mr-2 h-5 w-5 icon-float" />
                  Start Creating Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card-premium border-white/20 hover:border-primary/50 bg-transparent btn-ripple"
                >
                  <Globe className="mr-2 h-5 w-5 icon-float" />
                  Explore Community
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="nav-premium border-t border-white/10 py-8 lg:py-12">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <KolamLogo className="h-8 w-8 text-primary logo-enhanced" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kolam AI. Preserving heritage through innovation.
            </p>
          </div>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Support"].map((item) => (
              <Link
                key={item}
                href="#"
                className="footer-link text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
