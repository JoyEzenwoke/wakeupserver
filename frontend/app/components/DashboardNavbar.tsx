"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function DashboardNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/services", label: "Services" },
    { href: "/activities", label: "Activities" },
  ];

  return (
    <nav className="w-full bg-[#0d1117] border-b border-white/10 px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        <Link href="/dashboard" className="text-xl md:text-2xl font-bold">
          <span className="text-white">WakeUp</span>
          <span className="text-indigo-400">Server</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href ? "text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 text-gray-300 cursor-pointer hover:text-white transition-colors">
          <User size={18} />
          <span className="text-sm">My Account</span>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4 pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors ${
                pathname === link.href ? "text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-gray-300 pt-3 border-t border-white/10">
            <User size={16} />
            <span className="text-sm">My Account</span>
          </div>
        </div>
      )}
    </nav>
  );
}