import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function SimpleInteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Mouse-following gradient orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle, rgba(31, 101, 33, 0.1) 0%, rgba(83, 144, 15, 0.05) 50%, transparent 70%)`,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating elements that react to mouse */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute rounded-full bg-primary/10"
          style={{
            left: `${10 + (i * 8)}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${15 + Math.random() * 15}px`,
            height: `${15 + Math.random() * 15}px`,
          }}
          animate={{
            x: [0, (mousePosition.x - 50) * 0.3, 0],
            y: [0, (mousePosition.y - 50) * 0.2, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Simple rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute border border-primary/5 rounded-full"
            style={{
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Simple pulsing dots */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-2 h-2 bg-secondary/20 rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Gentle wave overlay */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.05 }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0.02 }} />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,30 Q25,20 50,30 T100,30 L100,100 L0,100 Z"
          fill="url(#wave-gradient)"
          animate={{
            d: [
              "M0,30 Q25,20 50,30 T100,30 L100,100 L0,100 Z",
              "M0,35 Q25,25 50,35 T100,35 L100,100 L0,100 Z",
              "M0,30 Q25,20 50,30 T100,30 L100,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}