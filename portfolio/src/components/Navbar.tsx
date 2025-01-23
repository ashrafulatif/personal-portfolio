import { useState } from "react";
import { IconCircleLetterA } from "@tabler/icons-react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar font-mono px-10 py-4 bg-bgColor text-textPrimary">
        {/* Logo Section */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <IconCircleLetterA color="#63ffda" size={60} stroke={1.5} />
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              className="text-textPrimary focus:outline-none"
              onClick={toggleDrawer}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isDrawerOpen
                      ? "M6 18L18 6M6 6l12 12" // X (close) icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu Links for Desktop */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4">
              <li>
                <a href="#projects" className="hover:text-primaryColor text-md">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primaryColor text-md">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primaryColor text-md">Contact</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primaryColor text-md">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="bg-cardColor text-textPrimary shadow-lg">
          <ul className="menu flex flex-col items-center mt-4 space-y-4 px-6">
            <li>
              <a href="#projects" className="hover:text-primaryColor text-md" onClick={toggleDrawer}>Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primaryColor text-md" onClick={toggleDrawer}>Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primaryColor text-md" onClick={toggleDrawer}>Contact</a>
            </li>
            <li>
              <a href="#about" className="hover:text-primaryColor text-md" onClick={toggleDrawer}>About</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
