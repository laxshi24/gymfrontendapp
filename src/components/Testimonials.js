import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import leftArrow from '../assets/leftArrow.png';
import RightArrow from '../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const transition = { type: 'spring', duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const mobile = window.innerWidth <= 768;

  return (
    <div id='testimonials' className={`flex gap-[1rem] p-1 bg-gray-600 ${mobile ? 'flex-col' : 'flex'}`}>
      {/* Left Side */}
      <div className="flex flex-col flex-1 gap-[1.9rem] uppercase text-white ml-8 mt-16">
        <span className="font-bold text-orange-400">Testimonials</span>
        <span
          className="text-transparent font-sans font-bold text-[3rem]"
          style={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          What they
        </span>
        <span className="font-bold text-[3rem]">say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="justify-normal tracking-[2px] normal-case leading-[40px]"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="text-orange-400">{testimonialsData[selected].name}</span>{" "}
          -{testimonialsData[selected].status}
        </span>
      </div>

      {/* Right Side */}
      <div className={`flex flex-1 relative ${mobile ? 'flex flex-col items-center justify-center gap-[1rem]' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`absolute mr-[9rem] w-[17rem] h-[20rem] border-[2px] bg-transparent border-solid border-orange-400 ${mobile ? 'hidden' : 'ml-48 mt-[5rem]'}`}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`absolute w-[17rem] h-[19rem] bg-gradient-to-r from-orange-500 to-orange-400 ml-56 ${mobile ? 'hidden' : 'mr-[7rem] mt-[8rem]'}`}
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
          className={`absolute object-cover ${mobile ? 'w-[14rem] h-[16rem] mt-[24rem] ml-[1.6rem] mb-28' : 'mr-[1rem] ml-52 mt-[6rem] w-[17rem] h-[20rem]'}`}
        />

        <div
          className={`flex absolute gap-[1rem] mb-[1rem] ml-16 mt-[25rem] ${mobile ? 'block mt-[38rem] ml-28 left-0' : ''}`}
        >
          <img
            onClick={() => {
              selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
            className="w-[1.5rem] cursor-pointer"
          />
          <img
            onClick={() => {
              selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
            }}
            src={RightArrow}
            alt=""
            className="w-[1.5rem] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
