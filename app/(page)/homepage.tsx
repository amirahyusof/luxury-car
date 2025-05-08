import CategorySection from '@/components/category-section'
import FeaturedListings from '@/components/featured-listing'
import HeroSection from '@/components/hero-section'
import RecentListings from '@/components/recent-listings'
import WhyChooseUs from '@/components/why-choose-us'
import React from 'react'

export default function Homepage(){
  return (
    <section className="container mx-auto px-4 py-12 space-y-12 bg-black/90">
      <HeroSection />
      <CategorySection />
      <FeaturedListings />
      <WhyChooseUs />
      <RecentListings />
    </section>
  )
}

