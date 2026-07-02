import { useEffect, useState } from "react";
import { Github, MessageCircle, Music2, Mail, Heart } from "lucide-react";
import avatar from "@/assets/avatar.png";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { id: "about", label: "关于", icon: Heart },
  { id: "timeline", label: "时光", icon: null },
  { id: "album", label: "相册", icon: null },
  { id: "words", label: "想说", icon: null },
  { id: "people", label: "我们", icon: null },
  { id: "contact", label: "联系", icon: null },
];

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: MessageCircle, label: "留言", href: "#contact" },
  { icon: Music2, label: "音乐", href: "https://music.163.com" },
  { icon: Mail, label: "邮箱", href: "#contact" },
];

/** Days since a fixed date, ticking every second. Null until mounted to avoid SSR mismatch. */
function useElapsed(from: string) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now === null) return null;
  const diff = Math.max(0, now - new Date(from).getTime());
  const days = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { days, h, m, s };
}

export function Sidebar() {
  const [active, setActive] = useState("about");
  const apart = useElapsed("2026-06-26T00:00:00");
  const known = useElapsed("2023-09-01T00:00:00");


  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="glass animate-rise rounded-3xl p-6 lg:sticky lg:top-6">
      {/* avatar */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-brand opacity-70 blur-md" />
          <img
            src={avatar}
            alt="我们六个的头像"
            width={512}
            height={512}
            className="relative h-24 w-24 rounded-full border-2 border-white/80 object-cover shadow-soft"
          />
        </div>
        <span className="mt-4 rounded-full bg-secondary px-3 py-1 text-[11px] font-medium tracking-[0.25em] text-secondary-foreground">
          CLASS OF 2024
        </span>
        <h1 className="mt-3 font-display text-2xl text-brand">我们六个</h1>
        <p className="mt-1 text-xs text-muted-foreground">阳光中学 · 毕业纪念小站</p>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
          愿多年以后，我们六个还是那群穿着侨中校服的人。
        </p>
      </div>

      {/* socials */}
      <div className="mt-5 flex justify-center gap-2">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="grid h-10 w-10 place-items-center rounded-full glass-soft text-primary transition-transform hover:-translate-y-0.5 hover:text-accent"
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      {/* theme toggle */}
      <div className="mt-5 flex justify-center">
        <ThemeToggle />
      </div>

      {/* nav (desktop only — bottom bar handles mobile) */}
      <nav className="mt-6 hidden space-y-1.5 lg:block">
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-sm transition-all ${
                on
                  ? "bg-brand text-primary-foreground shadow-soft"
                  : "text-foreground/80 hover:bg-secondary/70"
              }`}
            >
              <span className="font-medium">{n.label}</span>
              {on && <span className="h-1.5 w-1.5 rounded-full bg-white/90" />}
            </button>
          );
        })}
      </nav>

      {/* counters */}
      <div className="mt-6 space-y-3">
        <div className="rounded-2xl glass-soft px-4 py-3 text-center">
          <p className="text-[13px] text-muted-foreground">
            我们分开的第{" "}
            <span className="font-semibold text-primary">{apart ? apart.days : "…"}</span> 天{" "}
            <span className="tabular-nums text-primary/90">
              {apart
                ? `${String(apart.h).padStart(2, "0")}:${String(apart.m).padStart(2, "0")}:${String(apart.s).padStart(2, "0")}`
                : "00:00:00"}
            </span>
          </p>
        </div>
        <div className="rounded-2xl glass-soft px-4 py-3 text-center">
          <p className="text-[13px] text-muted-foreground">
            我们相识{" "}
            <span className="font-semibold text-accent">{known ? known.days : "…"}</span> 天，一起写过无数张试卷。
          </p>
        </div>
      </div>
    </aside>
  );
}
