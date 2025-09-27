import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export type Language = 'uk' | 'ru' | 'en' | 'th' | 'zh' | 'fr' | 'cs' | 'pl' | 'sk' | 'ro';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const languages = [
  { code: 'uk' as Language, name: 'Українська', flag: '🇺🇦' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'th' as Language, name: 'ไทย', flag: '🇹🇭' },
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'cs' as Language, name: 'Čeština', flag: '🇨🇿' },
  { code: 'pl' as Language, name: 'Polski', flag: '🇵🇱' },
  { code: 'sk' as Language, name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'ro' as Language, name: 'Română', flag: '🇷🇴' },
];

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 min-w-[120px] justify-between hover:bg-primary/10 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline text-xs">
              {currentLanguage?.flag} {currentLanguage?.name}
            </span>
            <span className="sm:hidden text-xs">
              {currentLanguage?.flag}
            </span>
          </div>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-56 max-h-64 overflow-y-auto"
        sideOffset={5}
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
              language === lang.code 
                ? 'bg-primary/10 text-primary font-medium' 
                : 'hover:bg-muted'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="flex-1">{lang.name}</span>
            {language === lang.code && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 bg-primary rounded-full"
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}