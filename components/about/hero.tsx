"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className='relative pt-32 pb-20 overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f9f9f9] to-[#f0f9ff] -z-30'></div>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-tawakal-red/5 rounded-full blur-3xl -z-20'></div>

      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
              <p className='text-tawakal-green font-medium text-sm'>
                About Tawakal Express
              </p>
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
              A <span className='text-gradient-green-blue'>Pioneer</span> in{" "}
              <span className='text-gradient-blue-red'>International</span>{" "}
              Money Transfers
            </h1>
            <p className='text-lg text-zinc-600 mb-8 max-w-xl'>
              With a rich combined experience of more than 40 years in
              international money transfer services, we've become the safest,
              most secure and reliable money transfer company.
            </p>

            <div className='flex flex-wrap gap-4 mb-8'>
              <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md flex items-center space-x-3'>
                <div className='w-12 h-12 rounded-full bg-tawakal-green/10 flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-tawakal-green'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-bold text-zinc-800'>40+ Years</p>
                  <p className='text-sm text-zinc-600'>Combined Experience</p>
                </div>
              </div>

              <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md flex items-center space-x-3'>
                <div className='w-12 h-12 rounded-full bg-tawakal-blue/10 flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-tawakal-blue'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-bold text-zinc-800'>14+ Countries</p>
                  <p className='text-sm text-zinc-600'>Global Presence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className='relative'>
            <div className='relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/somalia.webp'
                alt='Tawakal Express Office'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-tr from-tawakal-green/30 via-transparent to-tawakal-blue/30'></div>

              {/* Floating card */}
              <div className='absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg max-w-xs'>
                <p className='text-sm font-medium text-zinc-800'>
                  "Started as a physical money transfer company in Somalia,
                  we've made the whole process simple by using our money
                  remitting delivery methods."
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className='absolute -top-6 -left-6 w-24 h-24 rounded-full bg-tawakal-green/20 -z-10'></div>
            <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-tawakal-blue/20 -z-10'></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
