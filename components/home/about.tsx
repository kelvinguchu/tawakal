"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHandshake,
  faShieldHalved,
  faClock,
  faMoneyBillTransfer,
  faChartLine,
  faUsers,
  faHeart,
  faBolt,
  faLocationDot,
  faArrowRight,
  faBuilding,
  faEarthAfrica,
  faEarthAmericas,
  faEarthAsia,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// Import our custom components
import MoneyFlowVisualization from "./money_flow_visualization";
import RegionSection from "./region_section";
import ScrollBackgroundEffect from "./scroll_background_effect";
import AnimatedStats from "./animated_stats";
import ValuesSection from "./values_section";

export default function About() {
  // Track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Define map markers
  const eastAfricaMarkers = [
    {
      name: "Mogadishu",
      coordinates: [45.3, 2.0] as [number, number],
      color: "#2fb457",
    },
    {
      name: "Nairobi",
      coordinates: [36.8, -1.3] as [number, number],
      color: "#0075be",
    },
    {
      name: "Addis Ababa",
      coordinates: [38.7, 9.0] as [number, number],
      color: "#f59e0b",
    },
  ];

  const middleEastMarkers = [
    {
      name: "Dubai",
      coordinates: [55.3, 25.3] as [number, number],
      color: "#d24935",
    },
    {
      name: "Riyadh",
      coordinates: [46.7, 24.7] as [number, number],
      color: "#f59e0b",
    },
    {
      name: "Doha",
      coordinates: [51.5, 25.3] as [number, number],
      color: "#0075be",
    },
  ];

  const northAmericaEuropeMarkers = [
    {
      name: "London",
      coordinates: [-0.1, 51.5] as [number, number],
      color: "#0075be",
    },
    {
      name: "Minneapolis",
      coordinates: [-93.3, 45.0] as [number, number],
      color: "#2fb457",
    },
    {
      name: "Toronto",
      coordinates: [-79.4, 43.7] as [number, number],
      color: "#f59e0b",
    },
  ];

  return (
    <section className='py-10 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden'>
      {/* Background elements - matching Hero style */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f9f9f9] to-[#f0f9ff] -z-30'></div>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-tawakal-red/5 rounded-full blur-3xl -z-20'></div>

      <div className='container mx-auto px-4 sm:px-6'>
        {/* Section header - more responsive */}
        <div className='text-center mb-10 sm:mb-16'>
          <div className='inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-tawakal-green/10 rounded-full mb-3 sm:mb-4'>
            <p className='text-tawakal-green font-medium text-xs sm:text-sm flex items-center justify-center'>
              <FontAwesomeIcon
                icon={faBuilding}
                className='mr-1.5 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5'
              />
              About Tawakal Express
            </p>
          </div>
        </div>

        {/* Global Network Map - responsive height */}
        <div className='mt-6 sm:mt-10 md:mt-16'>
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative rounded-2xl overflow-hidden shadow-xl'>
              <div className='h-[350px] sm:h-[400px] md:h-[500px] w-full'>
                {isMounted && (
                  <MoneyFlowVisualization hideDecorativeOrbs={true} />
                )}
              </div>

              {/* Decorative corner elements */}
              <div className='absolute top-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-t-4 border-l-4 border-tawakal-green/30 rounded-tl-2xl pointer-events-none'></div>
              <div className='absolute top-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-t-4 border-r-4 border-tawakal-blue/30 rounded-tr-2xl pointer-events-none'></div>
              <div className='absolute bottom-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-b-4 border-l-4 border-tawakal-blue/30 rounded-bl-2xl pointer-events-none'></div>
              <div className='absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-b-4 border-r-4 border-tawakal-green/30 rounded-br-2xl pointer-events-none'></div>
            </motion.div>
          )}
                  </div>

        {/* Animated Statistics */}
        <div className='mb-10 sm:mb-16 md:mb-24'>
          <AnimatedStats />
                  </div>

        {/* Immersive Scroll Experience - Regional Backgrounds */}
        <ScrollBackgroundEffect
          backgrounds={[
            { id: "east_africa", from: "#f0f9ff", to: "#e6f7ff" },
            { id: "middle_east", from: "#fff8e6", to: "#fff2d1" },
            { id: "north_america_europe", from: "#e6ffe6", to: "#d1ffd1" },
          ]}>
          {/* Regional sections */}
          {isMounted && (
            <>
              <RegionSection
                region='east_africa'
                title='East Africa'
                description='Our journey began in Somalia, where we established our first office to help families send money across borders. Today, we serve millions of customers across East Africa, providing essential financial services to communities in Somalia, Kenya, and beyond.'
                tags={[
                  { name: "Somalia", color: "green" },
                  { name: "Kenya", color: "blue" },
                  { name: "Ethiopia", color: "gold" },
                  { name: "Tanzania", color: "red" },
                ]}
                mapCaption='Our first region of operations, where it all began'
                markers={eastAfricaMarkers}
              />

              <RegionSection
                region='middle_east'
                title='Middle East'
                description="Our expansion into the Middle East marked a significant milestone in our growth. With offices in the UAE and partnerships across the region, we've created vital corridors for remittances between the Middle East and East Africa, serving the large diaspora communities."
                tags={[
                  { name: "UAE", color: "red" },
                  { name: "Saudi Arabia", color: "gold" },
                  { name: "Qatar", color: "blue" },
                ]}
                mapCaption='A critical hub connecting Africa with global financial networks'
                markers={middleEastMarkers}
                reverse={true}
              />

              <RegionSection
                region='north_america_europe'
                title='North America & Europe'
                description="Our network extends to key cities across North America and Europe, where large Somali and East African diaspora communities rely on our services to send money home. We've established trusted partnerships with local financial institutions to ensure seamless transfers."
                tags={[
                  { name: "USA", color: "blue" },
                  { name: "UK", color: "red" },
                  { name: "Canada", color: "green" },
                ]}
                mapCaption='Serving diaspora communities across North America and Europe'
                markers={[
                  {
                    name: "London",
                    coordinates: [-0.1, 51.5] as [number, number],
                    color: "#0075be",
                  },
                  {
                    name: "Minneapolis",
                    coordinates: [-93.3, 45.0] as [number, number],
                    color: "#2fb457",
                  },
                  {
                    name: "Toronto",
                    coordinates: [-79.4, 43.7] as [number, number],
                    color: "#f59e0b",
                  },
                ]}
              />
            </>
          )}
        </ScrollBackgroundEffect>

        {/* Values Section */}
        <ValuesSection />

        {/* CTA Section - enhanced for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='relative overflow-hidden rounded-2xl mb-10 sm:mb-16'>
          {/* Background with gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-tawakal-blue via-tawakal-green to-tawakal-blue opacity-90'></div>

          {/* Decorative elements */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[50px]'></div>
            <div className='absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-[70px]'></div>
            <svg
              className='absolute bottom-0 left-0 w-full h-32 text-white/5'
              viewBox='0 0 1440 320'
                    preserveAspectRatio='none'>
                    <path
                fill='currentColor'
                d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
                  </svg>
                </div>

          {/* Content container - improved padding for mobile */}
          <div className='relative z-10 px-5 sm:px-8 py-12 sm:py-16 md:py-24 text-center'>
            {/* Decorative icon - responsive sizing */}
            <div className='inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30'>
              <FontAwesomeIcon
                icon={faGlobe}
                className='h-8 w-8 sm:h-10 sm:w-10 text-white'
              />
              </div>

            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-sm max-w-3xl mx-auto'>
              Experience the <span className='text-tawakal-gold'>Tawakal</span>{" "}
              Difference
            </h2>

            <p className='text-base sm:text-lg text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto'>
              Join millions of satisfied customers who trust Tawakal Express for
              fast, secure, and reliable money transfer services across the
              globe.
            </p>

            <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
              <Button
                size='lg'
                className='bg-white text-tawakal-blue hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base'>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className='mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4'
                />
                Find a Location
              </Button>

              <Button
                size='lg'
                variant='outline'
                className='border-2 border-white text-tawakal-green hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base'>
                <FontAwesomeIcon
                  icon={faPhone}
                  className='mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4'
                />
                Contact Us
              </Button>
          </div>

            {/* Trust indicators - responsive spacing and sizing */}
            <div className='mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80'>
              <div className='flex items-center'>
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className='mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4'
                />
                <span className='text-xs sm:text-sm'>Secure Transfers</span>
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon
                  icon={faBolt}
                  className='mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4'
                />
                <span className='text-xs sm:text-sm'>Fast Service</span>
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4'
                />
                <span className='text-xs sm:text-sm'>Trusted by Millions</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
