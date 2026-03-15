"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#020617] text-gray-200 min-h-screen">

      {/* NAVBAR */}

      <Navbar/>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="md:hidden px-6 py-4 border-b border-gray-800 bg-[#020617] space-y-4">

          <a href="#features" className="block">Features</a>
          <a href="#how" className="block">How It Works</a>
          <a href="#pricing" className="block">Pricing</a>

          <Link href="/login" className="block text-gray-400">
            Login
          </Link>

          <Link
            href="/signup"
            className="block bg-indigo-600 px-5 py-2 rounded-md text-white text-center"
          >
            Get Started
          </Link>

        </div>
      )}

      {/* HERO */}

      <section className="text-center py-24 px-6">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">

          Keep Your Free-Tier Servers <br />

          <span className="text-indigo-500">
            Awake
          </span>

        </h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">

          Automatically send periodic requests to your servers and prevent downtime.
          No more waiting for cold starts. No more embarrassing demo delays.

        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">

          <Link
            href="/signup"
            className="bg-indigo-600 px-6 py-3 rounded-md text-white hover:bg-indigo-700"
          >
            Start Monitoring
          </Link>

          <button className="border border-gray-700 px-6 py-3 rounded-md">
            Learn More
          </button>

        </div>

      </section>


      {/* FEATURES */}

      <section
        id="features"
        className="py-20 bg-[#0B1120] text-center px-6 md:px-20"
      >

        <h2 className="text-3xl font-semibold">
          Powerful, Simple Monitoring
        </h2>

        <p className="text-gray-400 mt-2">
          Built for developers who need reliability without complexity
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          <div className="bg-[#111827] p-8 rounded-xl">

            <h3 className="text-indigo-500 font-semibold">
              Auto Pinging
            </h3>

            <p className="text-gray-400 mt-4">
              Send scheduled HTTP requests every 10 minutes
              to prevent service sleep.
            </p>

          </div>

          <div className="bg-[#111827] p-8 rounded-xl">

            <h3 className="text-indigo-500 font-semibold">
              Service Dashboard
            </h3>

            <p className="text-gray-400 mt-4">
              Monitor last ping time, response status,
              and failures in a clean UI.
            </p>

          </div>

          <div className="bg-[#111827] p-8 rounded-xl">

            <h3 className="text-indigo-500 font-semibold">
              Full Control
            </h3>

            <p className="text-gray-400 mt-4">
              Enable, disable, update, or delete services anytime.
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section
        id="how"
        className="py-24 text-center px-6 md:px-20"
      >

        <h2 className="text-3xl font-semibold mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          <div>

            <h3 className="text-indigo-500 text-3xl font-bold">
              1
            </h3>

            <h4 className="mt-4 font-semibold">
              Register Your URL
            </h4>

            <p className="text-gray-400 mt-2">
              Add your service URL and choose your preferred ping interval.
            </p>

          </div>

          <div>

            <h3 className="text-indigo-500 text-3xl font-bold">
              2
            </h3>

            <h4 className="mt-4 font-semibold">
              We Ping It
            </h4>

            <p className="text-gray-400 mt-2">
              Our scheduler sends periodic HTTP requests in the background.
            </p>

          </div>

          <div>

            <h3 className="text-indigo-500 text-3xl font-bold">
              3
            </h3>

            <h4 className="mt-4 font-semibold">
              Stay Online
            </h4>

            <p className="text-gray-400 mt-2">
              Your service remains warm and ready for users.
            </p>

          </div>

        </div>

      </section>


      {/* PRICING */}

      <section
        id="pricing"
        className="py-24 bg-[#0B1120] text-center px-6 md:px-20"
      >

        <h2 className="text-3xl font-semibold mb-16">
          Simple Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* FREE */}

          <div className="bg-[#111827] p-10 rounded-xl">

            <h3 className="text-xl font-semibold">
              Free
            </h3>

            <p className="text-gray-400 mt-2">
              Perfect for students & demos
            </p>

            <h4 className="text-4xl font-bold mt-6">
              $0
            </h4>

            <ul className="mt-6 text-gray-400 space-y-2">

              <li>1 monitored service</li>
              <li>10-minute interval</li>
              <li>Basic logging</li>

            </ul>

            <button className="mt-8 w-full bg-indigo-600 py-3 rounded-md hover:bg-indigo-700">
              Start Free
            </button>

          </div>


          {/* PRO */}

          <div className="bg-indigo-700 p-10 rounded-xl text-white">

            <h3 className="text-xl font-semibold">
              Pro
            </h3>

            <p className="mt-2">
              For serious builders
            </p>

            <h4 className="text-4xl font-bold mt-6">
              $9/mo
            </h4>

            <ul className="mt-6 space-y-2">

              <li>Unlimited services</li>
              <li>Custom interval</li>
              <li>Priority monitoring</li>
              <li>Failure alerts</li>

            </ul>

            <button className="mt-8 w-full bg-black text-white py-3 rounded-md">
              Upgrade Now
            </button>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-24 text-center px-6">

        <h2 className="text-3xl font-semibold">
          Never Let Your Server Sleep Again
        </h2>

        <p className="text-gray-400 mt-2">
          Start monitoring your services in under 60 seconds
        </p>

        <Link
          href="/signup"
          className="inline-block mt-8 bg-indigo-600 px-8 py-3 rounded-md hover:bg-indigo-700"
        >
          Get Started Free
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">

        ©2026 WakeUpServer. Built for developers.

      </footer>

    </main>
  );
}