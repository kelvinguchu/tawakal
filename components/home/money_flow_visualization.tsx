"use client";

import { useEffect, useRef, useState } from "react";
import GlobalNetworkMap from "./global_network_map";
import { motion } from "framer-motion";

interface MoneyFlowVisualizationProps {
  className?: string;
  hideDecorativeOrbs?: boolean;
}

const MoneyFlowVisualization: React.FC<MoneyFlowVisualizationProps> = ({
  className = "",
  hideDecorativeOrbs = false,
}) => {
  // Track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
      {/* Decorative elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Gradient orbs */}
        {!hideDecorativeOrbs && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
              className='absolute -top-20 -right-20 w-64 h-64 bg-tawakal-blue rounded-full blur-[80px]'
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className='absolute -bottom-32 -left-32 w-96 h-96 bg-tawakal-green rounded-full blur-[100px]'
            />
          </>
        )}

        {/* Network lines decoration */}
        <svg
          className='absolute inset-0 w-full h-full opacity-5'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'>
          <motion.path
            d='M0,50 Q25,0 50,50 T100,50'
            stroke='currentColor'
            strokeWidth='0.5'
            fill='none'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d='M0,30 Q35,90 70,30 T100,30'
            stroke='currentColor'
            strokeWidth='0.5'
            fill='none'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d='M0,70 Q35,10 70,70 T100,70'
            stroke='currentColor'
            strokeWidth='0.5'
            fill='none'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Map container with enhanced styling */}
      {isMounted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='relative z-0'>
          {/* Map with reduced opacity to improve text visibility */}
          <div className='relative'>
            <GlobalNetworkMap />

            {/* Very subtle overlay for better text contrast */}
            <div className='absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 pointer-events-none'></div>
          </div>

          {/* Text overlay - positioned in the center with improved visibility */}
          <div className='absolute inset-0 flex items-center justify-center z-10 pointer-events-none'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='max-w-md w-11/12 sm:w-auto mx-4'>
              <div className='relative'>
                {/* Glassmorphic card */}
                <div className='relative bg-white/25 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/50 shadow-lg'>
                  {/* Decorative corner accents */}
                  <div className='absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/60 rounded-tl-lg -mt-1 -ml-1'></div>
                  <div className='absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/60 rounded-tr-lg -mt-1 -mr-1'></div>
                  <div className='absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/60 rounded-bl-lg -mb-1 -ml-1'></div>
                  <div className='absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/60 rounded-br-lg -mb-1 -mr-1'></div>

                  <h2 className='text-center text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-3 drop-shadow-sm'>
                    Our <span className='text-gradient-green-blue'>Global</span>{" "}
                    <span className='text-gradient-blue-red'>Presence</span>
                  </h2>

                  <div className='space-y-3'>
                    <p className='text-black/90 text-xs sm:text-sm leading-relaxed'>
                      From our humble beginnings in Somalia to becoming a global
                      financial service provider, we've been connecting families
                      across continents for over four decades.
                    </p>
                    <p className='text-black/90 text-xs sm:text-sm leading-relaxed'>
                      With branches, agents, and partnerships across multiple
                      continents, we connect people worldwide through our
                      reliable money transfer services.
                    </p>
                  </div>

                  <div className='mt-4 flex items-center'>
                    <div className='h-px flex-grow bg-gradient-to-r from-transparent via-white/50 to-transparent'></div>
                    <div className='px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mx-2'>
                      20+ Years of Excellence
                    </div>
                    <div className='h-px flex-grow bg-gradient-to-r from-transparent via-white/50 to-transparent'></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MoneyFlowVisualization;
