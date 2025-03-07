"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ThumbsUp, Users, Globe } from "lucide-react";

export default function Mission() {
  const values = [
    {
      title: "Integrity",
      description:
        "Being ethical, honest, respectful, and always trying to do what is right.",
      icon: <ShieldCheck className='h-8 w-8 text-white' />,
      color: "from-tawakal-green to-emerald-600",
    },
    {
      title: "Excellence",
      description:
        "Challenging convention, innovating and delivering exceptional results every day.",
      icon: <Sparkles className='h-8 w-8 text-white' />,
      color: "from-tawakal-blue to-blue-600",
    },
    {
      title: "Customer Care",
      description:
        "Working to create value for our customers and earning their trust every day.",
      icon: <ThumbsUp className='h-8 w-8 text-white' />,
      color: "from-tawakal-red to-red-600",
    },
    {
      title: "Teamwork",
      description:
        "Working together and helping each other grow to execute our mission.",
      icon: <Users className='h-8 w-8 text-white' />,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Social Responsibility",
      description:
        "Being active participants for our local communities and uplifting people.",
      icon: <Globe className='h-8 w-8 text-white' />,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#f9f9f9] to-[#f0f9ff] -z-30'></div>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-tawakal-green/5 rounded-full blur-3xl -z-20'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-tawakal-blue/5 rounded-full blur-3xl -z-20'></div>

      <div className='container mx-auto px-4'>
        {/* Mission section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <div className='inline-block px-4 py-2 bg-tawakal-green/10 rounded-full mb-4'>
              <p className='text-tawakal-green font-medium text-sm'>
                Our Purpose
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Our <span className='text-gradient-green-blue'>Mission</span>
            </h2>
          </div>

          <motion.div
            className='bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-3xl mx-auto text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h3 className='text-2xl font-bold text-zinc-800 mb-6'>
              "To make our customers' lives a whole lot brighter"
            </h3>
            <p className='text-lg text-zinc-600'>
              We use our expertise to deliver solutions that make payments
              easier, faster, and more accessible to everyone.
            </p>
          </motion.div>
        </div>

        {/* Values section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <div className='inline-block px-4 py-2 bg-tawakal-blue/10 rounded-full mb-4'>
              <p className='text-tawakal-blue font-medium text-sm'>
                What We Stand For
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Our <span className='text-gradient-blue-red'>Values</span>
            </h2>
            <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
              Our values guide everything we do, from how we treat our customers
              to how we work together as a team.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className='bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div
                  className={`h-16 bg-gradient-to-r ${value.color} flex items-center px-6`}>
                  <div className='w-12 h-12 rounded-full bg-white/20 flex items-center justify-center'>
                    {value.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white ml-4'>
                    {value.title}
                  </h3>
                </div>
                <div className='p-6'>
                  <p className='text-zinc-600'>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What We Do section */}
        <div>
          <div className='text-center mb-12'>
            <div className='inline-block px-4 py-2 bg-tawakal-red/10 rounded-full mb-4'>
              <p className='text-tawakal-red font-medium text-sm'>
                Our Approach
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              What <span className='text-gradient-blue-red'>We Do</span>
            </h2>
          </div>

          <motion.div
            className='bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <p className='text-lg text-zinc-600 mb-6'>
              We use our expertise to deliver solutions that make payments
              easier, faster, and more accessible to everyone.
            </p>

            <h3 className='text-xl font-bold text-zinc-800 mb-4'>
              Our Strategy
            </h3>
            <ul className='space-y-3 text-zinc-600'>
              <li className='flex items-start'>
                <div className='w-5 h-5 rounded-full bg-tawakal-green/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0'>
                  <div className='w-2 h-2 rounded-full bg-tawakal-green'></div>
                </div>
                <p>
                  Continuing to pursue appropriate expansion opportunities to
                  further consolidate our position and diversify earnings.
                </p>
              </li>
              <li className='flex items-start'>
                <div className='w-5 h-5 rounded-full bg-tawakal-blue/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0'>
                  <div className='w-2 h-2 rounded-full bg-tawakal-blue'></div>
                </div>
                <p>
                  By our strategy of online cost-saving measures, operational
                  efficiency is improving, and thereby to improve business model
                  we are exploring outsourcing.
                </p>
              </li>
              <li className='flex items-start'>
                <div className='w-5 h-5 rounded-full bg-tawakal-red/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0'>
                  <div className='w-2 h-2 rounded-full bg-tawakal-red'></div>
                </div>
                <p>
                  Taking advantage of ETawakal – An online agent, BananaPay, and
                  T-Plus mobile money opportunities in our Markets to deliver
                  exceptional service to our customers.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
