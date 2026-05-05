"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function About() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40 bg-muted/30 relative overflow-hidden">
      {/* Lively Background Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/40 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/40 z-0"></div>
            
            {/* Tilt Animation logic for mobile */}
            <div className={`relative z-10 p-2 bg-white shadow-2xl rounded-2xl transition-all duration-1000 ease-out
              ${isInView ? 'rotate-0 scale-100 opacity-100' : 'rotate-12 scale-90 opacity-0 md:opacity-100 md:rotate-2 md:scale-100'}
            `}>
              <Image
                src="/umme-habiba.jpg"
                width={800}
                height={1000}
                alt="Umme Habiba"
                className="rounded-xl w-full transition-all duration-700 shadow-2xl"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-foreground font-bold tracking-[0.2em] uppercase text-sm">Discover</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-foreground">About Me</h2>
              <div className="w-20 h-1 bg-primary/40"></div>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed font-normal">
              <p>
                I am a dedicated and detail-oriented professional with a passion for understanding how organizations work. My background in commerce has provided me with strong analytical skills, which I enjoy combining with my natural ability to connect with people.
              </p>
              <p>
                My academic journey has equipped me with a strong foundation in organizational behavior, business communication, and human resource management. Through my research project on fresher recruitment challenges, I discovered my passion for understanding and solving people-related issues in the workplace.
              </p>
              <p>
                This experience has shaped my career aspiration to create positive, inclusive work environments where both individuals and organizations can thrive.
              </p>
            </div>
            
            <div className="pt-4">
               <Button asChild className="rounded-full px-8 py-6 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                <a href="#contact" className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                  Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
