import React from 'react';

import chair from '../assets/chair.png';
// import lineBar from '../assets/line bar.png';
import seatingInChair from '../assets/seating in a chair.png';
import ladyAndGents from '../assets/lady and gents.png';
import CustomRadio from './shareable/CustomOutlinedRadio';
import CustomFilledRadio from './shareable/CustomFilledRadio';

export default function SelectedComponent() {
  const [isThankYou, setThankYou] = React.useState(false);
  const [isShowTip, setShowTip] = React.useState(false);
  const [xy, setXy] = React.useState({ x:0, y:0 });
  if (isThankYou) return (
    <div className="flex flex-col items-center w-full my-6">
      <div className="flex flex-col items-center w-full gap-2 md:w-10/12 xl:w-6/12">
        <h1 className="py-4 text-3xl font-bold text-center uppercase text-customViolet">
          THANK YOU
        </h1>
      </div>
    </div>
  )
  function handleShowTip(e) {
    setShowTip(!isShowTip);
    setXy({ x: e.clientX });
  }
  return (
    <div className="flex flex-col items-center w-full my-6">
      <div className="flex flex-col items-center w-full gap-2 px-2 md:w-10/12 xl:w-6/12">
        <div className="flex flex-col gap-2 w-max">
          <h1 className="overflow-hidden text-2xl font-extrabold text-primary">
            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          </h1>
          <h1 className="px-2 py-2 text-xl md:px-4 md:text-2xl bg-primary">
            <span className="uppercase text-customViolet sm:px-6" style={{ fontFamily: '\'Raleway\', sans-serif' }}>Step One&nbsp;</span>
            <span className="font-extrabold text-white" style={{ fontFamily: '\'Raleway\'' }}>Customize your flight</span>
          </h1>
        </div>
        <img src={chair} alt="chair" className="w-60" />
        <div className="flex items-center justify-between w-3/4 px-4 md:w-2/3">
          <hr className="w-3/12 border-2 border-primary" />
          <h1 className="py-1 font-bold uppercase md:font-black sm:py-0 text-md sm:text-lg md:text-2xl text-primary">On budget</h1>
          <hr className="w-3/12 border-2 border-primary" />
        </div>
        <div className="flex items-center justify-between w-3/4 -mt-2 md:w-2/3">
          <hr className="w-8 transform rotate-90 border-2 border-primary" />
          <hr className="w-8 transform rotate-90 border-2 border-primary" />
        </div>
        <div className="flex items-center justify-between w-11/12 gap-3 mt-6 sm:w-3/4 md:w-3/4">
          <img src={seatingInChair} alt="seating in chair" className="w-24 md:w-28" />
          <img src={ladyAndGents} alt="lady and gents" className="w-24 md:w-28" />
        </div>
        <div className="flex items-center justify-between w-full gap-3 sm:w-3/4 md:w-3/4">
          <span className="text-lg font-extrabold uppercase text-primary md:text-xl">Share your seat </span>
          <span className="text-lg font-extrabold uppercase text-primary md:text-xl lg:-mr-10">Pay for bathroom</span>
        </div>
        <div className="flex items-center justify-between w-full gap-3 sm:w-3/4 md:w-3/4">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3 text-sm text-gray-500 md:text-xl">
              <CustomRadio />
              &nbsp;
              No Sharing
            </span>
            <span className="flex items-center gap-3 text-sm font-semibold md:text-xl text-customViolet">
              <CustomRadio checked={true} />
              &nbsp;
              Share seat&nbsp;
              <sapn onClick={(e) => handleShowTip(e)} className="flex items-center justify-center w-4 h-4 text-sm border-2 rounded-full cursor-pointer text-primary border-primary">!</sapn>
              {
                isShowTip && (
                  <span className="absolute px-5 py-3 text-xs bg-gray-200 rounded-lg w-44" style={{ left: xy.x + 20 }}>
                    Take turns sitting. Choose number of people to share your seat with (1 or 2). If you select 2, the greater the discount applied.
                  </span>
                )
              }
            </span>
            <span className="flex items-center gap-3 text-sm text-gray-500 md:text-xl">
              <CustomRadio />
              &nbsp;
              Share meal&nbsp;
              <sapn className="flex items-center justify-center w-4 h-4 text-sm border-2 rounded-full text-primary border-primary">!</sapn>
            </span>
          </div>
          <div className="flex flex-col gap-3 lg:-mr-10">
            <span className="flex items-center gap-3 text-sm font-semibold md:text-xl text-customViolet">
              <CustomFilledRadio checked={true} />
              &nbsp;
              Don&apos;t use, don&apos;t pay
            </span>
            <span className="flex items-center gap-3 text-sm text-gray-500 md:text-xl">
              <CustomFilledRadio />
              &nbsp;
              Pay for short time
            </span>
            <span className="flex items-center gap-3 text-sm text-gray-500 md:text-xl">
              <CustomFilledRadio />
              &nbsp;
              Pay for long time
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-3 sm:w-3/4 md:w-3/4">
          <button onClick={() => setThankYou(true)} className="px-4 py-2 mt-6 font-semibold text-white uppercase rounded-lg bg-customViolet">Continue</button>
        </div>
      </div>
    </div>
  );
}