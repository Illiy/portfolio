import React from 'react';
import { motion } from 'motion/react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Code, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FloatingParticles, TypewriterText, ScrollReveal, HoverCard, AnimatedIcon, AnimatedBackground } from './AnimatedElements';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingParticles />
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1686634369724-6fedf791a8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzU4OTcxMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Programming workspace"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="secondary" className="w-fit bg-gradient-to-r from-primary to-accent text-white border-0 relative">
                  <AnimatedIcon className="inline-flex mr-1">
                    <Sparkles className="w-3 h-3" />
                  </AnimatedIcon>
                  Доступен для работы
                </Badge>
              </motion.div>
              
              <TypewriterText 
                text="Illia Bernatskyi"
                className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                delay={0.5}
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <h2 className="text-xl lg:text-2xl bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent flex items-center gap-2">
                  <AnimatedIcon>
                    <Code className="w-6 h-6" />
                  </AnimatedIcon>
                  Full-stack Developer
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Full Stack Developer с опытом создания и поддержки крупномасштабных веб-приложений, 
                торговых площадок и криптовалютных платформ. Специализируюсь на Web3 и блокчейн технологиях.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Связаться со мной
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" onClick={() => scrollToSection('experience')} className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Мой опыт
                </Button>
              </motion.div>
            </motion.div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Bangkok, Thailand
              </div>
            </div>
          </motion.div>

          <ScrollReveal direction="right" delay={0.3}>
            <HoverCard>
              <Card className="p-6 space-y-4 bg-gradient-to-br from-card to-primary/5 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl"></div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>+66507113098</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>illibernatskyi@gmail.com</span>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-3">Социальные сети</h4>
              <div className="flex gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 border-warning text-warning hover:bg-warning hover:text-foreground">
                    <AnimatedIcon className="flex">
                      <MessageCircle className="w-4 h-4" />
                    </AnimatedIcon>
                    Telegram
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-white">
                    <AnimatedIcon className="flex">
                      <Instagram className="w-4 h-4" />
                    </AnimatedIcon>
                    Instagram
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                    <AnimatedIcon className="flex">
                      <Linkedin className="w-4 h-4" />
                    </AnimatedIcon>
                    LinkedIn
                  </Button>
                </motion.div>
              </div>
            </div>
              </Card>
            </HoverCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}