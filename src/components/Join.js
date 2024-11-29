import React, { useRef } from 'react'; // Import useRef
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef(); // Now useRef will be defined
  const mobile = window.innerWidth <= 768 ? true : false;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8vd1u3e', 'template_n0toy5m', form.current, {
        publicKey: 'u8XCfo054j2oMFCu8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row p-[2rem] bg-gray-600 items-center justify-between">
      {/* Left side */}
      <div
        className={`text-white lg:text-[3rem] font-bold uppercase relative lg:text-left mb-16 ${
          mobile ? 'mt-[22rem] flex-col text-[1.5rem] text-center' : 'mt-28 text-[2.5rem] text-center'
        }`}
      >
        <hr className="absolute w-[10.5rem] border-[2px] border-orange-400 rounded-[20%] mb-0 mx-auto lg:mx-0" />
        <div className="mt-[-1]">
          <span
            className="text-transparent font-sans"
            style={{
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: 'white',
            }}
          >
            READY TO
          </span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span
            className="text-transparent font-sans"
            style={{
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: 'white',
            }}
          >
            {' '}
            WITH US?
          </span>
        </div>
      </div>

      {/* Right side (Form) */}
      <div className={`flex justify-center lg:justify-start items-center ${mobile ? 'mr-0 mt-1' : 'mr-40 mt-36'}`}>
        <form
          ref={form}
          action=""
          className={`flex gap-[0.5rem] bg-gray-400 ${mobile ? 'flex-col items-center w-[14rem] p-[0.8rem]' : 'p-[1.4rem] gap-[1rem]'}`}
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            className={`border-none outline-none placeholder-gray-500 bg-transparent text-orange-400 ${
              mobile ? 'w-[12rem] p-1' : 'w-[18rem] md:w-[20rem]'
            }`}
            placeholder="Enter your Email address"
          />
          <button
            className={`bg-orange-400 text-white border-none cursor-pointer ${
              mobile ? 'w-[6rem] h-[2.5rem] text-sm' : 'w-28 h-10'
            }`}
          >
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
