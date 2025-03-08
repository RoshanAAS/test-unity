"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import UserCard from "../ui/user-card";
import { additionalItems, mainNavigation } from "@/constant/mainNavigation";
import CustomSelectBox from "../ui/custom-select-box";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [mounted, setMounted] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const renderMenuItem = (item) => {
    const Icon = item.icon;
    if (item.children) {
      return (
        <li key={item.label}>
          <button
            onClick={() => toggleDropdown(item.label)}
            className="flex items-center w-full p-1 text-sm text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-medium"
          >
            <Icon className="w-5 h-2" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">{item.label}</span>
            <svg
              className={`w-4 h-2 transition-transform duration-200 ${openDropdowns[item.label] ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <ul className={`py-2 space-y-2 ${openDropdowns[item.label] ? "" : "hidden"}`}>
            {item.children.map((child) => {
              const ChildIcon = child.icon;
              return (
                <li key={child.label}>
                  <Link
                    href={child.href}
                    className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 text-sm group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {ChildIcon && <ChildIcon className="w-4 h-2.5 mr-2" />}
                    <span className="ml-1 tracking-wide font-normal">{child.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }
    return (
      <li key={item.label}>
        <Link
          href={item.href}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-medium"
        >
          <Icon className="w-5 h-3" />
          <span className="ml-3 text-sm">{item.label}</span>
          {item.badge && (
            <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${item.badge.bg}`}>
              {item.badge.text}
            </span>
          )}
          {item.rightIcon && (
            <img
              src="/images/open-icon.svg"
              alt="Opening Icon"
              className="w-5 h-5 ml-auto"
            />
          )}
        </Link>
      </li>
    );
  };

  if (!mounted) return null;

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex flex-col h-full px-3 py-4 border-r border-gray-300 bg-[url('/paper-texture.png')]">
        {/* Brand Logo & Select Form Section */}
        <div className="mb-4 px-2">
          <div className="flex items-center space-x-2">
            <img
              src="/images/testUnity-logo.png"
              alt="TestUnity logo"
              className="w-6 h-6"
            />
            <span className="text-base font-bold bg-gradient-to-r from-[#8b36f1] to-[#d57df0] bg-clip-text text-transparent">
              TestUnity
            </span>
          </div>
          <CustomSelectBox options={["United States", "Canada", "France", "Germany"]} />
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-4">
          <ul className="space-y-2">
            {mainNavigation.map(renderMenuItem)}
          </ul>
          <div className="border-t border-gray-200" />
          <ul className="space-y-1">
            {additionalItems.map(renderMenuItem)}
          </ul>
        </nav>

        {/* User Card */}
        <UserCard />
      </div>
    </aside>
  );
};

export default Sidebar;