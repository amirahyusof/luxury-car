'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';



const brands = [
  '/brands/porsche.png',
  '/brands/audi.png',
  '/brands/bentley.png',
  '/brands/ferrari.png',
  '/brands/lamborghini.png',
  '/brands/landrover.png',
  '/brands/mercedes.png',
  '/brands/toyota.png',
];

export default function BrandsSection() {
  return (
    <section className="bg-default text-white py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Browse by brands
      </h2>
      
      {/* BRAND LOGO CAROUSEL */}
      <div className="mt-12 bg-zinc-600 rounded-lg p-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1500}}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 8 },
          }}
          modules={[Autoplay]}
        >
          {brands.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={logo}
                alt={`Brand ${idx}`}
                width={200}
                height={100}
                className="mx-auto grayscale hover:grayscale-0 transition duration-300 h-36 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
