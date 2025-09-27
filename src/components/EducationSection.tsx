import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Образование</h2>
          <p className="text-muted-foreground">
            Моя академическая подготовка и профессиональное развитие
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Current Education */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">Информационные и коммуникационные технологии</CardTitle>
                      <p className="text-lg text-muted-foreground">Rangsit University</p>
                      <Badge variant="outline" className="w-fit mt-2">Бакалавр</Badge>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        Янв 2024 - Янв 2027
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        Бангкок
                      </div>
                      <Badge variant="secondary" className="w-fit">В процессе</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Получение прочных основ в области разработки программного обеспечения, управления базами данных и компьютерных сетей</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Изучение веб-технологий, мобильных приложений и современных облачных сервисов</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Выполнение практических проектов с использованием языков программирования JavaScript, Python и SQL</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Изучение принципов кибербезопасности, конфиденциальности данных и систем цифровой коммуникации</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Развитие навыков командной работы и управления проектами через групповые задания и технические семинары</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Previous Education */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">Менеджмент</CardTitle>
                      <p className="text-lg text-muted-foreground">Киевский факультетский колледж архитектуры, гражданского строительства и менеджмента</p>
                      <Badge variant="outline" className="w-fit mt-2">Младший специалист</Badge>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        Янв 2018 - Янв 2022
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        Киев
                      </div>
                      <Badge variant="default" className="w-fit">Завершено</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Получение прочных основ в области разработки программного обеспечения, управления базами данных и компьютерных сетей</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Изучение веб-технологий, мобильных приложений и современных облачных сервисов</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Выполнение практических проектов с использованием языков программирования JavaScript, Python и SQL</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Изучение принципов кибербезопасности, конфиденциальности данных и систем цифровой коммуникации</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Развитие навыков командной работы и управления проектами через групповые задания и технические семинары</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}