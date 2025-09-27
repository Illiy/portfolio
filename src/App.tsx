import React, { useState } from 'react';
import { Header } from './components/Header';
import { Language } from './components/LanguageToggle';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { BackgroundEffects } from './components/BackgroundEffects';
import { SimpleInteractiveBackground } from './components/SimpleInteractiveBackground';

export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'project'>('portfolio');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('ru');

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    setSelectedProjectId(null);
  };

  if (currentView === 'project' && selectedProjectId) {
    return (
      <ProjectDetail 
        projectId={selectedProjectId} 
        onBack={handleBackToPortfolio}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundEffects />
      <SimpleInteractiveBackground />
      <div className="relative z-10">
        <Header language={language} onLanguageChange={setLanguage} />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection onProjectSelect={handleProjectSelect} />
          <CertificatesSection language={language} />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}