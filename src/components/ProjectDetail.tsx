import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { projects, type Project } from './ProjectsSection';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

// Расширенные данные проектов с дополнительной информацией
const projectDetails = {
  'moow': {
    overview: 'MOOW - это инновационный многофункциональный маркетплейс, разработанный для обеспечения лучшего пользовательского опыта как для продавцов, так и для покупателей. Платформа включает продвинутую систему управления товарами, интеграцию с множественными платежными системами, аналитику продаж в реальном времени и мощную админ-панель.',
    features: [
      'Адаптивный дизайн с современным UI/UX',
      'Система управления каталогом и инвентарем',
      'Интеграция с Stripe, PayPal и локальными платежными системами',
      'Продвинутая система поиска и фильтрации',
      'Аналитика продаж и отчеты для продавцов',
      'Многоуровневая система ролей и разрешений',
      'Push-уведомления и email-маркетинг',
      'Система отзывов и рейтингов'
    ],
    challenges: [
      'Оптимизация производительности при работе с большими каталогами',
      'Реализация масштабируемой архитектуры для растущей нагрузки',
      'Интеграция с множественными внешними сервисами',
      'Обеспечение безопасности платежных транзакций'
    ],
    timeline: '8 месяцев',
    teamSize: '6 разработчиков',
    myRole: 'Lead Full-Stack разработчик, архитектор системы',
    images: [
      'https://images.unsplash.com/photo-1650812930245-dacba42d946a?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop'
    ]
  },
  'tentai': {
    overview: 'Tentai представляет собой современный многофункциональный маркетплейс с акцентом на пользовательский опыт и расширенные возможности для электронной коммерции. Проект включает инновационные решения для взаимодействия между покупателями и продавцами, интеграцию с социальными сетями и продвинутую систему рекомендаций.',
    features: [
      'Персонализированные рекомендации на основе AI',
      'Интеграция с социальными сетями',
      'Система лайв-чата между покупателями и продавцами',
      'Мобильное приложение с нативными возможностями',
      'Система лояльности и бонусных программ',
      'Интеграция с курьерскими службами',
      'Многовалютная поддержка',
      'Система аукционов и специальных предложений'
    ],
    challenges: [
      'Разработка AI-алгоритмов для персонализации',
      'Реализация real-time чата с масштабированием',
      'Оптимизация мобильного приложения для различных устройств',
      'Интеграция с внешними логистическими API'
    ],
    timeline: '10 месяцев',
    teamSize: '8 разработчиков',
    myRole: 'Senior Full-Stack разработчик, ответственный за frontend и мобильную разработку',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop'
    ]
  },
  'diil': {
    overview: 'Diil - это современный мессенджер, разработанный с акцентом на безопасность, скорость и пользовательский опыт. Приложение включает end-to-end шифрование, поддержку групповых чатов, обмен медиафайлами и инновационные функции для общения.',
    features: [
      'End-to-end шифрование всех сообщений',
      'Групповые чаты до 1000 участников',
      'Поддержка всех типов медиафайлов',
      'Голосовые и видеозвонки высокого качества',
      'Система ботов и автоматизации',
      'Самоуничтожающиеся сообщения',
      'Облачная синхронизация между устройствами',
      'Темная и светлая темы оформления'
    ],
    challenges: [
      'Реализация надежного end-to-end шифрования',
      'Оптимизация производительности для групповых чатов',
      'Обеспечение стабильности видеозвонков',
      'Синхронизация данных между множественными устройствами'
    ],
    timeline: '7 месяцев',
    teamSize: '5 разработчиков',
    myRole: 'Mobile Lead разработчик, ответственный за React Native и архитектуру',
    images: [
      'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop'
    ]
  },
  'cryppush-platform': {
    overview: 'Cryppush Platform - это профессиональная платформа для трейдинга криптовалют, предоставляющая трейдерам все необходимые инструменты для успешной торговли. Включает продвинутую аналитику, автоматизированные стратегии торговли, интеграцию с основными биржами и real-time мониторинг рынка.',
    features: [
      'Интеграция с 15+ крупнейшими криптобиржами',
      'Advanced charting с 50+ техническими индикаторами',
      'Автоматизированные торговые стратегии и боты',
      'Real-time данные и уведомления о рынке',
      'Портфолио трекинг и P&L аналитика',
      'Социальный трейдинг и копирование стратегий',
      'Risk management инструменты',
      'API для разработчиков и алгоритмической торговли'
    ],
    challenges: [
      'Обработка больших объемов real-time данных',
      'Интеграция с множественными биржевыми API',
      'Обеспечение низкой латентности для торговых операций',
      'Реализация сложных математических моделей для анализа'
    ],
    timeline: '12 месяцев',
    teamSize: '10 разработчиков',
    myRole: 'Lead Frontend разработчик, архитектор интерфейса торговой платформы',
    images: [
      'https://images.unsplash.com/photo-1657049671938-3e5988228df3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop'
    ]
  },
  'cryppush-games': {
    overview: 'Cryppush Games - это инновационная Web3 игра, объединяющая увлекательный геймплей с блокчейн технологиями. Игроки могут зарабатывать криптовалюту, торговать NFT предметами и участвовать в децентрализованной игровой экономике.',
    features: [
      'Play-to-Earn механика с криптовалютными наградами',
      'NFT маркетплейс для игровых предметов',
      'Интеграция с MetaMask и другими Web3 кошельками',
      '3D графика и иммерсивный геймплей',
      'Система гильдий и PvP сражений',
      'Стейкинг токенов для дополнительных наград',
      'Кроссплатформенная игра (Web, Mobile)',
      'Децентрализованное управление (DAO)'
    ],
    challenges: [
      'Интеграция блокчейн транзакций в игровой процесс',
      'Оптимизация производительности 3D графики в браузере',
      'Балансировка игровой экономики и токеномики',
      'Обеспечение безопасности NFT транзакций'
    ],
    timeline: '14 месяцев',
    teamSize: '12 разработчиков',
    myRole: 'Web3 Lead разработчик, ответственный за блокчейн интеграцию и смарт-контракты',
    images: [
      'https://images.unsplash.com/photo-1660905419259-0eccba887eb3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=500&fit=crop'
    ]
  },
  'cpc-contract': {
    overview: 'CPC Token Contract - это профессионально разработанный смарт-контракт для криптовалютного токена с расширенными функциями безопасности, управления и utility. Контракт включает механизмы защиты от атак, систему governance и интеграцию с DeFi протоколами.',
    features: [
      'ERC-20 стандарт с расширенными возможностями',
      'Защита от front-running и MEV атак',
      'Система governance для держателей токенов',
      'Механизм сжигания токенов (burning)',
      'Интеграция с Uniswap и другими DEX',
      'Система стейкинга с наградами',
      'Multi-signature управление контрактом',
      'Аудит безопасности от ведущих компаний'
    ],
    challenges: [
      'Оптимизация газовых комиссий для всех операций',
      'Реализация сложных механизмов защиты',
      'Обеспечение совместимости с различными DeFi протоколами',
      'Тестирование на различных тестовых сетях'
    ],
    timeline: '4 месяца',
    teamSize: '3 разработчика',
    myRole: 'Lead Blockchain разработчик, архитектор смарт-контракта',
    images: [
      'https://images.unsplash.com/photo-1676911809759-77bb68b691c9?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=500&fit=crop'
    ]
  }
};

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projects.find(p => p.id === projectId);
  const details = projectDetails[projectId as keyof typeof projectDetails];

  if (!project || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Проект не найден</h2>
          <Button onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к проектам
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" onClick={onBack} className="p-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2"
              >
                {project.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground max-w-2xl"
              >
                {project.description}
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-3"
            >
              {project.githubUrl && (
                <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              )}
              {project.liveUrl && (
                <Button onClick={() => window.open(project.liveUrl, '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Посмотреть Live
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Images Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative overflow-hidden rounded-lg group"
                  >
                    <img
                      src={image}
                      alt={`${project.title} скриншот ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="mb-4">Обзор проекта</h3>
              <p className="text-muted-foreground leading-relaxed">
                {details.overview}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="mb-4">Ключевые функции</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technical Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="mb-4">Технические вызовы</h3>
              <div className="space-y-3">
                {details.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="p-4 border-l-4 border-primary bg-muted/30 rounded-r-lg"
                  >
                    <p className="text-sm text-muted-foreground">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Информация о проекте</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm">Длительность</p>
                      <p className="font-medium">{details.timeline}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm">Размер команды</p>
                      <p className="font-medium">{details.teamSize}</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Моя роль</p>
                    <p className="text-sm font-medium">{details.myRole}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Технологии</CardTitle>
                  <CardDescription>
                    Инструменты и фреймворки, использованные в проекте
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                      >
                        <Badge variant="outline">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}