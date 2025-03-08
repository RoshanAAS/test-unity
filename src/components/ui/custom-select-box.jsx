import React from "react";

export default function CustomSelectBox({ options = [], className = "" }) {
  return (
    <div className={`relative mt-3 ${className}`}>
      <select className="w-full py-2 pl-3 pr-10 text-xs font-semibold bg-white border rounded-lg appearance-none border-gray-300 focus:outline-none">
        {options.map((option, index) => (
          <option key={index} className="text-sm font-medium">
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
