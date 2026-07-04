import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "light" ? Moon : Sun;

  return (
    <button
      className="fixed top-0 right-0 m-8 p-4 border-border border-2 rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Mudar para tema escuro" : "Mudar para tema claro"
      }
    >
      <Icon className="text-accent-blue" />
    </button>
  );
}
