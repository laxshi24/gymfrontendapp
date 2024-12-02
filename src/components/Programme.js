import React from 'react';
import { programsData } from '../../src/data/programsData';
import RightArrow from '../assets/rightArrow.png';

const Programme = () => {
  

  return (
    <div id='programs' className="flex bg-gray-600 flex-col gap-2 p-2">
      {/* Title Section */}
      <div
        className="flex justify-center text-white font-bold uppercase italic mt-48 sm:mt-8 sm:text-[2rem] text-[1.5rem] sm:gap-[8rem] gap-4 sm:flex-row flex-col text-center sm:items-center "
      >
        <span
          className="text-transparent font-sans"
          style={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          Explore our
        </span>
        <span>Programs</span>
        <span
          className="text-transparent font-sans"
          style={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          to shape you
        </span>
      </div>

      {/* Programs Section */}
      <div className="flex gap-7 mr-7 ml-7 mt-16 flex-col sm:flex-row">
        {programsData.map((program, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-400 p-6 gap-3 mb-6 text-white justify-between cursor-pointer hover:bg-gradient-to-r from-orange-500 to-orange-400"
          >
            {program.image}
            <span className="text-lg font-semibold">{program.heading}</span>
            <span className="text-sm text-gray-300">{program.details}</span>
            <div className="flex items-center gap-[1.5rem] mt-1">
              <span className="text-sm font-medium">Join Now</span>
              <img src={RightArrow} alt="Right Arrow" className="w-[1rem]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programme;