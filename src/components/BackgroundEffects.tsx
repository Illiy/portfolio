import React from 'react';
import { motion } from 'motion/react';

export function BackgroundEffects() {
  // Floating particles data
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  // Geometric shapes data
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 30,
    rotation: Math.random() * 360,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
  }));

  // Organic blob shapes
  const blobs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 120 + 80,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      {/* Animated Wave Layers */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.1 }} />
              <stop offset="50%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0.05 }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.08 }} />
              <stop offset="50%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.03 }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0.08 }} />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,20 Q25,10 50,20 T100,20 L100,100 L0,100 Z"
            fill="url(#wave-gradient-1)"
            animate={{
              d: [
                "M0,20 Q25,10 50,20 T100,20 L100,100 L0,100 Z",
                "M0,25 Q25,15 50,25 T100,25 L100,100 L0,100 Z",
                "M0,20 Q25,10 50,20 T100,20 L100,100 L0,100 Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.path
            d="M0,80 Q25,90 50,80 T100,80 L100,100 L0,100 Z"
            fill="url(#wave-gradient-2)"
            animate={{
              d: [
                "M0,80 Q25,90 50,80 T100,80 L100,100 L0,100 Z",
                "M0,75 Q25,85 50,75 T100,75 L100,100 L0,100 Z",
                "M0,80 Q25,90 50,80 T100,80 L100,100 L0,100 Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </svg>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Rotating Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        >
          {shape.id % 3 === 0 ? (
            // Triangle
            <div
              className="w-full h-full"
              style={{
                background: `conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-accent))`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                opacity: 0.15,
              }}
            />
          ) : shape.id % 3 === 1 ? (
            // Square
            <div
              className="w-full h-full rounded-lg"
              style={{
                background: `linear-gradient(45deg, var(--color-secondary), var(--color-accent))`,
                opacity: 0.1,
              }}
            />
          ) : (
            // Circle
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, var(--color-primary), var(--color-accent))`,
                opacity: 0.12,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Organic Blob Shapes */}
      {blobs.map((blob) => (
        <motion.div
          key={`blob-${blob.id}`}
          className="absolute"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: `${blob.size}px`,
            height: `${blob.size}px`,
          }}
          animate={{
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
            borderRadius: [
              "60% 40% 30% 70%",
              "70% 30% 70% 30%", 
              "30% 70% 40% 60%",
              "60% 40% 30% 70%"
            ],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))`,
              opacity: 0.06,
              filter: 'blur(2px)',
              borderRadius: 'inherit',
            }}
          />
        </motion.div>
      ))}

      {/* Spiral Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={`spiral-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + i * 20}%`,
              width: '100px',
              height: '100px',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                d="M50,10 Q90,50 50,90 Q10,50 50,10"
                fill="none"
                stroke={i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'}
                strokeWidth="0.5"
                opacity="0.15"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Pulsing Light Orbs */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
            width: '20px',
            height: '20px',
            background: `radial-gradient(circle, var(--color-accent), transparent)`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Floating Leaf-like Elements */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '12px',
            height: '6px',
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `linear-gradient(45deg, var(--color-primary), var(--color-secondary))`,
              opacity: 0.4,
              borderRadius: '50% 0 50% 0',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}