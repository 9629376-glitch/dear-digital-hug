import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

const OPTIONS: { id: Theme; label: string; icon: typeof Sun }[] = [
  { id: "light", label: "白天", icon: Sun },
  { id: "dark", label: "黑夜", icon: Moon },
  { id: "system", label: "跟随系统", icon: Monitor },
];

/** Apply the chosen theme to <html>, honoring the OS setting for "system". */
function applyTheme(theme: Theme) {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", theme);
    applyTheme(theme);
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme, mounted]);

  return (
    <div className="flex items-center gap-1 rounded-full glass-soft p-1">
      {OPTIONS.map((o) => {
        const on = mounted && theme === o.id;
        return (
          <button
            key={o.id}
            onClick={() => setTheme(o.id)}
            aria-label={o.label}
            title={o.label}
            className={`grid h-8 w-8 place-items-center rounded-full transition-all ${
              on
                ? "bg-brand text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-accent"
            }`}
          >
            <o.icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
