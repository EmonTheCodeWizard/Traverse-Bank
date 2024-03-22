import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { MdDarkMode, MdLightMode, MdLogout, MdSettings } from "react-icons/md";
import { useEffect, useState } from "react";
import { PiBankFill, PiBellFill, PiUserCircleFill } from "react-icons/pi";
import { RiProfileFill } from "react-icons/ri";
import {
  HiOutlineBars3BottomLeft,
  HiOutlineBars3CenterLeft,
} from "react-icons/hi2";
import "./header.css";
const Header = ({ sidebarToggle, setSidebarToggle }) => {
  const [isToggling, setIsToggling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const changeTheme = () => {
    const theme = document.documentElement.classList.toggle("dark");
    setIsToggling(theme);
  };

  const handleToggle = () => {
    setIsToggling(!isToggling);
  };
  const defaultbehaveOff = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 768);
    };
    return () => window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`w-auto dark:text-white text-[#4B72FD]  p-4 flex justify-between items-center `}
    >
      <div className="flex items-center">
        <button onClick={() => setSidebarToggle(!sidebarToggle)}>
          {sidebarToggle ? (
            <HiOutlineBars3BottomLeft />
          ) : (
            <HiOutlineBars3CenterLeft />
          )}
        </button>
        <NavLink className={`flex items-center ml-3`} to={{ pathname: "/" }}>
          <PiBankFill className="size-7" />
          <h2 className="text-xl md:text-3xl font-spaceFont font-medium">
            TraverseBank
          </h2>
        </NavLink>
      </div>
      <div className="flex items-center gap-x-1 md:gap-x-3">
        <div
          className={`flex underline-animation items-center gap-x-4 mr-4 font-Poppins ${
            isVisible ? "hidden" : ""
          }`}
        >
          <NavLink to={{ pathname: "/about-us" }}>About Us</NavLink>
          <NavLink to={{ pathname: "/our-services" }}>Our Services</NavLink>
        </div>
        <div className="flex items-center " onClick={handleToggle}>
          <button
            onClick={changeTheme}
            className={`${
              isToggling
                ? "transition-all duration-700 -rotate-90"
                : "rotate-45 transition-all duration-500"
            }`}
          >
            {isToggling ? (
              <MdLightMode
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                color=""
              />
            ) : (
              <MdDarkMode
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                color="##4B72FD"
              />
            )}
          </button>
        </div>
        <div>
          <PiBellFill className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
        </div>

        <div className="items-center relative ">
          <button
            className={`flex items-center`}
            onClick={() => setIsProfileOpen((prev) => !prev)}
          >
            <PiUserCircleFill className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
            <div
              className={`z-10 absolute rounded-lg shadow w-32 md:w-52 grid duration-300 ${
                isProfileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }  bg-gray-200 dark:bg-slate-900 top-16 right-0`}
            >
              <ul className="overflow-hidden text-lg font-Poppins">
                <li
                  onClick={defaultbehaveOff}
                  className="flex justify-center items-center gap-x-3 py-2 underline-animation"
                >
                  <NavLink
                    className={`flex items-center gap-x-3`}
                    to={{ pathname: "/profile" }}
                  >
                    Profile <RiProfileFill />
                  </NavLink>
                </li>
                <li
                  onClick={defaultbehaveOff}
                  className="flex justify-center items-center gap-x-3 py-2 underline-animation"
                >
                  <NavLink
                    className={`flex items-center gap-x-3`}
                    to={{ pathname: "/settings" }}
                  >
                    Settings <MdSettings />
                  </NavLink>
                </li>
                <li
                  onClick={defaultbehaveOff}
                  className="flex justify-center items-center gap-x-3 pt-2 pb-3 underline-animation"
                >
                  <NavLink
                    className={`flex items-center gap-x-3`}
                    to={{ pathname: "/Logout" }}
                  >
                    Logout <MdLogout />
                  </NavLink>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  sidebar: PropTypes.any,
  sidebarToggle: PropTypes.any,
  setSidebarToggle: PropTypes.any,
};

export default Header;
