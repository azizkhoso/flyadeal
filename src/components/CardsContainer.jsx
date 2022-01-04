import React from 'react';

import img1 from '../assets/no1.png';
import img2 from '../assets/no2.png';
import img3 from '../assets/no3.png';
import selectBg from '../assets/selectBg.jpeg';

export default function CardsContainer() {
  const services = [
    {
      img: img1,
      title: 'Cargo Flight',
      selected: false,
    },
    {
      img: img2,
      title: 'Dark Routes',
      selected: false,
    },
    {
      img: img3,
      title: 'On Budget',
      selected: true,
    }
  ]
  return (
    <div id="selectbg" className="flex flex-col items-center justify-center w-full py-4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${selectBg})`, minHeight: 'calc(100vw / 2.048)' }}>
      <div className="flex flex-col w-full h-full bg-transparent md:w-11/12 lg:w-9/12 xl:7/12">
        <h1 className="text-xl font-bold text-center uppercase text-customViolet">
          SELECT
        </h1>
        <h1 className="text-3xl text-center uppercase text-primary">
          To customize & save
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-6">
          {
            services.map((service, index) => (
              <div className="flex flex-col gap-2 w-60">
                <div className="w-full bg-no-repeat bg-cover border-2 rounded-t-3xl h-72" style={{ backgroundImage: `url(${service.img})` }}>
                </div>
                <div className={`w-full h-20 px-20 flex items-center text-xl font-black text-center border-4 border-customViolet ${service.selected ? 'bg-customViolet text-white' : 'text-customViolet'}`}>
                  {service.title}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
