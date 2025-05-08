import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-white">LUXOTICARS</span>
          </Link>
          <p className="text-zinc-400 mb-4">
            Malaysia's premier marketplace for luxury and exotic vehicles. Find your dream car or sell your premium
            vehicle with us.
          </p>

          <div className="flex md:justify-end space-x-4">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://facebook.com">
                <Facebook className="h-10 w-10" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://instagram.com">
                <Instagram className="h-10 w-10" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://twitter.com">
                <Twitter className="h-10 w-10" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Buy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  Private Sales
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  Buy Car
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  Sold
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  Number Plate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  Activity
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white">
                  Photography Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars/all" className="text-zinc-400 hover:text-white">
                  Browse All Cars
                </Link>
              </li>
              <li>
                <Link href="/sell/post" className="text-zinc-400 hover:text-white">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/sports" className="text-zinc-400 hover:text-white">
                  Sports Cars
                </Link>
              </li>
              
              <li>
                <Link href="/category/sedans" className="text-zinc-400 hover:text-white">
                  Luxury Sedans
                </Link>
              </li>
              <li>
                <Link href="/category/classic" className="text-zinc-400 hover:text-white">
                  Classic Cars
                </Link>
              </li>
              <li>
                <Link href="/category/supercars" className="text-zinc-400 hover:text-white">
                  Supercars
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Luxoticars. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-zinc-500 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-zinc-500 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-zinc-500 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
