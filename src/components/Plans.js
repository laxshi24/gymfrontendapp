import React from 'react';
import { plansData } from '../data/plansData';
import whiteTick from '../assets/whiteTick.png';

const Plans = () => {
  return (
    <div id="plans" className="flex flex-col bg-gray-600 p-4 backdrop-blur-lg">
      {/* Header */}
      <div
        className="flex font-bold text-white italic 
            sm:text-[3.3rem] text-[2rem]  sm:flex-row flex-col justify-start mt-20 mb-12 ml-20
        "
      >
        <span
          className="text-transparent font-sans"
          style={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          READY TO START
        </span>
        <span className="mx-2">YOUR JOURNEY</span>
        <span
          className="text-transparent font-sans"
          style={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          NOW WITH US
        </span>
      </div>

      {/* Plans Cards */}
      <div className="flex items-center sm:flex-row flex-col justify-center gap-6 mt-10  ">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className={`${
              index === 1
                ? 'bg-gradient-to-r from-orange-500 to-orange-400 h-[500px]' // Smaller height for the second card
                : 'bg-gradient-to-r from-zinc-500 to-stone-500 h-[460px]' // Default height for other cards
            } text-white p-6 flex flex-col items-start`}
          >
            <div className="text-4xl mb-1">{plan.icon}</div>
            <span className="text-xl font-bold mt-3">{plan.name}</span>
            <span className="text-4xl font-bold  mt-7 mb-6">$ {plan.price}</span>

            {/* Features */}
            <div className="features flex flex-col gap-2 mt-6">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="feature flex items-center gap-2">
                  <img src={whiteTick} alt="Tick" className="w-5 h-4" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <span className="mt-12 text-sm cursor-pointer hover:underline">
              See more benefits &rarr;
            </span>
            <button
              className={`btn h-10 mt-4 w-full rounded ${
                index === 1
                  ? 'bg-white text-orange-500'
                  : 'bg-white text-black'
              }`}
            >
              Join now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
