import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faArrowRight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Agents() {
  return (
    <section id='agents' className='py-16 sm:py-24 relative overflow-hidden'>
      {/* Background elements - simplified */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f9f9f9] to-[#f0f9ff] -z-30'></div>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>

      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Simple agent card */}
          <div className='bg-white/90 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/30'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              {/* Left side - Image */}
              <div className='relative h-64 md:h-auto'>
                <Image
                  src='/images/globe.webp'
                  alt='World map showing Tawakal Express agent locations'
                  fill
                  className='object-cover opacity-20'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-tawakal-green/20 to-tawakal-blue/20'></div>

                {/* Decorative elements */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative w-full h-full'>
                    {/* Decorative location markers */}
                    <div className='absolute top-[30%] left-[25%] w-3 h-3 rounded-full bg-white shadow-md border-2 border-tawakal-green'></div>
                    <div className='absolute top-[45%] left-[55%] w-3 h-3 rounded-full bg-white shadow-md border-2 border-tawakal-green'></div>
                    <div className='absolute top-[35%] left-[50%] w-3 h-3 rounded-full bg-white shadow-md border-2 border-tawakal-blue'></div>
                    <div className='absolute top-[40%] left-[65%] w-3 h-3 rounded-full bg-white shadow-md border-2 border-tawakal-gold'></div>
                  </div>
                </div>

                {/* Overlay with icon */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg'>
                    <FontAwesomeIcon
                      icon={faUsers}
                      className='h-8 w-8 text-tawakal-blue'
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className='p-6 sm:p-8 flex flex-col justify-center'>
                <div className='mb-2'>
                  <div className='inline-flex items-center px-3 py-1 bg-tawakal-green/10 rounded-full mb-4'>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className='mr-2 h-3 w-3 text-tawakal-green'
                    />
                    <p className='text-tawakal-green font-medium text-xs sm:text-sm'>
                      Global Network
                    </p>
                  </div>
                </div>

                <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
                  Our <span className='text-gradient-green-blue'>Trusted</span>{" "}
                  Agents
                </h2>

                <p className='text-zinc-600 text-sm sm:text-base mb-6'>
                  We have a network of trusted agents in over 14 countries
                  worldwide, ready to assist you with your money transfer needs.
                  Visit one of our many agent locations for fast, secure, and
                  reliable in-person service.
                </p>

                <Button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white rounded-full px-6 py-2 text-sm shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto'>
                  Find Nearest Agent
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='ml-2 h-3.5 w-3.5'
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
