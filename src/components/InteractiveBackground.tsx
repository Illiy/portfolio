import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate interactive elements
  const interactiveElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 10,
    intensity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Mouse-following gradient orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(31, 101, 33, 0.1) 0%, rgba(83, 144, 15, 0.05) 50%, transparent 70%)`,
          left: `${springX.get()}%`,
          top: `${springY.get()}%`,
          translateX: '-50%',
          translateY: '-50%',
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

      {/* Interactive floating elements */}
      {interactiveElements.map((element) => (
        <motion.div
          key={`interactive-${element.id}`}
          className="absolute rounded-full"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: `radial-gradient(circle, var(--color-primary), var(--color-secondary))`,
            opacity: element.intensity,
          }}
          animate={{
            x: [
              0,
              (mousePosition.x - 50) * element.intensity,
              0
            ],
            y: [
              0,
              (mousePosition.y - 50) * element.intensity,
              0
            ],
            scale: [1, 1 + element.intensity * 0.5, 1],
          }}
          transition={{
            duration: 3 + element.intensity * 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>
        
        {Array.from({ length: 8 }, (_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={10 + i * 10}
            y1={20 + (i % 2) * 40}
            x2={20 + i * 10}
            y2={40 + (i % 2) * 20}
            stroke="url(#line-gradient)"
            strokeWidth="0.2"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              strokeWidth: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute border border-primary/10 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating DNA-like helix */}
      <motion.div
        className="absolute left-1/4 top-1/3 w-2 h-64"
        animate={{
          rotate: [0, 360],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 20 200">
          <path
            d="M10,0 Q5,25 10,50 Q15,75 10,100 Q5,125 10,150 Q15,175 10,200"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <path
            d="M10,0 Q15,25 10,50 Q5,75 10,100 Q15,125 10,150 Q5,175 10,200"
            fill="none"
            stroke="var(--color-secondary)"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </svg>
      </motion.div>

      {/* Pulsing grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.1"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Shooting stars */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-accent rounded-full"
          style={{
            left: `-10px`,
            top: `${20 + i * 30}%`,
          }}
          animate={{
            x: [0, typeof window !== 'undefined' ? window.innerWidth + 20 : 1000],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 8 + 2,
            repeatDelay: 15,
          }}
        >
          <div className="absolute inset-0 bg-accent rounded-full animate-pulse" />
          <div 
            className="absolute -left-8 top-0 w-8 h-0.5 bg-gradient-to-r from-transparent to-accent rounded-full"
            style={{ filter: 'blur(1px)' }}
          />
        </motion.div>
      ))}
    </div>
  );
}