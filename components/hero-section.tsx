"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching:", searchQuery)
  }

  return (
    <div className="relative rounded-xl overflow-hidden h-[550px]">
      <Image
        src="/images/background-image.webp"
        alt="Luxury cars showcase"
        fill
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
        <div className="text-center max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight font-sans">
            Find Your Dream <span className="text-white/90 font-sans"><br></br>Luxury Car</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300">
          Malaysia&apos;s premier marketplace for exotic and luxury vehicles. 
          <br/>Discover, buy, and sell with confidence.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col mx-auto items-center md:flex-row gap-4 mt-6 w-full max-w-xl">
            <div className="flex-1 w-full">
              <Input
                type="text"
                placeholder="Search by make, model, or keyword"
                className="bg-white text-black h-12  focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button type="submit" className="h-12 px-6">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </form>

          <div className="flex gap-4 mt-6 justify-center flex-wrap">
            <Button variant="outline" className="cursor-pointer bg-white/10 hover:bg-white/20 text-white">
              Browse All Cars
            </Button>
            <Button variant="secondary" className="cursor-pointer bg-primary hover:bg-zinc-800 text-white">
              Sell Your Car
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
