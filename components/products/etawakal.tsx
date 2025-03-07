"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Monitor,
  CreditCard,
  Shield,
  Zap,
  Clock,
  Users,
  ArrowRight,
  Send,
  CheckCircle,
  Lock,
  Search,
  Laptop,
  RefreshCw,
  MapPin,
} from "lucide-react";

export default function ETawakal() {
  return (
    <main className=''>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-20'>
        {/* Background elements */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#f0fff4] to-[#f0f9ff] -z-30'></div>
        <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>
        <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>

        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            {/* Left side - Content */}
            <motion.div
              className='w-full lg:w-1/2'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
                <p className='text-tawakal-green font-medium text-sm'>
                  Online Agent
                </p>
              </div>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-gradient-green-blue'>eTawakal</span> Money
                Transfer
              </h1>
              <p className='text-zinc-600 text-lg mb-8 max-w-xl'>
                Send money online from anywhere, anytime with our secure
                platform. An interactive remittance service that offers
                real-time transfers to mobile-money users in Somalia.
              </p>

              <div className='flex flex-wrap gap-4 mb-8'>
                <Button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white rounded-xl px-6 py-3 text-sm shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                  <Laptop className='mr-2 h-5 w-5' />
                  Access Online
                </Button>
                <Button
                  variant='outline'
                  className='rounded-full px-4 py-2 h-auto text-sm border-2 border-tawakal-green text-tawakal-green bg-white/50 hover:bg-white/80'>
                  Learn More
                </Button>
              </div>

              {/* Key features */}
              <div className='grid grid-cols-2 gap-4 mt-6'>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-tawakal-green/10 flex items-center justify-center mr-3'>
                      <Zap className='h-4 w-4 text-tawakal-green' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Fast & Secure
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-tawakal-green/10 flex items-center justify-center mr-3'>
                      <RefreshCw className='h-4 w-4 text-tawakal-green' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Real-time Transfers
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-tawakal-green/10 flex items-center justify-center mr-3'>
                      <Lock className='h-4 w-4 text-tawakal-green' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      256-bit Encryption
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-tawakal-green/10 flex items-center justify-center mr-3'>
                      <Globe className='h-4 w-4 text-tawakal-green' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Send From Anywhere
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-8 flex items-center gap-6'>
                <div className='flex -space-x-2'>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className='w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm'>
                      <Image
                        src={`https://randomuser.me/api/portraits/men/${
                          i + 30
                        }.jpg`}
                        alt='User'
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className='text-zinc-800 font-medium'>Trusted by many</p>
                  <div className='flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className='w-4 h-4 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                    ))}
                    <span className='ml-2 text-sm text-zinc-600'>4.9/5</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              className='w-full lg:w-1/2'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <div className='relative h-[500px] w-full'>
                {/* Background elements */}
                <div className='absolute inset-0 bg-gradient-to-br from-tawakal-green/20 to-tawakal-blue/20 rounded-3xl'></div>

                {/* Floating elements */}
                <motion.div
                  className='absolute top-12 right-12 bg-white rounded-xl shadow-lg p-3 z-10'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>
                        Transfer Successful
                      </p>
                      <p className='text-sm font-medium'>$200.00</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className='absolute bottom-20 left-8 bg-white rounded-xl shadow-lg p-3 z-10'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2'>
                      <MapPin className='w-4 h-4 text-tawakal-blue' />
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>Destination</p>
                      <p className='text-sm font-medium'>Garowe, Somalia</p>
                    </div>
                  </div>
                </motion.div>

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative w-[560px] h-[350px]'>
                    {/* Computer mockup */}
                    <div className='absolute inset-0 bg-zinc-800 rounded-xl overflow-hidden border-8 border-zinc-700 shadow-2xl'>
                      <div className='absolute top-0 left-0 right-0 h-8 bg-zinc-900 flex items-center px-3'>
                        <div className='flex space-x-1.5'>
                          <div className='w-3 h-3 rounded-full bg-red-500'></div>
                          <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                          <div className='w-3 h-3 rounded-full bg-green-500'></div>
                        </div>
                      </div>
                      <div className='absolute top-8 left-0 right-0 bottom-0 bg-white'>
                        <Image
                          src='/images/iphone-macbook.webp'
                          alt='eTawakal Platform'
                          fill
                          className='object-cover'
                        />

                        {/* Web UI overlay */}
                        <div className='absolute inset-0 bg-black/20 flex flex-col'>
                          <div className='mt-auto p-6'>
                            <div className='bg-white/90 backdrop-blur-md rounded-xl p-4 mb-4 shadow-lg'>
                              <div className='flex items-center justify-between mb-3'>
                                <h3 className='text-tawakal-green font-bold'>
                                  Send Money Online
                                </h3>
                                <div className='bg-tawakal-green/10 rounded-full px-2 py-1'>
                                  <p className='text-tawakal-green text-xs font-medium'>
                                    Secure
                                  </p>
                                </div>
                              </div>
                              <div className='grid grid-cols-2 gap-3'>
                                <div className='bg-gray-50 rounded-lg p-3'>
                                  <p className='text-xs text-gray-500 mb-1'>
                                    Send From
                                  </p>
                                  <p className='text-sm font-medium'>
                                    United States
                                  </p>
                                </div>
                                <div className='bg-gray-50 rounded-lg p-3'>
                                  <p className='text-xs text-gray-500 mb-1'>
                                    Send To
                                  </p>
                                  <p className='text-sm font-medium'>Somalia</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
              <p className='text-tawakal-green font-medium text-sm'>
                Why Choose eTawakal
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Powerful <span className='text-tawakal-green'>Features</span> for
              Your Needs
            </h2>
            <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
              eTawakal offers a variety of features and capabilities that make
              it the perfect solution for online money transfers.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'>
              <div className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-tawakal-green to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Globe className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Send From Anywhere
                </h3>
                <p className='text-zinc-600 mb-4'>
                  Send money from anywhere anytime using our online platform. No
                  need to visit physical locations.
                </p>
                <a
                  href='#'
                  className='text-tawakal-green font-medium flex items-center text-sm hover:underline'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'>
              <div className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-tawakal-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Zap className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Fast & Secure
                </h3>
                <p className='text-zinc-600 mb-4'>
                  Experience fast, secure and reliable transfers with 256-bit
                  encryption protocol for maximum security.
                </p>
                <a
                  href='#'
                  className='text-tawakal-green font-medium flex items-center text-sm hover:underline'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'>
              <div className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-tawakal-blue to-tawakal-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Monitor className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Online Account System
                </h3>
                <p className='text-zinc-600 mb-4'>
                  Access your online account system with detailed transaction
                  reports and history at any time.
                </p>
                <a
                  href='#'
                  className='text-tawakal-green font-medium flex items-center text-sm hover:underline'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
              <p className='text-tawakal-green font-medium text-sm'>
                Simple Process
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              How <span className='text-tawakal-green'>eTawakal</span> Works
            </h2>
            <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
              Getting started with eTawakal is easy. Follow these simple steps
              to begin your journey.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {/* Step 1 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-tawakal-green/10 flex items-center justify-center mb-4 text-tawakal-green font-bold text-xl'>
                  1
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Create Account
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  Create your eTawakal account online and verify your identity
                  to get started.
                </p>
              </div>
              <div className='hidden md:block absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-tawakal-green to-transparent -translate-y-1/2 z-0'></div>
            </div>

            {/* Step 2 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-tawakal-blue/10 flex items-center justify-center mb-4 text-tawakal-blue font-bold text-xl'>
                  2
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Enter Transfer Details
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  Enter your recipient's information and the amount you want to
                  send.
                </p>
              </div>
              <div className='hidden md:block absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-tawakal-blue to-transparent -translate-y-1/2 z-0'></div>
            </div>

            {/* Step 3 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500 font-bold text-xl'>
                  3
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Complete Transfer
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  Pay securely online and your money will be on its way to your
                  recipient instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Ready to Send Money with eTawakal?
            </h2>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Join thousands of satisfied users who are already enjoying the
              benefits of eTawakal. Start sending money online today.
            </p>
            <div className='flex justify-center'>
              <Button className='bg-white text-tawakal-green hover:bg-gray-100 rounded-xl px-8 py-4 text-base font-medium shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                <Laptop className='mr-2 h-5 w-5' />
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
