import React from 'react';

import banner from '../assets/Banner.png';
import logo from '../assets/logo.png';
import bannerArrow from '../assets/banner arrow.png';

export default function TopComponent() {
  return (
    <div
      className="w-full px-4 overflow-hidden bg-no-repeat md:px-0"
      style={{ minHeight: 'calc(100vw / 2.5)', backgroundImage: `url(${banner})`, backgroundSize: '100% auto' }}
    >
      {/* <span className="absolute transform rotate-45 bg-indigo-600 -top-20 -right-36 h-60 w-96" /> */}
      <img src={logo} alt="logo" className="relative w-24 top-4 right-5" style={{ left: 'calc(100vw - 106px)' }} />
      <div className="w-full mx-auto md:w-11/12 xl:8/12" style={{ marginTop: '5%' }}>
        <img src={bannerArrow} alt="arrow" className="" style={{ width: '7%', minWidth: '30px' }} />
        <div className="flex flex-col w-7/12 gap-2 mt-3 md:gap-4">
          <div className="flex items-center text-lg font-extrabold leading-none text-white md:text-4xl lg:text-5xl" style={{ height: '10px', lineHeight: '0.6' }}>
            . . . . . . . ... .. . . <br />
            . .. . . . . . ... . . . . <br />
          </div>
          <span className="mt-3 text-xs text-white md:mt-8 sm:text-sm md:text-lg">
            Starting Janury 1st 2019, we have found <br />
            cheaper ways for you to fly. *
          </span>
        </div>
      </div>
    </div>
  );
}
