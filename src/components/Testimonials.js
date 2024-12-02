import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import leftArrow from '../assets/leftArrow.png';
import RightArrow from '../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const transition = { type: 'spring', duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div id="testimonials" className="flex gap-[1rem] p-1 bg-gray-600 flex-col sm:flex-row">
      {/* Left Side */}
      <div className="flex flex-col flex-1 gap-[1.9rem] uppercase text-white ml-8 mt-16 sm:ml-16 sm:mt-16">
        <span className="font-bold text-orange-400">Testimonials</span>
        <span
          className="text-transparent font-sans font-bold text-[2rem] sm:text-[3rem]"
          style={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          What they
        </span>
        <span className="font-bold text-[2rem] sm:text-[3rem]">say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="justify-normal tracking-[1px] sm:tracking-[2px] normal-case leading-[30px] sm:leading-[40px]"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="text-orange-400">{testimonialsData[selected].name}</span>{" "}
          -{testimonialsData[selected].status}
        </span>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 relative sm:flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute   w-[12rem] sm:w-[17rem] h-[15rem] sm:h-[20rem] border-[2px] bg-transparent border-solid border-orange-400 sm:ml-36 sm:mt-[5rem] ml-16 mt-[3rem] hidden sm:block"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-[12rem] sm:w-[17rem] h-[14rem] sm:h-[19rem] bg-gradient-to-r from-orange-500 to-orange-400 sm:ml-44   ml-12 mr-[4rem] mt-[6rem] sm:mt-[8rem] hidden sm:block"
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
          className="absolute object-cover   sm:ml-40 sm:mt-[6rem] w-[15rem] sm:w-[17rem] h-[14rem] sm:h-[20rem] ml-10 mt-[5rem] "
        />

        {/* Arrows */}
        <div className="flex absolute gap-[1rem] mb-[1rem] ml-8 sm:ml-8 mt-[20rem] sm:mt-[25rem]">
          <img
            onClick={() => {
              selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
            className="w-[1.5rem] cursor-pointer sm:w-[2rem]"
          />
          <img
            onClick={() => {
              selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
            }}
            src={RightArrow}
            alt=""
            className="w-[1.5rem] cursor-pointer sm:w-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
