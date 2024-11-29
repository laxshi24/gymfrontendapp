import React from 'react'
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import Linkdin from '../assets/instagram.png';
import Logo from '../assets/logo.png';


const Footer = () => {
  return (
    
    <div className="relative bg-gray-600  ">
        <hr className="  border-[1px] border-gray-300  " />
        <div className="flex flex-col items-center justify-center h-[10rem] p-[1rem] mt-8 gap-6">
  <div className="flex gap-[4rem] mb-[2rem]">
    <img src={Github} alt="" className="w-[2rem] h-[2rem] cursor-pointer" />
    <img src={Instagram} alt="" className="w-[2rem] h-[2rem] cursor-pointer" />
    <img src={Linkdin} alt="" className="w-[2rem] h-[2rem] cursor-pointer" />
  </div>
  <div className="w-[10rem] mb-16">
    <img src={Logo} alt="" />
  </div>
</div>

    </div>
  )
}

export default Footer