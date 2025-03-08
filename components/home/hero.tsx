"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className='relative overflow-hidden py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto'>
      {/* Subtle background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-zinc-100/50 opacity-50'></div>

      <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center relative z-10'>
        {/* Left side content */}
        <div className='space-y-8 z-10 -mt-24 lg:mt-0'>
          {/* Badge using the Badge component */}
          <Badge
            variant='outline'
            className='px-4 py-2 bg-tawakal-green/10 border-0 rounded-full hover:bg-tawakal-green/20 transition-colors duration-300'>
            <span className='text-tawakal-green font-medium text-sm'>
              Safe, Secure & Reliable Since 40+ Years
            </span>
          </Badge>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 leading-tight'>
            International{" "}
            <span className='bg-gradient-to-r from-tawakal-green to-tawakal-blue bg-clip-text text-transparent'>
              money transfers
            </span>
            <br />
            made{" "}
            <span className='bg-gradient-to-r from-tawakal-blue to-tawakal-red bg-clip-text text-transparent'>
              simple
            </span>
          </h1>

          <p className='text-zinc-600 text-lg max-w-lg'>
            Send money to family and friends across 14+ countries including
            Somalia, Kenya, UAE, UK, USA and more with low fees and fast
            delivery.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 text-center lg:text-left'>
            <Link href='#products'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-tawakal-green to-tawakal-blue hover:from-tawakal-blue hover:to-tawakal-green text-white rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-300 group'>
                Download our apps{" "}
                <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
                  →
                </span>
              </Button>
            </Link>

            <Link href='#agents'>
              <Button
                variant='outline'
                size='lg'
                className='border-zinc-300 hover:bg-zinc-100 text-zinc-800 rounded-full px-8 py-6 text-base'>
                Find agents
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side with card mockups */}
        <div className='relative h-[400px] lg:h-[500px] z-10 w-full'>
          <div className='absolute top-0 left-0 w-full h-full'>
            {/* Credit Card */}
            <Card className='absolute top-10 left-10 w-64 md:w-72 h-40 md:h-44 bg-gradient-to-br from-tawakal-green to-tawakal-blue rounded-2xl shadow-xl transform rotate-6 z-20 overflow-hidden border-0 animate-card-breathe'>
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
            </Card>

            {/* Transaction Card */}
            <Card className='absolute bottom-20 right-10 w-56 md:w-64 bg-white rounded-xl shadow-lg transform -rotate-3 z-10 animate-card-breathe-alt'>
              <CardContent className='p-4'>
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
                    <p className='text-xs text-zinc-500'>
                      To Mogadishu, Somalia
                    </p>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-lg font-bold text-tawakal-green'>
                    $350.00
                  </p>
                  <p className='text-xs text-zinc-500'>Just now</p>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className='absolute top-40 right-0 w-48 md:w-56 bg-white rounded-xl shadow-lg transform rotate-12 z-0 animate-subtle-float'>
              <CardContent className='p-4'>
                <p className='text-sm font-medium text-zinc-800 mb-2'>
                  Global Transfers
                </p>
                <div className='h-24 flex items-end space-x-2'>
                  <div className='w-5 md:w-6 bg-tawakal-green/20 rounded-t-md h-12 animate-bar-pulse'></div>
                  <div className='w-5 md:w-6 bg-tawakal-green/30 rounded-t-md h-16 animate-bar-pulse [animation-delay:0.2s]'></div>
                  <div className='w-5 md:w-6 bg-tawakal-green/50 rounded-t-md h-10 animate-bar-pulse [animation-delay:0.4s]'></div>
                  <div className='w-5 md:w-6 bg-tawakal-green/70 rounded-t-md h-20 animate-bar-pulse [animation-delay:0.6s]'></div>
                  <div className='w-5 md:w-6 bg-tawakal-green rounded-t-md h-14 animate-bar-pulse [animation-delay:0.8s]'></div>
                  <div className='w-5 md:w-6 bg-tawakal-green/60 rounded-t-md h-18 animate-bar-pulse [animation-delay:1s]'></div>
                </div>
                <div className='flex justify-between mt-2'>
                  <p className='text-xs text-zinc-500'>Jan</p>
                  <p className='text-xs text-zinc-500'>Jun</p>
                </div>
              </CardContent>
            </Card>

            {/* Notification Card */}
            <Card className='absolute bottom-40 left-0 w-40 md:w-48 bg-white rounded-xl shadow-lg transform -rotate-6 z-30 animate-subtle-float [animation-delay:0.5s]'>
              <CardContent className='p-3'>
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
                  <span className='text-tawakal-blue font-medium'>
                    KES 5,000
                  </span>{" "}
                  was received!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
