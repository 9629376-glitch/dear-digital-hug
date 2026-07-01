import { Heart, Server, Zap } from "lucide-react";

type Sponsor = {
  category: string;
  categoryIcon: typeof Server;
  name: string;
  href: string;
  image: string;
};

const SPONSORS: Sponsor[] = [
  {
    category: "服务器",
    categoryIcon: Server,
    name: "VPS.Town",
    href: "https://vps.town",
    image: "https://s1.img-e.com/20260701/6a452703d8d67.png",
  },
  {
    category: "CDN",
    categoryIcon: Zap,
    name: "Hostoocdn",
    href: "https://hostoo.net",
    image: "https://s1.img-e.com/20260701/6a45270782ea2.webp",
  },
];

export function Footer() {
  return (
    <footer className="mt-4">
      <div className="glass rounded-3xl p-7 sm:p-9">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground">
            POWERED BY
          </p>
          <h2 className="mt-2 font-display text-xl text-brand">本站由以下服务支持</h2>
          <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
            感谢它们，让这份青春的记忆稳稳地留在这里。
          </p>
        </div>

        {/* sponsor cards: image first, then text — whole card is a hidden link */}
        <div className="mx-auto mt-7 grid max-w-xl gap-4 sm:grid-cols-2">
          {SPONSORS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              title={s.name}
              aria-label={`${s.category} · ${s.name}`}
              className="group flex flex-col items-center gap-4 rounded-2xl glass-soft p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-medium tracking-wide text-secondary-foreground">
                <s.categoryIcon className="h-3.5 w-3.5" />
                {s.category}
              </span>
              <div className="flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-white/70 p-2">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-display text-lg text-foreground transition-colors group-hover:text-accent">
                {s.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-1 border-t border-border/60 pt-6 text-center">
          <p className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
            用 <Heart className="h-3.5 w-3.5 fill-blush text-blush" /> 记录，我们六个 · 永不散
          </p>
          <p className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} 阳光中学 · 毕业纪念小站
          </p>
        </div>
      </div>
    </footer>
  );
}
