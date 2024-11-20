"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import telpon from '../public/telp.svg';
import email from '../public/email.svg';
import ig from '../public/ig.svg';
import yt from '../public/yt.svg';
import fb from '../public/fb.svg';
import twt from '../public/twt.svg';
import regis from '../public/regis.svg';
import cari from '../public/cari.svg';
import keranj from '../public/keranj.svg';
import lop from '../public/lop.svg';
import list from '../public/list.svg';
import star from '../public/starmuji.svg';
import { usePathname } from 'next/navigation';
import { Isi } from '../data/isi.jsx';

const fontMonts = Montserrat({
  subsets: ['latin'],
  weight: '400',
});

const fontMontsB = Montserrat({
  subsets: ['latin'],
  weight: '700',
});

const Navbar = () => {
  const [isBuka, setBuka] = useState(false);
  const currentPage = usePathname();

  return (
    <div>
      <div className="hidden lg:block w-full bg-[#23856D] h-[58px]">
        <div className="container mx-auto px-4 2xl:px-6 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center space-x-10">
              <div className="flex items-center gap-2">
                <Image alt="" src={telpon} width={20} height={20} />
                <span className={`text-nav ${fontMonts.className}`}>
                  (225) 555-0118
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image alt="" src={email} width={20} height={20} />
                <small className={`text-nav ${fontMonts.className}`}>
                  michelle.rivera@example.com
                </small>
              </div>
            </div>
            <div>
              <h6
                className={`${fontMontsB.className} text-[14px] leading-24 text-[#FFFFFF]`}
              >
                Follow Us and get a chance to win 80% off
              </h6>
            </div>
            <div className="flex items-center gap-2">
              <h6
                className={`${fontMontsB.className} text-[14px] leading-24 text-[#FFFFFF]`}
              >
                Follow Us :
              </h6>
              <Image src={ig} alt="ig" height={26} width={26} />
              <Image src={yt} alt="yt" height={26} width={26} />
              <Image src={fb} alt="fb" height={26} width={26} />
              <Image src={twt} alt="twt" height={26} width={26} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="h-[78px] flex items-center justify-between">
          <div className="text-2xl font-bold">
            <h3
              className={`text-[#252B42] ${fontMontsB.className} text-[24px] leading-32 z-10 relative`}
            >
              Bandage
            </h3>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setBuka(!isBuka)}>
              <Image src={list} alt="menu" width={24} height={24} className='z-10 relative'/>
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-9">
            {Isi &&
              Isi.length > 0 &&
              Isi.map((item, i) => (
                <Link
                  className={`${currentPage == item.url ? 'active' : ''} ${fontMonts.className} text-[14px] leading-5 hover:text-[#252B42] hover:text-[20px]`}
                  href={item.url}
                  key={i}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* Actions */}
          <ul className="hidden lg:flex items-center space-x-1">
            <li className="flex items-center space-x-2">
              <Image alt="" src={regis} width={15} height={15} />
              <Link
                href="/"
                className={`text-[#23A6F0] hover:text-blue-800 flex items-center ${fontMontsB.className} text-[14px] leading-24`}
              >
                Login / Register
              </Link>
            </li>
            <li>
              <Image alt="" src={cari} width={56} height={56} />
            </li>
            <li>
              <Image alt="" src={keranj} width={56} height={56} />
            </li>
            <li>
              <Image alt="" src={lop} width={56} height={56} />
            </li>
          </ul>
        </div>

        {isBuka && (
          <nav className="lg:hidden bg-white w-full py-4 space-y-4 flex flex-col justify-center items-center animate-slide-down transition-all duration-700 z-0 relative">
            {Isi &&
              Isi.length > 0 &&
              Isi.map((item, i) => (
                <Link
                  href={item.url}
                  key={i}
                  className={`block px-4 py-2 ${
                    currentPage == item.url ? 'text-[#737373]' : ''
                  } ${fontMonts.className} text-[30px] leading-15 hover:text-[#252B42] hover:text-[40px]`}
                >
                  {item.label}
                </Link>
              ))}

            <ul className="flex flex-col items-center space-y-2 px-4 justify-center">
              <li className="flex items-center space-x-2">
                <Image alt="" src={regis} width={27} height={28} />
                <Link
                  href="/"
                  className={`text-[#23A6F0] hover:text-blue-800 flex items-center ${fontMontsB.className} text-[30px] leading-24`}
                >
                  Login / Register
                </Link>
              </li>
              <li>
                <Image alt="" src={cari} width={90} height={90} />
              </li>
              <li>
                <Image alt="" src={keranj} width={90} height={90} />
              </li>
              <li>
                <Image alt="" src={lop} width={90} height={90} />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;






























/* 

"use client";

import React from 'react'
import Image from 'next/image'
import telpon from '../public/telp.svg'
import { Montserrat } from 'next/font/google'
import email from '../public/email.svg'
import ig from '../public/ig.svg'
import yt from '../public/yt.svg'
import fb from '../public/fb.svg'
import twt from '../public/twt.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Isi } from '../data/isi.jsx'
import regis from '../public/regis.svg'
import cari from '../public/cari.svg'
import keranj from '../public/keranj.svg'
import lop from '../public/lop.svg'
import list from '../public/list.svg'

const fontMonts= Montserrat({
    subsets: ['latin'],
    weight: '400',
  })

const fontMontsB= Montserrat({
    subsets: ['latin'],
    weight: '700',
})


const Navbar = () => {
    const currentPage = usePathname();
    return (
        <div >

            <div className=' w-full bg-[#23856D] h-[58px] '>
                <div className="w-full h-[136px]">
                    <div className='container mx-auto px-4 2xl:px-6 h-[58px]'>
                        <div className='flex justify-between items-center h-full'>
                            <div className='flex items-center space-x-10'>
                                <div className='flex items-center gap-2'>
                                    <Image alt='' src={telpon} width={20} height={20} />
                                    <span className={`text-nav ${fontMonts.className}`}>(225) 555-0118</span>
                                </div>
            
                                <div className='flex items-center gap-2'>
                                    <Image alt='' src={email} width={20} height={20} />
                                    <small className={`text-nav ${fontMonts.className}`}>michelle.rivera@example.com</small>
                                </div>
                            </div>
                            <div>
                                <h6 className={`${fontMontsB.className} text-[14px] leading-24 text-[#FFFFFF]`}>
                                    Follow Us  and get a chance to win 80% off
                                </h6>
                            </div>
                            <div className='flex items-center gap-2'>
                                <h6 className={`${fontMontsB.className} text-[14px] leading-24 text-[#FFFFFF]`}>Follow Us  :</h6>
                                <Image src={ig} alt='ig' height={26} width={26} />
                                <Image src={yt} alt='yt' height={26} width={26} />
                                <Image src={fb} alt='fb' height={26} width={26} />
                                <Image src={twt} alt='twt' height={26} width={26} />
            
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="container mx-auto px-4 ">
                <div className="h-[78px] flex items-center justify-between">
                    <div className="text-2xl font-bold">
                        <h3  className={`text-[#252B42] ${fontMontsB.className} text-[24px] leading-32`}>Bandage</h3>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-6">
                        {Isi && Isi.length > 0 && Isi.map((item, i)=>{
                          return (
                                <Link 
                                    className={currentPage == item.url? 'active' : ''}
                                    href={item.url} 
                                    key={i}
                                >
                                    {item.label}
                                </Link>
                            )
                          }
                        )}
                    </nav>

                    <ul className="flex items-center space-x-1">
                        <li className='flex items-center space-x-2'>
                          <Image alt='' src={regis} width={15} height={15} />
                          <Link href='\' className={`text-[#23A6F0] hover:text-blue-800 flex items-center ${fontMontsB.className} text-[14px] leading-24`}>
                              Login / Register
                          </Link>
                        </li>

                        <li>
                          <Image alt='' src={cari} width={56} height={56} />
                        </li>

                        <li>
                          <Image alt='' src={keranj} width={56} height={56} />
                        </li>

                        <li>
                          <Image alt='' src={lop} width={56} height={56} />
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
  }
  
  export default Navbar
   */
  
  {/* <div>
    
    <div className="w-full bg-[#23856D] text-white">
    <div className="container mx-auto px-4">
    
          <div className="h-[58px] flex items-center justify-between">
            <div className="flex items-center space-x-10">
            <div className="flex items-center gap-2">
            <span className="text-sm">(225) 555-0118</span>
            </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">michelle.rivera@example.com</span>
              </div>
            </div>

            <div>
              <span className="text-sm font-bold">
                Follow Us and get a chance to win 80% off
                </span>
                </div>
                
                <div className="flex items-center gap-4">
              <span className="text-sm font-bold">Follow Us :</span>
              <div className="flex items-center gap-2">
              <a href="#" className="hover:opacity-80">
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:opacity-80">
                <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="hover:opacity-80">
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:opacity-80">
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        
        
        <div className="container mx-auto px-4">
        <div className="h-[78px] flex items-center justify-between">
        <div className="text-2xl font-bold">
            <a href="/" className="text-gray-800">Bandage</a>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pages</a>
          </nav>

          <div className="flex items-center space-x-6">
          <button className="text-blue-500 hover:text-blue-600 flex items-center">
          Login / Register
          </button>
          <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Search</span>
                </button>
              <button className="text-gray-600 hover:text-gray-900">
                <span>1</span>
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                <span>1</span>
                </button>
                </div>
                </div>
        </div>
      </div>
    </div> */}


   /*  <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Pages</a> */


{/* <div className="flex items-center space-x-4">
                          <button className="text-gray-600 hover:text-gray-900">
                              <span className="sr-only">Search</span>
                          </button>

                          <button className="text-gray-600 hover:text-gray-900">
                              <span>1</span>
                          </button>

                          <button className="text-gray-600 hover:text-gray-900">
                              <span>1</span>
                          </button> */}


                         /*  <button
                        className="lg:hidden text-gray-800 focus:outline-none"
                    >
                        <Image alt='' src={list} />
                    </button> */




                        {/* <div className='lg:hidden'>
                          <div className="text-2xl font-bold flex justify-between">
                            <h3  className={`text-[#252B42] ${fontMontsB.className} text-[24px] leading-32`}>Bandage</h3>
                            <Image alt='' src={list}/>
                          </div>
                        </div> */}