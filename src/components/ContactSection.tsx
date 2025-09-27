import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Send, Star } from 'lucide-react';
import { ScrollReveal, HoverCard, AnimatedIcon, PulsingDot } from './AnimatedElements';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-secondary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-warning/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">Связаться со мной</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Готов обсудить новые проекты и возможности сотрудничества. 
            Свяжитесь со мной любым удобным способом.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Контактная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+66507113098</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">illibernatskyi@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Местоположение</p>
                    <p className="text-muted-foreground">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-medium mb-4">Социальные сети</h4>
                <div className="grid grid-cols-1 gap-3">
                  <Button variant="outline" className="justify-start gap-3">
                    <MessageCircle className="w-4 h-4" />
                    Telegram
                  </Button>
                  <Button variant="outline" className="justify-start gap-3">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </Button>
                  <Button variant="outline" className="justify-start gap-3">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="bg-gradient-to-br from-card to-secondary/5 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">Быстрая связь</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Заинтересованы в сотрудничестве? Выберите удобный способ связи:
                </p>
                
                <div className="space-y-3">
                  <Button className="w-full justify-start gap-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0" size="lg">
                    <Mail className="w-5 h-5" />
                    Написать Email
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start gap-3 border-warning text-warning hover:bg-warning hover:text-foreground" size="lg">
                    <MessageCircle className="w-5 h-5" />
                    Telegram
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start gap-3 border-secondary text-secondary hover:bg-secondary hover:text-white" size="lg">
                    <Phone className="w-5 h-5" />
                    Позвонить
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Время ответа</h4>
                  <p className="text-sm text-muted-foreground">
                    Обычно отвечаю в течение 24 часов. Для срочных вопросов 
                    лучше связываться через Telegram.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-white bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-full shadow-lg">
            <Send className="w-4 h-4" />
            Готов к новым проектам и интересным задачам
          </div>
        </div>
      </div>
    </section>
  );
}