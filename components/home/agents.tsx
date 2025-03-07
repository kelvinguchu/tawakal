import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Agent data
const agents = [
  {
    id: 1,
    name: "Tawakal Express Nairobi",
    location: "Nairobi, Kenya",
    address: "Eastleigh Business Center, 3rd Floor",
    phone: "+254 712 345 678",
    hours: "Mon-Sat: 8AM-6PM",
    image: "/images/nairobi.webp",
    flag: "🇰🇪",
  },
  {
    id: 2,
    name: "Tawakal Express London",
    location: "London, UK",
    address: "127 Whitechapel Road, E1 1DT",
    phone: "+44 20 7946 0378",
    hours: "Mon-Sat: 9AM-7PM",
    image: "/images/uk.webp",
    flag: "🇬🇧",
  },
  {
    id: 3,
    name: "Tawakal Express Minneapolis",
    location: "Minneapolis, USA",
    address: "2200 E Franklin Ave, MN 55404",
    phone: "+1 612 871 8832",
    hours: "Mon-Sat: 9AM-8PM",
    image: "/images/usa.webp",
    flag: "🇺🇸",
  },
  {
    id: 4,
    name: "Tawakal Express Mogadishu",
    location: "Mogadishu, Somalia",
    address: "Bakara Market, Hawl Wadaag District",
    phone: "+252 612 345 678",
    hours: "Sat-Thu: 8AM-6PM",
    image: "/images/somalia.webp",
    flag: "🇸🇴",
  },
  {
    id: 5,
    name: "Tawakal Express Stockholm",
    location: "Stockholm, Sweden",
    address: "Rinkeby Torg 1, 163 73 Spånga",
    phone: "+46 8 621 0378",
    hours: "Mon-Fri: 10AM-6PM",
    image: "/images/sweden.webp",
    flag: "🇸🇪",
  },
  {
    id: 6,
    name: "Tawakal Express Dubai",
    location: "Dubai, UAE",
    address: "Al Fahidi St, Bur Dubai",
    phone: "+971 4 354 7812",
    hours: "Sun-Thu: 9AM-9PM",
    image: "/images/dollars.webp", // Using dollars.webp as a placeholder
    flag: "🇦🇪",
  },
];

export default function Agents() {
  return (
    <section id='agents' className='py-24 relative overflow-hidden'>
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
              Global Network
            </p>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Our <span className='text-gradient-green-blue'>Trusted</span>{" "}
            <span className='text-gradient-blue-red'>Agents</span>
          </h2>
          <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
            Visit one of our many agent locations worldwide for in-person money
            transfer services, with fast and reliable service in over 14
            countries.
          </p>
        </div>

        {/* World map visualization */}
        <div className='relative h-[300px] mb-16 rounded-3xl overflow-hidden shadow-xl'>
          {/* Map background */}
          <div className='absolute inset-0 bg-gradient-to-b from-[#1a2942] to-[#0f172a] z-0'></div>

          {/* World map outline */}
          <div className="absolute inset-0 bg-[url('/images/world-map-outline.png')] bg-no-repeat bg-center bg-contain opacity-30 z-10"></div>

          {/* Animated glow effect */}
          <div className='absolute inset-0 bg-gradient-to-tr from-tawakal-green/20 via-transparent to-tawakal-blue/20 animate-pulse z-20'></div>

          {/* Agent location dots */}
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              className='absolute z-30'
              style={{
                top: `${30 + Math.random() * 40}%`,
                left: `${20 + (agent.id - 1) * 12}%`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: agent.id * 0.2,
              }}>
              <div className='relative'>
                <div className='w-4 h-4 rounded-full bg-tawakal-green animate-ping absolute inset-0 opacity-70'></div>
                <div className='w-4 h-4 rounded-full bg-gradient-to-r from-tawakal-green to-tawakal-blue relative'></div>
                <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-2 py-1 text-xs font-medium whitespace-nowrap'>
                  {agent.flag} {agent.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agent cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              className='bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl group'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: agent.id * 0.1 }}
              viewport={{ once: true }}>
              <div className='relative h-48'>
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
                <div className='absolute bottom-0 left-0 p-4 w-full'>
                  <div className='flex items-center mb-1'>
                    <span className='text-xl mr-2'>{agent.flag}</span>
                    <h3 className='text-white font-bold text-lg'>
                      {agent.name}
                    </h3>
                  </div>
                  <p className='text-white/80 text-sm'>{agent.location}</p>
                </div>
              </div>

              <div className='p-4'>
                <div className='space-y-2'>
                  <div className='flex items-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-tawakal-green mt-0.5 mr-2 flex-shrink-0'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <p className='text-zinc-700 text-sm'>{agent.address}</p>
                  </div>

                  <div className='flex items-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-tawakal-blue mt-0.5 mr-2 flex-shrink-0'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                    <p className='text-zinc-700 text-sm'>{agent.phone}</p>
                  </div>

                  <div className='flex items-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-tawakal-red mt-0.5 mr-2 flex-shrink-0'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <p className='text-zinc-700 text-sm'>{agent.hours}</p>
                  </div>
                </div>

                <div className='mt-4 pt-4 border-t border-zinc-200'>
                  <Button className='w-full bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>
                    Get Directions
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-16 text-center'>
          <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 max-w-3xl mx-auto'>
            <h3 className='text-2xl font-bold mb-4'>
              Can't find an agent near you?
            </h3>
            <p className='text-zinc-600 mb-6'>
              We have over 500 agents worldwide. Use our agent locator to find
              the nearest Tawakal Express agent in your area.
            </p>
            <Button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue text-white rounded-full px-8 py-6 text-base shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
              Find Nearest Agent <span className='ml-2'>→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
