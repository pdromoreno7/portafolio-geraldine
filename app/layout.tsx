import Header from '@/components/header';
import './globals.css';
import { Outfit, Ovo } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const ovo = Ovo({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://geraldinerodriguez.com'),
  title: 'Geraldine Rodriguez | Personal Portfolio',
  description: 'ABOGADA | INNOVACIÓN EN DERECHO DIGITAL & LEGALTECH | LEGALDESIGN | IP',
  openGraph: {
    title: 'Geraldine Rodriguez | Personal Portfolio',
    description: 'ABOGADA | INNOVACIÓN EN DERECHO DIGITAL & LEGALTECH | LEGALDESIGN | IP',
    images: ['/gera-medellin.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geraldine Rodriguez | Personal Portfolio',
    description: 'ABOGADA | INNOVACIÓN EN DERECHO DIGITAL & LEGALTECH | LEGALDESIGN | IP',
    images: ['/gera-medellin.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
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
