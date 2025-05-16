import Link from "next/link"
import { 
  Car, 
  Award, 
  ShieldCheck, 
  Bike, 
  Cable 
} from "lucide-react"

const categories = [
  { icon: <Car className="h-8 w-8" />, name: "Recond Cars", href: "/category/recond" },
  { icon: <Car className="h-8 w-8" />, name: "Used Cars", href: "/category/used" },
  { icon: <Bike className="h-8 w-8" />, name: "Bikes", href: "/bike" },
  { icon: <Award className="h-8 w-8" />, name: "Number Plate", href: "/numberplate" },
  { icon: <Cable className="h-8 w-8" />, name: "Accessories", href: "/accessories", badge: "New" },
  { icon: <ShieldCheck className="h-8 w-8" />, name: "Merchandise", href: "/merchandise" },
]

export default function CategorySection() {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Browse Categories</h2>
        <Link href="/categories" className="text-sm font-medium text-secondary hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Link
          key={index}
          href={category.href}
          className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <div className="relative">
            {category.badge && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
                {category.badge}
              </span>
            )}
            <div className="mb-2">{category.icon}</div>
          </div>
          <span className="text-sm font-medium text-center">{category.name}</span>
        </Link>
        ))}
      </div>
    </section>
  )
}
