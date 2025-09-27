import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Database, Cloud, Blocks } from 'lucide-react';
import { ScrollReveal, HoverCard, AnimatedIcon } from './AnimatedElements';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Создание современных пользовательских интерфейсов с React, Next.js и TypeScript"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Разработка масштабируемых серверных решений с Node.js, Express и базами данных"
    },
    {
      icon: Blocks,
      title: "Blockchain & Web3",
      description: "Интеграция блокчейн технологий, смарт-контракты и децентрализованные приложения"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Развертывание и поддержка приложений в облачных сервисах AWS, Firebase"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-warning/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">О себе</h2>
              <div className="space-y-4 text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Full Stack Developer с опытом создания и поддержки крупномасштабных веб-приложений, 
                  торговых площадок и криптовалютных платформ. Специализируюсь на Web3 и блокчейн технологиях, 
                  включая разработку смарт-контрактов и интеграцию с децентрализованными системами.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Имею опыт работы с разнообразными проектами - от коммерческих банковских систем до 
                  правительственных решений. Умею координировать работу команды разработчиков, дизайнеров 
                  и аналитиков для достижения оптимальных результатов.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Постоянно изучаю новые технологии и подходы к разработке, стремлюсь к созданию 
                  качественных, масштабируемых и безопасных решений.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">3+ года опыта</Badge>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Badge className="bg-gradient-to-r from-secondary to-accent text-white border-0">15+ проектов</Badge>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Badge className="bg-gradient-to-r from-accent to-warning text-foreground border-0">Web3 эксперт</Badge>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Badge className="bg-gradient-to-r from-warning to-primary text-foreground border-0">Teamlead опыт</Badge>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <div className="grid gap-6">
            {highlights.map((item, index) => {
              const gradients = [
                'from-primary/5 to-secondary/5 border-l-primary',
                'from-secondary/5 to-accent/5 border-l-secondary',
                'from-accent/5 to-warning/5 border-l-accent',
                'from-warning/5 to-primary/5 border-l-warning'
              ];
              return (
              <Card key={index} className={`border-l-4 ${gradients[index]} bg-gradient-to-r hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 ${index % 4 === 0 ? 'bg-primary/10' : index % 4 === 1 ? 'bg-secondary/10' : index % 4 === 2 ? 'bg-accent/10' : 'bg-warning/10'} rounded-lg`}>
                      <item.icon className={`w-6 h-6 ${index % 4 === 0 ? 'text-primary' : index % 4 === 1 ? 'text-secondary' : index % 4 === 2 ? 'text-accent' : 'text-warning'}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}