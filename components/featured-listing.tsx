"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Share2, ChevronLeft, ChevronRight, Star, Clock, MapPin, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const featuredListings = [
  {
    id: 1,
    title: "2023 Lamborghini Huracán",
    price: "RM 1,850,000",
    location: "Kuala Lumpur",
    year: 2023,
    mileage: "1,200 km",
    transmission: "Automatic",
    featured: true,
    verified: true,
    premium: true,
    rating: 5,
    postedDate: "2 days ago",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 2,
    title: "2022 Ferrari F8 Tributo",
    price: "RM 2,100,000",
    location: "Penang",
    year: 2022,
    mileage: "3,500 km",
    transmission: "Automatic",
    featured: true,
    verified: true,
    premium: true,
    rating: 4.5,
    postedDate: "1 week ago",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 3,
    title: "2021 Porsche 911 Turbo S",
    price: "RM 1,450,000",
    location: "Johor Bahru",
    year: 2021,
    mileage: "8,700 km",
    transmission: "Automatic",
    featured: true,
    verified: false,
    premium: false,
    rating: 4,
    postedDate: "2 weeks ago",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 4,
    title: "2020 Aston Martin DBS Superleggera",
    price: "RM 1,680,000",
    location: "Kuala Lumpur",
    year: 2020,
    mileage: "12,500 km",
    transmission: "Automatic",
    featured: true,
    verified: true,
    premium: false,
    rating: 4.5,
    postedDate: "3 weeks ago",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 5,
    title: "2022 McLaren 720S",
    price: "RM 2,350,000",
    location: "Kuala Lumpur",
    year: 2022,
    mileage: "2,800 km",
    transmission: "Automatic",
    featured: true,
    verified: true,
    premium: true,
    rating: 5,
    postedDate: "5 days ago",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 6,
    title: "2021 Bentley Continental GT",
    price: "RM 1,950,000",
    location: "Selangor",
    year: 2021,
    mileage: "5,600 km",
    transmission: "Automatic",
    featured: true,
    verified: true,
    premium: false,
    rating: 4,
    postedDate: "1 month ago",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
]

export default function FeaturedListings() {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({})
  const [favorites, setFavorites] = useState<Record<number, boolean>>({})

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Featured Listings</h2>
          <p className="text-muted-foreground">Premium vehicles handpicked for you</p>
        </div>
        <Link href="/listings" className="text-sm font-medium text-text-secondary hover:underline">
          View All Listings
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredListings.slice(0, 6).map((listing) => (
          <Card key={listing.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border border-border">
            <div className="relative">
              <Image
                src={listing.gallery[currentImageIndex[listing.id] || 0]}
                alt={listing.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {listing.premium && <Badge className="bg-yellow-500 text-white">Premium</Badge>}
                {listing.featured && <Badge className="bg-primary text-white">Featured</Badge>}
                {listing.verified && <Badge variant="outline" className="text-xs">Verified</Badge>}
              </div>

              <div className="absolute top-2 right-2 flex gap-2">
                <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white text-black">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white text-black">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{listing.title}</h3>
                <span className="text-primary font-bold">{listing.price}</span>
              </div>

              <div className="text-sm text-muted-foreground space-y-1">
                <p><MapPin className="inline h-4 w-4 mr-1" /> {listing.location}</p>
                <p><Clock className="inline h-4 w-4 mr-1" /> {listing.postedDate}</p>
              </div>

              <Link href={`/listing/${listing.id}`}>
                <Button className="mt-3 w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}

        {featuredListings.slice(0,0).map((listing) => (
          <Card key={listing.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={listing.gallery[currentImageIndex[listing.id] || 0] || listing.image}
                  alt={listing.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />

              </div>

              <div className="absolute top-2 left-2 flex flex-col gap-2">
                {listing.premium && (
                  <Badge variant="secondary" className="bg-amber-500 text-white border-0">
                    <Zap className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                )}
                {listing.featured && (
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                {listing.verified && (
                  <Badge variant="outline" className="bg-white dark:bg-black/50">
                    Verified
                  </Badge>
                )}
              </div>

              <div className="absolute top-2 right-2 flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-8 w-8 rounded-full bg-white/80 hover:bg-white dark:bg-black/50 dark:hover:bg-black/70",
                    favorites[listing.id] && "text-red-500",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    toggleFavorite(listing.id)
                  }}
                >
                  <Heart className={cn("h-4 w-4", favorites[listing.id] && "fill-current")} />
                  <span className="sr-only">Add to favorites</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white/80 hover:bg-white dark:bg-black/50 dark:hover:bg-black/70"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                    <span className="text-sm font-medium">{listing.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {listing.postedDate}
                  </div>
                </div>

                <h3 className="font-bold text-lg hover:text-primary transition-colors">
                  <Link href={`/listing/${listing.id}`}>{listing.title}</Link>
                </h3>

                <p className="text-2xl font-bold text-primary">{listing.price}</p>

                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {listing.location}
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-muted rounded-md p-2 text-center">
                    <div className="font-medium">Year</div>
                    <div>{listing.year}</div>
                  </div>
                  <div className="bg-muted rounded-md p-2 text-center">
                    <div className="font-medium">Mileage</div>
                    <div>{listing.mileage}</div>
                  </div>
                  <div className="bg-muted rounded-md p-2 text-center">
                    <div className="font-medium">Trans</div>
                    <div>{listing.transmission}</div>
                  </div>
                </div>

                <div className="pt-3 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Contact Seller
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
