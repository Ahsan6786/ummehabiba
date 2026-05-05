"use client";

import { Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background py-12 border-t border-border/40">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <a href="#home" className="text-2xl font-display font-bold text-black">Umme Habiba</a>
          <p className="text-foreground/60 text-sm italic">Fostering inclusive environments for future-ready businesses.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" asChild>
              <a href="https://www.linkedin.com/in/umme-habiba-3b7451271" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" asChild>
              <a href="https://www.instagram.com/_ummehabiba_01" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground/40 text-[10px] uppercase tracking-widest">© {currentYear} • Designed with Elegance</p>
        </div>
      </div>
    </footer>
  );
}
