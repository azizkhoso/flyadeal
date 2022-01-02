import React from 'react';

export default function SelectedComponent() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full gap-2 md:w-10/12 xl:w-6/12">
        <div className="flex flex-col gap-2 w-max">
          <hr className="border-green-600 border-dashed" />
          <h1 className="px-4 py-2 text-2xl bg-green-600">
            <span className="text-indigo-500 uppercase">Step One&nbsp;</span>
            <span className="text-white">Customize your flight</span>
          </h1>
        </div>
      </div>
    </div>
  );
}