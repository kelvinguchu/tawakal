import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Partner data - only using images that start with "partner-"
const partners = [
  {
    id: 1,
    name: "Telesom",
    logo: "/images/partner-telesom.png",
    category: "Mobile Money",
    region: "Somalia",
  },
  {
    id: 2,
    name: "Hormuud",
    logo: "/images/hormuud.svg",
    category: "Telecommunications",
    region: "Somalia",
  },
  {
    id: 3,
    name: "U-Remit",
    logo: "/images/partner-uremit.png",
    category: "Money Transfer",
    region: "Global",
  },
  {
    id: 4,
    name: "SAMSA",
    logo: "/images/partner-samsa.png",
    category: "Financial Services",
    region: "East Africa",
  },
  {
    id: 5,
    name: "SOMSA",
    logo: "/images/partner-somsa.png",
    category: "Banking",
    region: "Somalia",
  },
];

export default function Partners() {
  // Animation variants for the marquee effect
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  // Animation variants for the reverse marquee effect
  const marqueeVariantsReverse = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className='py-24 relative overflow-hidden'>
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
              Strategic Alliances
            </p>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Our <span className='text-gradient-green-blue'>Trusted</span>{" "}
            <span className='text-gradient-blue-red'>Partners</span>
          </h2>
          <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
            We collaborate with leading financial institutions and mobile money
            providers to ensure fast, secure, and reliable money transfers
            worldwide.
          </p>
        </div>

        {/* First row - Infinite marquee animation with vignette effect */}
        <div className='relative w-full overflow-hidden mb-12'>
          {/* Left vignette */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f9f9f9] to-transparent z-10'></div>

          {/* Right vignette */}
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f9f9f9] to-transparent z-10'></div>

          <motion.div
            className='flex gap-12 items-center'
            variants={marqueeVariants}
            animate='animate'>
            {/* Triple the partners for seamless loop */}
            {[
              ...partners,
              ...partners,
              ...partners,
              ...partners,
              ...partners,
            ].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className='flex-shrink-0 bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30 w-48 h-48 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:bg-white/90'>
                <div className='relative w-36 h-36'>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className='object-contain'
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - Reverse direction with vignette effect */}
        <div className='relative w-full overflow-hidden mb-16'>
          {/* Left vignette */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f9f9f9] to-transparent z-10'></div>

          {/* Right vignette */}
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f9f9f9] to-transparent z-10'></div>

          <motion.div
            className='flex gap-12 items-center'
            variants={marqueeVariantsReverse}
            animate='animate'>
            {/* Triple the partners for seamless loop */}
            {[
              ...partners,
              ...partners,
              ...partners,
              ...partners,
              ...partners,
            ].map((partner, index) => (
              <div
                key={`${partner.id}-reverse-${index}`}
                className='flex-shrink-0 bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30 w-48 h-48 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:bg-white/90'>
                <div className='relative w-36 h-36'>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className='object-contain'
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Become a partner CTA */}
        <div className='text-center mt-8'>
          <motion.div
            className='inline-block'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
              delay: 0.2,
            }}
            viewport={{ once: true }}>
            <motion.button
              className='bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white rounded-full px-8 py-4 text-base shadow-md'
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}>
              Become a Partner <span className='ml-2'>→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
