import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Star, Download, QrCode, Apple, Play } from "lucide-react"

export default function AppDownloadSection() {
  return (
    <div className="space-y-12">
      {/* Main Download Section */}
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-600 border-orange-500/30">
              Available Now
            </Badge>
            <h3 className="text-3xl font-bold gradient-text">Get Kolam AI on Your Device</h3>
            <p className="text-muted-foreground leading-relaxed">
              Download the Kolam AI app and start creating beautiful traditional patterns with the power of artificial
              intelligence. Available for both iOS and Android devices.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white flex items-center gap-3 px-6 py-3 h-auto"
            >
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </Button>
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white flex items-center gap-3 px-6 py-3 h-auto"
            >
              <Play className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </Button>
          </div>

          {/* App Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">4.8</div>
              <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">100K+</div>
              <div className="text-xs text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">50MB</div>
              <div className="text-xs text-muted-foreground">Size</div>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative">
          <GlassCard className="p-8 mx-auto max-w-sm">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-black text-white text-xs px-6 py-2 flex justify-between items-center">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Screenshot */}
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 aspect-[9/16] flex flex-col items-center justify-center p-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto">
                        <Smartphone className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold text-lg">Kolam AI</h4>
                        <p className="text-sm opacity-80">Create Beautiful Patterns</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/20 rounded-full">
                          <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-3/4"></div>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full">
                          <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-1/2"></div>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full">
                          <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg">
                <Download className="h-5 w-5" />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="text-center space-y-6">
        <h4 className="text-xl font-semibold gradient-text">Quick Download with QR Code</h4>
        <div className="flex justify-center">
          <GlassCard className="p-6 inline-block">
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <QrCode className="h-20 w-20 text-gray-800" />
            </div>
            <p className="text-sm text-muted-foreground mt-3">Scan to download</p>
          </GlassCard>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid gap-6 md:grid-cols-3">
        <GlassCard className="p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Smartphone className="h-6 w-6 text-green-600" />
          </div>
          <h5 className="font-semibold mb-2">Cross-Platform</h5>
          <p className="text-sm text-muted-foreground">
            Available on both iOS and Android with seamless sync across devices.
          </p>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="h-6 w-6 text-blue-600" />
          </div>
          <h5 className="font-semibold mb-2">Free to Start</h5>
          <p className="text-sm text-muted-foreground">
            Download for free and access basic features. Upgrade for premium patterns and tools.
          </p>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="h-6 w-6 text-purple-600" />
          </div>
          <h5 className="font-semibold mb-2">Highly Rated</h5>
          <p className="text-sm text-muted-foreground">
            Join thousands of satisfied users with our 4.8-star rated app experience.
          </p>
        </GlassCard>
      </div>

      {/* System Requirements */}
      <GlassCard className="p-6">
        <h5 className="font-semibold mb-4 text-center">System Requirements</h5>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h6 className="font-medium text-sm">iOS Requirements</h6>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• iOS 14.0 or later</li>
              <li>• iPhone 8 or newer</li>
              <li>• 100MB free storage</li>
              <li>• Camera access for AR features</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h6 className="font-medium text-sm">Android Requirements</h6>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Android 8.0 (API level 26)</li>
              <li>• 3GB RAM minimum</li>
              <li>• 100MB free storage</li>
              <li>• ARCore support for AR features</li>
            </ul>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
