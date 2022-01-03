import React from 'react';

import chair from '../assets/chair.png';
// import lineBar from '../assets/line bar.png';
import seatingInChair from '../assets/seating in a chair.png';
import ladyAndGents from '../assets/lady and gents.png';
import CustomRadio from './shareable/CustomOutlinedRadio';
import CustomFilledRadio from './shareable/CustomFilledRadio';

export default function SelectedComponent() {
  return (
    <div className="flex flex-col items-center w-full mt-6">
      <div className="flex flex-col items-center w-full gap-2 md:w-10/12 xl:w-6/12">
        <div className="flex flex-col gap-2 w-max">
          <h1 className="overflow-hidden text-2xl font-extrabold text-primary">
            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          </h1>
          <h1 className="px-4 py-2 text-2xl bg-primary">
            <span className="text-indigo-500 uppercase">Step One&nbsp;</span>
            <span className="text-white">Customize your flight</span>
          </h1>
        </div>
        <img src={chair} alt="chair" className="w-40" />
        <div className="flex items-center justify-between w-3/4 px-14 md:w-2/3">
          <hr className="w-20 border border-primary" />
          <h1 className="text-2xl text-primary uppercase">On budget</h1>
          <hr className="w-20 border border-primary" />
        </div>
        {/* <div className="flex items-center justify-between w-3/4 md:w-2/3">
          <hr className="w-8 transform rotate-90 border border-primary" />
          <hr className="w-8 transform rotate-90 border border-primary" />
        </div> */}
        <div className="flex items-center justify-between w-full gap-3 sm:w-3/4 md:w-3/4">
          <img src={seatingInChair} alt="seating in chair" className="w-28" />
          <img src={ladyAndGents} alt="lady and gents" className="w-28" />
        </div>
        <div className="flex items-center justify-between w-full gap-3 sm:w-3/4 md:w-3/4">
          <span className="text-xl font-extrabold text-primary md:text-3xl">. . . . ... .. .. ... ... </span>
          <span className="text-xl font-extrabold text-primary md:text-3xl">. . . . ... .. .. .... ..</span>
        </div>
        <div className="flex items-center justify-between w-full gap-3 sm:w-3/4 md:w-3/4">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3 text-xl text-gray-500">
              <CustomRadio />
              &nbsp;
              No Sharing
            </span>
            <span className="flex items-center gap-3 text-xl text-gray-500">
              <CustomRadio checked={true} />
              &nbsp;
              Share seat&nbsp;
              <sapn className="flex items-center justify-center w-4 h-4 text-sm text-primary border-2 border-primary rounded-full">!</sapn>
              <span className="absolute px-5 py-3 text-xs bg-gray-200 rounded-lg w-44" style={{ left: '38%' }}>
                Take turns sitting. Choose number of people to share your seat with (1 or 2). If you select 2, the greater the discount applied.
              </span>
            </span>
            <span className="flex items-center gap-3 text-xl text-gray-500">
              <CustomRadio />
              &nbsp;
              Share meal&nbsp;
              <sapn className="flex items-center justify-center w-4 h-4 text-sm text-primary border-2 border-primary rounded-full">!</sapn>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3 text-xl text-gray-500">
              <CustomFilledRadio checked={true} />
              &nbsp;
              Don&apos;t use, don&apos;t pay
            </span>
            <span className="flex items-center gap-3 text-xl text-gray-500">
              <CustomFilledRadio />
              &nbsp;
              Pay for short time&nbsp;
              <sapn className="flex items-center justify-center w-4 h-4 text-sm text-primary border-2 border-primary rounded-full">!</sapn>
            </span>
            <span className="flex items-center gap-3 text-xl text-gray-500">
              <CustomFilledRadio />
              &nbsp;
              Pay for long time&nbsp;
              <sapn className="flex items-center justify-center w-4 h-4 text-sm text-primary border-2 border-primary rounded-full">!</sapn>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}