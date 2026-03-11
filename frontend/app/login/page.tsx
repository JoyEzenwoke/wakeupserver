"use client";

import Link from "next/link";

export default function Loginpage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-gray-800">

        <h1 className="text-xl font-bold">
          WakeUp<span className="text-indigo-500">Server</span>
        </h1>

        {/* NAV BUTTONS */}

        <div className="flex items-center gap-4 md:gap-6 text-sm">

          <Link href="/login" className="text-gray-400 hover:text-white">
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-indigo-600 px-3 md:px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
          >
            Get Started
          </Link>

        </div>

      </nav>


      {/* FORM */}

      <section className="flex flex-1 items-center justify-center px-6 py-12 md:py-16">

        <div className="w-full max-w-md bg-[#0B1120] p-8 md:p-10 rounded-xl shadow-lg">

          <h2 className="text-2xl md:text-3xl font-bold text-center">
            WakeUp<span className="text-indigo-500">Server</span>
          </h2>

          <p className="text-gray-400 text-center mt-2">
            Welcome back, let’s keep things running
          </p>


          {/* FORM */}

          <form className="mt-8 space-y-4 md:space-y-6">

            {/* Email */}

            <div>

              <label className="text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1.5 px-4 py-2.5 md:py-3 rounded-md bg-[#020617] border border-gray-700 focus:outline-none focus:border-indigo-500"
              />

            </div>


            {/* Password */}

            <div>

              <label className="text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="******"
                className="w-full mt-1.5 px-4 py-2.5 md:py-3 rounded-md bg-[#020617] border border-gray-700 focus:outline-none focus:border-indigo-500"
              />

            </div>


            {/* Remember */}

            <div className="flex items-center justify-between text-sm text-gray-400">

              <label className="flex items-center gap-2">

                <input type="checkbox" />

                Remember me

              </label>

              <Link href="#" className="hover:text-white">

                Forget password?

              </Link>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="w-full bg-indigo-600 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </button>

          </form>


          {/* DIVIDER */}

          <div className="flex items-center gap-4 my-6">

            <div className="flex-1 border-t border-gray-700"></div>

            <span className="text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 border-t border-gray-700"></div>

          </div>


          {/* GOOGLE LOGIN */}

          <button className="w-full border border-gray-700 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#020617] transition">

            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />

            Continue with Google

          </button>


          {/* SIGNUP LINK */}

          <p className="text-center text-gray-400 mt-6 text-sm">

            Don’t have an account?{" "}

            <Link href="/signup" className="text-indigo-500 hover:text-indigo-400">

              Sign up

            </Link>

          </p>

        </div>

      </section>

    </main>
  );
}