import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Award, CheckCircle, Star, Shield, ChevronDown, ChevronUp } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  technologies: string[];
  dateIssued: string;
  category: string;
  status: 'active' | 'expired';
  credentialId: string;
}

const certificates: Certificate[] = [
  {
    id: 'react-advanced',
    title: 'Advanced React Development',
    issuer: 'Meta (Facebook)',
    description: 'Углубленное изучение React с фокусом на производительность, хуки, контекст и продвинутые паттерны разработки.',
    technologies: ['React', 'JavaScript', 'TypeScript', 'Redux'],
    dateIssued: 'Декабрь 2023',
    category: 'Frontend Development',
    status: 'active',
    credentialId: 'META-REACT-2023-5471'
  },
  {
    id: 'blockchain-fundamentals',
    title: 'Blockchain Fundamentals',
    issuer: 'Ethereum Foundation',
    description: 'Комплексное изучение технологий блокчейн, смарт-контрактов и децентрализованных приложений.',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts'],
    dateIssued: 'Ноябрь 2023',
    category: 'Blockchain',
    status: 'active',
    credentialId: 'ETH-FOUND-2023-9812'
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    description: 'Сертификация по проектированию и развертыванию масштабируемых систем на AWS.',
    technologies: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda'],
    dateIssued: 'Октябрь 2023',
    category: 'Cloud Computing',
    status: 'active',
    credentialId: 'AWS-SAA-2023-7634'
  },
  {
    id: 'fullstack-javascript',
    title: 'Full Stack JavaScript Development',
    issuer: 'The Odin Project',
    description: 'Полный стек JavaScript разработки от frontend до backend с использованием современных технологий.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'JavaScript'],
    dateIssued: 'Сентябрь 2023',
    category: 'Full Stack Development',
    status: 'active',
    credentialId: 'ODIN-FS-2023-3421'
  },
  {
    id: 'mobile-development',
    title: 'React Native Mobile Development',
    issuer: 'Udacity',
    description: 'Разработка кроссплатформенных мобильных приложений с использованием React Native.',
    technologies: ['React Native', 'Mobile Development', 'iOS', 'Android'],
    dateIssued: 'Август 2023',
    category: 'Mobile Development',
    status: 'active',
    credentialId: 'UDACITY-RN-2023-8765'
  },
  {
    id: 'computer-science',
    title: 'Computer Science Fundamentals',
    issuer: 'Stanford University',
    description: 'Фундаментальные принципы информатики, алгоритмы, структуры данных и программирование.',
    technologies: ['Algorithms', 'Data Structures', 'Computer Science', 'Programming'],
    dateIssued: 'Июль 2023',
    category: 'Computer Science',
    status: 'active',
    credentialId: 'STANFORD-CS-2023-1234'
  }
];

const categoriesData = [
  { 
    key: 'all', 
    uk: 'Всі', ru: 'Все', en: 'All', th: 'ทั้งหมด', zh: '全部', 
    fr: 'Tous', cs: 'Vše', pl: 'Wszystkie', sk: 'Všetko', ro: 'Toate' 
  },
  { 
    key: 'frontend', 
    uk: 'Frontend розробка', ru: 'Frontend разработка', en: 'Frontend Development', 
    th: 'Frontend Development', zh: '前端开发', fr: 'Développement Frontend', 
    cs: 'Frontend vývoj', pl: 'Rozwój Frontend', sk: 'Frontend vývoj', ro: 'Dezvoltare Frontend' 
  },
  { 
    key: 'blockchain', 
    uk: 'Блокчейн', ru: 'Блокчейн', en: 'Blockchain', th: 'Blockchain', zh: '区块链', 
    fr: 'Blockchain', cs: 'Blockchain', pl: 'Blockchain', sk: 'Blockchain', ro: 'Blockchain' 
  },
  { 
    key: 'cloud', 
    uk: 'Хмарні обчислення', ru: 'Облачные вычисления', en: 'Cloud Computing', 
    th: 'Cloud Computing', zh: '云计算', fr: 'Cloud Computing', cs: 'Cloud Computing', 
    pl: 'Chmura obliczeniowa', sk: 'Cloud Computing', ro: 'Cloud Computing' 
  },
  { 
    key: 'fullstack', 
    uk: 'Full Stack розробка', ru: 'Full Stack разработка', en: 'Full Stack Development', 
    th: 'Full Stack Development', zh: '全栈开发', fr: 'Développement Full Stack', 
    cs: 'Full Stack vývoj', pl: 'Rozwój Full Stack', sk: 'Full Stack vývoj', ro: 'Dezvoltare Full Stack' 
  },
  { 
    key: 'mobile', 
    uk: 'Мобільна розробка', ru: 'Мобильная разработка', en: 'Mobile Development', 
    th: 'Mobile Development', zh: '移动开发', fr: 'Développement Mobile', 
    cs: 'Mobilní vývoj', pl: 'Rozwój mobilny', sk: 'Mobilný vývoj', ro: 'Dezvoltare mobilă' 
  },
  { 
    key: 'cs', 
    uk: 'Комп\'ютерні науки', ru: 'Информатика', en: 'Computer Science', 
    th: 'Computer Science', zh: '计算机科学', fr: 'Informatique', cs: 'Informatika', 
    pl: 'Informatyka', sk: 'Informatika', ro: 'Informatică' 
  }
];

