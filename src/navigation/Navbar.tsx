import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className="fixed left-0 top-0 mx-auto flex h-16 w-full items-center justify-between bg-primary-500 px-4 text-white lg:h-24">
      <h1 className="w-full text-3xl font-bold text-primary-50">Logo</h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="m-2 cursor-pointer rounded-xl p-4 font-semibold duration-300 hover:bg-white hover:text-primary-950"
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block cursor-pointer md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 h-full w-[60%] bg-primary-600 duration-500 ease-in-out md:hidden'
            : 'fixed inset-y-0 left-[-100%] w-[60%] duration-500 ease-in-out'
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-white">Logo</h1>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer border-b border-white p-4 duration-300 hover:bg-white hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
