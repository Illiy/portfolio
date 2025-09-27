import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">Опыт работы</h2>
          <p className="text-muted-foreground">
            Мой профессиональный путь в сфере разработки
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-secondary/5 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Full Stack Developer</CardTitle>
                  <p className="text-lg text-muted-foreground">Digital IT Advisor</p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Апр 2022 - Окт 2025
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Киев
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Руководил и непосредственно участвовал в разработке трех крупномасштабных веб-приложений, 
                      включая торговые площадки и криптовалютную торговую платформу.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Проектировал и внедрял блокчейн смарт-контракты и интегрировал одно из приложений в 
                      Web3 формат, обеспечивая расширение функциональности продукта.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-accent to-warning rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Осуществлял интеграцию внешних сервисов и приложений — от коммерческих банковских систем, 
                      бирж, торговых инструментов до правительственных решений — обеспечивая надежность и 
                      масштабируемость проектов.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-warning to-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Координировал сотрудничество между разработчиками, дизайнерами и аналитиками, 
                      оптимизируя рабочие процессы и сокращая время проекта.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Достиг значительных улучшений в стабильности и функциональности приложений, 
                      способствуя росту пользовательской базы и укреплению позиций компании на рынке 
                      цифровых решений.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">JavaScript</Badge>
                <Badge className="bg-gradient-to-r from-secondary to-accent text-white border-0">React</Badge>
                <Badge className="bg-gradient-to-r from-accent to-warning text-foreground border-0">Node.js</Badge>
                <Badge className="bg-gradient-to-r from-warning to-primary text-foreground border-0">Web3</Badge>
                <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">Blockchain</Badge>
                <Badge className="bg-gradient-to-r from-secondary to-warning text-foreground border-0">Smart Contracts</Badge>
                <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0">API Integration</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}