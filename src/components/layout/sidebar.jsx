"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import UserCard from "../ui/user-card";
import { additionalItems, mainNavigation } from "@/constant/mainNavigation";

const Sidebar = () => {
  // Delay rendering until after the component mounts to avoid hydration issues.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle for mobile sidebar visibility
  const [isOpen, setIsOpen] = useState(false);
  // State for tracking dropdowns (by label)
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  if (!mounted) return null;

  // Render a single menu item; if item has children, render as dropdown.
  const renderMenuItem = (item) => {
    const Icon = item.icon;
    if (item.children) {
      return (
        <li key={item.label}>
          <button
            type="button"
            onClick={() => toggleDropdown(item.label)}
            className="flex items-center w-full p-2 text-xs text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <Icon />
            <span className="flex-1 ml-2 text-left whitespace-nowrap text-xs">
              {item.label}
            </span>
            <svg
              className="w-3 h-3 transition-transform duration-200 transform group-hover:rotate-180"
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
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-10 text-xs group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {ChildIcon && <ChildIcon />}
                    <span className="ml-1">{child.label}</span>
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
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Icon />
          <span className="ml-2 text-xs">{item.label}</span>
          {item.badge && (
            <span
              className={`inline-flex items-center justify-center px-2 ml-2 text-xs font-medium ${item.badge.bg} rounded-full`}
            >
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

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-xs text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          className="flex flex-col h-full px-3 py-4 overflow-y-auto border-r border-gray-300"
          style={{
            backgroundImage: "url(/paper-texture.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        >
          {/* Brand Logo Section */}
          <div className="mb-4 flex items-center space-x-2">
            <img
              src="/images/testUnity-logo.png"
              alt="TestUnity logo"
              className="w-6 h-6"
            />
            <span className="text-base font-bold bg-gradient-to-r from-[#8b36f1] to-[#d57df0] bg-clip-text text-transparent mt-1">
              TestUnity
            </span>
          </div>

          {/* Select Form above Dashboard */}
          <div className="relative mb-4 px-2">
            <form>
              <select
                id="countries_disabled"
                className="bg-white border border-gray-300 text-gray-900 font-black text-sm rounded-lg focus:outline-none focus:border-gray-300 block w-full py-2 pl-3 pr-10 appearance-none"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </form>
          </div>

          {/* Main Navigation */}
          <ul className="space-y-2 font-semibold flex-1">
            {mainNavigation.map((item) => renderMenuItem(item))}
          </ul>

          {/* Additional Items Group (with gap) Above UserCard */}
          <ul className="space-y-2 font-semibold mt-4">
            {additionalItems.map((item) => renderMenuItem(item))}
          </ul>

          {/* User Card at the very bottom */}
          <UserCard />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
