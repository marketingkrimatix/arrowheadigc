import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ArrowHead International General Contracting LLC Abu Dhabi',
    template: '%s | ArrowHead Abu Dhabi',
  },
  description: 'ArrowHead is a leading general contracting and facilities management company based in Mussafah, Abu Dhabi. Specializing in HDPE pipelines, villa construction, renovations, and MEP works.',
  keywords: [
    'general contracting company in Abu Dhabi',
    'HDPE pipeline contractors Abu Dhabi',
    'HDPE pipes supply and installation Abu Dhabi',
    'villa contractors in Abu Dhabi',
    'villa construction Abu Dhabi',
    'villa renovation Abu Dhabi',
    'facility management company in Abu Dhabi',
    'facility management services UAE',
    'MEP contractors Abu Dhabi',
    'marine and industrial facility maintenance Abu Dhabi'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'ArrowHead International General Contracting LLC Abu Dhabi',
    description: 'ArrowHead is a leading general contracting and facilities management company based in Mussafah, Abu Dhabi. Specializing in HDPE pipelines, villa construction, renovations, and MEP works.',
    images: [
      {
        url: 'https://arrowheadigc.com/logo.jpeg',
        width: 800,
        height: 800,
        alt: 'ArrowHead General Contracting LLC Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArrowHead International General Contracting LLC Abu Dhabi',
    description: 'ArrowHead is a leading general contracting and facilities management company based in Mussafah, Abu Dhabi. Specializing in HDPE pipelines, villa construction, renovations, and MEP works.',
    images: ['https://arrowheadigc.com/logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-app-bg text-app-fg selection:bg-brand-teal selection:text-primary-dark transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navigation Bar */}
          <Header />

          {/* Page Content */}
          <main className="min-h-screen pt-20">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Floating Quick Action Contacts */}
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
