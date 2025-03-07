"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className='py-24 relative overflow-hidden'>
      {/* Background elements - matching Hero style */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f9f9f9] to-[#f0f9ff] -z-30'></div>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-tawakal-red/5 rounded-full blur-3xl -z-20'></div>

      <div className='container mx-auto px-4'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
            <p className='text-tawakal-green font-medium text-sm'>
              40+ Years of Excellence
            </p>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Our <span className='text-gradient-green-blue'>Global</span>{" "}
            <span className='text-gradient-blue-red'>Story</span>
          </h2>
          <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
            From our humble beginnings in Somalia to becoming a global financial
            service provider, we've been connecting families across continents
            for over four decades.
          </p>
        </div>

        {/* Main content - Creative layout */}
        <div className='relative'>
          {/* Creative image display */}
          <div className='relative mx-auto mb-24'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-center'>
              {/* Left side - Image with creative overlay */}
              <div className='lg:col-span-7 relative'>
                <div className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src='/images/globe.webp'
                    alt='International Money Transfer'
                    fill
                    className='object-cover'
                  />

                  {/* Creative overlay elements */}
                  <div className='absolute inset-0 bg-gradient-to-tr from-tawakal-green/60 via-tawakal-blue/40 to-transparent mix-blend-multiply'></div>

                  {/* Floating elements */}
                  <div className='absolute top-10 left-10 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg transform rotate-3 z-10 max-w-[200px]'>
                    <p className='text-sm font-semibold text-zinc-800'>
                      Started in
                    </p>
                    <p className='text-3xl font-bold text-tawakal-green'>
                      Somalia
                    </p>
                    <p className='text-xs text-zinc-600 mt-1'>
                      as a physical money transfer company
                    </p>
                  </div>

                  {/* Animated dots */}
                  <div className='absolute inset-0 z-0'>
                    <div className='absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse'></div>
                    <div className='absolute top-3/4 left-1/3 w-2 h-2 bg-white rounded-full animate-ping'></div>
                    <div className='absolute bottom-1/4 right-1/3 w-4 h-4 bg-white/50 rounded-full animate-pulse'></div>
                  </div>

                  {/* Connection lines */}
                  <svg
                    className='absolute inset-0 w-full h-full z-0'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'>
                    <path
                      d='M20,30 Q50,10 80,40'
                      stroke='rgba(255,255,255,0.3)'
                      strokeWidth='0.5'
                      fill='none'
                    />
                    <path
                      d='M10,50 Q50,80 90,60'
                      stroke='rgba(255,255,255,0.3)'
                      strokeWidth='0.5'
                      fill='none'
                    />
                  </svg>
                </div>

                {/* Floating card */}
                <div className='absolute -bottom-10 -right-5 w-64 bg-white rounded-xl shadow-lg p-4 transform -rotate-3 z-20'>
                  <div className='flex items-center mb-3'>
                    <div className='w-10 h-10 rounded-lg bg-tawakal-green/10 flex items-center justify-center mr-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-tawakal-green'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div>
                      <p className='text-sm font-medium text-zinc-800'>
                        Fast Transfers
                      </p>
                      <p className='text-xs text-zinc-500'>Within minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Stats cards */}
              <div className='lg:col-span-5 space-y-6'>
                <div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-tawakal-green to-tawakal-blue flex items-center justify-center mr-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <div>
                      <p className='text-4xl font-bold text-gradient-green-blue'>
                        40+
                      </p>
                      <p className='text-zinc-500 text-sm'>
                        Years of Experience
                      </p>
                    </div>
                  </div>
                  <p className='text-zinc-600'>
                    With over four decades of combined experience in
                    international money transfers, we've become the safest, most
                    secure and reliable option for our customers.
                  </p>
                </div>

                <div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-tawakal-blue to-tawakal-red flex items-center justify-center mr-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-white'
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
                      <p className='text-4xl font-bold text-gradient-blue-red'>
                        14+
                      </p>
                      <p className='text-zinc-500 text-sm'>
                        Countries with Branches
                      </p>
                    </div>
                  </div>
                  <p className='text-zinc-600'>
                    Our extensive network spans across Australia, Canada,
                    Djibouti, Ethiopia, Kenya, Norway, Somalia, South Sudan,
                    Sudan, Sweden, UAE, Uganda, UK, and USA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values section */}
          <div className='mt-20'>
            <h3 className='text-2xl md:text-3xl font-bold text-center mb-12'>
              Our Core <span className='text-gradient-blue-red'>Values</span>
            </h3>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {/* Value 1 */}
              <div className='bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group'>
                <div className='w-14 h-14 rounded-full bg-gradient-to-r from-tawakal-green to-tawakal-blue flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h4 className='text-lg font-semibold text-zinc-800 text-center mb-2'>
                  Integrity
                </h4>
                <p className='text-zinc-600 text-center text-sm'>
                  Being ethical, honest, respectful, and always trying to do
                  what is right.
                </p>
              </div>

              {/* Value 2 */}
              <div className='bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group'>
                <div className='w-14 h-14 rounded-full bg-gradient-to-r from-tawakal-blue to-tawakal-green flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h4 className='text-lg font-semibold text-zinc-800 text-center mb-2'>
                  Excellence
                </h4>
                <p className='text-zinc-600 text-center text-sm'>
                  Challenging convention, innovating and delivering exceptional
                  results every day.
                </p>
              </div>

              {/* Value 3 */}
              <div className='bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group'>
                <div className='w-14 h-14 rounded-full bg-gradient-to-r from-tawakal-blue to-tawakal-red flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h4 className='text-lg font-semibold text-zinc-800 text-center mb-2'>
                  Customer Care
                </h4>
                <p className='text-zinc-600 text-center text-sm'>
                  Working to create value for our customers and earning their
                  trust every day.
                </p>
              </div>

              {/* Value 4 */}
              <div className='bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group'>
                <div className='w-14 h-14 rounded-full bg-gradient-to-r from-tawakal-red to-tawakal-blue flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                  </svg>
                </div>
                <h4 className='text-lg font-semibold text-zinc-800 text-center mb-2'>
                  Teamwork
                </h4>
                <p className='text-zinc-600 text-center text-sm'>
                  Working together and helping each other grow to execute our
                  mission.
                </p>
              </div>
            </div>
          </div>

          {/* Global presence visualization - Improved */}
          <div className='mt-20'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-tawakal-green/5 rounded-full blur-3xl -z-10'></div>
              <div className='absolute bottom-0 left-0 w-64 h-64 bg-tawakal-blue/5 rounded-full blur-3xl -z-10'></div>

              <h3 className='text-2xl md:text-3xl font-bold text-center mb-8'>
                Global{" "}
                <span className='text-gradient-green-blue'>Presence</span>
              </h3>

              {/* Regions */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='bg-gradient-to-br from-tawakal-green/10 to-tawakal-green/5 rounded-xl p-5 shadow-md'>
                  <h4 className='text-lg font-semibold text-zinc-800 mb-3 flex items-center'>
                    <span className='text-2xl mr-2'>🌍</span> Africa
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇸🇴</span>
                      <span className='text-xs font-medium'>Somalia</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇰🇪</span>
                      <span className='text-xs font-medium'>Kenya</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇪🇹</span>
                      <span className='text-xs font-medium'>Ethiopia</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇺🇬</span>
                      <span className='text-xs font-medium'>Uganda</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇩🇯</span>
                      <span className='text-xs font-medium'>Djibouti</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇸🇸</span>
                      <span className='text-xs font-medium'>South Sudan</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇸🇩</span>
                      <span className='text-xs font-medium'>Sudan</span>
                    </div>
                  </div>
                </div>

                <div className='bg-gradient-to-br from-tawakal-blue/10 to-tawakal-blue/5 rounded-xl p-5 shadow-md'>
                  <h4 className='text-lg font-semibold text-zinc-800 mb-3 flex items-center'>
                    <span className='text-2xl mr-2'>🌍</span> Europe & Americas
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇬🇧</span>
                      <span className='text-xs font-medium'>UK</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇸🇪</span>
                      <span className='text-xs font-medium'>Sweden</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇳🇴</span>
                      <span className='text-xs font-medium'>Norway</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇺🇸</span>
                      <span className='text-xs font-medium'>USA</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇨🇦</span>
                      <span className='text-xs font-medium'>Canada</span>
                    </div>
                  </div>
                </div>

                <div className='bg-gradient-to-br from-tawakal-red/10 to-tawakal-red/5 rounded-xl p-5 shadow-md'>
                  <h4 className='text-lg font-semibold text-zinc-800 mb-3 flex items-center'>
                    <span className='text-2xl mr-2'>🌏</span> Middle East & Asia
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇦🇪</span>
                      <span className='text-xs font-medium'>UAE</span>
                    </div>
                    <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-sm'>
                      <span className='text-sm mr-1'>🇦🇺</span>
                      <span className='text-xs font-medium'>Australia</span>
                    </div>
                  </div>
                  <p className='text-xs text-zinc-600 mt-3'>
                    Plus partnerships in Bangladesh, Egypt, India, Indonesia,
                    Jordan, Kuwait, Lebanon, Morocco, Nepal, Pakistan,
                    Philippines, and Sri Lanka.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='mt-16 text-center'>
            <Button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue hover:from-tawakal-blue hover:to-tawakal-green text-white rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-300'>
              Learn More About Us <span className='ml-2'>→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
