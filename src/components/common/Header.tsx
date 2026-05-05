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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <div className={`w-full max-w-7xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 pointer-events-auto flex justify-between items-center px-6 py-3
        ${isScrolled 
          ? 'rounded-full shadow-2xl shadow-black/5 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl translate-y-0' 
          : 'rounded-2xl shadow-none'
        }`}>
        <a href="#home" className="text-xl md:text-2xl font-black font-display tracking-tight text-zinc-950 hover:opacity-70 transition-opacity whitespace-nowrap">
          Umme <span className="text-primary italic">Habiba</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <Button asChild variant="outline" className="hidden md:flex rounded-full px-6 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-black dark:text-white">
            <a href="/Umme-Habiba-CV.pdf" download>Download CV</a>
           </Button>
           
           <Sheet>
             <SheetTrigger asChild className="md:hidden">
               <Button variant="ghost" size="icon" className="rounded-full text-black dark:text-white">
                 <Menu className="h-6 w-6" />
               </Button>
             </SheetTrigger>
             <SheetContent side="right" className="w-full border-none bg-white p-0 flex flex-col z-[100]">
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
                       <a href={link.href} className="text-4xl font-display font-bold text-black hover:text-primary transition-all duration-300">
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
      </div>
    </header>
  );
}
