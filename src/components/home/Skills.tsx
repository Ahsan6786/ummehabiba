import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, Database } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: { name: string }[]; icon: any }) => (
  <div className="group p-8 bg-white dark:bg-zinc-900/50 border border-border/50 rounded-3xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
    <div className="w-12 h-12 bg-foreground/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      <Icon className="text-foreground h-6 w-6" />
    </div>
    <h3 className="text-2xl font-display font-bold mb-6 text-foreground">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <Badge key={index} variant="secondary" className="bg-muted/50 hover:bg-primary/20 text-foreground transition-colors px-4 py-1.5 rounded-full text-sm font-medium border-none">
          {skill.name}
        </Badge>
       ))}
    </div>
  </div>
);

const Achievements = ({ achievements }: { achievements: string[] }) => (
    <div className="p-8 md:p-12 bg-primary/5 border border-primary/10 rounded-[2.5rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-grow bg-primary/20"></div>
            <h3 className="text-2xl font-display font-bold text-center px-4 text-foreground">Key Achievements</h3>
            <div className="h-px flex-grow bg-primary/20"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white transition-all duration-300">
                      <div className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center">
                        <Award className="text-foreground h-5 w-5" />
                      </div>
                      <span className="text-foreground text-base leading-relaxed font-medium">{item}</span>
                  </div>
              ))}
          </div>
        </div>
    </div>
)

export function Skills() {
  const technicalSkills = [
    { name: "MS Office Suite" },
    { name: "Financial Accounting" },
    { name: "Data Analysis" },
    { name: "Research & Documentation" },
  ];

  const softSkills = [
    { name: "Communication" },
    { name: "Time Management" },
    { name: "Team Collaboration" },
    { name: "Problem Solving" },
  ];

  const languages = [
    { name: "English" },
    { name: "Hindi" },
  ];
  
  const achievements = [
      "Participated in college seminars",
      "Volunteered for registration management during college fest",
      "Successfully completed research on fresher recruitment challenges"
  ]

  return (
    <section id="skills" className="py-24 md:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-foreground font-bold tracking-[0.2em] uppercase text-sm">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">Skills & Achievements</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-24">
          <SkillCategory title="Technical" skills={technicalSkills} icon={Briefcase} />
          <SkillCategory title="Soft Skills" skills={softSkills} icon={Award} />
          <SkillCategory title="Languages" skills={languages} icon={Database} />
        </div>

        <div className="max-w-6xl mx-auto">
          <Achievements achievements={achievements}/>
        </div>
      </div>
    </section>
  );
}
