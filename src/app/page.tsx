import Hero from "./_components/Hero";
import Line from "./_components/line";
import Marquee from "./_components/Marquee";
import Matriz from "./_components/Matriz";
import MethodOutcome from "./_components/MethodOutcome";
import Projects from "./_components/projects";
import Services from "./_components/Services";
import WhyShouldYouHaveAWebSite from "./_components/WhyShouldYouHaveAWebSite";

export default function Home() {
  return (
   <>
    <Hero />
    <Marquee/>
    <Services />
    <WhyShouldYouHaveAWebSite />
    <Line />
    <Matriz />
    <Line />
    <MethodOutcome />
    <Projects />
   </>
  );
}
