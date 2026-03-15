"use client";

import Link from "next/link";

import Navbar from "../components/Navbar";

export default function NewPasswordPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col">

      {/* NAVBAR */}
      <Navbar/>
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