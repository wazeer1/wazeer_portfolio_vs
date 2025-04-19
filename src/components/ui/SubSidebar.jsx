import React from "react";
import Accordion from "./Accordion";
import { AiOutlineJavaScript } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import LogoImage from '../../assets/image/logo.png'

const SubSidebar = () => {
  const accordionItems = [
    {
      title: "EXPLORER",
      content: (
        <ul className="mt-2">
          <li>
            <NavLink
              to="/profile/spotlight"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-[6px] rounded-md text-sm cursor-pointer ${
                  isActive ? "bg-[#ffffff10] text-white" : "text-gray-400"
                } hover:bg-[#ffffff10] transition`
              }
            >
              <AiOutlineJavaScript className="text-yellow-300" />
              <span>Spotlight.jsx</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/about-me"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-[6px] rounded-md text-sm cursor-pointer ${
                  isActive ? "bg-[#ffffff10] text-white" : "text-gray-400"
                } hover:bg-[#ffffff10] transition`
              }
            >
              <AiOutlineJavaScript className="text-yellow-300" />
              <span>Aboutme.jsx</span>
            </NavLink>
          </li>
        </ul>
      ),
    },
    {
      title: "OUTLINE",
      content: (
        <p className="text-gray-500 text-sm leading-relaxed px-2">
          Quickly jump between sections of Spotlight & Aboutme files.
        </p>
      ),
    },
    {
      title: "TIMELINE",
      content: (
        <p className="text-gray-500 text-sm leading-relaxed px-2">
          Track your development progress and commits visually here.
        </p>
      ),
    },
  ];

  return (
    <div className="w-[220px] h-full border-r border-[#ffffff30] bg-[#1e1e1e] py-4">
        <div className="w-1/3 mx-auto">
            <img src={LogoImage} />
        </div>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default SubSidebar;
