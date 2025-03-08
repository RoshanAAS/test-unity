"use client"

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { DUMMY_DATA, PRIORITY_COLORS, STATUS_COLORS } from "@/constant/table-data";
import TableHeaders from "./table-header";


const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(DUMMY_DATA.length / itemsPerPage);

  const currentData = DUMMY_DATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="relative overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700 mt-6">
      <table className="w-full text-xs text-gray-700 dark:text-gray-300">
       <TableHeaders  headers = {["ID", "Title", "Priority", "Result", "Status", "Owner", "Automation", "Tags"]}/>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id} className="bg-white border-b border-gray-200">
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    className="w-3 h-3 text-purple-800 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-800 dark:focus:ring-purple-800"
                  />
                  <span className="text-sm  font-semibold" >{item.id}</span>
                </div>
              </td>
              <td className="px-4 py-3">{item.title}</td>
              <td className="px-4 py-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${PRIORITY_COLORS[item.priority]}`}
                >
                  {item.priority}
                </span>
              </td>
              <td className="px-4 py-3">{item.result}</td>
              <td className="px-4 py-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[item.status]}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3">{item.owner}</td>
              <td className="px-4 py-3">{item.automationStatus}</td>
              <td className="px-4 py-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-800">
                  {item.tags}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-2 sm:px-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
        >
          <ChevronLeftIcon className="w-5 h-5 inline" /> Previous
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
        >
          Next <ChevronRightIcon className="w-5 h-5 inline" />
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
