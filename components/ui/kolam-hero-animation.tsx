"use client"

import { useEffect, useRef } from "react"

interface KolamHeroAnimationProps {
  className?: string
}

export function KolamHeroAnimation({ className }: KolamHeroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = 600
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const kolamElements = [
      {
        type: "circle",
        x: 0.2,
        y: 0.3,
        radius: 30,
        color: "rgba(251, 146, 60, 0.4)", // Orange
        strokeColor: "rgba(251, 146, 60, 0.8)",
        speed: 0.02,
        phase: 0,
      },
      {
        type: "circle",
        x: 0.8,
        y: 0.7,
        radius: 25,
        color: "rgba(239, 68, 68, 0.4)", // Red
        strokeColor: "rgba(239, 68, 68, 0.8)",
        speed: 0.015,
        phase: Math.PI / 2,
      },
      {
        type: "circle",
        x: 0.6,
        y: 0.2,
        radius: 20,
        color: "rgba(236, 72, 153, 0.4)", // Pink
        strokeColor: "rgba(236, 72, 153, 0.8)",
        speed: 0.025,
        phase: Math.PI,
      },
      {
        type: "circle",
        x: 0.3,
        y: 0.8,
        radius: 35,
        color: "rgba(168, 85, 247, 0.3)", // Purple
        strokeColor: "rgba(168, 85, 247, 0.7)",
        speed: 0.01,
        phase: Math.PI * 1.5,
      },
    ]

    let animationFrameId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines between elements
      drawConnectingLines(ctx, kolamElements, time, canvas.width, canvas.height)

      // Draw Kolam elements
      kolamElements.forEach((element) => {
        drawKolamElement(ctx, element, time, canvas.width, canvas.height)
      })

      // Draw central mandala pattern
      drawCentralMandala(ctx, time, canvas.width, canvas.height)

      time += 0.02
      animationFrameId = requestAnimationFrame(animate)
    }

    const drawKolamElement = (
      ctx: CanvasRenderingContext2D,
      element: any,
      time: number,
      width: number,
      height: number,
    ) => {
      const x = element.x * width + Math.sin(time * element.speed + element.phase) * 20
      const y = element.y * height + Math.cos(time * element.speed + element.phase) * 15

      // Draw pulsing circle
      const pulseRadius = element.radius + Math.sin(time * 2 + element.phase) * 5

      ctx.beginPath()
      ctx.arc(x, y, pulseRadius, 0, Math.PI * 2)
      ctx.fillStyle = element.color
      ctx.fill()
      ctx.strokeStyle = element.strokeColor
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw decorative dots around the circle
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time * element.speed
        const dotX = x + Math.cos(angle) * (pulseRadius + 15)
        const dotY = y + Math.sin(angle) * (pulseRadius + 15)

        ctx.beginPath()
        ctx.arc(dotX, dotY, 3, 0, Math.PI * 2)
        ctx.fillStyle = element.strokeColor
        ctx.fill()
      }
    }

    const drawConnectingLines = (
      ctx: CanvasRenderingContext2D,
      elements: any[],
      time: number,
      width: number,
      height: number,
    ) => {
      ctx.strokeStyle = "rgba(251, 146, 60, 0.2)"
      ctx.lineWidth = 1

      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const elem1 = elements[i]
          const elem2 = elements[j]

          const x1 = elem1.x * width + Math.sin(time * elem1.speed + elem1.phase) * 20
          const y1 = elem1.y * height + Math.cos(time * elem1.speed + elem1.phase) * 15
          const x2 = elem2.x * width + Math.sin(time * elem2.speed + elem2.phase) * 20
          const y2 = elem2.y * height + Math.cos(time * elem2.speed + elem2.phase) * 15

          const opacity = 0.1 + Math.sin(time + i + j) * 0.1
          ctx.strokeStyle = `rgba(251, 146, 60, ${opacity})`

          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()
        }
      }
    }

    const drawCentralMandala = (ctx: CanvasRenderingContext2D, time: number, width: number, height: number) => {
      const centerX = width / 2
      const centerY = height / 2

      // Draw rotating mandala pattern
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(time * 0.5)

      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2
        const x = Math.cos(angle) * 60
        const y = Math.sin(angle) * 60

        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251, 146, 60, ${0.3 + Math.sin(time * 2 + i) * 0.2})`
        ctx.fill()
        ctx.strokeStyle = "rgba(251, 146, 60, 0.8)"
        ctx.lineWidth = 1
        ctx.stroke()
      }

      ctx.restore()
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute w-full h-[600px] opacity-60 ${className}`} aria-hidden="true" />
}
