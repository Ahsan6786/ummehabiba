import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 opacity-50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <span className="text-foreground font-bold tracking-[0.3em] uppercase text-sm">Get In Touch</span>
              <h2 className="text-5xl md:text-8xl font-display font-bold leading-tight">Let's work together</h2>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                I'm always open to discussing new opportunities, sharing insights about HR, or collaborating on interesting projects.
              </p>
              <div className="pt-10">
                <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-500 w-full max-w-xs sm:max-w-none shadow-2xl hover:scale-105 active:scale-95">
                  <a href="mailto:habiba2004umme@gmail.com" className="flex items-center justify-center gap-4 py-4 md:py-10 px-4 md:px-16 overflow-hidden">
                    <span className="text-sm md:text-2xl font-bold truncate">habiba2004umme@gmail.com</span>
                    <span className="text-xl md:text-3xl">→</span>
                  </a>
                </Button>
              </div>
              <p className="pt-12 text-muted-foreground/60 font-medium tracking-widest uppercase text-xs">Based in Kolkata, India • Available for global opportunities</p>
            </div>
        </div>
    </section>
  );
}
