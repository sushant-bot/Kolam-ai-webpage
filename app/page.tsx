
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
} from "lucide-react"
import KolamGallery from "@/components/kolam-gallery"
import AppDownloadSection from "@/components/app-download-section"

import { Button } from "@/components/ui/button"
import { GradientBackground } from "@/components/ui/gradient-background"
import { GlassCard } from "@/components/ui/glass-card"
import { KolamHeroAnimation } from "@/components/ui/kolam-hero-animation"
import { KolamLogo } from "@/components/ui/kolam-logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <GradientBackground />
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/5 border-b border-white/10 transition-all duration-300 hover:bg-white/10">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <KolamLogo className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="inline-block font-bold text-sm sm:text-base">Kolam AI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <Link
              href="#features"
              className="flex items-center text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-105 hover:drop-shadow-lg"
            >
              Features
            </Link>
            <Link
              href="#gallery"
              className="flex items-center text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-105 hover:drop-shadow-lg"
            >
              Gallery
            </Link>
            <Link
              href="#pricing"
              className="flex items-center text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-105 hover:drop-shadow-lg"
            >
              Pricing
            </Link>
            <Link
              href="#download"
              className="flex items-center text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-105 hover:drop-shadow-lg"
            >
              Download
            </Link>
          </nav>

          {/* Mobile Navigation Menu - Simple horizontal scroll for mobile */}
          <nav className="flex md:hidden gap-4 overflow-x-auto scrollbar-hide">
            <Link
              href="#features"
              className="flex-shrink-0 text-xs font-medium text-muted-foreground transition-all duration-300 hover:text-primary whitespace-nowrap"
            >
              Features
            </Link>
            <Link
              href="#gallery"
              className="flex-shrink-0 text-xs font-medium text-muted-foreground transition-all duration-300 hover:text-primary whitespace-nowrap"
            >
              Gallery
            </Link>
            <Link
              href="#pricing"
              className="flex-shrink-0 text-xs font-medium text-muted-foreground transition-all duration-300 hover:text-primary whitespace-nowrap"
            >
              Pricing
            </Link>
            <Link
              href="#download"
              className="flex-shrink-0 text-xs font-medium text-muted-foreground transition-all duration-300 hover:text-primary whitespace-nowrap"
            >
              Download
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center space-y-8 pb-8 pt-4 sm:pb-12 sm:pt-8 md:pb-16 md:pt-12 overflow-hidden px-4">
          <KolamHeroAnimation className="absolute inset-0" />
          <div className="container flex max-w-[68rem] flex-col items-center gap-4 sm:gap-6 text-center relative z-10">
            <div className="rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-orange-600 border border-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-red-500/30 hover:border-orange-500/50">
              ✨ Introducing Kolam AI - Where Tradition Meets Innovation 🕉️
            </div>
            <div className="hero-glow transition-all duration-500 hover:scale-105">
              <h1 className="font-heading text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl gradient-text leading-tight px-2">
                Preserve Indian Heritage
                <br />
                <span className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Through AI Magic 🎨</span>
              </h1>
            </div>
            <p className="max-w-[48rem] leading-relaxed text-muted-foreground text-sm sm:text-base md:text-xl md:leading-8 glass-effect p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/10 mx-4">
              Create stunning Kolam patterns with AI assistance, learn traditional designs through AR tutorials, share
              with a global community, and participate in festival challenges. Experience the perfect blend of ancient
              artistry and cutting-edge technology. 🪔 Celebrate Diwali, Pongal, and Margazhi with authentic patterns.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-md sm:max-w-none">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 text-sm sm:text-base transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/30 w-full sm:w-auto"
                asChild
              >
                <Link href="#gallery">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Watch Demo
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-button border-orange-500/30 text-orange-600 hover:bg-orange-500/10 bg-transparent transition-all duration-300 hover:scale-110 hover:border-orange-500/60 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base"
                asChild
              >
                <Link href="#download">
                  <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Download App
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 w-full max-w-xs sm:max-w-2xl">
              <div className="text-center transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold gradient-text">10K+ 🎨</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Kolam Patterns</div>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold gradient-text">50K+ 👥</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Artists</div>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold gradient-text">25+ 🪔</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Festivals Covered</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24 px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-6xl gradient-text transition-all duration-300 hover:scale-105">
              Intelligent Kolam Features 🕉️
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground text-sm sm:text-base lg:text-lg lg:leading-7">
              Our AI-powered app brings traditional Kolam art into the digital age with innovative features that honor
              ancient traditions.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] lg:grid-cols-3 xl:grid-cols-4">
            <GlassCard className="p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="space-y-2 pt-4 sm:pt-6">
                <h3 className="font-bold text-sm sm:text-base">AI Kolam Generation 🤖</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Generate beautiful traditional and modern Kolam patterns using advanced AI algorithms trained on
                  authentic designs from Tamil Nadu and South India.
                </p>
              </div>
            </GlassCard>
            <GlassCard
              className="p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30"
              highlight
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <Camera className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="space-y-2 pt-4 sm:pt-6">
                <h3 className="font-bold text-sm sm:text-base">AR Preview & Tutorials 📱</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Visualize Kolam patterns in your space with AR and follow step-by-step tutorials for traditional
                  techniques passed down through generations.
                </p>
              </div>
            </GlassCard>
            <GlassCard className="p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="space-y-2 pt-4 sm:pt-6">
                <h3 className="font-bold text-sm sm:text-base">Community & Challenges 🌍</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Share your creations, participate in festival challenges, and connect with Kolam enthusiasts
                  worldwide. Celebrate Tamil culture together!
                </p>
              </div>
            </GlassCard>
            <GlassCard className="p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="space-y-2 pt-4 sm:pt-6">
                <h3 className="font-bold text-sm sm:text-base">Festival Competitions 🏆</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Participate in seasonal festivals like Diwali, Pongal, and Margazhi with themed Kolam competitions and
                  prizes. Honor traditional celebrations!
                </p>
              </div>
            </GlassCard>
            <GlassCard className="p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="space-y-2 pt-4 sm:pt-6">
                <h3 className="font-bold text-sm sm:text-base">Smart Drawing Tools</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Intelligent brush tools that help you create perfect curves, symmetrical patterns, and traditional
                  motifs with ease.
                </p>
              </div>
            </GlassCard>
            <GlassCard className="p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <Play className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="space-y-2 pt-4 sm:pt-6">
                <h3 className="font-bold text-sm sm:text-base">Video Tutorials</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Learn from master artists with high-quality video tutorials covering basic to advanced Kolam
                  techniques.
                </p>
              </div>
            </GlassCard>
            <GlassCard className="p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <QrCode className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="space-y-2 pt-4 sm:pt-6">
                <h3 className="font-bold text-sm sm:text-base">Pattern Recognition</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Scan real Kolam patterns with your camera to get digital versions, tutorials, and cultural
                  significance.
                </p>
              </div>
            </GlassCard>
            <GlassCard className="p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <Download className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="space-y-2 pt-4 sm:pt-6">
                <h3 className="font-bold text-sm sm:text-base">Offline Mode</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Access your favorite patterns, tutorials, and drawing tools even without internet connection.
                </p>
              </div>
            </GlassCard>
          </div>

          <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-12">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold gradient-text transition-all duration-300 hover:scale-105">
                  Master Traditional Techniques 🎨
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Learn authentic Kolam drawing techniques passed down through generations of Tamil families. Our
                  AI-powered tutorials adapt to your skill level and provide personalized feedback to help you improve
                  your artistry while respecting cultural traditions.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    Step-by-step guided tutorials with cultural context
                  </li>
                  <li className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    Real-time drawing assistance and corrections
                  </li>
                  <li className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    Cultural context and spiritual meanings
                  </li>
                </ul>
              </div>
              <GlassCard className="p-4 sm:p-6 order-1 lg:order-2 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:from-orange-500/30 hover:to-red-500/30">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-orange-600 transition-all duration-300 hover:scale-110" />
                </div>
              </GlassCard>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center">
              <GlassCard className="p-4 sm:p-6 order-2 lg:order-1 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:from-pink-500/30 hover:to-purple-500/30">
                  <Camera className="h-8 w-8 sm:h-12 sm:w-12 text-pink-600 transition-all duration-300 hover:scale-110" />
                </div>
              </GlassCard>
              <div className="space-y-4 order-1 lg:order-2">
                <h3 className="text-xl sm:text-2xl font-bold gradient-text transition-all duration-300 hover:scale-105">
                  Augmented Reality Experience 📱
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Visualize your Kolam designs in real-world spaces before you start drawing. Perfect for planning large
                  outdoor installations for festivals or checking how traditional patterns will look in your home
                  courtyard.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                    3D pattern preview in your sacred space
                  </li>
                  <li className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                    Size and scale adjustment for courtyards
                  </li>
                  <li className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                    Share AR experiences with family
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="container space-y-6 sm:space-y-8 py-8 md:py-12 lg:py-24 px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-6xl gradient-text">Kolam Gallery</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground text-sm sm:text-base lg:text-lg lg:leading-7">
              Discover a collection of stunning Kolam patterns created by artists from around the world. Filter by
              category, difficulty, and festival to find the perfect inspiration for your next creation.
            </p>
          </div>
          <KolamGallery />
        </section>
        <section id="pricing" className="container space-y-6 py-8 md:py-12 lg:py-24 px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-6xl gradient-text transition-all duration-300 hover:scale-105">
              Choose Your Kolam Journey 🛤️
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground text-sm sm:text-base lg:text-lg lg:leading-7">
              Start free and unlock premium features to enhance your Kolam creation experience and cultural learning.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <GlassCard className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Free 🆓</h3>
                <p className="text-muted-foreground">Perfect for beginners exploring Kolam art</p>
              </div>
              <div className="mt-4 flex items-baseline text-3xl font-bold">
                $0<span className="ml-1 text-base font-medium text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>50+ basic Kolam patterns</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Basic drawing tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Community gallery access</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Simple tutorials</span>
                </li>
              </ul>
              <Button className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Started Free
              </Button>
            </GlassCard>

            <GlassCard
              className="p-6 relative transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
              highlight
            >
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-orange-500 to-red-500 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white transition-all duration-300 hover:scale-110">
                Most Popular 🌟
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-xl">Premium</h3>
                  <Crown className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-muted-foreground">For serious artists and cultural enthusiasts</p>
              </div>
              <div className="mt-4 flex items-baseline text-3xl font-bold">
                $9.99<span className="ml-1 text-base font-medium text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>5000+ premium Kolam patterns</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>AI-powered pattern generation</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>AR preview & tutorials</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Festival-specific collections</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Advanced drawing tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Offline mode</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Start Premium Trial
              </Button>
            </GlassCard>

            <GlassCard className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-xl">Master</h3>
                  <Sparkles className="h-5 w-5 text-purple-500" />
                </div>
                <p className="text-muted-foreground">For teachers, institutions, and cultural centers</p>
              </div>
              <div className="mt-4 flex items-baseline text-3xl font-bold">
                $29.99<span className="ml-1 text-base font-medium text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Unlimited AI generations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Custom pattern creation</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Classroom management tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Cultural history database</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>White-label options</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Button className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Contact Sales
              </Button>
            </GlassCard>
          </div>

          <div className="mt-16">
            <GlassCard
              className="p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
              highlight
            >
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-500 transition-all duration-300 hover:scale-110" />
                  <h3 className="text-2xl font-bold gradient-text">Festival Special Offer 🪔</h3>
                  <Trophy className="h-6 w-6 text-yellow-500 transition-all duration-300 hover:scale-110" />
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Celebrate Diwali, Pongal, Margazhi, and other sacred festivals with exclusive Kolam patterns and 50%
                  off Premium for the first 3 months. Honor your heritage with authentic designs! 🕉️
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  >
                    Claim Festival Offer 🎉
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass-button bg-transparent transition-all duration-300 hover:scale-105 hover:border-yellow-500/50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
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
        <section className="container py-8 md:py-12 lg:py-24 px-4">
          <GlassCard
            className="mx-auto max-w-[58rem] p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
            highlight
          >
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="max-w-[32rem] space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight gradient-text transition-all duration-300 hover:scale-105">
                  Ready to Start Your Kolam Journey? 🚀
                </h2>
                <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
                  Join thousands of artists preserving Indian heritage through AI-powered Kolam creation. Honor
                  tradition, embrace innovation! 🕉️
                </p>
              </div>
              <Button
                size="lg"
                className="shrink-0 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/30 w-full sm:w-auto"
              >
                Download Now 📱
              </Button>
            </div>
          </GlassCard>
        </section>
      </main>
      <footer className="border-t border-white/10 py-4 sm:py-6 md:py-0 backdrop-blur-md bg-white/5 transition-all duration-300 hover:bg-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
          <div className="flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-8 md:flex-row md:gap-2 md:px-0">
            <KolamLogo className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-all duration-300 hover:scale-110" />
            <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Kolam AI. All rights reserved. Preserving heritage through technology 🕉️
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground underline underline-offset-4 transition-all duration-300 hover:text-primary hover:scale-105"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground underline underline-offset-4 transition-all duration-300 hover:text-primary hover:scale-105"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
