import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png';
import { Link } from 'react-scroll'; // Import the Link component from react-scroll

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="flex items-center px-4 py-2 justify-between ">
      {/* Logo Section */}
      <div className="flex items-center flex-1 justify-start">
        <img src={Logo} alt="Logo" className="h-12 md:h-14 lg:h-16" />
      </div>

      {/* Mobile View: Hamburger Menu */}
      <div className="lg:hidden">
        {!menuOpened ? (
          <div
            className="cursor-pointer flex items-center justify-end"
            onClick={() => setMenuOpened(true)}
          >
            <div className="bg-gray-700 rounded-[5px] p-[0.5rem]">
              <img src={Bars} alt="Menu Bars" className="h-[1.5rem] w-[1.5rem]" />
            </div>
          </div>
        ) : (
          // Mobile menu when opened
          <div className="absolute top-16 right-4 bg-gray-700 p-4 rounded-lg w-[80%] z-10">
            <ul className="flex flex-col gap-4 text-center text-white">
              {/* Smooth Scroll Links */}
              {['home', 'programs', 'why-us', 'plans', 'testimonials'].map((section, index) => (
                <li key={index}>
                  <Link
                    onClick={() => setMenuOpened(false)}
                    to={section}
                    spy={true}
                    smooth={true}
                    className="cursor-pointer hover:text-orange-400"
                  >
                    {section.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-[3] justify-end">
        <ul className="flex gap-16 text-white">
          {['home', 'programs', 'why-us', 'plans', 'testimonials'].map((section, index) => (
            <li key={index}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                className="cursor-pointer hover:text-orange-400"
              >
                {section.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
