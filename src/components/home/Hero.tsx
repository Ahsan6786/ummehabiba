"use client";

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useTypewriter } from "@/hooks/use-typewriter";

export function Hero() {
  const fullText = "Dedicated to fostering inclusive environments where teams thrive and businesses succeed.";
  const typedText = useTypewriter(fullText, 50);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
       <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
       <Image 
        src="/hero-port.png" 
        alt="Portrait background image"
        layout="fill"
        objectFit="cover"
        className="md:hidden"
        priority
       />
       <Image 
        src="/hero-land.png" 
        alt="Landscape background image"
        layout="fill"
        objectFit="cover"
        className="hidden md:block"
        priority
       />
       <div className="relative z-20 text-white p-4">
        <p className="text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-4 opacity-90">Hi, I'm</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-none mb-8">
          Umme <span className="text-primary italic">Habiba</span>
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-base md:text-xl leading-relaxed opacity-80 min-h-[60px]">
          {typedText}
          <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse align-middle"></span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 px-8">
          <Button size="lg" asChild className="rounded-full px-8 bg-white text-black hover:bg-primary hover:text-primary-foreground shadow-lg transition-all hover:scale-105 active:scale-95 border-none">
            <a href="#projects">Explore My Work</a>
          </Button>
          <Button size="lg" asChild className="rounded-full px-8 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95">
             <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
