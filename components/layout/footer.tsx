"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-white border-t border-gray-200 w-full z-50'>
      {/* Clear any background effects */}
      <div className='absolute inset-0 bg-white'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <Link href='/' className='inline-block'>
              <div className='relative h-10 w-[150px]'>
                <Image
                  src='/logo.png'
                  alt='Tawakal Express'
                  fill
                  className='object-contain'
                  priority
                />
              </div>
            </Link>
            <p className='text-zinc-600 text-sm'>
              Safe, Secure and Reliable financial solutions worldwide.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/share/19J36i8vZW/'
                className='text-zinc-400 hover:text-tawakal-green transition-colors p-2 rounded-full hover:bg-gray-100'>
                <Facebook size={18} />
              </a>
              <a
                href='https://x.com/TawakalExpress?t=SPrcwlD0rDuUrK7KK4PITA&s=09'
                className='text-zinc-400 hover:text-tawakal-blue transition-colors p-2 rounded-full hover:bg-gray-100'>
                <Twitter size={18} />
              </a>
              <a
                href='https://www.instagram.com/tawakalexpress?igsh=MWE0eDRneHBhYWY2cw=='
                className='text-zinc-400 hover:text-tawakal-red transition-colors p-2 rounded-full hover:bg-gray-100'>
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-base font-semibold text-zinc-800 mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-zinc-600 hover:text-tawakal-green transition-colors text-sm inline-flex items-center group'>
                  <ArrowRight className='mr-2 h-3 w-3 group-hover:translate-x-1 transition-transform' />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/products/tplus'
                  className='text-zinc-600 hover:text-tawakal-blue transition-colors text-sm inline-flex items-center group'>
                  <ArrowRight className='mr-2 h-3 w-3 group-hover:translate-x-1 transition-transform' />
                  T-Plus
                </Link>
              </li>
              <li>
                <Link
                  href='/products/bananapay'
                  className='text-zinc-600 hover:text-tawakal-gold transition-colors text-sm inline-flex items-center group'>
                  <ArrowRight className='mr-2 h-3 w-3 group-hover:translate-x-1 transition-transform' />
                  Banana Pay
                </Link>
              </li>
              <li>
                <Link
                  href='/products/etawakal'
                  className='text-zinc-600 hover:text-tawakal-green transition-colors text-sm inline-flex items-center group'>
                  <ArrowRight className='mr-2 h-3 w-3 group-hover:translate-x-1 transition-transform' />
                  eTawakal
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-zinc-600 hover:text-tawakal-red transition-colors text-sm inline-flex items-center group'>
                  <ArrowRight className='mr-2 h-3 w-3 group-hover:translate-x-1 transition-transform' />
                  News
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-zinc-600 hover:text-tawakal-blue transition-colors text-sm inline-flex items-center group'>
                  <ArrowRight className='mr-2 h-3 w-3 group-hover:translate-x-1 transition-transform' />
                  Business Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-base font-semibold text-zinc-800 mb-4'>
              Contact Us
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <MapPin className='mr-2 h-4 w-4 text-tawakal-green flex-shrink-0 mt-0.5' />
                <span className='text-zinc-600 text-sm'>
                  123 Money Transfer St.
                  <br />
                  Mogadishu, Somalia
                </span>
              </li>
              <li className='flex items-center'>
                <Phone className='mr-2 h-4 w-4 text-tawakal-blue flex-shrink-0' />
                <a
                  href='tel:+1234567890'
                  className='text-zinc-600 hover:text-zinc-800 transition-colors text-sm'>
                  +1 (234) 567-890
                </a>
              </li>
              <li className='flex items-center'>
                <Mail className='mr-2 h-4 w-4 text-tawakal-red flex-shrink-0' />
                <a
                  href='mailto:info@tawakalexpress.com'
                  className='text-zinc-600 hover:text-zinc-800 transition-colors text-sm'>
                  info@tawakalexpress.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-base font-semibold text-zinc-800 mb-4'>
              Newsletter
            </h3>
            <p className='text-zinc-600 text-sm mb-3'>
              Subscribe for updates and news
            </p>
            <div className='flex'>
              <Input
                type='email'
                placeholder='Your email'
                className='rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0'
              />
              <Button
                type='submit'
                className='bg-tawakal-green hover:bg-tawakal-green/90 text-white rounded-l-none'>
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='relative z-10 border-t border-gray-200 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-zinc-500 text-xs'>
              &copy; {currentYear} Tawakal Express. All rights reserved.
            </p>
            <div className='flex space-x-4 mt-2 md:mt-0'>
              <Link
                href='#'
                className='text-zinc-500 hover:text-zinc-800 text-xs transition-colors'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-zinc-500 hover:text-zinc-800 text-xs transition-colors'>
                Terms of Service
              </Link>
              <Link
                href='#'
                className='text-zinc-500 hover:text-zinc-800 text-xs transition-colors'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
