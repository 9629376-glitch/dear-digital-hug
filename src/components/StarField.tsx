import { useEffect, useState } from "react";

/** Decorative twinkling starfield behind the whole page. */
export function StarField() {
  const [stars, setStars] = useState<
    { left: string; top: string; size: number; delay: string; dur: string }[]
  >([]);

  useEffect(() => {
    const next = Array.from({ length: 44 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      delay: `${Math.random() * 4}s`,
      dur: `${Math.random() * 3 + 2}s`,
    }));
    setStars(next);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-lilac/25 blur-3xl animate-float" />
      <div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sky/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blush/20 blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur} ease-in-out ${s.delay} infinite`,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
        />
      ))}
    </div>
  );
}
