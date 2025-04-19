import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className=" rounded-lg overflow-hidden mb-2">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between bg-transparent items-center px-4 h-[30px] bg-gray-100 hover:bg-gray-200 text-left font-medium transition duration-200"
          >
            <span className="text-white">{item.title}</span>
            <span className="text-lg text-white text-sm">
              {activeIndex === index ? "▼" : "▶"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-3 text-gray-700 border-t">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
