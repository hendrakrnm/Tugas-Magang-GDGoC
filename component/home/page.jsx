import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';


const fontMont = Montserrat({
  subsets: ['latin'],
  weight: '700',
});
const Navigasi = () => {
  return (
    <div className='w-414 lg:w-full h-92  pt-8 pb-8'>
      <div className='container mx-auto px-4  gap-6 flex justify-center items-center lg:justify-start'>
        <Link href={'/'} className={`${fontMont.className} text-[20px] text-[#252B42]`}>Home</Link>
        <Image alt='arrow' src="/arrow.svg" width={10} height={17}/>
        <Link href={'/shop'} className={`${fontMont.className} text-[20px] text-[#737373]`}>Shop</Link>
      </div>
    </div>
  )
}

export default Navigasi