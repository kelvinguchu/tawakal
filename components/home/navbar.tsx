"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      }`}>
      <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <Image
                src='/logo.png'
                alt='Tawakal Express'
                width={150}
                height={45}
                className='h-10 w-auto'
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='#'
              className='text-zinc-800 hover:text-tawakal-green font-medium transition-all duration-300'>
              Cards
            </Link>
            <Link
              href='#'
              className='text-zinc-800 hover:text-tawakal-blue font-medium transition-all duration-300'>
              Features
            </Link>
            <Link
              href='#'
              className='text-zinc-800 hover:text-tawakal-red font-medium transition-all duration-300'>
              Security
            </Link>
            <Link
              href='#'
              className='text-zinc-800 hover:text-tawakal-green font-medium transition-all duration-300'>
              Pricing
            </Link>
          </div>

          {/* Sign Up and Login Buttons */}
          <div className='flex items-center space-x-4'>
            <Link
              href='#'
              className='hidden md:block text-zinc-800 hover:text-tawakal-blue font-medium transition-colors'>
              Login
            </Link>
            <Button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue hover:from-tawakal-blue hover:to-tawakal-green text-white rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg'>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
