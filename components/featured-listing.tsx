"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Share2, Car, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "swiper/css";
import "swiper/css/navigation"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"

const featuredListings = [
  {
    id: 1,
    title: "Lamborghini Huracán",
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
    title: "Ferrari F8 Tributo",
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
    title: "Porsche 911 Turbo S",
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
    title: "Aston Martin DBS Superleggera",
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
    title: "McLaren 720S",
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
    title: "Bentley Continental GT",
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


      <Carousel className="relative w-full ">
        <CarouselContent className="-ml-4">
        {featuredListings.map((listing, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="">
              <Card key={listing.id} className="relative group container overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <div className="relative">
                  <Image
                    src={listing.gallery[listing.id] ? listing.gallery[listing.id] : listing.image}
                    alt={listing.title}
                    width={150}
                    height={150}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {listing.premium && <Badge className="bg-yellow-500 text-white">Premium</Badge>}
                    {listing.featured && <Badge className="bg-primary text-white">Featured</Badge>}
                    {listing.verified && <Badge variant="outline" className="text-xs">Verified</Badge>}
                  </div>

                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white text-black">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">{listing.title}</h3>
                    <span className="text-blue-600 font-semibold text-lg mt-2">{listing.price}</span>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><Car className="inline h-4 w-4 mr-1" /> {listing.year}</p>
                    <p><MapPin className="inline h-4 w-4 mr-1" /> {listing.location}</p>
                    <p><Clock className="inline h-4 w-4 mr-1" /> {listing.postedDate}</p>
                  </div>

                  <div className="items-center justify-center mx-auto">
                    <Button className="bg-black text-white hover:bg-zinc-800 hover:text-white mt-3 w-full">
                      <Link href={`/listing/${listing.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

        </CarouselContent>
        <CarouselPrevious
          className="absolute -left-1.5 sm:-left-5 md:-left-6 lg:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-1 sm:p-2 rounded-full shadow-md"
         />
        <CarouselNext 
           className="absolute -right-1.5 sm:-right-5 md:-right-6 lg:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-1 sm:p-2 rounded-full shadow-md"
        />
      </Carousel>
    </section>
  )
}
