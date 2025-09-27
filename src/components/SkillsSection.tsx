import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { ScrollReveal, HoverCard, AnimatedIcon } from './AnimatedElements';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'Next.js', level: 80, category: 'Frontend' },
  { name: 'Express.js', level: 85, category: 'Backend' },
  { name: 'Nest.js', level: 75, category: 'Backend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'NoSQL', level: 80, category: 'Database' },
  { name: 'SQL', level: 75, category: 'Database' },
  { name: 'AWS', level: 70, category: 'Cloud' },
  { name: 'Firebase', level: 75, category: 'Cloud' },
  { name: 'Python', level: 70, category: 'Programming' },
  { name: 'Java', level: 65, category: 'Programming' },
  { name: 'C#', level: 60, category: 'Programming' },
  { name: 'Solidity', level: 75, category: 'Blockchain' },
  { name: 'Ethers.js', level: 70, category: 'Blockchain' },
  { name: 'Spring', level: 65, category: 'Framework' },
  { name: '.NET', level: 60, category: 'Framework' },
  { name: 'SEO', level: 70, category: 'Marketing' },
];

const categories = Array.from(new Set(skills.map(skill => skill.category)));

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-warning/5"></div>
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1750365919878-2735d30fa3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHN0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc1ODg2MTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Technology innovation"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Навыки и технологии
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Мой технический стек включает современные технологии для создания полноценных веб-приложений
          </motion.p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const gradientClasses = [
              'from-primary/10 to-secondary/10 border-primary/20',
              'from-secondary/10 to-accent/10 border-secondary/20', 
              'from-accent/10 to-warning/10 border-accent/20',
              'from-warning/10 to-primary/10 border-warning/20',
              'from-primary/10 to-accent/10 border-primary/20',
              'from-secondary/10 to-warning/10 border-secondary/20'
            ];
            return (
              <ScrollReveal key={category} direction="up" delay={index * 0.1}>
                <HoverCard>
                  <Card className={`bg-gradient-to-br ${gradientClasses[index % gradientClasses.length]} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg"></div>
                    <CardHeader>
                      <CardTitle className="text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {skills
                        .filter(skill => skill.category === category)
                        .map((skill, skillIndex) => (
                          <motion.div 
                            key={skill.name} 
                            className="space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ delay: skillIndex * 0.1 + 0.3, duration: 0.8 }}
                            >
                              <Progress value={skill.level} className="h-3 bg-muted" />
                            </motion.div>
                          </motion.div>
                        ))}
                    </CardContent>
                  </Card>
                </HoverCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}