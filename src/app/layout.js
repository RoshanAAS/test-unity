"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // Control mobile sidebar open/close
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Mobile Top Navbar */}
        <header className="sm:hidden flex items-center justify-between p-3 border-b border-gray-200">
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
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Toggle sidebar</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </header>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-white sm:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex min-h-screen">
          {/* Sidebar: fixed on mobile, static on desktop with higher z-index */}
          <div className={`fixed top-0 left-0 z-50 h-screen transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}> 
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
          </div>

          {/* Main Content */}
          <main
            className={`flex-1 p-4 bg-gray-50 dark:bg-gray-900 overflow-y-auto transition-all duration-300 ${
              isSidebarOpen ? "ml-64" : "ml-0"
            } sm:ml-64`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}