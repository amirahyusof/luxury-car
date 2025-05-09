import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const recentListings = [
  {
    id: 5,
    title: "2022 McLaren 720S",
    price: "RM 2,350,000",
    location: "Kuala Lumpur",
    year: 2022,
    mileage: "2,800 km",
    transmission: "Automatic",
    featured: false,
    verified: true,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "2021 Bentley Continental GT",
    price: "RM 1,950,000",
    location: "Selangor",
    year: 2021,
    mileage: "5,600 km",
    transmission: "Automatic",
    featured: false,
    verified: true,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 7,
    title: "2020 Rolls-Royce Ghost",
    price: "RM 2,800,000",
    location: "Penang",
    year: 2020,
    mileage: "9,200 km",
    transmission: "Automatic",
    featured: false,
    verified: true,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 8,
    title: "2023 Mercedes-AMG GT",
    price: "RM 1,580,000",
    location: "Johor",
    year: 2023,
    mileage: "1,800 km",
    transmission: "Automatic",
    featured: false,
    verified: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 9,
    title: "2021 Maserati MC20",
    price: "RM 1,750,000",
    location: "Kuala Lumpur",
    year: 2021,
    mileage: "4,500 km",
    transmission: "Automatic",
    featured: false,
    verified: true,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 10,
    title: "2022 Audi R8 V10",
    price: "RM 1,480,000",
    location: "Selangor",
    year: 2022,
    mileage: "3,200 km",
    transmission: "Automatic",
    featured: false,
    verified: true,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function RecentListings() {
  return (
    <section className="py-16 bg-dark">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Recent Listings</h2>
        <Link href="/listings" className="text-secondary hover:underline text-sm font-medium">
          View All Listings
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {recentListings.slice(0, 6).map((listing) => (
          <div className="flex justify-center" key={listing.id}>
            <Card
              className="overflow-hidden group border max-w-sm md:w-full transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
            >
              <div className="relative">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  width={400}
                  height={300}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {listing.featured && (
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                  {listing.verified && (
                    <Badge variant="outline" className="bg-white text-black">
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/90 hover:bg-white">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>

              <CardContent className="p-5 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold truncate">
                    <Link href={`/listing/${listing.id}`} className="hover:text-primary">
                      {listing.title}
                    </Link>
                  </h3>
                  <p className="text-xl font-semibold text-blue-600">{listing.price}</p>
                  <p className="text-sm text-muted-foreground">{listing.location}</p>
                </div>

                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Year: {listing.year}</p>
                  <p>Mileage: {listing.mileage}</p>
                  <p>Transmission: {listing.transmission}</p>
                </div>

                <div className="pt-4 flex flex-row md:flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Contact Seller
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild size="lg" className="hover:bg-zinc-800 hover:text-white">
          <Link href="/listings">View All Listings</Link>
        </Button>
      </div>
    </section>
  );
}