import React from 'react';
import Image from 'next/image';
import kursi from '@/public/kursiKuning.png';
import { Montserrat } from 'next/font/google';
import kursiAbu from '@/public/kursiAbu.png';
import star from '@/public/starmuji.svg';
import starKosong from '@/public/starKosong.svg';
import garis from '@/public/garis.svg';
import basket from '@/public/basket.svg';
import like from '@/public/like.svg';
import more from '@/public/more.svg';
import kursiKec from '@/public/kursiLa.png';

// Font Montserrat untuk teks
const fontMonts = Montserrat({
  subsets: ['latin'],
  weight: '700',
});

const fontMontsS = Montserrat({
    subsets: ['latin'],
    weight: '400',
  });


const Shop = () => {
  return (
    <div className="w-full lg:h-[700px] pt-0 pb-8 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 xl:px-0 grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col lg:justify-start justify-center">
                <div className='flex justify-center lg:justify-start '>
                    <Image
                        alt="Gambar Kursi"
                        src={kursi}
                        className="w-full max-w-[600px] lg:max-w-[506px] xl:max-w-[700px] "
                    />
                </div>
                <div className='flex justify-start w-219 h-75 gap-8 pt-6' >
                    <Image 
                            alt='kursi second coice'
                            src={kursiAbu}
                            width={100} height={75}
                    />
                    <Image
                        alt="Gambar Kursi"
                        src={kursiKec}
                        width={100} height={75}
                    />
                </div>
            </div>
    
            <div className="flex flex-col justify-start gap-4 pt-4 px-4 lg:px-0">
                <h4
                    className={`${fontMonts.className} text-[20px] text-[#252B42]`}
                >
                    Floating Phone
                </h4>
                <div className="flex items-center">
                    <div className="flex items-center gap-1 text-[#F3CD03]">

                    {[...Array(4)].map((_, index) => (
                        <span key={index}><Image alt='' src={star} width={23} height={23} /></span>
                    ))}
                    {[...Array(1)].map((_, index) => (
                        <span key={index}><Image alt='' src={starKosong} width={20.34} height={20.34} /></span>
                    ))} 

                    </div>
                    <span className="ml-2 text-gray-500 text-sm">10 Reviews</span>
                </div>

                <h3 className={`${fontMonts.className} text-[24px] leading-32 pt-7 pb-0`}>
                    $1,139.33
                </h3>
                
                <div className='flex justify-start gap-1'>
                    <h6 className={`${fontMonts.className} text-[14px]`}>
                        Availability  :
                    </h6>
                    <div className={`text-[#23A6F0] text-[14px] ${fontMonts.className} leading-24`}>In Stock</div>
                </div>
                <p className={`${fontMontsS.className} pt-8 text-[14px] leading-20 text-[#858585]`}>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    Relit official consequent door Enim Mollie. Excitation venial
                    consequent sent nostrum met.
                    <Image src={garis} alt='garis' className='text-[#BDBDBD] pt-4 border-1 lg:w-full'/>
                </p>


                <div className="flex gap-2 pt-4 pb-8">
                    <div className="w-6 h-6 bg-[#23A6F0] rounded-full cursor-pointer"></div>
                    <div className="w-6 h-6 bg-[#2DC071] rounded-full cursor-pointer"></div>
                    <div className="w-6 h-6 bg-[#E77C40] rounded-full cursor-pointer"></div>
                    <div className="w-6 h-6 bg-[#252B42] rounded-full cursor-pointer"></div>
                </div>
                
                <div className='flex justify-start gap-5 lg:pt-20'>
                    <button className="bg-[#23A6F0] text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700">
                        Select Options
                    </button>
                    <Image src={like} alt=""/>
                    <Image src={basket} alt=""/>
                    <Image src={more} alt=""/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Shop;



/* import React from 'react'
import Image from 'next/image'
import kursi from '@/public/kursiKuning.png'
import { Montserrat } from 'next/font/google'

const fontMonts = Montserrat({
    subsets: ['latin'],
    weight: '400',
});
const Shop = () => {
  return (
    <div className='w-[414] lg:w-full h-[598px]  pt-0 pb-8 bg-slate-500'>
        <div className='container mx-auto px-4 xl:px-0 bg-slate-50 gap-4 grid lg:grid-cols-2 lg:gap-8'>
            <Image alt='' src={kursi} className='w-full lg:w-[506px]'/>
            <article>
                <h4 className={`${fontMonts.className} text-[20px] text-[#252B42] flex justify-start`}>Floating Phone</h4>
            </article>
        </div>
    </div>
  )
}

export default Shop */