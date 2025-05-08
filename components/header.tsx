"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, LogIn, PlusCircle } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black shadow-md transition-shadow duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">LUXOTICARS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center rounded-xl p-2 gap-1 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors duration-200">
                Buy Cars
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-zinc-800 text-zinc-300">
              <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800 hover:text-zinc-300 transition-colors duration-200">
                  <Link href="/cars/private" className="w-full">
                    Private Sales
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/cars/sold" className="w-full">
                    Sold
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/cars/buy" className="w-full">
                    Buy Car
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/cars/plate" className="w-full">
                    Number Plate
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:bg-zinc-800 focus:bg-zinc-800 rounded-xl p-2 gap-1 text-sm font-medium text-zinc-300 hover:text-white">
                Sell Cars
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-zinc-800  text-zinc-300">
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/sell/post" className="w-full">
                    Post an Ad
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/sell/tips" className="w-full">
                    Selling Tips
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/sell/pricing" className="w-full">
                    Pricing Guide
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:bg-zinc-800 focus:bg-zinc-800 rounded-xl p-2 gap-1 text-sm font-medium text-zinc-300 hover:text-white">
                About
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-zinc-800  text-zinc-300">
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/about/histo" className="w-full">
                    Histograpia
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/about/reviews" className="w-full">
                    Reviews
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/about/lifestyle" className="w-full">
                    Lifestyle
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">
                  <Link href="/about/activity" className="w-full">
                    Activity
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/photography-guide" className="text-sm font-medium text-zinc-300 hover:bg-zinc-800 focus:bg-zinc-800 rounded-xl p-2">
              Photography Guide
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex text-zinc-300 hover:text-white hover:bg-zinc-800"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <Link href="/auth/login">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex gap-2 border text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </Link>

          <Link href="/post-ad">
            <Button size="sm" className="hidden md:flex gap-2 bg-primary hover:bg-primary/90">
              <PlusCircle className="h-4 w-4" />
              Post Free Ad
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-zinc-300 hover:text-white hover:bg-zinc-800"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pl-4 bg-zinc-900 border-zinc-800">
              <div className="grid gap-4 py-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Luxoticars Logo"
                    width={32}
                    height={32}
                    className="invert"
                  />
                  <span className="text-xl font-bold text-white">LUXOTICARS</span>
                </Link>

                <div className="grid gap-2">
                  <Link
                    href="/cars/all"
                    className="flex items-center gap-2 py-2 text-zinc-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    All Cars
                  </Link>
                  <Link
                    href="/cars/new"
                    className="flex items-center gap-2 py-2 text-zinc-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href="/cars/brands"
                    className="flex items-center gap-2 py-2 text-zinc-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Browse by Brand
                  </Link>
                  <Link
                    href="/sell/post"
                    className="flex items-center gap-2 py-2 text-zinc-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Post an Ad
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center gap-2 py-2 text-zinc-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/photography-guide"
                    className="flex items-center gap-2 py-2 text-zinc-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Photography Guide
                  </Link>
                </div>

                <div className="grid gap-2 mt-4">
                  <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 hover:text-white">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link href="/post-ad" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Post Free Ad
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
