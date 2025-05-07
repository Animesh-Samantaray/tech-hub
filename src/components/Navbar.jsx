import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5"; // Back icon
import Logo from "../assets/skill-logo.png";
import "../App.css";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/", external: false },
  { id: 2, title: "Services", path: "/service", external: false },
  {
    id: 3,
    title: "Courses",
    path: "https://3skill.shop/collections/web-development-mastery-with-100-internship-govt-verified-certificate",
    external: true,
  },
  { id: 4, title: "Contact Us", path: "/contact", external: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const signIn = (e) => {
    e.preventDefault();
    navigate("/login");
    setIsOpen(false);
  };

  const goHome = () => {
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="relative z-50 w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Back to Home (visible on all sizes if NOT on homepage) */}
        {location.pathname !== "/" && (
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={goHome}
              className="flex items-center gap-1 text-[#69a79c] hover:text-[#f7ba34] transition font-medium text-sm"
            >
              <IoArrowBackSharp className="text-xl" />
              Back to Home
            </button>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {NavbarMenu.map((menu) =>
            menu.external ? (
              <a
                key={menu.id}
                href={menu.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#f7ba34] font-medium transition"
              >
                {menu.title}
              </a>
            ) : (
              <Link
                key={menu.id}
                to={menu.path}
                className="text-gray-800 hover:text-[#f7ba34] font-medium transition"
              >
                {menu.title}
              </Link>
            )
          )}

          <button
            onClick={signIn}
            className="bg-[#f7ba34] hover:bg-[#69a79c] text-white font-semibold px-4 py-2 rounded-lg shadow transition"
          >
            Sign in
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <IoMdClose className="text-3xl text-gray-800" />
            ) : (
              <IoMdMenu className="text-3xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-4 shadow-md">
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map((menu) =>
              menu.external ? (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-800 hover:text-[#f7ba34] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.title}
                  </a>
                </li>
              ) : (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    className="block text-gray-800 hover:text-[#f7ba34] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.title}
                  </Link>
                </li>
              )
            )}
            <li>
              <button
                onClick={signIn}
                className="w-full bg-[#f7ba34] hover:bg-[#69a79c] text-white font-semibold px-4 py-2 rounded-lg shadow transition"
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
