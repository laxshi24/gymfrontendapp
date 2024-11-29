import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import tick from '../assets/tick.png';
import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';

const Reasons = () => {
  const mobile = window.innerWidth <= 768;

  return (
    <div id='why-us' className={`bg-gray-600 p-4 ${mobile ? "flex-col" : "flex gap-8"}`}>
        
      {/* Left Side - Image Grid */}
      <div className={`flex-1 grid grid-cols-3 grid-rows-2 gap-2 mt-20 ${mobile ? 'grid-auto-rows-auto mt-20 overflow-hidden' : ''}`}>
        {/* First Image - Tall Image */}
        <img
          src={image1}
          alt="Reason 1"
          className={`object-cover col-span-1 row-span-2 ${mobile ? 'w-[7rem] h-[17rem]' : 'ml-11 w-[12rem] h-[34rem]'}`}
        />
        {/* Second Image - Wide Image */}
        <img
          src={image2}
          alt="Reason 2"
          className={`object-cover col-span-2 row-span-1 ${mobile ? 'w-[15rem] h-[10rem]' : 'w-full h-[17rem]'}`}
        />
        {/* Third Image - Medium-Sized */}
        <img
          src={image3}
          alt="Reason 3"
          className={`object-cover col-span-1 row-span-1 ${mobile ? 'w-[7.4rem] h-[6.5rem]' : 'mt-2 w-80 h-[16rem]'}`}
        />
        {/* Fourth Image - Small Square */}
        <img
          src={image4}
          alt="Reason 4"
          className={`object-cover col-span-1 row-span-1 ml-1 ${mobile ? 'w-[7.4rem] h-[6.5rem]' : 'mt-2 w-62 h-[16rem]'}`}
        />
      </div>

      {/* Right Side - Text & Content */}
      <div className={`flex-1 flex flex-col gap-4 uppercase ${mobile ? 'mt-8 mb-4' : 'mt-20'}`}>
        {/* Title Section */}
        <span className="text-orange-500 text-[1.2rem]">Some Reasons</span>
        <div className={`flex gap-2 text-[3rem] ${mobile ? 'flex-col ml-0 justify-start' : 'ml-2 justify-start items-center'}`}>
          <span
            className="text-transparent font-sans font-bold"
            style={{
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: 'white',
            }}
          >
            Why
          </span>
          <span className="font-bold ml-0 text-white">Choose Us?</span>
        </div>

        {/* Reasons List */}
        <div className="flex flex-col gap-4 text-white font-bold ml-2">
          <div className="flex items-center gap-3">
            <img src={tick} alt="tick" className="w-8 h-8" />
            <span>OVER 120+ EXPERT COACHES</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} alt="tick" className="w-8 h-8" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} alt="tick" className="w-8 h-8" />
            <span>FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} alt="tick" className="w-8 h-8" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        {/* Partners Section */}
        <span className="text-gray-500 font-normal">OUR PARTNERS</span>
        <div className="flex gap-[1rem] w-[2.5rem] mt-2">
          <img src={nb} alt="Nike" className="w-[2rem]" />
          <img src={adidas} alt="Adidas" className="w-[2rem]" />
          <img src={nike} alt="NB" className="w-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
