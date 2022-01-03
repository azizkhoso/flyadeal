import React from 'react';

import banner from '../assets/Banner.png';
import logo from '../assets/logofly.svg';
import bannerArrow from '../assets/banner arrow.png';

export default function TopComponent() {
  return (
    <div
      className="w-full px-4 overflow-hidden bg-no-repeat md:px-0"
      style={{ minHeight: 'calc(100vw / 2.5)', backgroundImage: `url(${banner})`, backgroundSize: '100% auto' }}
    >
      <img src={logo} alt="logo" className="absolute top-0 right-0" style={{ width: '20%' }} />
      <div className="w-full mx-auto md:w-11/12 xl:8/12" style={{ marginTop: '5%' }}>
        <img src={bannerArrow} alt="arrow" className="" style={{ width: '7%', minWidth: '30px' }} />
        <div className="flex flex-col w-7/12 gap-2 mt-3 md:gap-4 h-3/4">
          <div className="flex items-center text-lg font-extrabold leading-none text-white md:text-4xl lg:text-5xl" style={{ height: '10px', lineHeight: '0.6' }}>
            . . . . . . . ... .. . . <br />
            . .. . . . . . ... . . . . <br />
          </div>
          <span className="mt-3 text-white text-mini md:mt-8 sm:text-sm md:text-lg" style={{ fontFamily: 'raleway' }}>
            Starting Janury 1st 2019, we have found <br />
            cheaper ways for you to fly. *
          </span>
          <span className="hidden text-lg font-bold text-white justify-self-end lg:block">
            ....... ..... ....... .............................. ..... ............. <br />
            ............. ..... ...... ..... ............................. ........ <br />
          </span>
        </div>
      </div>
    </div>
  );
}
