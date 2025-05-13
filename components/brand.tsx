'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';

const brandSearch = [
  {
    id: 1,
    name: 'Porsche',
    image: '/brands/porsche.png',
    link: '/brandsearch/porsche',
  },
  {
    id: 2,
    name: 'Audi',
    image: '/brands/audi.png',
    link: '/brandsearch/audi',
  },
  {
    id: 3,
    name: 'Bentley',
    image: '/brands/bentley.png',
    link: '/brandsearch/bentley',
  },
  {
    id: 4,
    name: 'Ferrari',
    image: '/brands/ferrari.png',
    link: '/brandsearch/ferrari',
  },
  {
    id: 5,
    name: 'Lamborghini',
    image: '/brands/lamborghini.png',
    link: '/brandsearch/lamborghini',
  },
  {
    id: 6,
    name: 'Land Rover',
    image: '/brands/landrover.png',
    link: '/brandsearch/landrover',
    
  },
  {
    id: 7,
    name: 'Mercedes-Benz',
    image: '/brands/mercedes.png',
    link: '/brandsearch/mercedes',
  },
  {
    id: 8,
    name: 'Toyota',
    image: '/brands/toyota.png',
    link: '/toyota',
  }
]


export default function BrandsSection() {
  return (
    <section className="bg-default text-white py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Browse by brands
      </h2>
      
      {/* BRAND LOGO CAROUSEL */}
      <div className="mt-12 p-4">
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
          {brandSearch.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="border-2 border-blue-800 bg-zinc-600 rounded-lg shadow h-16 sm:h-32 md:h-36 w-full hover:shadow-none hover:scale-105 transition duration-300">
                <Link href={`/brandsearch/${logo.link}`} className="flex items-center justify-center h-full">
                  <Image
                    src={logo.image}
                    alt={`Brand ${idx}`}
                    width={200}
                    height={100}
                    className="mx-auto grayscale hover:grayscale-0 transition duration-300 h-20 sm:h-28 object-contain"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
