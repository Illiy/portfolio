import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
}

export function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const colors = [
    'var(--color-primary)',
    'var(--color-secondary)', 
    'var(--color-accent)',
    'var(--color-gradient-from)',
    'var(--color-gradient-via)',
    'var(--color-gradient-to)',
  ];

  const createParticle = (x?: number, y?: number): Particle => ({
    id: Math.random(),
    x: x ?? Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y: y ?? Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    size: Math.random() * 4 + 1,
    life: 0,
    maxLife: Math.random() * 300 + 100,
    color: colors[Math.floor(Math.random() * colors.length)],
  });

  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: 50 }, () => createParticle());
    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles(prev => {
        const updated = prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life + 1,
          vx: particle.vx * 0.99, // Add slight friction
          vy: particle.vy * 0.99,
        })).filter(particle => {
          // Remove particles that are out of bounds or too old
          const maxWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
          const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
          return particle.life < particle.maxLife &&
                 particle.x > -50 && particle.x < maxWidth + 50 &&
                 particle.y > -50 && particle.y < maxHeight + 50;
        });

        // Add new particles occasionally
        if (updated.length < 50 && Math.random() < 0.3) {
          updated.push(createParticle());
        }

        return updated;
      });
    }, 50);

    // Add particles on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.1) { // 10% chance to spawn particle on mouse move
        setParticles(prev => [...prev, createParticle(e.clientX, e.clientY)]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => {
        const opacity = Math.max(0, 1 - (particle.life / particle.maxLife));
        const scale = Math.max(0.1, 1 - (particle.life / particle.maxLife) * 0.5);
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: opacity * 0.6,
              transform: `scale(${scale})`,
              filter: 'blur(0.5px)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: scale,
              opacity: opacity * 0.6,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* Additional flowing streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute"
            style={{
              left: `${i * 16.66}%`,
              top: '-50px',
              width: '2px',
              height: '100vh',
              background: `linear-gradient(to bottom, transparent, ${colors[i % colors.length]}, transparent)`,
              opacity: 0.1,
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Energy pulses */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute rounded-full border"
            style={{
              left: '50%',
              top: '50%',
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              borderColor: colors[i % colors.length],
              borderWidth: '1px',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 3, 1],
              opacity: [0.3, 0, 0.3],
              borderWidth: ['1px', '0px', '1px'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1,
            }}
          />
        ))}
      </div>

      {/* Constellation dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: colors[i % colors.length],
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Wandering light orbs */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`orb-wander-${i}`}
          className="absolute w-6 h-6 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors[i % colors.length]}, transparent)`,
            filter: 'blur(2px)',
          }}
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            ],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}