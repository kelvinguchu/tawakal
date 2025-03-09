"use client";
import React from "react";
import Hero from "./hero";
import About from "./about";
import Products from "./products";
import Agents from "./agents";
import Partners from "./partners";

export default function HomePage() {
  return (
    <div className='min-h-screen relative overflow-hidden font-montserrat'>
      {/* Main background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 dark:from-zinc-900 dark:to-zinc-800 -z-30'></div>

      {/* Glowing orbs in background */}
      <div className='absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-tawakal-blue/10 blur-[100px] animate-pulse -z-20'></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat opacity-[0.02] -z-10"></div>
      <div className='absolute bottom-20 right-10 w-16 h-16 border border-tawakal-blue/20 rounded-full animate-spin-slow [animation-direction:reverse] -z-10'></div>

      {/* Floating particles */}
      <div className='absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-tawakal-blue/50 animate-float -z-10'></div>
      <div className='absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-tawakal-red/30 animate-float-reverse -z-10'></div>

      {/* Content */}
      <div className='relative z-10'>
        <div className='pt-12'>
          <Hero />
          <About />
          <Products />
          <Agents />
          <Partners />
        </div>
      </div>
    </div>
  );
}
