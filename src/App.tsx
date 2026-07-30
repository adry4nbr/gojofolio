import { ThemeToggle } from "./components/ui/ThemeToggle";
import { Hero } from "./sections/Hero/Hero";
import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Projects } from "./sections/Projects/Projects";
import { Technologies } from "./sections/Technologies/Technologies";

function App() {
  return (
    <div>
      <ThemeToggle />
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
    </div>
  );
}

export default App;