import { Language } from './LanguageToggle';

interface CertificatesSectionProps {
  language?: Language;
}

export function CertificatesSection({ language = 'ru' }: CertificatesSectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [showAll, setShowAll] = React.useState(false);

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => {
        const categoryKey = categoriesData.find(cat => cat.ru === cert.category || cat.en === cert.category)?.key;
        return categoryKey === selectedCategory;
      });

  const displayedCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, 3);
  const hasMore = filteredCertificates.length > 3;

  const translations = {
    uk: {
      title: 'Сертифікати та Досягнення',
      description: 'Мої професійні сертифікати та завершені курси, що демонструють постійне навчання та експертизу в різних технологіях.',
      active: 'Діючий',
      expired: 'Закінчився',
      issued: 'Видано:',
      showMore: 'Показати всі',
      showLess: 'Сховати',
      totalCertificates: 'Всього сертифікатів',
      activeCertificates: 'Активних сертифікатів',
      technologiesLearned: 'Вивчених технологій'
    },
    ru: {
      title: 'Сертификаты и Достижения',
      description: 'Мои профессиональные сертификаты и завершенные курсы, демонстрирующие постоянное обучение и экспертизу в различных технологиях.',
      active: 'Действующий',
      expired: 'Истекший',
      issued: 'Выдан:',
      showMore: 'Показать все',
      showLess: 'Скрыть',
      totalCertificates: 'Всего сертификатов',
      activeCertificates: 'Активных сертификатов',
      technologiesLearned: 'Изученных технологий'
    },
    en: {
      title: 'Certificates & Achievements',
      description: 'My professional certificates and completed courses demonstrating continuous learning and expertise in various technologies.',
      active: 'Active',
      expired: 'Expired',
      issued: 'Issued:',
      showMore: 'Show All',
      showLess: 'Show Less',
      totalCertificates: 'Total Certificates',
      activeCertificates: 'Active Certificates',
      technologiesLearned: 'Technologies Learned'
    },
    th: {
      title: 'ใบรับรองและผลงาน',
      description: 'ใบรับรองระดับมืออาชีพและหลักสูตรที่เสร็จสิ้น แสดงให้เห็นการเรียนรู้อย่างต่อเนื่องและความเชี่ยวชาญในเทคโนโลยีต่างๆ',
      active: 'ใช้งานได้',
      expired: 'หมดอายุ',
      issued: 'ออกให้:',
      showMore: 'แสดงทั้งหมด',
      showLess: 'ซ่อน',
      totalCertificates: 'ใบรับรองทั้งหมด',
      activeCertificates: 'ใบรับรองที่ใช้งานได้',
      technologiesLearned: 'เทคโนโลยีที่เรียนรู้'
    },
    zh: {
      title: '证书与成就',
      description: '我的专业证书和完成的课程，展示了在各种技术领域的持续学习和专业知识。',
      active: '有效',
      expired: '已过期',
      issued: '颁发:',
      showMore: '显示全部',
      showLess: '隐藏',
      totalCertificates: '证书总数',
      activeCertificates: '有效证书',
      technologiesLearned: '学习的技术'
    },
    fr: {
      title: 'Certificats et Réalisations',
      description: 'Mes certificats professionnels et cours terminés démontrant un apprentissage continu et une expertise dans diverses technologies.',
      active: 'Actif',
      expired: 'Expiré',
      issued: 'Émis:',
      showMore: 'Tout afficher',
      showLess: 'Masquer',
      totalCertificates: 'Total des certificats',
      activeCertificates: 'Certificats actifs',
      technologiesLearned: 'Technologies apprises'
    },
    cs: {
      title: 'Certifikáty a Úspěchy',
      description: 'Moje profesionální certifikáty a dokončené kurzy demonstrující průběžné učení a odbornost v různých technologiích.',
      active: 'Aktivní',
      expired: 'Vypršel',
      issued: 'Vydáno:',
      showMore: 'Zobrazit vše',
      showLess: 'Skrýt',
      totalCertificates: 'Celkem certifikátů',
      activeCertificates: 'Aktivní certifikáty',
      technologiesLearned: 'Naučené technologie'
    },
    pl: {
      title: 'Certyfikaty i Osiągnięcia',
      description: 'Moje profesjonalne certyfikaty i ukończone kursy pokazujące ciągłe uczenie się i ekspertyzę w różnych technologiach.',
      active: 'Aktywny',
      expired: 'Wygasł',
      issued: 'Wydano:',
      showMore: 'Pokaż wszystkie',
      showLess: 'Ukryj',
      totalCertificates: 'Łączna liczba certyfikatów',
      activeCertificates: 'Aktywne certyfikaty',
      technologiesLearned: 'Poznane technologie'
    },
    sk: {
      title: 'Certifikáty a Úspechy',
      description: 'Moje profesionálne certifikáty a dokončené kurzy demonštrujúce priebežné učenie a odbornosť v rôznych technológiách.',
      active: 'Aktívny',
      expired: 'Vypršal',
      issued: 'Vydané:',
      showMore: 'Zobraziť všetko',
      showLess: 'Skryť',
      totalCertificates: 'Celkom certifikátov',
      activeCertificates: 'Aktívne certifikáty',
      technologiesLearned: 'Naučené technológie'
    },
    ro: {
      title: 'Certificate și Realizări',
      description: 'Certificatele mele profesionale și cursurile finalizate care demonstrează învățarea continuă și expertiza în diverse tehnologii.',
      active: 'Activ',
      expired: 'Expirat',
      issued: 'Emis:',
      showMore: 'Arată toate',
      showLess: 'Ascunde',
      totalCertificates: 'Total certificate',
      activeCertificates: 'Certificate active',
      technologiesLearned: 'Tehnologii învățate'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.title}
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t.description}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categoriesData.map((category) => (
            <Button
              key={category.key}
              variant={selectedCategory === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.key)}
              className="transition-all duration-300"
            >
              {category[language] || category.en}
            </Button>
          ))}
        </motion.div>

        {/* Certificates List */}
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-6 relative ${!showAll && hasMore ? 'overflow-hidden' : ''}`}>
            {displayedCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              {/* Certificate Card */}
              <div className="relative bg-gradient-to-br from-card via-card to-muted p-8 rounded-2xl border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-secondary to-primary"></div>
                
                {/* Corner Seals */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Shield className="h-16 w-16 text-primary transform rotate-12" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star className="h-12 w-12 text-accent transform -rotate-12" />
                </div>

                {/* Status and Category Badges */}
                <div className="flex justify-between items-start mb-6">
                  <Badge 
                    variant={certificate.status === 'active' ? 'default' : 'secondary'}
                    className="flex items-center gap-1 px-3 py-1"
                  >
                    <CheckCircle className="h-3 w-3" />
                    {certificate.status === 'active' ? t.active : t.expired}
                  </Badge>
                  
                  <Badge variant="outline" className="px-3 py-1 bg-background/50 backdrop-blur-sm">
                    {certificate.category}
                  </Badge>
                </div>

                {/* Certificate Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="text-center space-y-2">
                    <div className="flex justify-center mb-2">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {certificate.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-center text-muted-foreground leading-relaxed px-4">
                    {certificate.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-2 py-4">
                    {certificate.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Certificate Details */}
                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{t.issued} {certificate.dateIssued}</span>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <span className="font-mono">ID: {certificate.credentialId}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Border Pattern */}
                <div className="absolute inset-4 border border-primary/10 rounded-xl pointer-events-none"></div>
                <div className="absolute inset-6 border border-secondary/5 rounded-lg pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
          
          {/* Fade Effect for Hidden Content */}
          {!showAll && hasMore && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
          )}
          </div>

          {/* Show More/Less Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-8"
            >
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                size="lg"
                className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                    {t.showLess}
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    {t.showMore} ({filteredCertificates.length - 3})
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">{certificates.length}</div>
              <div className="text-sm text-muted-foreground">{t.totalCertificates}</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-secondary">
                {certificates.filter(c => c.status === 'active').length}
              </div>
              <div className="text-sm text-muted-foreground">{t.activeCertificates}</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">
                {new Set(certificates.flatMap(c => c.technologies)).size}
              </div>
              <div className="text-sm text-muted-foreground">{t.technologiesLearned}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}