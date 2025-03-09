"use client";

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEarthAfrica,
  faEarthAsia,
  faEarthAmericas,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface RegionSectionProps {
  region: "east_africa" | "middle_east" | "north_america_europe";
  title: string;
  description: string;
  tags: Array<{
    name: string;
    color: "green" | "blue" | "gold" | "red";
  }>;
  mapCaption: string;
  markers: Array<{
    name: string;
    coordinates: [number, number];
    color: string;
  }>;
  reverse?: boolean;
}

// Region-specific settings
const regionSettings = {
  east_africa: {
    center: [40, 0] as [number, number],
    zoom: 2.5,
    countries: ["SOM", "KEN", "ETH", "TZA", "UGA", "RWA", "BDI", "DJI", "ERI"],
    highlightColor: "#2fb457", // tawakal-green
    bgGradient: "from-tawakal-green/5 to-tawakal-blue/5",
    icon: faEarthAfrica,
    accentColor: "tawakal-green",
    gradientFrom: "from-tawakal-green",
    gradientTo: "to-tawakal-blue",
    labelGradient: "from-tawakal-green to-tawakal-blue",
    mapScale: 250,
  },
  middle_east: {
    center: [55, 25] as [number, number],
    zoom: 2.5,
    countries: ["ARE", "SAU", "QAT", "OMN", "BHR", "KWT", "YEM"],
    highlightColor: "#f59e0b", // tawakal-gold
    bgGradient: "from-tawakal-gold/5 to-tawakal-red/5",
    icon: faEarthAsia,
    accentColor: "tawakal-gold",
    gradientFrom: "from-tawakal-gold",
    gradientTo: "to-tawakal-red",
    labelGradient: "from-tawakal-gold to-tawakal-red",
    mapScale: 250,
  },
  north_america_europe: {
    center: [-20, 45] as [number, number],
    zoom: 1.2,
    countries: ["USA", "GBR", "CAN", "SWE", "NOR", "DEU", "FRA"],
    highlightColor: "#0075be", // tawakal-blue
    bgGradient: "from-tawakal-blue/5 to-tawakal-green/5",
    icon: faEarthAmericas,
    accentColor: "tawakal-blue",
    gradientFrom: "from-tawakal-blue",
    gradientTo: "to-tawakal-green",
    labelGradient: "from-tawakal-blue to-tawakal-green",
    mapScale: 150,
  },
};

