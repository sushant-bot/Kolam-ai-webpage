"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SentimentDemo from "@/components/demos/sentiment-demo"
import AdaptationDemo from "@/components/demos/adaptation-demo"
import TrendDemo from "@/components/demos/trend-demo"

export default function DemoSection() {
  return (
    <div className="w-full max-w-5xl mx-auto border rounded-lg shadow-sm overflow-hidden">
      {/* Embedded YouTube Video */}
      <div className="w-full aspect-video bg-black flex items-center justify-center mb-6">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/uMHfwhhN3_E?si=Yj3sMvhz_3sA7XPq"
          title="Kolam AI Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Tabs defaultValue="sentiment" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="adaptation">Content Adaptation</TabsTrigger>
          <TabsTrigger value="trends">Trend Prediction</TabsTrigger>
        </TabsList>
        <TabsContent value="sentiment" className="p-4">
          <SentimentDemo />
        </TabsContent>
        <TabsContent value="adaptation" className="p-4">
          <AdaptationDemo />
        </TabsContent>
        <TabsContent value="trends" className="p-4">
          <TrendDemo />
        </TabsContent>
      </Tabs>
    </div>
  )
}
