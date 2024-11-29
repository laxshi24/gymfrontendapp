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
  const mobile = window.innerWidth <= 768;

  return (
    <div id="home" className="bg-gray-600 backdrop-blur-3xl flex min-h-screen relative flex-col sm:flex-row">
      {/* Blurred Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 blur-[120px] opacity-70 -z-10"></div>

      {/* Left Side */}
      <div className="left-side flex flex-col justify-start p-8 sm:flex-[3] mt-0">
        {/* Header */}
        <Header />

        <div className="relative mt-36">
          {/* Orange Div */}
          <motion.div
            className="absolute bg-orange-400 mt-10 w-[5.4rem] h-[80%] left-2 rounded-[3rem] z-[1]"
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '6px' }}
            transition={transition}
          />

          {/* Text */}
          <span
            className={`relative bg-gray-800 rounded-3xl p-4 mt-6 text-white font-bold uppercase z-[2] ${
              mobile ? 'mt-2 text-[0.6rem] self-center transform scale-75 md:scale-100' : 'normal-nums'
            }`}
          >
            The best fitness club in the town
          </span>
        </div>

        {/* Hero Heading */}
        <div
          className={`hero-text text-white gap-1 font-bold uppercase flex-col ${
            mobile ? 'text-[2rem] mt-10 items-center justify-center ml-4' : 'text-[4.5rem] mt-5'
          }`}
        >
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
          <div
            className={`span font-normal normal-case w-[80%] ${
              mobile ? 'text-sm text-center mt-4' : 'text-[1.5rem]'
            }`}
          >
            In here we will help you to shape and build your ideal body and live up your life to fullset
          </div>
        </div>

        {/* Figures */}
        <div className="figures gap-4 flex flex-wrap justify-start mt-6 sm:flex-row">
          {[
            { end: 130, text: 'expert coaches' },
            { end: 869, text: 'members joined' },
            { end: 40, text: 'fitness programs' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center sm:w-auto w-full">
              <span className={`text-white ${mobile ? 'text-[1.2rem]' : 'text-[2rem]'}`}>
                <NumberCounter end={item.end} start={0} delay="4" preFix="+" />
              </span>
              <span className={`text-gray-300 uppercase ${mobile ? 'text-xs' : ''}`}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Hero Buttons */}
        <div className="flex gap-4 text-white mt-10">
          <button className="bg-orange-400 w-[9rem] h-[3rem] font-bold px-4 py-2 cursor-pointer transition-all duration-300 text-xs sm:text-base">
            Get Started
          </button>
          <button className="font-bold w-[9rem] h-[3rem] px-4 py-2 border-2 border-orange-400 border-solid cursor-pointer transition-all duration-300 text-xs sm:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div
  className={`right-side relative ${
    mobile ? 'flex flex-col items-center mt-10' : 'bg-orange-400 flex flex-[1] justify-center'
  }`}
>
  {/* Join Now Button */}
  <button
    className={`bg-white w-28 h-10 ${
      mobile ? 'mt-4 mb-4 mr-4 self-end' : 'mt-6 ml-36'
    }`}
  >
    Join Now
  </button>

  {/* Heart Rate Motion */}
  <motion.div
    initial={{ right: mobile ? '-2rem' : '-1rem' }}
    whileInView={{ right: mobile ? '2rem' : '8.5rem' }}
    transition={transition}
    className={`heart-rate flex flex-col gap-1 bg-gray-600 p-4 items-center rounded-md ${
      mobile ? 'relative mb-3 w-40 h-24' : 'absolute ml-28 mt-32 w-auto h-auto'
    }`}
  >
    <img src={Heart} alt="Heart Icon" className="w-[1.5rem] sm:w-[2rem]" />
    <span className="text-gray-400 text-sm sm:text-base">Heart Rate</span>
    <span className="text-white text-lg sm:text-[1.5rem]">116 bpm</span>
  </motion.div>

  {/* Hero Images */}
  <motion.img
    initial={{ right: mobile ? '1rem' : '6rem' }}
    whileInView={{ right: '6rem' }}
    transition={transition}
    src={hero_image_back}
    alt="Hero Image Back"
    className={`absolute z-0 ${
      mobile ? 'w-[10rem] mt-[10rem]' : 'w-[15rem] mt-[4rem] mr-[18.5rem]'
    }`}
  />
  <img
    src={hero_image}
    alt="Hero Image"
    className={`z-10 ${
      mobile
        ? 'relative w-[13rem] mt-[-1rem] self-end'
        : 'absolute w-[23rem] mt-[10rem] mr-[26rem]'
    }`}
  />

  {/* Calories Box */}
  <motion.div
    className={`flex bg-gradient-to-r from-zinc-500 to-stone-500 rounded-lg items-center gap-3 ${
      mobile
        ? 'relative p-4 w-48 h-16 mt-0 mb-6 '
        : 'absolute mt-[34rem] mr-[12rem] h-20 w-56'
    }`}
    initial={{ right: mobile ? '-5rem' : '37rem' }}
    whileInView={{ right: mobile ? '0rem' : '28rem' }}
    transition={transition}
  >
    <img
      src={Calories}
      alt="Calories Burned Icon"
      className={`h-12 ${
        mobile ? 'w-8 h-[2rem]' : 'w-12'
      } ml-2 sm:ml-3`}
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
