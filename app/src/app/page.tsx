'use client';

import Link from 'next/link';
import { ArrowRight, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              kuhni<span className="text-brand-amber-500">sura</span>.ru
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
            <Button size="sm">Заказать расчёт</Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-amber-500/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-amber-600/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-amber-500/10 border border-brand-amber-500/20 mb-8">
            <ChefHat className="h-4 w-4 text-brand-amber-500" />
            <span className="text-sm text-brand-amber-400">
              Кухни на заказ
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Кухни мечты
            <br />
            <span className="text-brand-amber-500">под ключ</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Индивидуальный дизайн, качественные материалы, профессиональный монтаж.
            Структура и контент — скоро.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="group">
              Заказать расчёт
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a href="#services">Наши услуги</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services placeholder - shadcn Card */}
      <section id="services" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Услуги
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Контент секции — в разработке
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-border hover:border-brand-amber-500/50 transition-colors">
              <CardHeader>
                <CardTitle>Дизайн-проект</CardTitle>
                <CardDescription>
                  3D-визуализация и подбор материалов
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:border-brand-amber-500/50 transition-colors">
              <CardHeader>
                <CardTitle>Производство</CardTitle>
                <CardDescription>
                  Изготовление на современном оборудовании
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:border-brand-amber-500/50 transition-colors">
              <CardHeader>
                <CardTitle>Монтаж</CardTitle>
                <CardDescription>
                  Установка и сборка под ключ
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-gradient-to-b from-background to-brand-amber-500/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Готовы обсудить проект?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Оставьте заявку — свяжемся для бесплатной консультации
          </p>
          <Button size="xl" className="group">
            Заказать расчёт
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} kuhnisura.ru
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
