import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Camera,
  Heart,
  Sparkles,
  Quote,
  Users,
  Mail,
  MapPin,
  Calendar,
  Clock,
  ZoomIn,
} from "lucide-react";

import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { StarField } from "@/components/StarField";
import { BottomNav } from "@/components/BottomNav";
import { Lightbox } from "@/components/Lightbox";

import heroBg from "@/assets/hero-bg.jpg";
import mem1 from "@/assets/mem1.jpg";
import mem2 from "@/assets/mem2.jpg";
import mem3 from "@/assets/mem3.jpg";
import mem4 from "@/assets/mem4.jpg";
import mem5 from "@/assets/mem5.jpg";
import mem6 from "@/assets/mem6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const STATS = [
  { big: "我们六个", small: "小小的班级" },
  { big: "海南华侨中学", small: "母校" },
  { big: "1000+ 天", small: "在一起" },
  { big: "数不清", small: "写过的作业" },
  { big: "上千包", small: "偷吃的辣条" },
  { big: "考上想去的高中", small: "共同的梦想" },
];

const TIMELINE = [
  { date: "2021.09", title: "开学典礼", desc: "第一次穿上校服，还不认识彼此的名字。" },
  { date: "2022.05", title: "第一次春游", desc: "山顶的风很大，拍出了最好看的合照。" },
  { date: "2022.10", title: "秋季运动会", desc: "我们六个喊加油喊到嗓子哑掉。" },
  { date: "2023.01", title: "元旦晚会", desc: "谁也没想到会在讲台上唱那么难听的歌。" },
  { date: "2026.03", title: "中考誓师", desc: "把所有想说的话写在气球上，一起放飞。" },
  { date: "2026.06", title: "毕业典礼", desc: "校服签满了名字，眼泪也停不下来。" },
];

const ALBUM = [
  { img: mem1, tag: "2023年9月1日", title: "开学第一天" },
  { img: mem2, tag: "2022年10月15日", title: "运动会加油" },
  { img: mem3, tag: "2023年3月8日", title: "晚自习课桌" },
  { img: mem4, tag: "2023年4月6日", title: "樱花树下" },
  { img: mem5, tag: "2023年7月20日", title: "教室的午后" },
  { img: mem6, tag: "2026年6月23日", title: "毕业那天" },
];

const WORDS = [
  {
    to: "致 小琪",
    body: "小琪，毕业快乐。你的英语一直都很厉害，也很稳定。以后不管去哪，希望你都能继续保持这种从容和优秀，前路一定会很亮。",
    from: "—— 小跃",
  },
  {
    to: "致 小霖",
    body: "小霖，毕业快乐。你平时有点调皮，但也正因为这样，班里才没那么无聊。以后收着点玩，别把“调皮”带进新环境了😂",
    from: "—— 小跃",
  },
  {
    to: "致 小翘",
    body: "小翘，平时你话不多，总是安安静静的，但其实一直都有在默默努力。愿你未来的路，也能这样安稳而坚定地走下去。",
    from: "—— 小跃",
  },
  {
    to: "致 小娇",
    body: "小娇，你一直都很爱笑，好像有你在的地方就会轻松很多。希望以后也能一直这样，把快乐带到更远的地方。",
    from: "—— 小跃",
  },
  {
    to: "致 小义",
    body: "小义，你的存在总是很热闹，像是教室里自带的舞台。希望以后你也能一直这样，自信地站在属于自己的地方发光。",
    from: "—— 小跃",
  },
  {
    to: "致 我们六个",
    body: "如果有一天你忘记了这段日子，就回到这个小站来看看。教室的灯还亮着，座位还留着，我们都在这里等你。",
    from: "—— 我们",
  },
];

const PEOPLE = [
  { g: "跃", name: "小跃", role: "啥也不是" },
  { g: "琪", name: "小琪", role: "英语课代表" },
  { g: "霖", name: "小霖", role: "英语课代表" },
  { g: "翘", name: "小翘", role: "无名的人" },
  { g: "娇", name: "小娇", role: "无名的人" },
  { g: "义", name: "小义", role: "开心果" },
];

const CONTACT = [
  { icon: Mail, label: "我们的邮箱", value: "class-of-2024@memory.site" },
  { icon: Users, label: "我们的群", value: "宝爸宝妈育儿交流群🐢" },
  { icon: Calendar, label: "十年后重聚", value: "海南华侨中学 · 大门口" },
  { icon: Clock, label: "重聚日期", value: "2034 · 六月的某天" },
];

function SectionHeading({
  icon: Icon,
  children,
}: {
  icon: typeof Heart;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-primary-foreground shadow-soft">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="font-display text-2xl text-foreground sm:text-3xl">{children}</h2>
    </div>
  );
}

