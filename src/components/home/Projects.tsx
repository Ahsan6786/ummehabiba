import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Financial Statement Analysis",
    subtitle: "A study based on Tata Motors Limited, project report of the last 10 years.",
    category: "College Project",
    duration: "3 months",
    description: "Conducted an in-depth analysis of Tata Motors' financial statements as a comprehensive college project. This study focused on understanding the company's financial health and operational efficiency over a decade.",
    keyHighlights: [
        "Analyzed 10 years of financial statements to identify trends",
        "Calculated key financial ratios to assess liquidity, profitability, and solvency",
        "Researched the impact of market trends on the company's performance",
        "Prepared a detailed report summarizing the findings and providing insights",
    ],
    skills: [
        "Financial Analysis",
        "Data Interpretation",
        "Ratio Analysis",
        "Report Writing",
        "Research",
    ],
    impact: "This academic project received a high grade and demonstrated a strong ability to analyze complex financial data and draw meaningful conclusions.",
    imageSrc: "https://www.actualidadmotor.com/wp-content/uploads/2022/11/Tata-Motors-logo.jpg",
    imageHint: "financial charts office",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40 bg-muted/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 md:mb-24 space-y-4">
                <span className="text-foreground font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">Featured Projects</h2>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-24">
                {projectsData.map((project, index) => (
                    <div key={index} className="group bg-white dark:bg-zinc-900 rounded-[3rem] border border-border/30 overflow-hidden hover:shadow-4xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-2">
                        <div className="grid lg:grid-cols-12 items-stretch">
                            <div className="lg:col-span-5 relative min-h-[300px] bg-primary/5 p-12 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                                <Image 
                                    src={project.imageSrc} 
                                    alt={project.title}
                                    width={400}
                                    height={200}
                                    className="relative z-10 object-contain group-hover:scale-110 transition-transform duration-700"
                                    data-ai-hint={project.imageHint}
                                />
                            </div>
                            <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center">
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <Badge className="rounded-full px-4 bg-primary/30 text-foreground border-none hover:bg-primary/40 transition-colors uppercase tracking-wider text-[10px] font-black">{project.category}</Badge>
                                    <span className="text-foreground/90 text-sm flex items-center gap-2 font-bold italic">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                                        {project.duration}
                                    </span>
                                </div>
                                
                                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                <p className="text-xl text-foreground mb-8 font-semibold italic">{project.subtitle}</p>
                                
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground/80 mb-4">The Challenge</h4>
                                        <p className="text-foreground leading-relaxed text-lg font-medium">{project.description}</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/60 mb-4">Key Highlights</h4>
                                            <ul className="space-y-3">
                                                {project.keyHighlights.slice(0, 3).map((highlight, hIndex) => (
                                                    <li key={hIndex} className="flex items-start gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                                        <span className="text-muted-foreground text-sm leading-tight">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/60 mb-4">Expertise</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.skills.map((skill, sIndex) => (
                                                    <span key={sIndex} className="text-xs font-medium px-3 py-1 bg-muted/50 rounded-full border border-border/30">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-border/40 flex items-center justify-between">
                                        <div className="max-w-[70%]">
                                            <p className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1 font-black">Impact</p>
                                            <p className="text-sm text-foreground font-medium line-clamp-1">{project.impact}</p>
                                        </div>
                                        <Button asChild className="rounded-full px-8 py-6 group bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
                                            <a
                                            href="https://www.linkedin.com/posts/umme-habiba-b9525b287_project-report-on-financial-statement-analysis-activity-7198906969854939136-E3BY?utm_source=share&utm_medium=member_desktop"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                                Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
