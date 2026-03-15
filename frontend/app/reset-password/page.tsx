"use client";

import Link from "next/link";

import Navbar from "../components/Navbar";

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col">

      {/* NAVBAR */}

      <Navbar/>
      {/* FORM */}

      <section className="flex flex-1 items-center justify-center px-2 py-12 md:py-16">

        <div className="w-full max-w-md bg-[#0B1120] p-8 md:p-10 rounded-xl shadow-lg">

          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Reset Your Password
          </h2>

          <p className="text-gray-400 text-center mt-2">
            Enter your email and we'll send you a reset link
          </p>


          <form className="mt-8 space-y-5">

            {/* Email */}

            <div>

              <label className="text-sm text-gray-300">
                Enter Email
              </label>

              <input
                type="email"
                placeholder="Email your email"
                className="w-full mt-2 px-4 py-3 rounded-md bg-[#020617] border border-gray-700 focus:outline-none focus:border-indigo-500"
              />

            </div>


            {/* Button */}

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-indigo-600 py-3 rounded-md hover:opacity-90 transition"
            >
              Send reset link
            </button>

          </form>


          {/* Back to login */}

          <p className="text-center text-gray-400 mt-6 text-sm">

            Back to{" "}

            <Link href="/login" className="text-indigo-500 hover:text-indigo-400">

              Login

            </Link>

          </p>

        </div>

      </section>

    </main>
  );
}