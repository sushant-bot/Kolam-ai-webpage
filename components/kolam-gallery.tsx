"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Download, Filter, Star, Share2 } from "lucide-react"

const kolamPatterns = [
  {
    id: 1,
    title: "Traditional Lotus Kolam",
    category: "Traditional",
    difficulty: "Beginner",
    likes: 1247,
    views: 3421,
    artist: "Priya Sharma",
    festival: "Diwali",
    colors: ["orange", "red", "yellow"],
    image: "/traditional-lotus-pattern.png",
  },
  {
    id: 2,
    title: "Geometric Mandala",
    category: "Modern",
    difficulty: "Advanced",
    likes: 892,
    views: 2156,
    artist: "Arjun Patel",
    festival: "Pongal",
    colors: ["blue", "purple", "pink"],
    image: "/Geometric-Mandala.png",
  },
  {
    id: 3,
    title: "Peacock Feather Design",
    category: "Traditional",
    difficulty: "Intermediate",
    likes: 1567,
    views: 4231,
    artist: "Lakshmi Devi",
    festival: "Margazhi",
    colors: ["green", "blue", "gold"],
    image: "/Peacock-Grace.png",
  },
  {
    id: 4,
    title: "AI Generated Fusion",
    category: "AI Generated",
    difficulty: "Beginner",
    likes: 743,
    views: 1876,
    artist: "Kolam AI",
    festival: "General",
    colors: ["pink", "purple", "orange"],
    image: "/AI-Fusion.png",
  },
  {
    id: 5,
    title: "Rangoli Flower Burst",
    category: "Festival",
    difficulty: "Intermediate",
    likes: 1123,
    views: 2987,
    artist: "Meera Krishnan",
    festival: "Diwali",
    colors: ["red", "orange", "yellow"],
    image: "/Rangoli-Flower-Burst.png",
  },
  {
    id: 6,
    title: "Minimalist Dots",
    category: "Modern",
    difficulty: "Beginner",
    likes: 654,
    views: 1543,
    artist: "Ravi Kumar",
    festival: "General",
    colors: ["white", "black", "gray"],
    image: "/Minimalist-Dots.png",
  },
]

const categories = ["All", "Traditional", "Modern", "AI Generated", "Festival"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function KolamGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [likedPatterns, setLikedPatterns] = useState<number[]>([])

  const filteredPatterns = kolamPatterns.filter((pattern) => {
    const categoryMatch = selectedCategory === "All" || pattern.category === selectedCategory
    const difficultyMatch = selectedDifficulty === "All" || pattern.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  const toggleLike = (patternId: number) => {
    setLikedPatterns((prev) =>
      prev.includes(patternId) ? prev.filter((id) => id !== patternId) : [...prev, patternId],
    )
  }

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2 transition-all duration-300 hover:text-orange-600 hover:scale-105">
            <Filter className="h-4 w-4" />
            Category: 🎨
          </span>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  : "glass-button bg-transparent transition-all duration-300 hover:scale-105 hover:border-orange-500/50"
              }
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-orange-600 hover:scale-105">
            Difficulty: 📊
          </span>
          {difficulties.map((difficulty) => (
            <Button
              key={difficulty}
              variant={selectedDifficulty === difficulty ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty(difficulty)}
              className={
                selectedDifficulty === difficulty
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  : "glass-button bg-transparent transition-all duration-300 hover:scale-105 hover:border-orange-500/50"
              }
            >
              {difficulty}
            </Button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPatterns.map((pattern) => (
          <GlassCard key={pattern.id} className="p-0 overflow-hidden group cultural-card">
            <div className="relative">
              <img
                src={pattern.image || "/placeholder.svg"}
                alt={pattern.title}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-white font-medium">4.8</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex gap-2">
                <Badge
                  variant="secondary"
                  className={`${
                    pattern.difficulty === "Beginner"
                      ? "bg-green-500/20 text-green-600 border-green-500/30"
                      : pattern.difficulty === "Intermediate"
                        ? "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
                        : "bg-red-500/20 text-red-600 border-red-500/30"
                  } backdrop-blur-sm transition-all duration-300 hover:scale-110`}
                >
                  {pattern.difficulty}
                </Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      onClick={() => toggleLike(pattern.id)}
                    >
                      <Heart
                        className={`h-4 w-4 transition-all duration-300 ${
                          likedPatterns.includes(pattern.id)
                            ? "fill-red-500 text-red-500 scale-125"
                            : "hover:text-red-400"
                        }`}
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg transition-all duration-300 group-hover:text-orange-600">
                  {pattern.title}
                </h3>
                <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-orange-500">
                  by {pattern.artist} 👨‍🎨
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="text-xs transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:text-orange-600"
                >
                  {pattern.category}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:text-orange-600"
                >
                  {pattern.festival} 🪔
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 transition-all duration-300 hover:text-red-500 hover:scale-105">
                    <Heart className="h-4 w-4" />
                    {pattern.likes}
                  </span>
                  <span className="flex items-center gap-1 transition-all duration-300 hover:text-blue-500 hover:scale-105">
                    <Eye className="h-4 w-4" />
                    {pattern.views}
                  </span>
                </div>
                <div className="flex gap-1">
                  {pattern.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full border border-white/20 transition-all duration-300 hover:scale-125 hover:shadow-lg ${
                        color === "orange"
                          ? "bg-orange-500 hover:shadow-orange-500/50"
                          : color === "red"
                            ? "bg-red-500 hover:shadow-red-500/50"
                            : color === "yellow"
                              ? "bg-yellow-500 hover:shadow-yellow-500/50"
                              : color === "blue"
                                ? "bg-blue-500 hover:shadow-blue-500/50"
                                : color === "purple"
                                  ? "bg-purple-500 hover:shadow-purple-500/50"
                                  : color === "pink"
                                    ? "bg-pink-500 hover:shadow-pink-500/50"
                                    : color === "green"
                                      ? "bg-green-500 hover:shadow-green-500/50"
                                      : color === "gold"
                                        ? "bg-yellow-400 hover:shadow-yellow-400/50"
                                        : color === "white"
                                          ? "bg-white hover:shadow-white/50"
                                          : color === "black"
                                            ? "bg-black hover:shadow-black/50"
                                            : "bg-gray-500 hover:shadow-gray-500/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <Button
          size="lg"
          variant="outline"
          className="glass-button bg-transparent border-orange-500/30 text-orange-600 hover:bg-orange-500/10 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/20"
        >
          Load More Patterns 🎨
        </Button>
      </div>
    </div>
  )
}
