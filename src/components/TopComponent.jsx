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
      <div className="w-full mx-auto md:w-11/12 lg:w-10/12 xl:7/12" style={{ marginTop: '9%' }}>
        <img src={bannerArrow} alt="arrow" className="" style={{ width: '7%', minWidth: '30px' }} />
        <div className="flex flex-col w-5/12 gap-2 mt-3 md:gap-4 h-3/4">
          <div className="text-lg font-extrabold leading-none text-white uppercase md:text-3xl lg:text-4xl" style={{ fontFamily: '\'Raleway\'' }}>
            You wont find it&nbsp;
            <span className="text-primary">cheaper</span>&nbsp;
            anywhere else.
          </div>
          <span className="text-white text-mini sm:text-sm" style={{ fontFamily: 'raleway' }}>
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
