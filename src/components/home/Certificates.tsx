import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, GraduationCap, Award, Briefcase, Database } from "lucide-react";

const certificatesData = [
  {
    icon: <Briefcase className="h-8 w-8 text-foreground" />,
    title: "Managing risks in AI & ML",
    issuer: "Global Risk Management Institute",
    details: "A Grade • Dec 2024 - Mar 2025",
    imageSrc: "/certificate-ml-risk.jpg",
  },
  {
    icon: <Award className="h-8 w-8 text-foreground" />,
    title: "Finance Advance",
    issuer: "Pregrad - 3-month mentorship",
    details: "May 2024 - Aug 2024",
    imageSrc: "/certificate-finance.jpg",
  },
  {
    icon: <Database className="h-8 w-8 text-foreground" />,
    title: "SQL for Data Science",
    issuer: "Online Course",
    details: "Covers fundamental to advanced SQL for data analysis.",
    imageSrc: "/certificate_sql.png",
  },
  {
    icon: <Award className="h-8 w-8 text-foreground" />,
    title: "Microsoft Excel Data Analysis",
    issuer: "Microsoft",
    details: "Focused on data analysis and visualization techniques in Excel.",
    imageSrc: "/micro.png",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-foreground" />,
    title: "B.Com Degree",
    issuer: "Shri Shikshayatan College, Kolkata",
    details: "2022 - 2025",
    imageSrc: "", // No image for degree yet
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-foreground font-bold tracking-[0.2em] uppercase text-sm">Recognition</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">Certificates & Education</h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid gap-6">
          {certificatesData.map((cert, index) => (
            <Dialog key={index}>
              <div className="group flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 bg-white dark:bg-zinc-900 border border-border/50 rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left w-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {cert.icon}
                  </div>
                  <div className="flex-grow space-y-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">{cert.title}</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1 text-sm text-muted-foreground font-medium">
                      <span>{cert.issuer}</span>
                      <div className="hidden sm:block w-1 h-1 rounded-full bg-border"></div>
                      <span className="opacity-70">{cert.details}</span>
                    </div>
                  </div>
                </div>
                {cert.imageSrc && (
                  <DialogTrigger asChild>
                    <Button className="mt-6 sm:mt-0 sm:ml-8 rounded-full px-8 py-6 bg-foreground text-background hover:bg-primary hover:text-primary-foreground border-none transition-all duration-300 group/btn shadow-lg">
                      <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View Certificate
                    </Button>
                  </DialogTrigger>
                )}
              </div>
              {cert.imageSrc && (
                <DialogContent className="max-w-4xl p-2 bg-background/95 backdrop-blur-xl border-border/40">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-display font-bold px-4 pt-4">{cert.title}</DialogTitle>
                  </DialogHeader>
                  <div className="p-2">
                    <Image
                      src={cert.imageSrc}
                      alt={cert.title}
                      width={1200}
                      height={850}
                      className="rounded-xl object-contain shadow-2xl"
                    />
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
