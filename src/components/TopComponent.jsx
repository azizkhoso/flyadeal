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
      <img src={logo} alt="logo" className="relative w-24 top-2 right-2" style={{ left: 'calc(100vw - 106px)' }} />
      <div className="w-full mx-auto md:w-11/12 xl:8/12" style={{ marginTop: '5%' }}>
        <img src={bannerArrow} alt="arrow" className="" style={{ width: '7%', minWidth: '30px' }} />
        <div className="flex flex-col w-7/12 gap-2 mt-6 md:gap-6">
          <div className="flex items-center text-xl font-extrabold text-white md:text-5xl lg:text-7xl" style={{ height: '10px' }}>
            . . . . . . . ... .. . . <br />
            . .. . . . . . ... . . . . <br />
            {/* {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                <span className="bg-white rounded-full" style={{ width: '10px', height: '100%', marginLeft: '8px' }} />
              ))
            } */}
          </div>
        </div>
      </div>
    </div>
  );
}
