"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalPresence() {
  // Data for the global network
  const regions = [
    {
      name: "Branches & Agents",
      countries: [
        "Australia",
        "Canada",
        "Djibouti",
        "Ethiopia",
        "Kenya",
        "Norway",
        "Somalia",
        "South Sudan",
        "Sudan",
        "Sweden",
        "UAE",
        "Uganda",
        "UK",
        "USA",
      ],
      icon: "🌍",
      color: "bg-tawakal-green/10",
      textColor: "text-tawakal-green",
      borderColor: "border-tawakal-green",
      position: { top: "20%", left: "30%" },
      glowColor: "from-tawakal-green/30 to-transparent",
      connectionColor: "#2FB457",
    },
    {
      name: "Partner Countries",
      countries: [
        "Bangladesh",
        "Egypt",
        "India",
        "Indonesia",
        "Jordan",
        "Kuwait",
        "Lebanon",
        "Morocco",
        "Nepal",
        "Pakistan",
        "Philippines",
        "Sri Lanka",
      ],
      icon: "🤝",
      color: "bg-tawakal-blue/10",
      textColor: "text-tawakal-blue",
      borderColor: "border-tawakal-blue",
      position: { top: "25%", left: "70%" },
      glowColor: "from-tawakal-blue/30 to-transparent",
      connectionColor: "#0075BE",
    },
    {
      name: "Mobile Money Partners",
      partners: [
        { name: "Somalia", services: ["Sahal", "Zaad", "EvcPLUS", "T-PLUS"] },
        { name: "Tanzania, Uganda", services: ["MTN", "Airtel"] },
        { name: "Kenya", services: ["Mpesa"] },
        { name: "Ethiopia", services: ["HelloCash"] },
      ],
      icon: "📱",
      color: "bg-tawakal-red/10",
      textColor: "text-tawakal-red",
      borderColor: "border-tawakal-red",
      position: { top: "65%", left: "40%" },
      glowColor: "from-tawakal-red/30 to-transparent",
      connectionColor: "#D24935",
    },
    {
      name: "Banking Partners",
      countries: [
        "USA",
        "UK",
        "UAE",
        "Canada",
        "Australia",
        "Kenya",
        "Ethiopia",
        "Somalia",
      ],
      icon: "🏦",
      color: "bg-amber-500/10",
      textColor: "text-amber-600",
      borderColor: "border-amber-500",
      position: { top: "60%", left: "75%" },
      glowColor: "from-amber-500/30 to-transparent",
      connectionColor: "#F59E0B",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f0f9ff] to-[#f9f9f9] -z-30'></div>

      {/* Floating particles */}
      <div className='absolute inset-0 overflow-hidden -z-20'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 rounded-full bg-tawakal-green/20'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
            <p className='text-tawakal-green font-medium text-sm'>
              International Network
            </p>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Our <span className='text-gradient-green-blue'>Global</span>{" "}
            Presence
          </h2>
          <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
            With branches, agents, and partnerships across multiple continents,
            we connect people worldwide through our reliable money transfer
            services.
          </p>
        </div>

        {/* World Map Visualization */}
        <div className='relative h-[500px] mb-16 rounded-3xl overflow-hidden shadow-xl'>
          {/* Map background with 3D effect */}
          <div className='absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b] z-0'></div>

          {/* Globe image with rotation */}
          <motion.div
            className='absolute inset-0 z-10 opacity-20'
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear",
            }}>
            <Image
              src='/images/globe.webp'
              alt='Globe'
              fill
              className='object-cover opacity-40'
            />
          </motion.div>

          {/* World map dots overlay */}
          <div className='absolute inset-0 z-20'>
            <Image
              src='/icons/world-map-dots.svg'
              alt='World Map'
              fill
              className='object-contain opacity-60'
            />
          </div>

          {/* Animated gradient overlay */}
          <div className='absolute inset-0 bg-gradient-radial from-tawakal-blue/10 to-transparent animate-pulse-slow z-20'></div>

          {/* Central hub - Somalia */}
          <motion.div
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40'
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <div className='relative'>
              {/* Pulsing rings */}
              <motion.div
                className='absolute inset-0 rounded-full bg-tawakal-green/30'
                animate={{
                  scale: [1, 2.5],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className='absolute inset-0 rounded-full bg-tawakal-green/30'
                animate={{
                  scale: [1, 2.5],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.8,
                }}
              />

              {/* Somalia hub */}
              <div className='w-20 h-20 rounded-full bg-gradient-to-r from-tawakal-green to-tawakal-blue p-1 shadow-lg shadow-tawakal-blue/20 z-50'>
                <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
                  <div className='text-center'>
                    <span className='text-2xl'>🇸🇴</span>
                    <p className='text-xs font-bold text-tawakal-blue'>
                      SOMALIA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Region nodes - static */}
          {regions.map((region, index) => (
            <div
              key={index}
              className='absolute z-30'
              style={{ top: region.position.top, left: region.position.left }}>
              <div
                className={`relative w-16 h-16 rounded-full ${region.color} border-2 ${region.borderColor} flex items-center justify-center shadow-lg`}>
                {/* Static glow effect */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-radial ${region.glowColor} opacity-50`}
                />
                <span className='text-2xl'>{region.icon}</span>
              </div>

              {/* Connection line to Somalia - static */}
              <svg
                className='absolute top-1/2 left-1/2 w-[1000px] h-[500px] -z-10'
                style={{
                  transform: "translate(-50%, -50%)",
                  opacity: 0.6,
                }}>
                <path
                  d={`M ${parseFloat(region.position.left) - 50}% ${
                    parseFloat(region.position.top) - 50
                  }% L 50% 50%`}
                  stroke={region.connectionColor}
                  strokeWidth='2'
                  fill='none'
                  strokeDasharray='5,5'
                />
              </svg>
            </div>
          ))}

          {/* Legend - static */}
          <div className='absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 z-40'>
            <div className='flex flex-wrap items-center gap-3'>
              {regions.map((region, index) => (
                <div key={index} className='flex items-center'>
                  <div
                    className='w-3 h-3 rounded-full mr-1'
                    style={{ backgroundColor: region.connectionColor }}></div>
                  <span className='text-white text-xs'>{region.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Somalia image overlay */}
          <div className='absolute bottom-4 right-4 z-40 w-24 h-24 rounded-lg overflow-hidden shadow-lg'>
            <Image
              src='/images/somalia.webp'
              alt='Somalia'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
            <div className='absolute bottom-1 left-0 right-0 text-center text-white text-xs font-bold'>
              Our Home
            </div>
          </div>
        </div>

        {/* Regions grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}>
          {regions.map((region, index) => (
            <motion.div
              key={index}
              className={`bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border-t-4 ${region.borderColor} h-full`}
              variants={itemVariants}>
              <div className={`p-4 ${region.color} flex items-center`}>
                <span className='text-2xl mr-3'>{region.icon}</span>
                <h3 className={`text-xl font-bold ${region.textColor}`}>
                  {region.name}
                </h3>
              </div>

              <div className='p-6'>
                {region.countries && (
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {region.countries.map((country, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center px-3 py-1 rounded-full ${region.color} text-xs font-medium ${region.textColor}`}>
                        {country}
                      </span>
                    ))}
                  </div>
                )}

                {region.partners && (
                  <div className='space-y-4'>
                    {region.partners.map((partner, i) => (
                      <div key={i} className='mb-3'>
                        <p className='font-medium text-zinc-800 mb-1'>
                          {partner.name}:
                        </p>
                        <div className='flex flex-wrap gap-2'>
                          {partner.services.map((service, j) => (
                            <span
                              key={j}
                              className={`inline-flex items-center px-3 py-1 rounded-full ${region.color} text-xs font-medium ${region.textColor}`}>
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className='text-center'>
          <motion.div
            className='bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-3xl mx-auto border border-gray-100'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h3 className='text-2xl font-bold text-zinc-800 mb-4'>
              Find Us Worldwide
            </h3>
            <p className='text-zinc-600 mb-6'>
              Looking for the nearest Tawakal Express branch or agent? Use our
              location finder to connect with us anywhere in the world.
            </p>
            <button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white rounded-full px-8 py-4 text-base shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
              Find Nearest Location
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
