import React from "react";
import CostumeInputBox from "../ui/input-box";

export default function TopBar() {
  return (
    <div className="w-full px-2 pt-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 py-2 border-b border-gray-200 -mx-2 pb-5">
        
        {/* Left Section: Title, Search Input & Icons */}
        <div className="w-full flex flex-col md:flex-row md:items-center gap-2.5">
          <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">Test Cases</h1>

          {/* Wrap Search Input & Icons Together */}
          <div className="flex items-center gap-1.5 w-full md:w-auto flex-nowrap">
            {/* Search Input Box (Tighter Width) */}
            <div className="w-full md:w-[220px] lg:w-[260px]">
              <CostumeInputBox />
            </div>
            
            <div className="flex gap-1.5 shrink-0">
              <button
                type="button"
                className="border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs p-1 text-center inline-flex items-center"
              >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
                </svg>
              </button>

              <button
                type="button"
                className="border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs p-1 text-center inline-flex items-center"
              >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L11 6.414V17a1 1 0 1 1-2 0V6.414L5.707 9.707A1 1 0 0 1 4.293 8.293l5-5A1 1 0 0 1 10 3z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-2">
          <button className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg text-xs border border-gray-300 w-full md:w-auto whitespace-nowrap">
            Generate Test Cases
          </button>
          <button className="bg-[#8328eb] text-white px-4 py-2 rounded-lg text-xs w-full md:w-auto whitespace-nowrap">
            Create Test Case
          </button>
        </div>
      </div>
    </div>
  );
}
