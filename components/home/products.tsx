import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Products() {
  const [activeProduct, setActiveProduct] = useState("tplus");

  const products = [
    {
      id: "etawakal",
      name: "eTawakal",
      tagline: "Online Agent",
      description:
        "Send money online from anywhere, anytime with our secure platform.",
      color: "from-tawakal-green to-emerald-600",
      textColor: "text-tawakal-green",
      borderColor: "border-tawakal-green",
      logo: "/images/etawakal.png",
      features: ["Fast & Secure", "Real-time Transfers", "256-bit Encryption"],
      downloadable: false,
      deviceImage: "/images/iphone-macbook.webp",
    },
    {
      id: "tplus",
      name: "T-Plus",
      tagline: "Mobile Wallet",
      description:
        "Somalia's first mobile wallet for seamless money transfers and payments.",
      color: "from-tawakal-blue to-blue-600",
      textColor: "text-tawakal-blue",
      borderColor: "border-tawakal-blue",
      logo: "/images/tplus.webp",
      features: [
        "Send & Request Money",
        "Pay Merchants",
        "Mobile Money Integration",
      ],
      downloadable: true,
      deviceImage: "/images/mobile.webp",
    },
    {
      id: "bananapay",
      name: "Banana Pay",
      tagline: "US Money Transfer",
      description:
        "Send money from the US to friends and family abroad with ease.",
      color: "from-yellow-500 to-amber-600",
      textColor: "text-amber-500",
      borderColor: "border-amber-500",
      logo: "/images/bananapay.png",
      features: ["US Bank Integration", "Fast Delivery", "Affordable Fees"],
      downloadable: true,
      deviceImage: "/images/mobile.webp",
    },
  ];

  const activeProductData = products.find((p) => p.id === activeProduct);

  return (
    <section id='products' className='py-24 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f9f9f9] to-[#f0f9ff] -z-30'></div>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-tawakal-red/5 rounded-full blur-3xl -z-20'></div>

      <div className='container mx-auto px-4'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
            <p className='text-tawakal-green font-medium text-sm'>
              Digital Solutions
            </p>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Our <span className='text-gradient-green-blue'>Innovative</span>{" "}
            <span className='text-gradient-blue-red'>Products</span>
          </h2>
          <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
            Explore our suite of digital products designed to make international
            money transfers faster, easier, and more secure.
          </p>
        </div>

        {/* Product selector */}
        <div className='flex justify-center mb-12'>
          <div className='bg-white/80 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-white/20 flex space-x-1'>
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeProduct === product.id
                    ? `bg-gradient-to-r ${product.color} text-white shadow-md`
                    : `text-zinc-700 hover:bg-white/50 hover:text-zinc-900`
                }`}>
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product showcase */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          {/* Left side - Product info */}
          <div className='lg:col-span-5 space-y-8'>
            <div className='bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20'>
              <div className='flex items-center mb-6'>
                <div
                  className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg mr-4 p-1 overflow-hidden border-2 border-white/50`}>
                  <Image
                    src={activeProductData?.logo || "/icons/placeholder.svg"}
                    alt={activeProductData?.name || "Product"}
                    width={48}
                    height={48}
                    className='object-contain'
                  />
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-zinc-800'>
                    {activeProductData?.name}
                  </h3>
                  <p className={`${activeProductData?.textColor} font-medium`}>
                    {activeProductData?.tagline}
                  </p>
                </div>
              </div>

              <p className='text-zinc-700 text-lg mb-6'>
                {activeProductData?.description}
              </p>

              {/* Features */}
              <div className='space-y-3 mb-6'>
                {activeProductData?.features.map((feature, index) => (
                  <div
                    key={index}
                    className='flex items-center bg-white/50 rounded-lg p-2 shadow-sm'>
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${activeProductData?.color} flex items-center justify-center mr-3 shadow-sm`}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3 w-3 text-white'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <p className='text-zinc-800 font-medium'>{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className='flex flex-wrap gap-4 pt-2'>
                {activeProductData?.downloadable ? (
                  <>
                    <div className='flex flex-wrap gap-3'>
                      <a
                        href='#'
                        className={`flex items-center bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
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
                        className={`flex items-center bg-gradient-to-r from-tawakal-blue to-tawakal-red text-white rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
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
                      className={`rounded-full px-6 py-6 text-sm border-2 ${activeProductData?.borderColor} ${activeProductData?.textColor} bg-white/50 hover:bg-white/80`}>
                      Learn More
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white rounded-full px-6 py-6 text-sm shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                      Access Online
                    </Button>
                    <Button
                      variant='outline'
                      className={`rounded-full px-6 py-6 text-sm border-2 ${activeProductData?.borderColor} ${activeProductData?.textColor} bg-white/50 hover:bg-white/80`}>
                      Learn More
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Product visualization */}
          <div className='lg:col-span-7 relative'>
            <div className='relative h-[500px] flex items-center justify-center'>
              {/* Decorative elements */}
              <div className='absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-tawakal-green/20 to-tawakal-blue/20 blur-xl -z-10'></div>
              <div className='absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-tawakal-blue/20 to-tawakal-red/20 blur-xl -z-10'></div>

              {/* Product image with animation */}
              <motion.div
                className='relative w-full h-full flex items-center justify-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={activeProduct}>
                {/* Device mockup */}
                <div className='relative'>
                  <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-white/30'>
                    <Image
                      src={
                        activeProductData?.deviceImage || "/images/mobile.webp"
                      }
                      alt={`${activeProductData?.name} device`}
                      width={500}
                      height={400}
                      className={`object-contain ${
                        activeProduct === "etawakal" ? "rounded-xl" : ""
                      }`}
                    />

                    {/* Enhanced glassmorphism effect */}
                    <div className='absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-[2px] rounded-xl'></div>
                  </div>

                  {/* Product logo overlay */}
                  <motion.div
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}>
                    <div className='bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/50'>
                      <div className='w-24 h-24 relative'>
                        <Image
                          src={
                            activeProductData?.logo || "/icons/placeholder.svg"
                          }
                          alt={activeProductData?.name || "Product"}
                          fill
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Platform badge */}
                  <div className='absolute bottom-4 right-4 bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/50 z-20'>
                    <div className='flex items-center space-x-2'>
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${activeProductData?.color} flex items-center justify-center shadow-sm`}>
                        {activeProductData?.downloadable ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                              fillRule='evenodd'
                              d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                              clipRule='evenodd'
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                              fillRule='evenodd'
                              d='M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z'
                              clipRule='evenodd'
                            />
                          </svg>
                        )}
                      </div>
                      <p className='text-sm font-bold text-zinc-800'>
                        {activeProductData?.downloadable
                          ? "Mobile App"
                          : "Web Platform"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Product comparison dots */}
        <div className='flex justify-center mt-12 space-x-3'>
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product.id)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeProduct === product.id
                  ? `bg-gradient-to-r ${product.color} shadow-md`
                  : "bg-white/70 backdrop-blur-sm border border-white/50"
              }`}
              aria-label={`Switch to ${product.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
