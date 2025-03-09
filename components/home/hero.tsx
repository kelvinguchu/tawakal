"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import CardVisualization from "./card-visualization";
import {
  Download,
  MapPin,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCountry, setActiveCountry] = useState(0);

  // Countries data for the interactive globe
  const countries = [
    { name: "Somalia", position: { x: 65, y: 45 }, color: "#2fb457" },
    { name: "Kenya", position: { x: 62, y: 50 }, color: "#0075be" },
    { name: "UAE", position: { x: 58, y: 40 }, color: "#d24935" },
    { name: "UK", position: { x: 45, y: 25 }, color: "#f59e0b" },
    { name: "USA", position: { x: 25, y: 30 }, color: "#2fb457" },
  ];

  // Set loaded state after a small delay for entrance animations
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    // Rotate through countries
    const countryInterval = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % countries.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(countryInterval);
    };
  }, [countries.length]);

  return (
    <section className='relative h-[100vh] pt-0 -mt-8 sm:mt-0 sm:pt-20 flex items-center'>
      {/* Main content container */}
      <div className='container mx-auto px-4 relative z-10 h-full flex items-center'>
        <div className='flex flex-col-reverse lg:flex-row w-full gap-4 sm:gap-8 items-center'>
          {/* Left side - Text content */}
          <div
            className={`w-full lg:w-1/2 space-y-3 sm:space-y-5 max-w-2xl transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Badge
              variant='outline'
              className='px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 dark:bg-primary/20 border-0 rounded-full'>
              <span className='text-primary dark:text-white font-medium text-xs sm:text-sm flex items-center'>
                <CheckCircle2 className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-tawakal-green animate-pulse' />
                Safe, Secure & Reliable
              </span>
            </Badge>

            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-tight'>
              <div className='overflow-hidden mb-0.5 sm:mb-1'>
                <span
                  className='inline-block transform transition-transform duration-1000 delay-100'
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                  }}>
                  International
                </span>
              </div>
              <div className='overflow-hidden mb-0.5 sm:mb-1'>
                <span
                  className='inline-block bg-gradient-to-r from-tawakal-green to-tawakal-blue bg-clip-text text-transparent transform transition-transform duration-1000 delay-300'
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                  }}>
                  money transfers
                </span>
              </div>
              <div className='overflow-visible'>
                <div
                  className='inline-block transform transition-transform duration-1000 delay-500'
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                  }}>
                  made
                  <span className='relative ml-2 sm:ml-4 inline-block'>
                    <span className='bg-gradient-to-r from-tawakal-blue to-tawakal-red bg-clip-text text-transparent'>
                      simple
                    </span>
                  </span>
                </div>
          </div>
          </h1>

            <p className='text-sm sm:text-base md:text-lg max-w-none text-muted-foreground dark:text-zinc-300'>
              Send money to family and friends across{" "}
              <span className='font-semibold text-tawakal-blue'>
                over 50 countries
              </span>{" "}
              including Somalia, Kenya, UAE, UK, USA and more with low fees and
              fast delivery.
            </p>

            <div className='flex flex-row gap-2 sm:gap-3 pt-1 w-full'>
              <Link href='#products' className='flex-1'>
                <Button
                  size='lg'
                  className='w-full bg-gradient-to-r from-tawakal-green to-tawakal-blue hover:from-tawakal-blue hover:to-tawakal-green text-white rounded-full px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-5 text-xs md:text-base shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden'>
                  <span className='relative z-10 flex items-center justify-center'>
                    <Download className='w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2' />
                    <span>Download apps</span>
                    <ArrowRight className='w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                  </span>
                  <span className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500'></span>
              </Button>
            </Link>

              <Link href='#agents' className='flex-1'>
              <Button
                variant='outline'
                  size='lg'
                  className='w-full border-tawakal-blue/20 hover:border-tawakal-blue hover:bg-tawakal-blue/5 dark:border-zinc-700 dark:hover:bg-zinc-800 text-foreground dark:text-white rounded-full px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-5 text-xs md:text-base group'>
                  <MapPin className='w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-tawakal-blue group-hover:text-tawakal-blue' />
                  <span>Find agents</span>
              </Button>
            </Link>
            </div>

            {/* Countries list with globe icon */}
            <div className='pt-0.5 sm:pt-1'>
              <p className='text-muted-foreground dark:text-zinc-400 text-[10px] xs:text-xs md:text-sm mb-1 sm:mb-1.5 flex items-center'>
                <Globe className='w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5 text-tawakal-green' />
                Available in over 50 countries including:
              </p>
              <div className='flex flex-wrap gap-1 sm:gap-1.5'>
                {countries.map((country, index) => (
                  <span
                    key={country.name}
                    className={`px-1.5 sm:px-2.5 py-0.5 rounded-full text-[10px] xs:text-xs md:text-sm transition-all duration-300 ${
                      index === activeCountry
                        ? "bg-primary/10 dark:bg-white/10 text-primary dark:text-white"
                        : "bg-transparent text-muted-foreground dark:text-zinc-400 hover:text-primary dark:hover:text-white"
                    }`}
                    style={{
                      borderLeft:
                        index === activeCountry
                          ? `2px solid ${country.color}`
                          : "none",
                    }}
                    onMouseEnter={() => setActiveCountry(index)}>
                    {country.name}
                  </span>
                ))}
              </div>
              </div>
            </div>

          {/* Right side - Interactive visualization */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <CardVisualization
              countries={countries}
              activeCountry={activeCountry}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
