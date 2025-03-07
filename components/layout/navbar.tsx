"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Products from "../home/products";
import ProductsPopover from "../products/ProductsPopover";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showProductsPopover, setShowProductsPopover] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const productsLinkRef = useRef<HTMLDivElement>(null);
  const popoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleProductsMouseEnter = () => {
    if (popoverTimeoutRef.current) {
      clearTimeout(popoverTimeoutRef.current);
      popoverTimeoutRef.current = null;
    }
    setShowProductsPopover(true);
  };

  const handleProductsMouseLeave = () => {
    popoverTimeoutRef.current = setTimeout(() => {
      setShowProductsPopover(false);
    }, 300); // Small delay to prevent flickering when moving between link and popover
  };

  const handlePopoverMouseEnter = () => {
    if (popoverTimeoutRef.current) {
      clearTimeout(popoverTimeoutRef.current);
      popoverTimeoutRef.current = null;
    }
  };

  const handlePopoverMouseLeave = () => {
    setShowProductsPopover(false);
  };

  const handleClosePopover = () => {
    setShowProductsPopover(false);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

          {/* Navigation Links - Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/about'
              className='text-zinc-800 hover:text-tawakal-green font-medium transition-all duration-300'>
              About Us
            </Link>
            <div
              ref={productsLinkRef}
              className='relative'
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}>
              <span className='text-zinc-800 hover:text-tawakal-blue font-medium transition-all duration-300 cursor-pointer'>
                Products and Services
              </span>

              <AnimatePresence>
                {showProductsPopover && (
                  <div
                    onMouseEnter={handlePopoverMouseEnter}
                    onMouseLeave={handlePopoverMouseLeave}>
                    <ProductsPopover onClose={handleClosePopover} />
                  </div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href='#'
              className='text-zinc-800 hover:text-tawakal-red font-medium transition-all duration-300'>
              News
            </Link>
            <Link
              href='#'
              className='text-zinc-800 hover:text-tawakal-green font-medium transition-all duration-300'>
              Business Services
            </Link>
          </div>

          {/* Desktop Sign Up Button */}
          <div className='hidden md:flex items-center'>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className='bg-gradient-to-r from-tawakal-green to-tawakal-blue hover:from-tawakal-blue hover:to-tawakal-green text-white rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg'>
                  Sign Up
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[800px] p-0 bg-transparent border-none'>
                <div className='bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden'>
                  <div className='p-6 border-b'>
                    <h2 className='text-2xl font-bold text-gradient-green-blue'>
                      Choose Your Service
                    </h2>
                    <p className='text-zinc-600'>
                      Select one of our products to get started
                    </p>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>
                    {/* eTawakal */}
                    <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'>
                      <div className='h-12 bg-gradient-to-r from-tawakal-green to-emerald-600 flex items-center justify-center'>
                        <h3 className='text-white font-bold'>eTawakal</h3>
                      </div>
                      <div className='p-4'>
                        <div className='flex justify-center mb-4'>
                          <div className='w-16 h-16 relative'>
                            <Image
                              src='/images/etawakal.png'
                              alt='eTawakal'
                              fill
                              className='object-contain'
                            />
                          </div>
                        </div>
                        <p className='text-sm text-zinc-600 mb-4'>
                          Online money transfer platform for international
                          transfers
                        </p>
                        <Button className='w-full bg-gradient-to-r from-tawakal-green to-emerald-600 text-white'>
                          Access Online
                        </Button>
                      </div>
                    </div>

                    {/* T-Plus */}
                    <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'>
                      <div className='h-12 bg-gradient-to-r from-tawakal-blue to-blue-600 flex items-center justify-center'>
                        <h3 className='text-white font-bold'>T-Plus</h3>
                      </div>
                      <div className='p-4'>
                        <div className='flex justify-center mb-4'>
                          <div className='w-16 h-16 relative'>
                            <Image
                              src='/images/tplus.webp'
                              alt='T-Plus'
                              fill
                              className='object-contain'
                            />
                          </div>
                        </div>
                        <p className='text-sm text-zinc-600 mb-4'>
                          Mobile wallet for seamless money transfers and
                          payments
                        </p>
                        <Button className='w-full bg-gradient-to-r from-tawakal-blue to-blue-600 text-white'>
                          Download App
                        </Button>
                      </div>
                    </div>

                    {/* Banana Pay */}
                    <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'>
                      <div className='h-12 bg-gradient-to-r from-yellow-500 to-amber-600 flex items-center justify-center'>
                        <h3 className='text-white font-bold'>Banana Pay</h3>
                      </div>
                      <div className='p-4'>
                        <div className='flex justify-center mb-4'>
                          <div className='w-16 h-16 relative'>
                            <Image
                              src='/images/bananapay.png'
                              alt='Banana Pay'
                              fill
                              className='object-contain'
                            />
                          </div>
                        </div>
                        <p className='text-sm text-zinc-600 mb-4'>
                          US-based money transfer service for international
                          remittances
                        </p>
                        <Button className='w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white'>
                          Download App
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className='bg-gray-50 p-4 flex justify-end'>
                    <Button
                      variant='outline'
                      onClick={() => setIsDialogOpen(false)}>
                      Close
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-10 w-10 rounded-full'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[400px] p-0'>
                <div className='flex flex-col h-full'>
                  <div className='p-6'>
                    <div className='flex items-center justify-center mb-8'>
                      <Image
                        src='/logo.png'
                        alt='Tawakal Express'
                        width={180}
                        height={54}
                        className='h-12 w-auto'
                      />
                    </div>

                    <div className='flex flex-col space-y-4'>
                      <Link
                        href='/about'
                        className='text-zinc-800 hover:text-tawakal-green font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100'>
                        About Us
                      </Link>
                      <div className='relative'>
                        <div className='text-zinc-800 hover:text-tawakal-blue font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer'>
                          Products and Services
                        </div>
                        <div className='pl-4 mt-2 border-l-2 border-gray-200 space-y-2'>
                          <Link
                            href='/products/tplus'
                            className='block text-sm text-tawakal-blue hover:text-tawakal-green py-2 px-4 transition-all duration-300'>
                            T-Plus
                          </Link>
                          <Link
                            href='/products/bananapay'
                            className='block text-sm text-amber-500 hover:text-amber-600 py-2 px-4 transition-all duration-300'>
                            Banana Pay
                          </Link>
                          <Link
                            href='/products/etawakal'
                            className='block text-sm text-tawakal-green hover:text-emerald-600 py-2 px-4 transition-all duration-300'>
                            eTawakal
                          </Link>
                        </div>
                      </div>
                      <Link
                        href='#'
                        className='text-zinc-800 hover:text-tawakal-red font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100'>
                        News
                      </Link>
                      <Link
                        href='#'
                        className='text-zinc-800 hover:text-tawakal-green font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100'>
                        Business Services
                      </Link>
                    </div>
                  </div>

                  <div className='mt-auto p-6 border-t border-gray-200'>
                    <Button className='w-full bg-gradient-to-r from-tawakal-green to-tawakal-blue hover:from-tawakal-blue hover:to-tawakal-green text-white rounded-full py-2 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg'>
                      Sign Up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
