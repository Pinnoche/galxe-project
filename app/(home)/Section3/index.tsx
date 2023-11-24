import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local'
import select_icon from '@/public/images/galxe-select-title-icon.0ede882.png';
import CardSlider from '@/components/Card3';

const myFont = localFont({ src: '../../../public/fonts/Mona_Sans/WOFF/Mona-Sans-ExtraBoldWide.woff' });

function Section3() {
    return (
        <div className='bg-sect3 bg-no-repeat bg-fifty bg-hundred pl-7 py-9 w-full xl:pb-16 xl:pt-16 xl:px-[4.5rem]'>
            <div className={`flex mb-7 ${myFont.className} xl:mb-8`}>
                <Image src={select_icon} alt='Galxe Select icon' height={28} className='mr-4 xl:h-[2.875rem] xl:w-[3.375rem] '/>
                <p className='text-xl font-extrabold italic text-white xl:text-3xl xl:pt-1'>Galxe Selects</p>
            </div>
            <CardSlider />            
        </div>
    );
}

export default Section3;