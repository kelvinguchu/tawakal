"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  const timelineItems = [
    {
      year: "Early Years",
      title: "Founded in Somalia",
      description:
        "Started as a physical money transfer company in Somalia, focusing on local transfers.",
    },
    {
      year: "Growth Phase",
      title: "Expansion to East Africa",
      description:
        "Expanded operations to neighboring countries in East Africa, establishing a regional presence.",
    },
    {
      year: "Digital Transformation",
      title: "Adoption of Technology",
      description:
        "Embraced digital solutions to enhance service delivery and reach more customers globally.",
    },
    {
      year: "Present Day",
      title: "Global Money Transfer Network",
      description:
        "Operating in 14+ countries with partnerships in 11+ additional countries worldwide.",
    },
  ];

  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f0f9ff] to-[#f9f9f9] -z-30'></div>

      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-2 bg-tawakal-blue/10 rounded-full mb-4'>
            <p className='text-tawakal-blue font-medium text-sm'>Our Journey</p>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            The <span className='text-gradient-green-blue'>Tawakal</span> Story
          </h2>
          <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
            From our humble beginnings to becoming a global financial service
            provider, we've been connecting families across continents for over
            four decades.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
          {/* Left side - Image with animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className='relative'>
            <div className='relative h-[400px] rounded-3xl overflow-hidden shadow-xl'>
              <Image
                src='/images/nairobi.webp'
                alt='Tawakal Express Journey'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-tr from-tawakal-blue/30 via-transparent to-tawakal-green/30'></div>
            </div>

            {/* Decorative elements */}
            <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-tawakal-green/20 -z-10'></div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <div className='bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg'>
              <p className='text-zinc-600 mb-6'>
                We continue our efforts to remove the challenges involved in
                international money transfers and to offer the best services to
                people looking to send money to their family and friends. We
                identify the basic problems of money transfer services and
                deliver effective solutions.
              </p>

              <p className='text-zinc-600 mb-6'>
                You simply remit money at our branch, and it can be made
                available to the recipient within minutes. Having tasted success
                by serving thousands of families in conventional ways, our
                gradual development as a premier international money transfer
                company of Somalia can be credited to our adoption of new
                technology.
              </p>

              <p className='text-zinc-600'>
                In order to serve our customers in a more efficient and secure
                way, we have developed a new gamut of services like E-Tawakal –
                An Online Agent, Banana Pay, and T-Plus Mobile Money Transfer.
                All our services are developed solely to improve our customer's
                comfort and security.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tawakal-green via-tawakal-blue to-tawakal-red'></div>

          {/* Timeline items */}
          <div className='relative'>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-16 ${
                  index % 2 === 0
                    ? "justify-start md:justify-end"
                    : "justify-start"
                } relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}>
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}>
                  <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30'>
                    <div className='inline-block px-3 py-1 rounded-full bg-tawakal-blue/10 mb-3'>
                      <p className='text-tawakal-blue text-sm font-medium'>
                        {item.year}
                      </p>
                    </div>
                    <h3 className='text-xl font-bold text-zinc-800 mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-zinc-600'>{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className='absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-tawakal-blue'></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
