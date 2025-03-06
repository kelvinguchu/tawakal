"use client";
import React from "react";
import Hero from "./hero";
import About from "./about";

export default function HomePage() {
  return (
    <div className='min-h-screen relative overflow-hidden font-montserrat'>
      {/* Clean, simple background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f9f9f9] to-[#f0f9ff] -z-30'></div>

      {/* Subtle brand-colored accents */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>

      {/* Content */}
      <div className='relative z-10'>
        <div className='pt-12'>
          <Hero />
          <About />
        </div>
      </div>
    </div>
  );
}
