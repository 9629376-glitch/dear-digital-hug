import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type Photo = { img: string; tag: string; title: string };

type Props = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNav: (next: number) => void;
};

/** Full-screen image viewer with keyboard + arrow navigation. */
export function Lightbox({ photos, index, onClose, onNav }: Props) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, onNav]);

  if (index === null) return null;
  const p = photos[index];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-rise"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="关闭"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav((index - 1 + photos.length) % photos.length);
        }}
        aria-label="上一张"
        className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav((index + 1) % photos.length);
        }}
        aria-label="下一张"
        className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <img
        src={p.img}
        alt={p.title}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
      />
      <div className="mt-4 text-center text-white" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs tracking-widest text-white/70">{p.tag}</p>
        <p className="mt-1 font-display text-lg">{p.title}</p>
        <p className="mt-1 text-xs text-white/50">
          {index + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
}
