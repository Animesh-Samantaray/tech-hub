import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowRoundForward } from 'react-icons/io';
import Logo from '../assets/skill-logo.png';
import '../App.css';
import Login from "./Login";
import { useNavigate, Link } from "react-router-dom"; // Use Link for internal routing

const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      path: "/",
      external: false,
    },
    {
      id: 2,
      title: "Services",
      path: "/service",
      external: false,
    },
    {
      id: 3,
      title: "Courses",
      path: "https://3skill.shop/collections/web-development-mastery-with-100-internship-govt-verified-certificate",
      external: true,
    },
    {
      id: 4,
      title: "Contact Us",
      path: "/contact",
      external: false,
    },
];

const Navbar = () => {
    const navigate = useNavigate();
    
    const signIn = (e) => {
        e.preventDefault(); 
        navigate("/login"); 
    };

    return (
        <nav className="relative z-20 ">
            <div className="container py-10 flex justify-between items-center">
                {/* Logo Section */}
                <div>
                    <h1 className="font-bold text-2xl">
                        <img src={Logo} alt="Logo" />
                    </h1>
                </div>
                
                {/* Menu Section */}
                <div className="lg:block">
                    <ul className="flex gap-3 items-center">
                        {NavbarMenu.map((menu) => {
                            return menu.external ? (
                                <li key={menu.id}>
                                    <a
                                        href={menu.path}
                                        className="inline-block py-2 px-3 hover:text-[#f7ba34] relative group"
                                    >
                                        <div className="w-2 h-2 bg-[#69a79c] absolute mt-3 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                                        {menu.title}
                                    </a>
                                </li>
                            ) : (
                                <li key={menu.id}>
                                    <Link
                                        to={menu.path} // Use Link for internal routes
                                        className="inline-block py-2 px-3 hover:text-[#f7ba34] relative group"
                                    >
                                        <div className="w-2 h-2 bg-[#69a79c] absolute mt-3 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                                        {menu.title}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <button
                                className="inline-block bg-[#f7ba34] text-white font-semibold py-2 px-6 rounded-lg
                                    hover:bg-[#69a79c] duration-200 shadow-[0px_10px_8px_-7px_#ffd978] 
                                    hover:shadow-[0px_10px_8px_-7px_#69a79c] cursor-pointer"
                                onClick={signIn}
                            >
                                Sign in
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden">
                    <IoMdMenu className="text-4xl" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
