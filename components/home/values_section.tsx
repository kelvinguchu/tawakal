"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faShieldHalved,
  faBolt,
  faUsers,
  faGlobe,
  faHeart,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

interface ValueCardProps {
  icon: typeof faHandshake;
  title: string;
  description: string;
  color: "blue" | "green" | "gold" | "red";
  index: number;
  details: string[];
}

const ValuesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Add useEffect to handle mounting state
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Animation variants for staggered animations - reduced duration and delay
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        when: "beforeChildren",
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Values data with additional details
  const values: ValueCardProps[] = [
    {
      icon: faHandshake,
      title: "Trust & Reliability",
      description:
        "We build trust through consistent, reliable service and transparent operations, ensuring our customers can depend on us for their financial needs.",
      color: "blue",
      index: 0,
      details: [
        "Transparent fee structure with no hidden charges",
        "Consistent service quality across all locations",
        "Reliable transaction tracking and notifications",
        "Clear communication throughout the transfer process",
      ],
    },
    {
      icon: faShieldHalved,
      title: "Security & Compliance",
      description:
        "We prioritize the security of every transaction and adhere to the highest regulatory standards to protect our customers and their money.",
      color: "green",
      index: 1,
      details: [
        "Advanced encryption for all digital transactions",
        "Strict identity verification protocols",
        "Compliance with international financial regulations",
        "Regular security audits and updates",
      ],
    },
    {
      icon: faBolt,
      title: "Speed & Efficiency",
      description:
        "We understand the urgency of money transfers and strive to deliver fast, efficient service without compromising on quality or security.",
      color: "gold",
      index: 2,
      details: [
        "Same-day transfers for most destinations",
        "Streamlined processes to minimize waiting time",
        "Efficient customer service response times",
        "Optimized mobile app for quick transactions",
      ],
    },
    {
      icon: faUsers,
      title: "Community Focus",
      description:
        "We're deeply connected to the communities we serve and committed to making a positive impact through our services and community initiatives.",
      color: "red",
      index: 3,
      details: [
        "Regular community outreach programs",
        "Support for local businesses and entrepreneurs",
        "Financial literacy workshops in underserved areas",
        "Partnerships with community organizations",
      ],
    },
    {
      icon: faGlobe,
      title: "Global Perspective",
      description:
        "We embrace diversity and maintain a global outlook, adapting our services to meet the unique needs of customers across different regions and cultures.",
      color: "blue",
      index: 4,
      details: [
        "Multilingual customer support",
        "Culturally sensitive service delivery",
        "Localized solutions for different markets",
        "Understanding of regional financial needs",
      ],
    },
    {
      icon: faHeart,
      title: "Customer-Centric",
      description:
        "We put our customers at the heart of everything we do, listening to their needs and continuously improving our services to exceed their expectations.",
      color: "green",
      index: 5,
      details: [
        "Regular customer feedback collection and implementation",
        "Personalized service options",
        "Loyalty programs to reward continued trust",
        "Continuous improvement based on customer insights",
      ],
    },
  ];

  // Get color classes based on color name
  const getColorClasses = (color: "blue" | "green" | "gold" | "red") => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-tawakal-blue/10",
          text: "text-tawakal-blue",
          border: "border-tawakal-blue/20",
          gradient: "from-tawakal-blue to-tawakal-blue/70",
          shadow: "shadow-tawakal-blue/10",
          hoverBg: "hover:bg-tawakal-blue/5",
          activeBg: "bg-tawakal-blue/5",
        };
      case "green":
        return {
          bg: "bg-tawakal-green/10",
          text: "text-tawakal-green",
          border: "border-tawakal-green/20",
          gradient: "from-tawakal-green to-tawakal-green/70",
          shadow: "shadow-tawakal-green/10",
          hoverBg: "hover:bg-tawakal-green/5",
          activeBg: "bg-tawakal-green/5",
        };
      case "gold":
        return {
          bg: "bg-tawakal-gold/10",
          text: "text-tawakal-gold",
          border: "border-tawakal-gold/20",
          gradient: "from-tawakal-gold to-tawakal-gold/70",
          shadow: "shadow-tawakal-gold/10",
          hoverBg: "hover:bg-tawakal-gold/5",
          activeBg: "bg-tawakal-gold/5",
        };
      case "red":
        return {
          bg: "bg-tawakal-red/10",
          text: "text-tawakal-red",
          border: "border-tawakal-red/20",
          gradient: "from-tawakal-red to-tawakal-red/70",
          shadow: "shadow-tawakal-red/10",
          hoverBg: "hover:bg-tawakal-red/5",
          activeBg: "bg-tawakal-red/5",
        };
      default:
        return {
          bg: "bg-tawakal-blue/10",
          text: "text-tawakal-blue",
          border: "border-tawakal-blue/20",
          gradient: "from-tawakal-blue to-tawakal-blue/70",
          shadow: "shadow-tawakal-blue/10",
          hoverBg: "hover:bg-tawakal-blue/5",
          activeBg: "bg-tawakal-blue/5",
        };
    }
  };

  const ValueCard: React.FC<ValueCardProps> = ({
    icon,
    title,
    description,
    color,
    index,
    details,
  }) => {
    const colors = getColorClasses(color);
    const isEven = index % 2 === 0;
    const isExpanded = expandedCard === index;

    // Get the hover text color class
    const getHoverTextColorClass = (
      color: "blue" | "green" | "gold" | "red"
    ) => {
      switch (color) {
        case "blue":
          return "group-hover:text-tawakal-blue";
        case "green":
          return "group-hover:text-tawakal-green";
        case "gold":
          return "group-hover:text-tawakal-gold";
        case "red":
          return "group-hover:text-tawakal-red";
        default:
          return "group-hover:text-tawakal-blue";
      }
    };

    const hoverTextClass = getHoverTextColorClass(color);

    // Get the actual color hex value for gradients
    const getColorHex = (color: "blue" | "green" | "gold" | "red") => {
      switch (color) {
        case "blue":
          return "#0075be"; // tawakal-blue
        case "green":
          return "#2fb457"; // tawakal-green
        case "gold":
          return "#f59e0b"; // tawakal-gold
        case "red":
          return "#d24935"; // tawakal-red
        default:
          return "#0075be"; // tawakal-blue
      }
    };

    const colorHex = getColorHex(color);

    return (
      <motion.div
        variants={itemVariants}
        className={`relative backdrop-blur-md bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/50`}
        onClick={() => setExpandedCard(isExpanded ? null : index)}
        whileHover={{ y: -5 }}>
        {/* Gradient accent line */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`}></div>

        {/* Decorative corner accents */}
        <div className='absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/50 rounded-tl-lg -mt-0.5 -ml-0.5'></div>
        <div className='absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/50 rounded-tr-lg -mt-0.5 -mr-0.5'></div>
        <div className='absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/50 rounded-bl-lg -mb-0.5 -ml-0.5'></div>
        <div className='absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/50 rounded-br-lg -mb-0.5 -mr-0.5'></div>

        {/* Subtle gradient background */}
        <div
          className='absolute inset-0 opacity-10 rounded-xl'
          style={{
            background: `radial-gradient(circle at 50% 0%, ${colorHex}, transparent 70%)`,
          }}></div>

        <div className='p-4 sm:p-6 md:p-8 relative z-10'>
          {/* Icon with hover effect */}
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${
              colors.bg
            } flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ${
              isEven ? "rotate-3" : "-rotate-3"
            }`}>
            <FontAwesomeIcon
              icon={icon}
              className={`h-6 w-6 sm:h-7 sm:w-7 ${colors.text}`}
            />
          </div>

          {/* Title with hover effect - fixed */}
          <h3
            className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
              isExpanded ? colors.text : hoverTextClass
            }`}>
            {title}
          </h3>

          {/* Description */}
          <p className='text-sm sm:text-base text-zinc-600 mb-3 sm:mb-4'>
            {description}
          </p>

          {/* Expanded details */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden mt-3 sm:mt-4'>
            <div
              className={`p-3 sm:p-4 rounded-xl ${colors.activeBg} mb-2 backdrop-blur-sm`}>
              <h4 className='font-medium mb-2 text-sm sm:text-base'>
                How we implement this value:
              </h4>
              <ul className='space-y-1.5 sm:space-y-2'>
                {details.map((detail, idx) => (
                  <li key={idx} className='flex items-start'>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${colors.text} h-3 w-3 sm:h-4 sm:w-4 mt-0.5 sm:mt-1 mr-1.5 sm:mr-2 flex-shrink-0`}
                    />
                    <span className='text-xs sm:text-sm text-zinc-600'>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Decorative dots */}
          <div className='absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex space-x-1'>
            <div
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${colors.bg}`}></div>
            <div
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${colors.bg} opacity-70`}></div>
            <div
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${colors.bg} opacity-40`}></div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Only render animations when component is mounted
  if (!isMounted) {
    return (
      <div className='mb-16 sm:mb-20 md:mb-24 relative min-h-[400px] flex items-center justify-center'>
        <div className='w-8 h-8 border-4 border-tawakal-blue border-t-transparent rounded-full animate-spin'></div>
      </div>
    );
  }

  return (
    <div className='mb-16 sm:mb-20 md:mb-24 relative'>
      {/* Enhanced background decorative elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none -z-10'>
        <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-tawakal-red/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-tawakal-gold/10 rounded-full blur-3xl'></div>

        {/* Subtle grid pattern */}
        <div
          className='absolute inset-0 bg-grid-pattern opacity-5'
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}></div>
      </div>

      <div className='text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='will-change-transform'>
          <div className='inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-tawakal-green/10 to-tawakal-blue/10 rounded-full mb-3 sm:mb-4 backdrop-blur-sm border border-white/30'>
            <p className='text-gradient-green-blue font-medium text-xs sm:text-sm flex items-center justify-center'>
              <FontAwesomeIcon
                icon={faHeart}
                className='mr-1.5 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5'
              />
              What Drives Us
            </p>
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>
            Our <span className='text-gradient-green-blue'>Core</span> Values
          </h2>
          <p className='text-base sm:text-lg text-zinc-600 px-4'>
            At Tawakal Express, our values guide everything we do. They shape
            our culture, inform our decisions, and help us deliver exceptional
            service to our customers.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 will-change-transform'>
        {values.map((value, index) => (
          <ValueCard key={index} {...value} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ValuesSection;
