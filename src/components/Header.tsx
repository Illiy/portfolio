import React from 'react';
import { Button } from "./ui/button";
import { LanguageToggle, Language } from './LanguageToggle';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const translations = {
    uk: {
      about: 'Про мене',
      skills: 'Навички',
      experience: 'Досвід',
      education: 'Освіта',
      projects: 'Проекти',
      certificates: 'Сертифікати',
      contact: 'Контакти'
    },
    ru: {
      about: 'О себе',
      skills: 'Навыки',
      experience: 'Опыт',
      education: 'Образование',
      projects: 'Проекты',
      certificates: 'Сертификаты',
      contact: 'Контакты'
    },
    en: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    th: {
      about: 'เกี่ยวกับ',
      skills: 'ทักษะ',
      experience: 'ประสบการณ์',
      education: 'การศึกษา',
      projects: 'โครงการ',
      certificates: 'ใบรับรอง',
      contact: 'ติดต่อ'
    },
    zh: {
      about: '关于',
      skills: '技能',
      experience: '经验',
      education: '教育',
      projects: '项目',
      certificates: '证书',
      contact: '联系'
    },
    fr: {
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      education: 'Éducation',
      projects: 'Projets',
      certificates: 'Certificats',
      contact: 'Contact'
    },
    cs: {
      about: 'O mně',
      skills: 'Dovednosti',
      experience: 'Zkušenosti',
      education: 'Vzdělání',
      projects: 'Projekty',
      certificates: 'Certifikáty',
      contact: 'Kontakt'
    },
    pl: {
      about: 'O mnie',
      skills: 'Umiejętności',
      experience: 'Doświadczenie',
      education: 'Wykształcenie',
      projects: 'Projekty',
      certificates: 'Certyfikaty',
      contact: 'Kontakt'
    },
    sk: {
      about: 'O mne',
      skills: 'Zručnosti',
      experience: 'Skúsenosti',
      education: 'Vzdelanie',
      projects: 'Projekty',
      certificates: 'Certifikáty',
      contact: 'Kontakt'
    },
    ro: {
      about: 'Despre',
      skills: 'Competențe',
      experience: 'Experiență',
      education: 'Educație',
      projects: 'Proiecte',
      certificates: 'Certificate',
      contact: 'Contact'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-primary/20 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Illia Bernatskyi</h1>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => scrollToSection('about')} className="hover:bg-primary/10 hover:text-primary transition-colors">
                {t.about}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('skills')} className="hover:bg-secondary/10 hover:text-secondary transition-colors">
                {t.skills}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('experience')} className="hover:bg-accent/10 hover:text-accent transition-colors">
                {t.experience}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('education')} className="hover:bg-warning/10 hover:text-warning transition-colors">
                {t.education}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('projects')} className="hover:bg-primary/10 hover:text-primary transition-colors">
                {t.projects}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('certificates')} className="hover:bg-accent/10 hover:text-accent transition-colors">
                {t.certificates}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('contact')} className="hover:bg-secondary/10 hover:text-secondary transition-colors">
                {t.contact}
              </Button>
            </div>
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </nav>
    </header>
  );
}