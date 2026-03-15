"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <nav className="border-b border-gray-800">

      <div className="flex items-center justify-between px-6 md:px-10 py-6">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          WakeUp<span className="text-indigo-500">Server</span>
        </h1>

        {/* Desktop Menu (ONLY SHOW ON HOMEPAGE) */}
        {isHomePage && (
          <div className="hidden md:flex gap-10 text-sm text-gray-400">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#pricing">Pricing</a>
          </div>
        )}

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-6 items-center">

          <Link href="/login" className="text-gray-400">
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-indigo-600 px-5 py-2 rounded-md text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 text-xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-6 text-gray-400">

          {/* SHOW ONLY ON HOMEPAGE */}
          {isHomePage && (
            <>
              <a href="#features">Features</a>
              <a href="#how">How It Works</a>
              <a href="#pricing">Pricing</a>
            </>
          )}

          <Link href="/login">Login</Link>

          <Link
            href="/signup"
            className="bg-indigo-600 px-5 py-2 rounded-md text-white text-center"
          >
            Get Started
          </Link>

        </div>
      )}

    </nav>
  );
}