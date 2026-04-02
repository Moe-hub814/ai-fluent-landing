"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-bold text-xl text-gray-900">AI Fluent</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
            Sign In
          </a>
          <a
            href="#pricing"
            className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-violet-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#features" className="text-gray-600 hover:text-violet-600 font-medium" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-violet-600 font-medium" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-violet-600 font-medium" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a
            href="#pricing"
            className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-5 py-2.5 rounded-full font-semibold text-center hover:opacity-90"
            onClick={() => setMenuOpen(false)}
          >
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  );
}
