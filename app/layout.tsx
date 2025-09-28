import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Kolam AI - Preserve Indian Heritage Through Technology",
  description:
    "Create stunning Kolam patterns with AI assistance, learn traditional designs, and experience AR previews",
  generator: "Next.js",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preload" href="/traditional-lotus-pattern.png" as="image" />
        <link rel="preload" href="/Geometric-Mandala.png" as="image" />
        <link rel="preload" href="/Peacock-Grace.png" as="image" />
        <link rel="preload" href="/Rangoli-Flower-Burst.png" as="image" />
      </head>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
