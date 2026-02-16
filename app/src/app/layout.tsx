import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'kuhnisura.ru — Кухни на заказ',
    template: '%s | kuhnisura.ru',
  },
  description:
    'Кухни на заказ. Индивидуальный дизайн, качественные материалы, профессиональный монтаж.',
  keywords: ['кухни на заказ', 'кухни', 'мебель', 'kuhnisura.ru'],
  authors: [{ name: 'kuhnisura.ru' }],
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL('https://kuhnisura.ru'),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'kuhnisura.ru',
    title: 'kuhnisura.ru — Кухни на заказ',
    description: 'Кухни на заказ. Индивидуальный дизайн, качественные материалы.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
