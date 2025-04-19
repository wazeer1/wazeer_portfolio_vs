import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { GiSkills } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";

const navItems = [
  {
    to: "/profile/spotlight",
    icon: <FaUser size={30} />,
    key: "spotlight",
  },
  {
    to: "/projects",
    icon: <IoDocumentsOutline size={30} />,
    key: "projects",
  },
  {
    to: "/contact-me",
    icon: <TiContacts size={30} />,
    key: "contact",
  },
  {
    to: "/skills",
    icon: <GiSkills size={30} />,
    key: "skills",
  },
  {
    to: "/experiance",
    icon: <GiLightBulb size={30} />,
    key: "experiance",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[60px] h-full border-r-[.5px] border-[#ffffff50] bg-[#1e1e1e]">
      <ul className="flex flex-col justify-center items-center py-6 gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) =>
              `relative group flex justify-center items-center w-full ${
                isActive ? "text-white" : "text-[#868686]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center justify-center w-full">
                  {React.cloneElement(item.icon, {
                    color: isActive ? "#ffffff" : "#868686",
                  })}
                </div>
                {isActive && (
                  <span className="absolute right-0 h-6 w-1 rounded-l-full bg-white" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
