import React from 'react';

import banner from '../assets/Banner.png';
import logo from '../assets/logofly.svg';
import bannerArrow from '../assets/banner arrow.png';

export default function TopComponent() {
  return (
    <div
      className="flex flex-col w-full px-4 overflow-hidden bg-center bg-no-repeat bg-cover md:px-0"
      style={{ minHeight: 'calc(100vw / 2)', backgroundImage: `url(${banner})` }}
    >
      <img src={logo} alt="logo" className="absolute top-0 right-0" style={{ width: '20%' }} />
      <div className="flex flex-col flex-grow w-full h-full mx-auto md:w-11/12 lg:w-10/12 xl:w-8/12" style={{ paddingTop: '9%', paddingBottom: '3%', height: '100%' }}>
        <img src={bannerArrow} alt="arrow" className="" style={{ width: '7%', minWidth: '30px' }} />
        <div className="flex flex-col flex-grow w-3/6 gap-2 mt-3 md:gap-4">
          <div className="text-lg font-black leading-none text-white uppercase md:text-3xl lg:text-5xl" style={{ fontFamily: '\'Raleway\'' }}>
            You wont<br /> find it&nbsp;
            <span className="text-primary">cheaper</span>&nbsp;
            anywhere else.
          </div>
          <span className="w-2/3 text-white text-mini sm:text-sm">
            Starting Janury 1st 2019, we have found
            cheaper ways for you to fly. *
          </span>
          <span className="flex-grow" />
          <span className="hidden text-lg font-bold text-white justify-self-end lg:block">
            ....... ..... ....... .............................. ..... ............. <br />
            ............. ..... ...... ..... ............................. ........ <br />
          </span>
        </div>
      </div>
    </div>
  );
}
