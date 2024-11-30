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
    <div id='why-us' className="bg-gray-600 p-4 flex gap-8 sm:flex-row flex-col">
        
      {/* Left Side - Image Grid */}
      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap--2  mt-20 sm:mt-0">
        {/* First Image - Tall Image */}
       {/* First Image - Tall Image */}
<img
  src={image1}
  alt="Reason 1"
  className="object-cover col-span-1 row-span-2 ml-[-1] sm:ml-8 w-[8rem] h-[33rem] sm:w-[12rem] sm:h-[32rem]"
/>

{/* Second Image - Wide Image */}
<img
  src={image2}
  alt="Reason 2"
  className="object-cover col-span-2 row-span-1 w-full h-[17rem] sm:w-[28rem] sm:h-[15rem]"
/>

{/* Third Image - Medium-Sized */}
<img
  src={image3}
  alt="Reason 3"
  className="object-cover col-span-1 row-span-1 mt-1 w-32 h-[16rem] sm:w-[13.5rem] sm:h-[15.5rem]"
/>

{/* Fourth Image - Small Square */}
<img
  src={image4}
  alt="Reason 4"
  className="object-cover col-span-1 row-span-1 mt-1 w-32 h-[16rem] sm:w-[13.5rem] sm:h-[15.5rem]"
/>

      </div>

      {/* Right Side - Text & Content */}
      <div className="flex-1 flex flex-col gap-4 uppercase mt-10 sm:mt-0 sm:ml-8">
        {/* Title Section */}
        <span className="text-orange-500 text-[1.2rem] sm:text-xl">Some Reasons</span>
        <div className="flex gap-2 sm:text-[3rem] text-[2.6rem] ml-2 justify-start items-center">
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
            <img src={tick} alt="tick" className="w-8 h-8 sm:w-8 sm:h-8" />
            <span className="text-sm sm:text-lg">OVER 120+ EXPERT COACHES</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} alt="tick" className="w-8 h-8 sm:w-8 sm:h-8" />
            <span className="text-sm sm:text-lg">TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} alt="tick" className="w-8 h-8 sm:w-8 sm:h-8" />
            <span className="text-sm sm:text-lg">FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={tick} alt="tick" className="w-8 h-8 sm:w-8 sm:h-8" />
            <span className="text-sm sm:text-lg">RELIABLE PARTNERS</span>
          </div>
        </div>

        {/* Partners Section */}
        <span className="text-gray-400 font-normal text-sm m-6 sm:text-base">OUR PARTNERS</span>
        <div className="flex gap-[1rem] w-[2.5rem] mt-2 sm:mt-4">
          <img src={nb} alt="Nike" className="w-[2rem] sm:w-[3rem]" />
          <img src={adidas} alt="Adidas" className="w-[2rem] sm:w-[3rem]" />
          <img src={nike} alt="NB" className="w-[2rem] sm:w-[3rem]" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
