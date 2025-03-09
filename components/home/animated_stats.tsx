"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faGlobe,
  faBuilding,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// Define the stat type
interface Stat {
  id: string;
  label: string;
  icon: any;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: "customers",
    label: "Global Customers",
    icon: faUsers,
    description: "Serving millions of customers worldwide",
    color: "#2fb457", // tawakal-green
  },
  {
    id: "countries",
    label: "Countries Served",
    icon: faGlobe,
    description: "Operating across multiple countries",
    color: "#0075be", // tawakal-blue
  },
  {
    id: "locations",
    label: "Global Locations",
    icon: faBuilding,
    description: "Hundreds of locations worldwide",
    color: "#d24935", // tawakal-red
  },
  {
    id: "transfers",
    label: "Annual Transfers",
    icon: faMoneyBillTransfer,
    description: "Billions in secure money transfers annually",
    color: "#f59e0b", // tawakal-gold
  },
];

const AnimatedStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className='py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className='relative group'>
            {/* Glassmorphic card */}
            <div className='relative bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-5 shadow-lg overflow-hidden h-full'>
              {/* Decorative corner accents */}
              <div className='absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/30 rounded-tl-lg -mt-0.5 -ml-0.5'></div>
              <div className='absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/30 rounded-tr-lg -mt-0.5 -mr-0.5'></div>
              <div className='absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/30 rounded-bl-lg -mb-0.5 -ml-0.5'></div>
              <div className='absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/30 rounded-br-lg -mb-0.5 -mr-0.5'></div>

              {/* Subtle gradient background */}
              <div
                className='absolute inset-0 opacity-10 rounded-xl'
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${stat.color}, transparent 70%)`,
                }}></div>

              <div className='flex items-start'>
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center mr-4'
                  style={{
                    backgroundColor: `${stat.color}20`,
                    color: stat.color,
                  }}>
                  <FontAwesomeIcon icon={stat.icon} className='w-5 h-5' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-800'>
                    {stat.label}
                  </h3>
                  <p className='text-sm text-gray-600 mt-1'>
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
