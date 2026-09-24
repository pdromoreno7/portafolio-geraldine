import Header from '@/components/header';
import BootScreen from '@/components/boot-screen';
import './globals.css';
import { Merriweather, Outfit } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';

const display = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const sans = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geraldine-rodriguez.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Geraldine Rodríguez | Legal Design',
  description: 'Abogada | Innovación en derecho digital y Legaltech | Legal Design | Propiedad intelectual',
  openGraph: {
    title: 'Geraldine Rodríguez | Legal Design',
    description: 'Abogada | Innovación en derecho digital y Legaltech | Legal Design | Propiedad intelectual',
    type: 'website',
    locale: 'es_CO',
    url: '/',
    siteName: 'Geraldine Rodríguez | Legal Design',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 1179,
        type: 'image/jpeg',
        alt: 'Pantalla de inicio de Geraldine Rodríguez, abogada y Legal Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geraldine Rodríguez | Legal Design',
    description: 'Abogada | Innovación en derecho digital y Legaltech | Legal Design | Propiedad intelectual',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`!scroll-smooth ${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className={`${sans.className} bg-paper text-ink relative`}>
        <BootScreen />
        <noscript>
          <style>{`#boot-screen{display:none!important}`}</style>
        </noscript>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