function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen pb-24 lg:pb-0">
      <StarField />
      <Lightbox
        photos={ALBUM}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNav={setLightbox}
      />

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* left column */}
          <div>
            <Sidebar />
          </div>

          {/* right column */}
          <main className="space-y-6">
            {/* hero */}
            <section className="glass animate-rise relative overflow-hidden rounded-3xl">
              <img
                src={heroBg}
                alt=""
                width={1920}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/40 to-transparent" />
              <div className="relative p-8 sm:p-11">
                <p className="text-xs font-medium tracking-[0.3em] text-primary/80">
                  SINCE 2023 ·
                </p>
                <h1 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                  我们的 <span className="text-brand">初中毕业纪念站</span>
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/80 sm:text-base">
                  三年，一间教室，六个人。 这里没有排名，没有作业，只有那些「你还记得吗」——
                  把散落在校服口袋里的碎片，重新拼成可以回头翻看的青春。就算如今，天各一方，把回忆拼好给你。
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#album"
                    className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    翻看相册 →
                  </a>
                  <a
                    href="#words"
                    className="rounded-full glass-soft px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    我想对你说
                  </a>
                </div>
              </div>
            </section>

            {/* about */}
            <section id="about" className="glass rounded-3xl p-7 sm:p-9">
              <SectionHeading icon={Heart}>关于我们六个</SectionHeading>
              <p className="text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                我们是 海南华侨中学 的六个同学。从 2023 年九月的开学典礼开始，到 2026
                年六月的毕业典礼结束，我们一起走过了 1000 多个日夜。 这个小站不为任何人，只为我们六个
                —— 虽然我们初三才玩到一起，时间不算长，但留下的回忆一点也不少。感谢这场相遇，让平凡的初三多了许多欢笑。这份友情，值得被记录。
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {STATS.map((s) => (
                  <div
                    key={s.big}
                    className="rounded-2xl glass-soft px-4 py-5 text-center transition-transform hover:-translate-y-0.5"
                  >
                    <p className="font-display text-lg text-brand sm:text-xl">{s.big}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.small}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* timeline */}
            <section id="timeline" className="glass rounded-3xl p-7 sm:p-9">
              <SectionHeading icon={Sparkles}>三年时光轴</SectionHeading>
              <ol className="relative ml-3 space-y-6 border-l-2 border-border/70 pl-6">
                {TIMELINE.map((t) => (
                  <li key={t.date} className="relative">
                    <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full bg-brand shadow-soft ring-4 ring-white/70" />
                    <p className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> {t.date}
                    </p>
                    <h3 className="mt-1 font-display text-lg text-foreground">{t.title}</h3>
                    <p className="mt-1 text-sm text-foreground/75">{t.desc}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* album */}
            <section id="album" className="glass rounded-3xl p-7 sm:p-9">
              <SectionHeading icon={Camera}>我们的相册</SectionHeading>
              <p className="mb-6 text-sm text-muted-foreground">
                按时间排序 · 点击任意照片可放大查看。
              </p>
              <div className="space-y-6">
                {ALBUM.map((a, i) => (
                  <div key={a.title} className="flex flex-col gap-3">
                    <p className="flex items-center gap-2 font-display text-base text-brand">
                      <Calendar className="h-4 w-4 text-accent" /> {a.tag}
                    </p>
                    <button
                      type="button"
                      onClick={() => setLightbox(i)}
                      aria-label={`放大查看：${a.title}`}
                      className="group relative overflow-hidden rounded-2xl shadow-soft"
                    >
                      <img
                        src={a.img}
                        alt={a.title}
                        loading="lazy"
                        width={768}
                        height={768}
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <ZoomIn className="h-4 w-4" />
                      </span>
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left">
                        <span className="text-sm font-medium text-white">{a.title}</span>
                      </span>
                    </button>
                  </div>
                ))}
              </div>

            </section>

            {/* words */}
            <section id="words" className="glass rounded-3xl p-7 sm:p-9">
              <SectionHeading icon={Quote}>我想对你说</SectionHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                {WORDS.map((w) => (
                  <blockquote
                    key={w.to}
                    className="rounded-2xl glass-soft p-5 transition-transform hover:-translate-y-0.5"
                  >
                    <Quote className="h-5 w-5 text-accent/70" />
                    <p className="mt-2 font-display text-base text-brand">{w.to}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{w.body}</p>
                    <footer className="mt-3 text-right text-xs text-muted-foreground">
                      {w.from}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>

            {/* people */}
            <section id="people" className="glass rounded-3xl p-7 sm:p-9">
              <SectionHeading icon={Users}>我们六个</SectionHeading>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {PEOPLE.map((p) => (
                  <div
                    key={p.name}
                    className="flex flex-col items-center rounded-2xl glass-soft p-5 text-center transition-transform hover:-translate-y-1"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-brand font-display text-2xl text-primary-foreground shadow-soft">
                      {p.g}
                    </span>
                    <p className="mt-3 font-medium text-foreground">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.seat}</p>
                    <p className="mt-1 text-xs text-accent">{p.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* contact */}
            <section id="contact" className="glass rounded-3xl p-7 sm:p-9">
              <SectionHeading icon={MapPin}>联系我们</SectionHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                {CONTACT.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-2xl glass-soft p-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-sm font-medium text-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
