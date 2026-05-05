import type {Metadata} from 'next';
import { Cormorant_Garamond, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Umme Habiba',
  description: 'The professional portfolio of Umme Habiba, a passionate HR professional.',
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant-garamond',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("font-body antialiased bg-background text-foreground", poppins.variable, cormorantGaramond.variable)}>
          {children}
          <Toaster />
      </body>
    </html>
  );
}
