"use client";

import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import garisS from '@/public/garisS.svg';
import product1 from '@/public/product1.png';
import product2 from '@/public/product2.png';
import product3 from '@/public/product3.png';
import product4 from '@/public/product4.png';
import product5 from '@/public/product5.png';
import product6 from '@/public/product6.png';
import product7 from '@/public/product7.png';
import product8 from '@/public/product8.png';
import Link from 'next/link';

// Mengatur font Montserrat
const fontMonts = Montserrat({
  subsets: ['latin'],
  weight: '700',
});

const BestOfTheBest = () => {
  const products = [
    { id: 1, image: product1, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 2, image: product2, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 3, image: product3, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 4, image: product4, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 5, image: product5, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 6, image: product6, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 7, image: product7, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    { id: 8, image: product8, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  ];

  return (
    <div className="container mx-auto px-4 bg-white py-10">
      {/* Header */}
      <div className="flex flex-col items-center justify-center lg:items-start">
        <h3 className={`${fontMonts.className} font-bold text-[#252B42] text-[24px] lg:text-[30px]`}>
          BESTSELLER PRODUCTS
        </h3>
        <Image alt="garis2" src={garisS} className="mt-4 w-full" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            {/* Product Image */}
            <Image
              alt={product.title}
              src={product.image}
              width={348}
              height={427}
            />

            {/* Product Info */}
            <div className="mt-4 flex flex-col items-start text-start">
              <h5
                className={`${fontMonts.className} text-[16px] font-semibold text-[#252B42]`}
              >
                {product.title}
              </h5>
              <Link
                href={`/`}
                className={`text-[#737373] text-[14px] leading-[24px] ${fontMonts.className} hover:text-blue-500`}
              >
                {product.department}
              </Link>
              <div className="flex justify-center items-center gap-2 mt-2">
                <h5 className={`text-[#BDBDBD] line-through text-sm ${fontMonts.className}`}>
                  {product.oldPrice}
                </h5>
                <h5 className={`text-[#23856D] font-semibold text-sm ${fontMonts.className}`}>
                  {product.newPrice}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOfTheBest;








/* import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import garisS from '@/public/garisS.svg';
import product1 from '@/public/product1.png';
import Link from 'next/link';
import product2 from '@/public/product2.png';
import product3 from '@/public/product3.png';
import product4 from '@/public/product4.png';

// Mengatur font Montserrat
const fontMonts = Montserrat({
  subsets: ['latin'],
  weight: '700',
});

const BestOfTheBest = () => {
  return (
    <div className="container mx-auto px-4 bg-white w-[414px] h-[2622px] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center pt-10">
        <h3 className={`${fontMonts.className} text-[#252B42] text-[24px]`}>
          BESTSELLER PRODUCTS
        </h3>
        <Image alt="garis2" src={garisS} className="mt-2" />
      </div>

      <div className="container mx-auto px-4 mt-6 pt-10 lg:flex grid-cols-4">
        <Image
          alt="Product Image"
          src={product1}
          width={348}
          height={427}
        />
        <div className="mt-6 flex flex-col items-start">
          <h5
            className={`${fontMonts.className}  text-[16px] font-semibold text-[#252B42]`}
          >
            Graphic Design
          </h5>
          <Link
            href={`/`}
            className={`text-[#737373] text-[14px] leading-[24px] ${fontMonts.className} pt-2 hover:text-blue-500`}
          >
            English Department
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <h5 className={`text-gray-400 line-through text-sm ${fontMonts.className} text-[16px]`}>$16.48</h5>
            <h5 className= {`text-[#23856D] font-semibold text-sm ${fontMonts.className} text-[16px]`}>$6.48</h5>
          </div>
        </div>

        <Image
          alt="Product Image2"
          src={product2}
          width={348}
          height={427}
          className='pt-14'
        />
        <div className="mt-6 flex flex-col items-start">
          <h5
            className={`${fontMonts.className}  text-[16px] font-semibold text-[#252B42]`}
          >
            Graphic Design
          </h5>
          <Link
            href={`/`}
            className={`text-[#737373] text-[14px] leading-[24px] ${fontMonts.className} pt-2 hover:text-blue-500`}
          >
            English Department
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <h5 className={`text-gray-400 line-through text-sm ${fontMonts.className} text-[16px]`}>$16.48</h5>
            <h5 className= {`text-[#23856D] font-semibold text-sm ${fontMonts.className} text-[16px]`}>$6.48</h5>
          </div>
        </div>

        <Image
          alt="Product Image3"
          src={product3}
          width={348}
          height={427}
          className='pt-14'
        />
        <div className="mt-6 flex flex-col items-start">
          <h5
            className={`${fontMonts.className}  text-[16px] font-semibold text-[#252B42]`}
          >
            Graphic Design
          </h5>
          <Link
            href={`/`}
            className={`text-[#737373] text-[14px] leading-[24px] ${fontMonts.className} pt-2 hover:text-blue-500`}
          >
            English Department
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <h5 className={`text-gray-400 line-through text-sm ${fontMonts.className} text-[16px]`}>$16.48</h5>
            <h5 className= {`text-[#23856D] font-semibold text-sm ${fontMonts.className} text-[16px]`}>$6.48</h5>
          </div>
        </div>

        <Image
          alt="Product Image4"
          src={product4}
          width={348}
          height={427}
          className='pt-14'
        />
        <div className="mt-6 flex flex-col items-start">
          <h5
            className={`${fontMonts.className}  text-[16px] font-semibold text-[#252B42]`}
          >
            Graphic Design
          </h5>
          <Link
            href={`/`}
            className={`text-[#737373] text-[14px] leading-[24px] ${fontMonts.className} pt-2 hover:text-blue-500`}
          >
            English Department
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <h5 className={`text-gray-400 line-through text-sm ${fontMonts.className} text-[16px]`}>$16.48</h5>
            <h5 className= {`text-[#23856D] font-semibold text-sm ${fontMonts.className} text-[16px]`}>$6.48</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOfTheBest;
 */


/* import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import garisS from '@/public/garisS.svg';
import product1 from '@/public/product1.png';
import Link from 'next/link';

const fontMonts = Montserrat({
    subsets: ['latin'],
    weight: '700',
});

const BestOfTheBest = () => {
  return (
    <div className="container mx-auto px-4 bg-[#eed8d8] w-[414px] h-[2622px] flex flex-col items-center">
        <div className='flex flex-col items-center justify-center pt-10'>
            <h3 className={`${fontMonts.className} text-[#252B42] text-[24px]`}>
                BESTSELLER PRODUCTS
            </h3>  
            <Image alt='garis2' src={garisS} className='pt-6'/>
        </div>
        <Image alt='' src={product1} width={348} height={427} className='pt-6'/>
        <div className='flex items-start flex-col'>
            <h5 className={`${fontMonts.className} text-[16px] leading-24 text-[#252B42]`}>Graphic Design</h5>
            <Link href={`/`}>English Department</Link>
            <div>
                <h5>$16.48</h5>
                <h5>$6.48</h5>
            </div>
        </div>
    </div>
  )
}

export default BestOfTheBest
 */