"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

const products = [
  {
    id: "tplus",
    name: "T-Plus",
    tagline: "Mobile Wallet",
    description:
      "Somalia's first mobile wallet for seamless money transfers and payments.",
    color: "#0075be",
    logo: "/images/tplus.webp",
    href: "/products/tplus",
  },
  {
    id: "bananapay",
    name: "Banana Pay",
    tagline: "US Money Transfer",
    description:
      "Send money from the US to friends and family abroad with ease.",
    color: "#f59e0b",
    logo: "/images/bananapay.png",
    href: "/products/bananapay",
  },
  {
    id: "etawakal",
    name: "eTawakal",
    tagline: "Online Agent",
    description:
      "Send money online from anywhere, anytime with our secure platform.",
    color: "#2fb457",
    logo: "/images/etawakal.png",
    href: "/products/etawakal",
  },
];

export default function ProductsPopover({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  const handleProductClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[750px] z-50'>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className='bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden'>
        <div className='p-6'>
          <div className='mb-5'>
            <h3 className='text-xl font-bold text-gray-800'>
              Our Products & Services
            </h3>
          </div>

          <div className='grid grid-cols-3 gap-6'>
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.href)}
                className='group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer flex flex-col'>
                <div className='p-5 flex-grow flex flex-col'>
                  <div className='flex items-center mb-3'>
                    <div
                      className='w-12 h-12 rounded-full bg-white flex items-center justify-center mr-3 overflow-hidden border-2'
                      style={{ borderColor: product.color }}>
                      <Image
                        src={product.logo}
                        alt={product.name}
                        width={40}
                        height={40}
                        className='object-contain'
                      />
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-800'>
                        {product.name}
                      </h4>
                      <p className='text-xs' style={{ color: product.color }}>
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className='text-sm text-gray-600 mb-4 flex-grow'>
                    {product.description}
                  </p>

                  <div className='flex items-center text-sm font-medium mt-auto'>
                    <span
                      style={{ color: product.color }}
                      className='group-hover:underline'>
                      Learn more
                    </span>
                    <ChevronRight
                      style={{ color: product.color }}
                      className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-gray-50 p-4'>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500'>
              Need help choosing a service?
            </p>
            <Link
              href='/contact'
              onClick={onClose}
              className='text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors'>
              Contact our support team
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
