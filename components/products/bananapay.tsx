"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  Download,
  CreditCard,
  Shield,
  Zap,
  Globe,
  Smartphone,
  RefreshCw,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Send,
  Lock,
  Users,
  Flag,
} from "lucide-react";

export default function BananaPay() {
  return (
    <main className=''>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-20'>
        {/* Background elements */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#fffbeb] to-[#fff9f0] -z-30'></div>
        <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/5 rounded-full blur-3xl -z-20'></div>
        <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-600/5 rounded-full blur-3xl -z-20'></div>

        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            {/* Left side - Content */}
            <motion.div
              className='w-full lg:w-1/2'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <div className='inline-block px-4 py-2 bg-amber-500/10 rounded-full mb-4'>
                <p className='text-amber-600 font-medium text-sm'>
                  US Money Transfer
                </p>
              </div>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-gradient-amber'>Banana Pay</span> Money
                Transfer
              </h1>
              <p className='text-zinc-600 text-lg mb-8 max-w-xl'>
                Send money from the US to friends and family abroad with ease.
                Banana Pay LLC is the sole authorized agent for Tawakal Express
                with service in seventeen states.
              </p>

              <div className='flex flex-wrap gap-4 mb-8'>
                <div className='flex flex-wrap gap-3'>
                  <a
                    href='#'
                    className='flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='w-6 h-6 mr-2 flex-shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 384 512'
                        fill='currentColor'
                        className='w-full h-full'>
                        <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                      </svg>
                    </div>
                    <div>
                      <p className='text-xs opacity-80'>Download on the</p>
                      <p className='text-sm font-semibold'>App Store</p>
                    </div>
                  </a>
                  <a
                    href='#'
                    className='flex items-center bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='w-6 h-6 mr-2 flex-shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        fill='currentColor'
                        className='w-full h-full'>
                        <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                      </svg>
                    </div>
                    <div>
                      <p className='text-xs opacity-80'>GET IT ON</p>
                      <p className='text-sm font-semibold'>Google Play</p>
                    </div>
                  </a>
                </div>
                <Button
                  variant='outline'
                  className='rounded-full px-4 py-2 h-auto text-sm border-2 border-amber-500 text-amber-600 bg-white/50 hover:bg-white/80'>
                  Learn More
                </Button>
              </div>

              {/* Key features */}
              <div className='grid grid-cols-2 gap-4 mt-6'>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3'>
                      <Clock className='h-4 w-4 text-amber-500' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Fast Delivery
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3'>
                      <DollarSign className='h-4 w-4 text-amber-500' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Affordable Fees
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3'>
                      <Smartphone className='h-4 w-4 text-amber-500' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Mobile Friendly
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3'>
                      <Lock className='h-4 w-4 text-amber-500' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Secure Transfers
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
                        src={`https://randomuser.me/api/portraits/women/${
                          i + 15
                        }.jpg`}
                        alt='User'
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className='text-zinc-800 font-medium'>
                    Trusted by thousands
                  </p>
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
                    <span className='ml-2 text-sm text-zinc-600'>4.8/5</span>
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
                <div className='absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-3xl'></div>

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
                      <p className='text-sm font-medium'>$350.00</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className='absolute bottom-20 left-8 bg-white rounded-xl shadow-lg p-3 z-10'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2'>
                      <Flag className='w-4 h-4 text-amber-500' />
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>Money Sent To</p>
                      <p className='text-sm font-medium'>Ethiopia</p>
                    </div>
                  </div>
                </motion.div>

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative w-[280px] h-[560px]'>
                    {/* Phone frame */}
                    <div className='absolute inset-0 bg-black rounded-[40px] overflow-hidden border-8 border-zinc-800'>
                      <Image
                        src='/images/usa.webp'
                        alt='Banana Pay App'
                        fill
                        className='object-cover'
                      />

                      {/* App UI overlay */}
                      <div className='absolute inset-0 bg-black/30 flex flex-col'>
                        <div className='mt-auto p-4'>
                          <div className='bg-white/20 backdrop-blur-md rounded-xl p-3 mb-3'>
                            <p className='text-white text-xs opacity-90'>
                              Send Money To
                            </p>
                            <div className='flex items-center'>
                              <p className='text-white text-xl font-bold'>
                                Ethiopia
                              </p>
                              <div className='ml-2 bg-amber-500/20 rounded-full px-2 py-0.5'>
                                <p className='text-amber-400 text-xs'>
                                  Fast Delivery
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='grid grid-cols-3 gap-2'>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center'>
                              <Send className='h-5 w-5 text-white mb-1' />
                              <p className='text-white text-xs'>Send</p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center'>
                              <DollarSign className='h-5 w-5 text-white mb-1' />
                              <p className='text-white text-xs'>Rates</p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center'>
                              <Users className='h-5 w-5 text-white mb-1' />
                              <p className='text-white text-xs'>Recipients</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone frame details */}
                    <div className='absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-xl z-10'></div>
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
            <div className='inline-block px-4 py-2 bg-amber-500/10 rounded-full mb-4'>
              <p className='text-amber-600 font-medium text-sm'>
                Why Choose Banana Pay
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Powerful <span className='text-amber-500'>Features</span> for Your
              Needs
            </h2>
            <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
              Banana Pay offers a variety of features and capabilities that make
              it the perfect solution for sending money from the US.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'>
              <div className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Smartphone className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Convenient
                </h3>
                <p className='text-zinc-600 mb-4'>
                  Send money anytime, anywhere. All you need is a Banana Pay
                  account, an internet connection and online bank account.
                </p>
                <a
                  href='#'
                  className='text-amber-500 font-medium flex items-center text-sm hover:underline'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'>
              <div className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Zap className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>Fast</h3>
                <p className='text-zinc-600 mb-4'>
                  Instant delivery of money transfers straight to mobile phones,
                  etawakal or agent pick-ups in Africa with instant
                  notifications.
                </p>
                <a
                  href='#'
                  className='text-amber-500 font-medium flex items-center text-sm hover:underline'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'>
              <div className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Lock className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Trusted
                </h3>
                <p className='text-zinc-600 mb-4'>
                  Trusted by thousands. Putting the security of your money and
                  data first. We encrypt your personal data and use the highest
                  security standards.
                </p>
                <a
                  href='#'
                  className='text-amber-500 font-medium flex items-center text-sm hover:underline'>
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
            <div className='inline-block px-4 py-2 bg-amber-500/10 rounded-full mb-4'>
              <p className='text-amber-600 font-medium text-sm'>
                Simple Process
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              How <span className='text-amber-500'>Banana Pay</span> Works
            </h2>
            <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
              Getting started with Banana Pay is easy. Follow these simple steps
              to begin your journey.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {/* Step 1 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 text-amber-500 font-bold text-xl'>
                  1
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Sign In
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  Sign in with your Banana Pay account or create a new account
                  if you don't have one.
                </p>
              </div>
              <div className='hidden md:block absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-amber-500 to-transparent -translate-y-1/2 z-0'></div>
            </div>

            {/* Step 2 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center mb-4 text-amber-600 font-bold text-xl'>
                  2
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Select Country & Enter Details
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  Select the country to which the fund is to be transferred and
                  provide your bank details.
                </p>
              </div>
              <div className='hidden md:block absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-amber-600 to-transparent -translate-y-1/2 z-0'></div>
            </div>

            {/* Step 3 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-amber-700/10 flex items-center justify-center mb-4 text-amber-700 font-bold text-xl'>
                  3
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Complete Transfer
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  After verification, complete the transfer and receive a
                  confirmation with your remittance number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Ready to Send Money with Banana Pay?
            </h2>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Join thousands of satisfied users who are already enjoying the
              benefits of Banana Pay. Download the app today and start your
              journey.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a
                href='#'
                className='flex items-center bg-white text-amber-600 rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                <div className='w-6 h-6 mr-2 flex-shrink-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                    fill='currentColor'
                    className='w-full h-full'>
                    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                  </svg>
                </div>
                <div>
                  <p className='text-xs opacity-80'>Download on the</p>
                  <p className='text-sm font-semibold'>App Store</p>
                </div>
              </a>
              <a
                href='#'
                className='flex items-center bg-white text-amber-600 rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                <div className='w-6 h-6 mr-2 flex-shrink-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    fill='currentColor'
                    className='w-full h-full'>
                    <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                  </svg>
                </div>
                <div>
                  <p className='text-xs opacity-80'>GET IT ON</p>
                  <p className='text-sm font-semibold'>Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
