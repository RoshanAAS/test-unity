"use client";

import React from "react";

const UserCard = () => {
  return (
    <div className="mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-[0px_6px_24px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)]">
        <div className="relative">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/images/avatar.jpg"
            alt="User Avatar"
          />
          {/* Online Indicator */}
          <span className="absolute bottom-0 right-0 block w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            Ravikant Jeshwanth
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            jese@example.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
