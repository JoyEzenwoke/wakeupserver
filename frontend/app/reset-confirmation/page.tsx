"use client";

import Link from "next/link";

export default function ResetConfirmation() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-gray-800">

        <h1 className="text-xl font-bold">
          WakeUp<span className="text-indigo-500">Server</span>
        </h1>

        <div className="flex items-center gap-4 md:gap-6 text-sm">

          <Link href="/login" className="text-gray-400 hover:text-white">
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Get Started
          </Link>

        </div>

      </nav>


      {/* CONTENT */}

      <section className="flex flex-1 items-center justify-center px-2 py-12 md:py-16">

        <div className="w-full max-w-md bg-[#0B1120] p-8 md:p-10 rounded-xl shadow-lg text-center">

          {/* ICON */}

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-blue-400 flex items-center justify-center">
              <span className="text-blue-400 text-3xl">✓</span>
            </div>
          </div>


          <p className="text-gray-300 leading-relaxed">

            We've sent a password reset link to your email address.
            Please check your inbox and follow the instructions.

          </p>


          <Link href="/login">

            <button className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-indigo-600 py-3 rounded-md hover:opacity-90 transition">

              Back to Login

            </button>

          </Link>

        </div>

      </section>

    </main>
  );
}