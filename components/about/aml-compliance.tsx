"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AMLCompliance() {
  const compliancePoints = [
    {
      title: "Comprehensive AML Program",
      description:
        "We implement a thorough anti-money laundering program ensuring full compliance with all relevant rules and regulations.",
      icon: "🛡️",
    },
    {
      title: "Suspicious Transaction Monitoring",
      description:
        "Our systems are designed to be alert and report suspicious transactions to the appropriate authorities.",
      icon: "🔍",
    },
    {
      title: "Legal Obligations",
      description:
        "We strictly observe all legal obligations in dealing with our customers across all jurisdictions.",
      icon: "⚖️",
    },
    {
      title: "Record Retention",
      description:
        "We maintain appropriate records of our customers for the required period as mandated by regulations.",
      icon: "📋",
    },
  ];

  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-white to-[#f9f9f9] -z-30'></div>

      {/* Decorative elements */}
      <div className='absolute top-0 right-0 w-64 h-64 bg-tawakal-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-64 h-64 bg-tawakal-green/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl'></div>

      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-2 bg-tawakal-blue/10 rounded-full mb-4'>
            <p className='text-tawakal-blue font-medium text-sm'>
              Compliance & Security
            </p>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Anti-Money{" "}
            <span className='text-gradient-green-blue'>Laundering</span> Policy
          </h2>
          <p className='text-zinc-600 text-lg max-w-3xl mx-auto'>
            At Tawakal Express, we recognize the importance of complying with
            all anti-money laundering laws and combating the financing of
            terrorism.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-stretch gap-12 mb-16'>
          {/* Left side - Image/Illustration */}
          <motion.div
            className='w-full lg:w-1/2 flex'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className='relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-md border border-gray-100'>
              <div className='absolute inset-0 bg-gradient-to-br from-tawakal-blue/20 to-tawakal-green/20'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='relative w-64 h-64'>
                  <div className='absolute inset-0 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center'>
                    <div className='text-center p-6'>
                      <div className='text-5xl mb-4'>🔒</div>
                      <h3 className='text-xl font-bold text-tawakal-blue mb-2'>
                        Secure Transfers
                      </h3>
                      <p className='text-sm text-zinc-600'>
                        Compliant with international regulations
                      </p>
                    </div>
                  </div>

                  {/* Orbiting elements */}
                  <motion.div
                    className='absolute w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-md flex items-center justify-center'
                    style={{
                      top: "0%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}>
                    <span className='text-2xl'>⚖️</span>
                  </motion.div>

                  <motion.div
                    className='absolute w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-md flex items-center justify-center'
                    style={{
                      bottom: "0%",
                      left: "50%",
                      transform: "translate(-50%, 50%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}>
                    <span className='text-2xl'>📋</span>
                  </motion.div>

                  <motion.div
                    className='absolute w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-md flex items-center justify-center'
                    style={{
                      top: "50%",
                      left: "0%",
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}>
                    <span className='text-2xl'>🛡️</span>
                  </motion.div>

                  <motion.div
                    className='absolute w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-md flex items-center justify-center'
                    style={{
                      top: "50%",
                      right: "0%",
                      transform: "translate(50%, -50%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}>
                    <span className='text-2xl'>🔍</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className='w-full lg:w-1/2 flex'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className='bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100 w-full h-full flex flex-col'>
              <h3 className='text-2xl font-bold text-zinc-800 mb-6'>
                Our AML Policy
              </h3>
              <p className='text-zinc-600 mb-8'>
                TAWAKAL EXPRESS and its agents use comprehensive anti-money
                laundering program that ensures full compliance with all
                relevant rules and regulations. We laid out our processes and
                procedures in our AML Manual to make sure that our agents and
                employees implement and comply with all international anti-money
                laundering rules and regulations.
              </p>

              <div className='space-y-6 flex-grow'>
                {compliancePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className='flex items-start gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <div className='flex-shrink-0 w-12 h-12 bg-tawakal-blue/10 rounded-full flex items-center justify-center text-2xl'>
                      {point.icon}
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-zinc-800 mb-1'>
                        {point.title}
                      </h4>
                      <p className='text-zinc-600'>{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className='bg-gradient-to-r from-tawakal-blue/10 to-tawakal-green/10 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-100'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0'>
              <span className='text-3xl'>📜</span>
            </div>
            <div className='text-center md:text-left'>
              <h3 className='text-xl font-bold text-zinc-800 mb-2'>
                Commitment to Compliance
              </h3>
              <p className='text-zinc-600'>
                We apply best practices and continuously update our procedures
                to ensure the highest standards of compliance and security for
                all our customers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
