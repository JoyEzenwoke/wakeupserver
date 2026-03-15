"use client";

import Link from "next/link";

export default function NewPasswordPage() {
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


      {/* FORM */}

      <section className="flex flex-1 items-center justify-center px-2 py-12 md:py-16">

        <div className="w-full max-w-md bg-[#0B1120] p-8 md:p-10 rounded-xl shadow-lg">

          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Set New Password
          </h2>

          <p className="text-gray-400 text-center mt-2">
            Choose a strong new password for your account.
          </p>


          <form className="mt-8 space-y-5">

            {/* New Password */}

            <div>

              <label className="text-sm text-gray-300">
                New Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-2 px-4 py-3 rounded-md bg-[#020617] border border-gray-700 focus:outline-none focus:border-indigo-500"
              />

            </div>


            {/* Confirm Password */}

            <div>

              <label className="text-sm text-gray-300">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-2 px-4 py-3 rounded-md bg-[#020617] border border-gray-700 focus:outline-none focus:border-indigo-500"
              />

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-indigo-600 py-3 rounded-md hover:opacity-90 transition"
            >
              Update password
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}