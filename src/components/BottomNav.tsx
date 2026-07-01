import { useEffect, useState } from "react";
import { Heart, Clock3, Camera, MessageCircle, Users, MapPin } from "lucide-react";

const NAV = [
  { id: "about", label: "关于", icon: Heart },
  { id: "timeline", label: "时光", icon: Clock3 },
  { id: "album", label: "相册", icon: Camera },
  { id: "words", label: "想说", icon: MessageCircle },
  { id: "people", label: "我们", icon: Users },
  { id: "contact", label: "联系", icon: MapPin },
];

/** Fixed bottom navigation bar (primary nav on mobile). */
export function BottomNav() {
  const [active, setActive] = useState("about");

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

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="mx-auto max-w-md px-3 pb-3">
        <div className="glass flex items-center justify-between rounded-2xl px-1.5 py-1.5">
          {NAV.map((n) => {
            const on = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                aria-label={n.label}
                className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 text-[10px] transition-all ${
                  on ? "bg-brand text-primary-foreground shadow-soft" : "text-muted-foreground"
                }`}
              >
                <n.icon className="h-[18px] w-[18px]" />
                <span>{n.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
