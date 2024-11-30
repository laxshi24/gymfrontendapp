import React, { useRef } from 'react'; // Import useRef
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef(); // Now useRef will be defined
  

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
    <div className="sm:flex flex-col lg:flex-row p-[2rem] bg-gray-600 items-center justify-between">
      {/* Left side */}
      <div
        className="text-white sm:text-[3rem] text-[2.5rem]  font-bold uppercase relative lg:text-left mb-16 sm:mt-28 mt-[23rem]  text-center
        "
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
      <div className="sm:flex  flex-col justify-center lg:justify-start items-center mr-40  mt-28 sm:mt-12">
    <form
      ref={form}
      action=""
      className="flex bg-gray-400 p-[1.4rem] gap-[1rem] w-fit h-fit sm:w-auto"
      onSubmit={sendEmail}
    >
      <input
        type="email"
        name="user_email"
        className="border-none outline-none placeholder-gray-500 bg-transparent text-orange-400 w-fit sm:w-[16rem] md:w-[20rem] lg:w-[20rem]"
        placeholder="Enter your Email address"
      />
      <button
        className="bg-orange-400 text-white border-none cursor-pointer size-12 sm:w-32 sm:h-12 "
      >
        Join now
      </button>
    </form>
  </div>

    </div>
  );
};

export default Join;
