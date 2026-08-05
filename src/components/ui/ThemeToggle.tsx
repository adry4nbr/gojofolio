import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "light" ? Moon : Sun;

  return (
    <button
      className="fixed z-50 top-0 right-0 m-6 md:m-10 p-2 md:p-3 border-border border-2 rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Mudar para tema escuro" : "Mudar para tema claro"
      }
    >
      <Icon className="text-accent-blue" />
    </button>
  );
}
