import { ThemeToggle } from "./components/ui/ThemeToggle";
import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Hero } from "./sections/Hero/Hero";

function App() {
  return (
    <div>
      <ThemeToggle />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
