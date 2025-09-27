import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

interface ProjectsSectionProps {
  onProjectSelect: (projectId: string) => void;
}

const projects: Project[] = [
  {
    id: 'moow',
    title: 'MOOW',
    description: 'Многофункциональный маркетплейс с продвинутой системой управления товарами, интеграцией платежей и аналитикой.',
    image: 'https://images.unsplash.com/photo-1650812930245-dacba42d946a?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Redux', 'Stripe'],
    githubUrl: 'https://github.com/illia-bernatskyi/moow',
    liveUrl: 'https://moow.marketplace.com',
    category: 'E-commerce'
  },
  {
    id: 'tentai',
    title: 'Tentai',
    description: 'Современный многофункциональный маркетплейс с расширенными возможностями для продавцов и покупателей.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    technologies: ['React', 'TypeScript', 'MongoDB', 'Express', 'Socket.io', 'AWS'],
    githubUrl: 'https://github.com/illia-bernatskyi/tentai',
    liveUrl: 'https://tentai.marketplace.com',
    category: 'E-commerce'
  },
  {
    id: 'diil',
    title: 'Diil',
    description: 'Быстрый и безопасный мессенджер с end-to-end шифрованием, групповыми чатами и медиафайлами.',
    image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'Encryption', 'Firebase'],
    githubUrl: 'https://github.com/illia-bernatskyi/diil',
    liveUrl: 'https://diil.messenger.com',
    category: 'Communication'
  },
  {
    id: 'cryppush-platform',
    title: 'Cryppush Platform',
    description: 'Профессиональная платформа для трейдинга криптовалют с продвинутой аналитикой и автоматизацией.',
    image: 'https://images.unsplash.com/photo-1657049671938-3e5988228df3?w=600&h=400&fit=crop',
    technologies: ['React', 'TypeScript', 'WebSocket', 'Chart.js', 'Node.js', 'Redis'],
    githubUrl: 'https://github.com/illia-bernatskyi/cryppush-platform',
    liveUrl: 'https://cryppush.trading.com',
    category: 'Fintech'
  },
  {
    id: 'cryppush-games',
    title: 'Cryppush Games',
    description: 'Web3 игра с интеграцией блокчейна, NFT и криптовалютными наградами для игроков.',
    image: 'https://images.unsplash.com/photo-1660905419259-0eccba887eb3?w=600&h=400&fit=crop',
    technologies: ['React', 'Web3.js', 'Ethereum', 'Solidity', 'Three.js', 'MetaMask'],
    githubUrl: 'https://github.com/illia-bernatskyi/cryppush-games',
    liveUrl: 'https://games.cryppush.com',
    category: 'Web3 Gaming'
  },
  {
    id: 'cpc-contract',
    title: 'CPC Token Contract',
    description: 'Смарт-контракт для криптовалютного токена с расширенными функциями безопасности и управления.',
    image: 'https://images.unsplash.com/photo-1676911809759-77bb68b691c9?w=600&h=400&fit=crop',
    technologies: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Ethereum', 'Web3.js', 'Ethers.js'],
    githubUrl: 'https://github.com/illia-bernatskyi/cpc-token',
    category: 'Blockchain'
  }
];

export function ProjectsSection({ onProjectSelect }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Мои Проекты</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Коллекция проектов, демонстрирующих мои навыки в различных технологиях 
            и областях разработки. Каждый проект решает реальные проблемы.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => onProjectSelect(project.id)}
                    >
                      Подробнее
                    </Button>
                    <div className="flex gap-1">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { projects };
export type { Project };