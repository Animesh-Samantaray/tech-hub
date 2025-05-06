import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowRoundForward } from 'react-icons/io';
import Logo from '../assets/skill-logo.png'
import '../App.css';
const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Services",
        link: "#",
    },
    {
        id: 3,
        title: "About us",
        link: "#",
    },
    {
        id: 4,
        title: "Our Team",
        link: "#",
    },
    {
        id: 5,
        title: "Contact Us",
        link: "#",
    },
];
const Navbar = () => {
    return (
        <nav className="relative z-20 ">
            <div className="container py-10 flex justify-between items-center">
                {/* Logo Section  */}
                <div>
                    <h1 className="font-bold text-2xl"> <img src={Logo} alt="" /></h1>
                </div>
                {/* Menu Section  */}
                <div className="  lg:block">
                    <ul className="flex gap-3 item-center">
                        {NavbarMenu.map((menu) => {
                            return (
                                <li key={menu.id}>
                                    <a
                                        href={menu.path}
                                        className="inline-block py-2 px-3 hover:text-[#f7ba34] relative group "
                                    >
                                        <div className="w-2 h-2  bg-[#69a79c] absolute mt-3 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden "></div>
                                        {menu.title}
                                    </a>
                                </li>
                            );
                        })}
                        <li>
                            <button className="inline-block bg-[#f7ba34] text-white font-semibold py-2 px-6 rounded-lg 
                                        hover:bg-[#69a79c] duration-200 shadow-[0px_10px_8px_-7px_#ffd978] 
                                        hover:shadow-[0px_10px_8px_-7px_#69a79c]">
                                Sign in
                            </button></li>
                    </ul>
                </div>
                {/* mobile hamburger menu */}
                <div className="lg:hidden">
                        <IoMdMenu className='text-4xl'/>
                </div>
            </div>
        </nav>
    );
};

// primary-#f7ba34
// secondary- #69a79c
// light-#f7f7f7
// dark-#333333
// dark2-#999999

export default Navbar;
