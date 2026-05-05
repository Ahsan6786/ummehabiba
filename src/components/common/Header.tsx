"use client";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'top-6 px-4 md:px-0' : 'top-0 px-0'}`}>
      <div className={`container mx-auto transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl border border-white/20 dark:border-zinc-800/50 rounded-full px-6 py-2 shadow-2xl shadow-black/10 max-w-6xl' 
          : 'bg-transparent py-6 border-b border-white/5'
      } flex justify-between items-center`}>
        <a href="#home" className={`font-bold font-display tracking-tight transition-all duration-500 ${isScrolled ? 'text-lg md:text-xl' : 'text-2xl'}`}>
          Umme <span className="text-primary italic">Habiba</span>
        </a>
        <nav className={`hidden md:flex items-center space-x-1 transition-all duration-500 ${isScrolled ? 'bg-transparent border-none shadow-none' : 'bg-white/50 dark:bg-zinc-900/50 backdrop-blur-2xl border border-white/20 dark:border-zinc-800/20 rounded-full px-2 py-1.5 shadow-xl shadow-black/5'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 active:scale-95 ${isScrolled ? 'text-foreground/80' : 'text-foreground/70'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
           <Button asChild variant="outline" className={`rounded-full border-primary/20 hover:border-primary/50 transition-all duration-500 ${isScrolled ? 'px-4 py-1 text-[10px] uppercase font-black tracking-widest' : 'px-6 py-2'}`}>
            <a href="/Umme-Habiba-CV.pdf" download>Download CV</a>
           </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-full border-none bg-white p-0 flex flex-col z-[100]">
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-100">
              <a href="#home" className="text-2xl font-bold font-display tracking-tight text-black">Umme Habiba</a>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-black">
                  <X className="h-6 w-6" />
                </Button>
              </SheetClose>
            </div>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex-grow flex flex-col justify-center items-center gap-8 p-6 text-center">
              <nav className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-4xl font-display font-bold text-black hover:text-primary transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </div>
            <div className="p-10 border-t border-zinc-100 flex flex-col gap-4 bg-zinc-50">
              <Button asChild className="w-full rounded-full py-8 text-xl bg-black text-white hover:bg-primary transition-colors border-none">
                <a href="/Umme-Habiba-CV.pdf" download>Download CV</a>
              </Button>
              <p className="text-center text-zinc-400 text-xs tracking-widest uppercase mt-4">Kolkata, India</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
