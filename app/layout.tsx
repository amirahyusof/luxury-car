import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from "next/font/google"
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600"], 
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
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
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