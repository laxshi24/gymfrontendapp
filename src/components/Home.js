import React from 'react';
import Header from './Header';
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Home = () => {
  const transition = { type: 'spring', duration: 3 };

  return (
    <div id="home" className="bg-gray-600 backdrop-blur-3xl flex h-screen relative flex-col md:flex-row md:h-[52rem]">
      {/* Left Side */}
      <div className="left-side flex flex-col justify-start p-8 sm:p-8 md:flex-[3] mt-0">
        {/* Header */}
        <Header />

        {/* Tagline */}
        <div className="relative mt-10 sm:mt-28 md:mt-36">
          <motion.div
            className="absolute bg-orange-400 w-[3rem] mt-10 sm:w-[5.4rem] h-[50%] sm:h-[80%] left-2 rounded-[3rem] z-[1]"
            initial={{ left: '238px' }}
            whileInView={{ left: '6px' }}
            transition={transition}
          />
          <span className="{relative bg-gray-800 rounded-3xl p-2 mt-6 text-white text-sm font-bold uppercase z-[2] sm:text-base ">
            The best fitness club in the town
          </span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text text-white gap-1 font-bold uppercase flex-col text-3xl  md:space-y-10 sm:text-4xl md:text-[4.5rem] mt-20">
          <div>
            <span
              className="text-transparent font-sans"
              style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: 'white',
              }}
            >
              Shape
            </span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="font-normal normal-case w-[80%] md:w-[80%] text-base sm:text-lg md:text-[1.5rem] mt-2">
            In here we will help you to shape and build your ideal body and live up your life to the fullest.
          </div>
        </div>

        {/* Figures */}
        <div className="figures flex flex-wrap gap-4 justify-start mt-6">
          {[
            { end: 130, text: 'expert coaches' },
            { end: 869, text: 'members joined' },
            { end: 40, text: 'fitness programs' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center w-[40%] sm:w-auto">
              <span className="text-white text-xl sm:text-2xl md:text-[2rem]">
                <NumberCounter end={item.end} start={0} delay="4" preFix="+" />
              </span>
              <span className="text-gray-300 uppercase text-sm sm:text-base">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Hero Buttons */}
        <div className="flex gap-4 text-white mt-8 flex-wrap">
          <button className="bg-orange-400 w-[8rem] sm:w-[9rem] h-[3rem] font-bold px-4 py-2 cursor-pointer transition-all duration-300 text-xs md:text-base">
            Get Started
          </button>
          <button className="font-bold w-[8rem] sm:w-[9rem] h-[3rem] px-4 py-2 border-2 border-orange-400 border-solid cursor-pointer transition-all duration-300 text-xs md:text-base">
            Learn More
          </button>
        </div>
      </div>

     {/* Right Side */}
     <div
  className="right-side relative flex flex-[1] justify-center bg-orange-400 sm:bg-orange-400 bg-transparent h-[50rem]"
>
  {/* Join Now Button */}
  <button
    className={`bg-white w-24 h-9 mt-4 sm:mt-6 sm:ml-36 ml-[-10rem]`}
  >
    Join Now
  </button>

  {/* Heart Rate Motion */}
  <motion.div
  initial={{ right: '-1rem' }}
  whileInView={{ right: '8.5rem' }}
  transition={transition}
  className={`heart-rate flex flex-col gap-1 sm:bg-gray-600 p-4 items-center rounded-md absolute sm:ml-28 sm:mr-0 sm:mt-32 mt-40 ml-[-4rem] mr-28 bg-gray-500 w-auto h-auto sm:w-auto sm:h-auto`}
>
  <img src={Heart} alt="Heart Icon" className="w-[1.5rem] sm:w-[2rem]" />
  <span className="text-gray-400 text-sm md:text-base">Heart Rate</span>
  <span className="text-white text-lg sm:text-[1.5rem]">116 bpm</span>
</motion.div>


  {/* Hero Images */}
  <motion.img
    initial={{ right: '2rem' }}
    whileInView={{ right: '6rem' }}
    transition={transition}
    src={hero_image_back}
    alt="Hero Image Back"
    className={`absolute z-0 w-[10rem] sm:w-[15rem] mt-[-1rem] sm:mt-[4rem] mr-[0rem] sm:mr-[18.5rem]`}
  />
  <img
    src={hero_image}
    alt="Hero Image"
    className={`z-10 absolute w-[14rem] sm:w-[23rem] mt-[-2rem] sm:mt-[10rem] mr-[-13rem] sm:mr-[20rem]`}
  />

  {/* Calories Box */}
  <motion.div
    className={`flex bg-gradient-to-r from-zinc-500 to-stone-500 rounded-lg items-center gap-3 absolute sm:mt-[48rem] sm:mr-[12rem] mt-[28rem] mr-4 h-16 sm:h-20 w-[12rem] sm:w-56`}
    initial={{ right: '37rem' }}
    whileInView={{ right: '28rem' }}
    transition={transition}
  >
    <img
      src={Calories}
      alt="Calories Burned Icon"
      className={`h-10 sm:h-12 w-10 sm:w-12 ml-2 sm:ml-3`}
    />
    <div className="flex flex-col">
      <span className="text-xs font-medium text-gray-300 sm:text-sm">
        Calories Burned
      </span>
      <span className="text-sm text-white mt-2 sm:text-lg">
        280 kcal
      </span>
    </div>
  </motion.div>
</div>





    </div>
  );
};

export default Home;
