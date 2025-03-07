"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Download,
  CreditCard,
  Shield,
  Zap,
  Globe,
  Send,
  Wallet,
  RefreshCw,
  DollarSign,
  Search,
  History,
  Users,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Repeat,
  ChevronsUp,
  Apple,
  PlayCircle,
} from "lucide-react";

export default function TPlus() {
  return (
    <main className=''>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-20'>
        {/* Background elements */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#f0f9ff] to-[#f9f9f9] -z-30'></div>
        <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>
        <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>

        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            {/* Left side - Content */}
            <motion.div
              className='w-full lg:w-1/2'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <div className='inline-block px-4 py-2 bg-tawakal-blue/10 rounded-full mb-4'>
                <p className='text-tawakal-blue font-medium text-sm'>
                  First Mobile Wallet of Somalia
                </p>
              </div>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-gradient-green-blue'>T-Plus</span> Mobile
                Wallet
              </h1>
              <p className='text-zinc-600 text-lg mb-8 max-w-xl'>
                Experience a whole new method of remittance and financial
                transactions. Remit, withdraw, request, transfer funds, purchase
                goods and services, and even pay your bills inside Somalia.
              </p>

              <div className='flex flex-wrap gap-4 mb-8'>
                <div className='flex flex-wrap gap-3'>
                  <a
                    href='#'
                    className='flex items-center bg-gradient-to-r from-tawakal-blue to-tawakal-green text-white rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
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
                    className='flex items-center bg-gradient-to-r from-tawakal-blue to-tawakal-red text-white rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
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
                  className='rounded-full px-4 py-2 h-auto text-sm border-2 border-tawakal-blue text-tawakal-blue bg-white/50 hover:bg-white/80'>
                  Learn More
                </Button>
              </div>

              {/* Key features */}
              <div className='grid grid-cols-2 gap-4 mt-6'>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-tawakal-blue/10 flex items-center justify-center mr-3'>
                      <Send className='h-4 w-4 text-tawakal-blue' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Send Money
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-tawakal-green/10 flex items-center justify-center mr-3'>
                      <Users className='h-4 w-4 text-tawakal-green' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Request Money
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-tawakal-red/10 flex items-center justify-center mr-3'>
                      <Search className='h-4 w-4 text-tawakal-red' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Find Merchants
                    </p>
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 rounded-full bg-tawakal-gold/10 flex items-center justify-center mr-3'>
                      <CreditCard className='h-4 w-4 text-tawakal-gold' />
                    </div>
                    <p className='text-sm font-medium text-zinc-800'>
                      Pay Merchants
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
                          i + 20
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
                    Trusted by 500K+ users
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
                <div className='absolute inset-0 bg-gradient-to-br from-tawakal-blue/20 to-tawakal-green/20 rounded-3xl'></div>

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
                        Payment Successful
                      </p>
                      <p className='text-sm font-medium'>$250.00</p>
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
                      <Send className='w-4 h-4 text-tawakal-blue' />
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>Money Sent</p>
                      <p className='text-sm font-medium'>To Mobile Wallet</p>
                    </div>
                  </div>
                </motion.div>

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative w-[280px] h-[560px]'>
                    {/* Phone frame */}
                    <div className='absolute inset-0 bg-black rounded-[40px] overflow-hidden border-8 border-zinc-800'>
                      <Image
                        src='/images/somalia.webp'
                        alt='T-Plus App'
                        fill
                        className='object-cover'
                      />

                      {/* App UI overlay */}
                      <div className='absolute inset-0 bg-black/30 flex flex-col'>
                        <div className='mt-auto p-4'>
                          <div className='bg-white/20 backdrop-blur-md rounded-xl p-3 mb-3'>
                            <p className='text-white text-xs opacity-90'>
                              Your Balance
                            </p>
                            <p className='text-white text-xl font-bold'>
                              $1,250.00
                            </p>
                          </div>
                          <div className='grid grid-cols-3 gap-2'>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center'>
                              <Send className='h-5 w-5 text-white mb-1' />
                              <p className='text-white text-xs'>Send</p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center'>
                              <Download className='h-5 w-5 text-white mb-1' />
                              <p className='text-white text-xs'>Receive</p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center'>
                              <History className='h-5 w-5 text-white mb-1' />
                              <p className='text-white text-xs'>History</p>
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
            <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
              <p className='text-tawakal-green font-medium text-sm'>
                Why Choose T-Plus
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Powerful{" "}
              <span className='text-gradient-green-blue'>Features</span> for
              Your Needs
            </h2>
            <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
              T-Plus offers a variety of features and capabilities that make it
              the perfect solution for your financial needs.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'>
              <div className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-tawakal-blue to-tawakal-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Smartphone className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Mobile Money
                </h3>
                <p className='text-zinc-600 mb-4'>
                  Send money directly to mobile wallets including SAHAL, SAAD,
                  EVCPLUS, and soon Mpesa, MTN, AIRTEL, and HELLOCASH.
                </p>
                <a
                  href='#'
                  className='text-tawakal-blue font-medium flex items-center text-sm hover:underline'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'>
              <div className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-tawakal-green to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Repeat className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Easy Transfers
                </h3>
                <p className='text-zinc-600 mb-4'>
                  Transfer funds to any registered T-Plus user across the world
                  without beneficiary registration.
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
                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-tawakal-red to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <ShieldCheck className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Secure Transactions
                </h3>
                <p className='text-zinc-600 mb-4'>
                  Every transaction is automatically saved to your account,
                  making it easier to track and prevent fraudulent charges.
                </p>
                <a
                  href='#'
                  className='text-tawakal-red font-medium flex items-center text-sm hover:underline'>
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
            <div className='inline-block px-4 py-2 bg-tawakal-blue/10 rounded-full mb-4'>
              <p className='text-tawakal-blue font-medium text-sm'>
                Simple Process
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              How <span className='text-gradient-blue-green'>T-Plus</span> Works
            </h2>
            <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
              Getting started with T-Plus is easy. Follow these simple steps to
              begin your journey.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {/* Step 1 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-tawakal-blue/10 flex items-center justify-center mb-4 text-tawakal-blue font-bold text-xl'>
                  1
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Download the App
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  Download T-Plus from the App Store or Google Play Store and
                  create your account.
                </p>
              </div>
              <div className='hidden md:block absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-tawakal-blue to-transparent -translate-y-1/2 z-0'></div>
            </div>

            {/* Step 2 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-tawakal-green/10 flex items-center justify-center mb-4 text-tawakal-green font-bold text-xl'>
                  2
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Verify Your Identity
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  Complete the verification process by providing your personal
                  details and documents.
                </p>
              </div>
              <div className='hidden md:block absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-tawakal-green to-transparent -translate-y-1/2 z-0'></div>
            </div>

            {/* Step 3 */}
            <div className='relative h-full'>
              <div className='bg-white rounded-xl shadow-md p-6 relative z-10 h-full flex flex-col'>
                <div className='w-12 h-12 rounded-full bg-tawakal-red/10 flex items-center justify-center mb-4 text-tawakal-red font-bold text-xl'>
                  3
                </div>
                <h3 className='text-xl font-bold mb-3 text-zinc-800'>
                  Start Transacting
                </h3>
                <p className='text-zinc-600 flex-grow'>
                  Send money, pay bills, and manage your finances with ease from
                  your smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-tawakal-blue to-tawakal-green text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Ready to Experience T-Plus?
            </h2>
            <p className='text-white/80 text-lg mb-8 max-w-2xl mx-auto'>
              Join thousands of satisfied users who are already enjoying the
              benefits of T-Plus. Download the app today and start your journey.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a
                href='#'
                className='flex items-center bg-white text-tawakal-blue rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
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
                className='flex items-center bg-white text-tawakal-blue rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
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
