import React from 'react';
import { plansData } from '../data/plansData';
import whiteTick from '../assets/whiteTick.png';

const Plans = () => {
  const mobile = window.innerWidth <= 768;

  return (
    <div id='plans' className="flex flex-col bg-gray-600 p-4 backdrop-blur-lg">
      {/* Header */}
      <div
        className={`flex font-bold text-white italic ${
          mobile
            ? 'flex-col text-center text-[1.5rem] mb-8 mt-8 mx-auto space-y-4'
            : 'text-[3.3rem] flex-row justify-start mt-20 mb-12 ml-20'
        }`}
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
        <span className={`${mobile ? '' : 'mx-2'}`}>YOUR JOURNEY</span>
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
      <div
        className={`flex items-center justify-center gap-6 ${
          mobile ? 'flex-col space-y-6' : 'flex-row'
        }`}
      >
        {plansData.map((plan, index) => (
          <div
            key={index}
            className={`${
              index === 1
                ? 'bg-gradient-to-r from-orange-500 to-orange-400'
                : 'bg-gradient-to-r from-zinc-500 to-stone-500'
            } text-white p-6 flex flex-col items-start ${
              mobile
                ? 'w-[90%] h-auto gap-4'
                : index === 1
                ? 'w-[17.5rem] h-[30rem] gap-6'
                : 'w-[15rem] h-[28rem] gap-2'
            }`}
          >
            <div className="text-4xl mb-4">{plan.icon}</div>
            <span className="text-xl font-bold">{plan.name}</span>
            <span className="text-4xl font-bold mb-4">$ {plan.price}</span>

            {/* Features */}
            <div className="features flex flex-col gap-2">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="feature flex items-center gap-2">
                  <img src={whiteTick} alt="Tick" className="w-5 h-4" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <span className="mt-3 text-sm cursor-pointer hover:underline">
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
