"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";

// Import Geist Mono font directly in this component
const geistMono = localFont({
  src: "../../app/fonts/GeistMonoVF.woff",
  display: "swap",
});

// Particle type for the money transfer visualization
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface CardVisualizationProps {
  countries: Array<{
    name: string;
    position: { x: number; y: number };
    color: string;
  }>;
  activeCountry: number;
}

export default function CardVisualization({
  countries,
  activeCountry,
}: CardVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const lastEmitTimeRef = useRef(0);
  const globeRotationRef = useRef(0);

  // Initialize canvas and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw globe
      drawGlobe(ctx, canvas.width, canvas.height);

      // Update and draw particles
      updateParticles(ctx);

      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeCountry, countries]);

  // Draw the interactive globe
  const drawGlobe = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const centerX = width * 0.75;
    const centerY = height * 0.5;
    const radius = Math.min(width, height) * 0.25;

    // Rotate globe slightly based on time
    globeRotationRef.current += 0.001;

    // Draw globe base
    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      radius
    );
    gradient.addColorStop(0, "rgba(0, 117, 190, 0.3)");
    gradient.addColorStop(0.5, "rgba(0, 117, 190, 0.15)");
    gradient.addColorStop(1, "rgba(0, 117, 190, 0)");

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw globe grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 1;

    // Latitude lines
    for (let i = 0; i < 5; i++) {
      const latRadius = radius * (0.2 + i * 0.2);
      ctx.beginPath();
      ctx.arc(centerX, centerY, latRadius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Longitude lines
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + globeRotationRef.current;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - radius);
      ctx.bezierCurveTo(
        centerX + radius * Math.sin(angle) * 0.5,
        centerY - radius * Math.cos(angle) * 0.5,
        centerX + radius * Math.sin(angle) * 0.5,
        centerY + radius * Math.cos(angle) * 0.5,
        centerX,
        centerY + radius
      );
      ctx.stroke();
    }

    // Draw countries
    countries.forEach((country, index) => {
      const isActive = index === activeCountry;
      const angle =
        (country.position.x / 100) * Math.PI * 2 + globeRotationRef.current;
      const latAngle = (country.position.y / 100) * Math.PI;
      const x = centerX + Math.sin(angle) * Math.sin(latAngle) * radius;
      const y = centerY - Math.cos(latAngle) * radius;

      // Country dot
      ctx.beginPath();
      ctx.arc(x, y, isActive ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? country.color : "rgba(255, 255, 255, 0.7)";
      ctx.fill();

      // Country name
      if (isActive) {
        ctx.font = "bold 14px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        // Add text shadow for better readability
        ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
        ctx.shadowBlur = 4;
        ctx.fillText(country.name, x, y - 15);
        ctx.shadowBlur = 0; // Reset shadow

        // Emit particles from active country
        const now = Date.now();
        if (now - lastEmitTimeRef.current > 200) {
          emitParticles(x, y, country.color);
          lastEmitTimeRef.current = now;
        }
      }
    });
  };

  // Emit particles for money transfer visualization
  const emitParticles = (x: number, y: number, color: string) => {
    const numParticles = 5;
    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.5;
      const size = 2 + Math.random() * 3;
      const life = 50 + Math.random() * 50;

      particlesRef.current.push({
        x,
        y,
        size,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        color,
        opacity: 0.8,
        life,
        maxLife: life,
      });
    }
  };

  // Update and draw particles
  const updateParticles = (ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      // Update position
      p.x += p.speedX;
      p.y += p.speedY;

      // Update life
      p.life -= 1;
      p.opacity = p.life / p.maxLife;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle =
        p.color +
        Math.floor(p.opacity * 255)
          .toString(16)
          .padStart(2, "0");
      ctx.fill();

      // Remove dead particles
      if (p.life <= 0) {
        particles.splice(i, 1);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className='relative h-[350px] sm:h-[400px] md:h-[450px] w-full'>
      {/* Interactive canvas background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        aria-hidden='true'
      />

      {/* Card container */}
      <div className='relative w-full h-full'>
        {/* Credit card - No hover effects */}
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[300px] md:w-[340px] h-[180px] sm:h-[200px] md:h-[220px] rounded-2xl overflow-hidden z-20'
          style={{
            background: "linear-gradient(135deg, #2fb457, #0075be)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(47, 180, 87, 0.2)",
          }}>
          <div className='p-3 sm:p-4 md:p-6 text-white h-full flex flex-col justify-between relative z-10'>
            <div className='flex justify-between items-start'>
              <div>
                <p className='text-xs md:text-sm opacity-80'>Tawakal Express</p>
                <p className='text-base sm:text-lg md:text-xl font-bold mt-1'>
                  Premium Card
                </p>
              </div>
              <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/30 flex items-center justify-center'>
                <Image
                  src='/icons/card-chip.svg'
                  alt='Card Chip'
                  width={16}
                  height={16}
                  className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
                />
              </div>
            </div>
            <div>
              <p className='text-xs md:text-sm opacity-80 mb-1'>Card Number</p>
              <p
                className={`${geistMono.className} text-sm sm:text-base md:text-lg tracking-wider`}>
                **** **** **** 4289
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-xs opacity-80'>Card Holder</p>
                <p
                  className={`${geistMono.className} text-xs md:text-sm font-medium tracking-wide`}>
                  AHMED MOHAMED
                </p>
              </div>
              <div>
                <p className='text-xs opacity-80'>Expires</p>
                <p
                  className={`${geistMono.className} text-xs md:text-sm font-medium`}>
                  09/25
                </p>
              </div>
            </div>
          </div>
          {/* Static shine effect */}
          <div
            className='absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0'
            style={{
              opacity: 0.3,
            }}></div>
        </div>

        {/* Card shadow - static */}
        <div
          className='absolute top-1/2 left-1/2 w-[240px] sm:w-[280px] md:w-[320px] h-[10px] bg-black/30 rounded-full blur-md z-10'
          style={{
            transform: `translate(-50%, 100px)`,
          }}></div>

        {/* USD/KES Exchange Rate Card - With gradient text */}
        <div className='absolute top-[15%] left-[5%] bg-white/15 backdrop-blur-md rounded-lg p-1.5 sm:p-2 md:p-3 shadow-lg border border-white/20 z-30 animate-float-slow'>
          <div className='flex items-center'>
            <div className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-tawakal-green/20 flex items-center justify-center mr-1 sm:mr-2'>
              <span className='text-tawakal-green text-sm sm:text-base md:text-lg font-bold'>
                $
              </span>
            </div>
            <div>
              <p className='text-tawakal-blue font-medium text-[10px] sm:text-xs md:text-sm'>
                USD/KES
              </p>
              <div className='flex items-center'>
                <p
                  className={`${geistMono.className} text-tawakal-green/90 text-[10px] sm:text-xs font-medium`}>
                  128.45
                </p>
                <span className='text-tawakal-green text-[10px] sm:text-xs ml-1'>
                  ↑ 0.2%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GBP/SOS Exchange Rate Card - With gradient text */}
        <div className='absolute bottom-[15%] right-[5%] bg-white/15 backdrop-blur-md rounded-lg p-1.5 sm:p-2 md:p-3 shadow-lg border border-white/20 z-30 animate-float [animation-delay:0.5s]'>
          <div className='flex items-center'>
            <div className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-tawakal-blue/20 flex items-center justify-center mr-1 sm:mr-2'>
              <span className='text-tawakal-blue text-sm sm:text-base md:text-lg font-bold'>
                £
              </span>
            </div>
            <div>
              <p className='text-tawakal-blue font-medium text-[10px] sm:text-xs md:text-sm'>
                GBP/SOS
              </p>
              <div className='flex items-center'>
                <p
                  className={`${geistMono.className} text-tawakal-blue/90 text-[10px] sm:text-xs font-medium`}>
                  72,450
                </p>
                <span className='text-tawakal-blue text-[10px] sm:text-xs ml-1'>
                  ↑ 1.5%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Notification toast - With gradient text */}
        <div className='absolute bottom-[30%] left-[5%] bg-white/15 backdrop-blur-md rounded-lg p-1.5 sm:p-2 md:p-3 shadow-lg border border-white/20 z-30 animate-float-reverse [animation-delay:1s]'>
          <div className='flex items-center'>
            <div className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-tawakal-red/20 flex items-center justify-center mr-1 sm:mr-2'>
              <span className='text-tawakal-red text-sm sm:text-base md:text-lg font-bold'>
                !
              </span>
            </div>
            <p className='text-tawakal-red font-medium text-[10px] sm:text-xs md:text-sm'>
              Transfer Complete
            </p>
          </div>
          <p className='text-tawakal-blue/90 text-[10px] sm:text-xs mt-1 sm:mt-2'>
            Your transfer of{" "}
            <span
              className={`${geistMono.className} text-tawakal-green font-medium`}>
              KES 5,000
            </span>{" "}
            was received!
          </p>
        </div>

        {/* Decorative elements - Enhanced */}
        <div className='absolute top-[30%] right-[20%] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-tawakal-green/10 border border-tawakal-green/40 animate-ping-slow opacity-80 z-10'></div>
        <div className='absolute bottom-[25%] left-[25%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-tawakal-blue/10 border border-tawakal-blue/40 animate-ping-slow [animation-delay:1s] opacity-80 z-10'></div>
        <div className='absolute top-[45%] right-[35%] w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-tawakal-red/10 border border-tawakal-red/40 animate-ping-slow [animation-delay:2s] opacity-80 z-10'></div>

        {/* Currency symbols - Enhanced */}
        <div className='absolute top-[10%] right-[30%] text-tawakal-green/15 text-2xl sm:text-3xl md:text-4xl font-bold animate-float-slow z-10'>
          $
        </div>
        <div className='absolute bottom-[20%] right-[40%] text-tawakal-blue/15 text-xl sm:text-2xl md:text-3xl font-bold animate-float z-10'>
          £
        </div>
        <div className='absolute top-[60%] left-[30%] text-tawakal-red/15 text-xl sm:text-2xl md:text-3xl font-bold animate-float-reverse z-10'>
          €
        </div>
        <div className='absolute top-[25%] left-[15%] text-tawakal-gold/15 text-lg sm:text-xl md:text-2xl font-bold animate-float [animation-delay:1.5s] z-10'>
          ¥
        </div>
      </div>
    </div>
  );
}
