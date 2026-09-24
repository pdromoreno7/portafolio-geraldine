import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Podcast from '@/components/podcast';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <Intro />
      <About />
      <Projects />
      <Podcast />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
