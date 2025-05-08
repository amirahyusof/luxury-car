import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from "next/font/google"
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "700"],
})


export const metadata: Metadata = {
  title: "Luxoticars - Premium Luxury Car Marketplace",
  description: "Find, buy and sell luxury and exotic cars on Malaysia's premier automotive marketplace",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <div>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />  
        </div>
      </body>
    </html>
  )
}