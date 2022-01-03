import React from 'react';

import img1 from '../assets/no1.png';
import img2 from '../assets/no2.png';
import img3 from '../assets/no3.png';

export default function CardsContainer() {
  return (
    <div className="flex flex-col items-center w-full py-4 bg-gray-100">
      <div className="flex flex-col w-full md:w-10/12 xl:w-6/12">
        <h1 className="text-xl font-bold text-center text-customViolet uppercase">
          SELECT
        </h1>
        <h1 className="text-3xl text-center uppercase text-primary">
          To customize & save
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-6">
          {
            [img1, img2, img3].map((img, index) => (
              <div className="flex flex-col gap-2 w-60">
                <div className="w-full bg-no-repeat bg-cover border-2 rounded-t-3xl h-60" style={{ backgroundImage: `url(${img})` }}>
                </div>
                <div className={`w-full h-20 px-2 text-xl font-extrabold text-center border-4 border-customViolet ${index === 2 && 'bg-customViolet text-white'}`}>
                  . . . . . . ..  . . . <br />
                  . . .. ... . ... ..
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