const RegionSection: React.FC<RegionSectionProps> = ({
  region,
  title,
  description,
  tags,
  mapCaption,
  markers,
  reverse = false,
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setMapLoaded(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const settings = regionSettings[region];

  // Color scale for countries
  const colorScale = scaleLinear<string>()
    .domain([0, settings.countries.length - 1])
    .range(["#e6f7ff", settings.highlightColor]);

  // Get color class based on color name
  const getColorClass = (color: "green" | "blue" | "gold" | "red") => {
    switch (color) {
      case "green":
        return "bg-tawakal-green/10 text-tawakal-green hover:bg-tawakal-green/20";
      case "blue":
        return "bg-tawakal-blue/10 text-tawakal-blue hover:bg-tawakal-blue/20";
      case "gold":
        return "bg-tawakal-gold/10 text-tawakal-gold hover:bg-tawakal-gold/20";
      case "red":
        return "bg-tawakal-red/10 text-tawakal-red hover:bg-tawakal-red/20";
      default:
        return "bg-tawakal-blue/10 text-tawakal-blue hover:bg-tawakal-blue/20";
    }
  };

  return (
    <div className={`region-section mb-12 sm:mb-16 md:mb-24`}>
      {/* Special styling for North America & Europe region */}
      {region === "north_america_europe" && (
        <style jsx global>{`
          /* Hide the decorative circles that appear in the North America & Europe map */
          .north-america-europe-region
            ~ div
            .absolute.-bottom-32.-left-32.w-96.h-96.bg-tawakal-green.rounded-full.blur-\\[100px\\],
          .north-america-europe-region
            ~ div
            .absolute.-top-20.-right-20.w-64.h-64.bg-tawakal-blue.rounded-full.blur-\\[80px\\] {
            display: none !important;
          }
        `}</style>
      )}

      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
          {/* Gradient top border */}
          <div
            className={`h-1 w-full bg-gradient-to-r ${settings.gradientFrom} ${settings.gradientTo}`}></div>

          {/* Main container with flex layout - improved responsive behavior */}
          <div
            className={`flex flex-col ${
              reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-stretch`}>
            {/* Content Side - improved padding for mobile */}
            <div className='w-full md:w-1/2 bg-white'>
              <div className='h-full p-5 sm:p-6 md:p-8 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center mb-4 sm:mb-6'>
                    <FontAwesomeIcon
                      icon={settings.icon}
                      className={`h-5 w-5 sm:h-6 sm:w-6 text-${settings.accentColor} mr-2 sm:mr-3`}
                    />
                    <h3
                      className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${settings.gradientFrom} ${settings.gradientTo}`}>
                      {title}
                    </h3>
                  </div>

                  <p className='text-sm sm:text-base text-zinc-600 mb-4 sm:mb-6'>
                    {description}
                  </p>

                  <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6'>
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 ${getColorClass(
                          tag.color
                        )} text-xs sm:text-sm font-medium rounded-full transition-all duration-300`}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='mt-auto'>
                  <a
                    href='#'
                    className={`inline-flex items-center text-${settings.accentColor} text-sm sm:text-base font-medium hover:underline group`}>
                    Learn more about our services in this region
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300'
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Side - improved height for mobile */}
            <div className='w-full md:w-1/2 relative bg-gray-100'>
              {/* Region label - moved outside map container for better visibility on all devices */}
              <div className='absolute top-2 sm:top-4 right-2 sm:right-4 z-30'>
                <div
                  className={`bg-gradient-to-r ${settings.labelGradient} px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-white text-xs sm:text-sm font-medium shadow-md`}>
                  {region === "east_africa" && "East Africa"}
                  {region === "middle_east" && "Middle East"}
                  {region === "north_america_europe" &&
                    "North America & Europe"}
                </div>
              </div>

              {/* Map container - better aspect ratio for mobile */}
              <div className='h-[250px] sm:h-[300px] md:h-full aspect-video md:aspect-auto relative'>
                {/* Map overlay gradient - reduced opacity */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10'></div>

                {/* Map caption - responsive positioning and sizing */}
                <div className='absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 z-20'>
                  <p className='text-white text-xs sm:text-sm font-medium drop-shadow-md'>
                    {mapCaption}
                  </p>
                </div>

                {/* Map */}
                <div className='h-full w-full'>
                  {isMounted && mapLoaded ? (
                    <div className='relative h-full'>
                      <ComposableMap
                        projection='geoMercator'
                        projectionConfig={{
                          scale: settings.mapScale,
                          rotate: [-10, 0, 0],
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "transparent",
                        }}>
                        <ZoomableGroup
                          center={settings.center}
                          zoom={settings.zoom}
                          disablePanning={true}
                          disableZooming={true}>
                          <Geographies geography='/world-countries.json'>
                            {({ geographies }) =>
                              geographies.map((geo) => {
                                const isHighlighted =
                                  settings.countries.includes(geo.id);
                                const colorIndex = settings.countries.indexOf(
                                  geo.id
                                );

                                return (
                                  <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={
                                      isHighlighted
                                        ? colorScale(colorIndex)
                                        : "#F5F5F5"
                                    }
                                    stroke={
                                      isHighlighted
                                        ? settings.highlightColor
                                        : "#D6D6DA"
                                    }
                                    strokeWidth={isHighlighted ? 0.8 : 0.5}
                                    style={{
                                      default: { outline: "none" },
                                      hover: { outline: "none" },
                                      pressed: { outline: "none" },
                                    }}
                                  />
                                );
                              })
                            }
                          </Geographies>
                        </ZoomableGroup>
                      </ComposableMap>
                    </div>
                  ) : (
                    <div className='absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50'>
                      <div className='w-6 h-6 sm:w-8 sm:h-8 border-3 sm:border-4 border-tawakal-blue border-t-transparent rounded-full animate-spin'></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegionSection;
