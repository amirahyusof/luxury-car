"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface AdBannerProps {
  size: "large" | "medium" | "small"
  position: "top" | "middle" | "sidebar" | "listing"
  imageUrl?: string
  darkImageUrl?: string
  linkUrl?: string
  altText?: string
}

export default function AdBanner({
  size,
  position,
  imageUrl = "/placeholder.svg",
  darkImageUrl,
  linkUrl = "#",
  altText = "Advertisement",
}: AdBannerProps) {
  
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [currentImage, setCurrentImage] = useState(imageUrl)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update image based on theme
  useEffect(() => {
    if (darkImageUrl ) {
      setCurrentImage(imageUrl)
    }
  }, [imageUrl, darkImageUrl])

  // Set dimensions based on size and screen width
  const getDimensions = () => {
    // Default dimensions
    const dimensions = {
      large: { width: 1200, height: 200 },
      medium: { width: 800, height: 150 },
      small: { width: 300, height: 250 },
    }

    // Responsive adjustments
    if (windowWidth < 640) {
      // Mobile
      return {
        large: { width: 400, height: 150 },
        medium: { width: 400, height: 120 },
        small: { width: 300, height: 250 },
      }[size]
    } else if (windowWidth < 1024) {
      // Tablet
      return {
        large: { width: 700, height: 150 },
        medium: { width: 600, height: 120 },
        small: { width: 300, height: 250 },
      }[size]
    } else {
      // Desktop
      return dimensions[size]
    }
  }

  const { width, height } = getDimensions()

  // Add sponsored label and styling based on position
  return (
    <div
      className={`ad-container ${position} my-4 relative rounded-lg overflow-hidden border border-border`}
      data-ad-position={position}
    >
      <div className="absolute top-1 right-1 z-10">
        <span className="text-xs bg-black/70 text-white px-2 py-0.5 rounded">
          Sponsored
        </span>
      </div>
      <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={altText}
          width={width}
          height={height}
          className="w-full h-auto"
          priority={position === "top"}
        />
      </Link>
    </div>
  )
}
