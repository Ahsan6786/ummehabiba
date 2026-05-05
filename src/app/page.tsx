import dynamic from 'next/dynamic';
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/home/Hero";
import { AnimateOnScroll } from "@/components/common/AnimateOnScroll";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { Skeleton } from '@/components/ui/skeleton';

const About = dynamic(() => import('@/components/home/About').then(mod => mod.About), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import('@/components/home/Skills').then(mod => mod.Skills), {
  loading: () => <SectionSkeleton />,
});
const Certificates = dynamic(() => import('@/components/home/Certificates').then(mod => mod.Certificates), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import('@/components/home/Projects').then(mod => mod.Projects), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import('@/components/home/Contact').then(mod => mod.Contact), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import('@/components/common/Footer').then(mod => mod.Footer), {
  loading: () => <div className="h-20" />, // A simple placeholder for the footer
});

const SectionSkeleton = () => (
  <div className="container mx-auto px-6 py-20 md:py-32">
    <Skeleton className="h-8 w-1/3 mx-auto mb-12" />
    <div className="space-y-8">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-48 w-full" />
    </div>
  </div>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Skills />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Certificates />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Projects />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
