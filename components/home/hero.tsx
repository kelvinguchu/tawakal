"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className='relative overflow-hidden py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left side content */}
        <div className='space-y-8 z-10'>
          <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full'>
            <p className='text-tawakal-green font-medium text-sm'>
              Safe, Secure & Reliable Since 40+ Years
            </p>
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 leading-tight'>
            International{" "}
            <span className='text-gradient-green-blue'>money transfers</span>
            <br />
            made <span className='text-gradient-blue-red'>simple</span>
          </h1>

          <p className='text-zinc-600 text-lg max-w-lg'>
            Send money to family and friends across 14+ countries including
            Somalia, Kenya, UAE, UK, USA and more with low fees and fast
            delivery.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue hover:from-tawakal-blue hover:to-tawakal-green text-white rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-300'>
              Download our apps <span className='ml-2'>→</span>
            </Button>

            <Button
              variant='outline'
              className='border-zinc-300 hover:bg-zinc-100 text-zinc-800 rounded-full px-8 py-6 text-base'>
              Find agents
            </Button>
          </div>
        </div>

        {/* Right side with card mockups */}
        <div className='relative h-[500px] z-10'>
          <div className='absolute top-0 left-0 w-full h-full'>
            {/* Credit Card */}
            <div className='absolute top-10 left-10 w-72 h-44 bg-gradient-to-br from-tawakal-green to-tawakal-blue rounded-2xl shadow-xl transform rotate-6 z-20'>
              <div className='p-6 text-white h-full flex flex-col justify-between'>
                <div className='flex justify-between items-start'>
                  <div>
                    <p className='text-xs opacity-80'>Tawakal Express</p>
                    <p className='text-lg font-bold mt-1'>Premium Card</p>
                  </div>
                  <div className='w-12 h-12 rounded-full bg-white/20 flex items-center justify-center'>
                    <Image
                      src='/icons/card-chip.svg'
                      alt='Card Chip'
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-sm opacity-80 mb-1'>Card Number</p>
                  <p className='font-mono'>**** **** **** 4289</p>
                </div>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-xs opacity-80'>Card Holder</p>
                    <p className='text-sm font-medium'>AHMED MOHAMED</p>
                  </div>
                  <div>
                    <p className='text-xs opacity-80'>Expires</p>
                    <p className='text-sm font-medium'>09/25</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Card */}
            <div className='absolute bottom-20 right-10 w-64 bg-white rounded-xl shadow-lg p-4 transform -rotate-3 z-10'>
              <div className='flex items-center mb-3'>
                <div className='w-10 h-10 rounded-lg bg-tawakal-green/10 flex items-center justify-center mr-3'>
                  <Image
                    src='/icons/payment-icon.svg'
                    alt='Payment'
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p className='text-sm font-medium text-zinc-800'>
                    Transfer Sent
                  </p>
                  <p className='text-xs text-zinc-500'>To Mogadishu, Somalia</p>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-lg font-bold text-tawakal-green'>$350.00</p>
                <p className='text-xs text-zinc-500'>Just now</p>
              </div>
            </div>

            {/* Stats Card */}
            <div className='absolute top-40 right-0 w-56 bg-white rounded-xl shadow-lg p-4 transform rotate-12 z-0'>
              <p className='text-sm font-medium text-zinc-800 mb-2'>
                Global Transfers
              </p>
              <div className='h-24 flex items-end space-x-2'>
                <div className='w-6 bg-tawakal-green/20 rounded-t-md h-12'></div>
                <div className='w-6 bg-tawakal-green/30 rounded-t-md h-16'></div>
                <div className='w-6 bg-tawakal-green/50 rounded-t-md h-10'></div>
                <div className='w-6 bg-tawakal-green/70 rounded-t-md h-20'></div>
                <div className='w-6 bg-tawakal-green rounded-t-md h-14'></div>
                <div className='w-6 bg-tawakal-green/60 rounded-t-md h-18'></div>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='text-xs text-zinc-500'>Jan</p>
                <p className='text-xs text-zinc-500'>Jun</p>
              </div>
            </div>

            {/* Notification Card */}
            <div className='absolute bottom-40 left-0 w-48 bg-white rounded-xl shadow-lg p-3 transform -rotate-6 z-30'>
              <div className='flex items-center'>
                <div className='w-8 h-8 rounded-full bg-tawakal-blue/10 flex items-center justify-center mr-2'>
                  <Image
                    src='/icons/bell-icon.svg'
                    alt='Bell'
                    width={16}
                    height={16}
                  />
                </div>
                <p className='text-sm font-medium text-zinc-800'>New Alert</p>
              </div>
              <p className='text-xs text-zinc-600 mt-2'>
                Your transfer of{" "}
                <span className='text-tawakal-blue font-medium'>KES 5,000</span>{" "}
                was received!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
