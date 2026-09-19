"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const RESUME_DELAY_MS = 2000;

const SPROCKET_COUNT_MOBILE = 18;
const SPROCKET_COUNT_DESKTOP = 40;

const GLOW_COLORS: Record<Project["color"], string> = {
  teal: "rgba(45,212,191,0.4)",
  amber: "rgba(252,211,77,0.38)",
  pink: "rgba(244,114,182,0.38)",
};

const METEORS = [
  { left: "12%", top: "4%", delay: "0s", duration: "14s" },
  { left: "55%", top: "10%", delay: "6s", duration: "18s" },
  { left: "80%", top: "2%", delay: "11s", duration: "16s" },
];

export default function FilmStrip({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();
  const loopedProjects = [...projects, ...projects];

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onScroll = () => {
      setIsPaused(true);
      clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => setIsPaused(false), RESUME_DELAY_MS);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <>
      {/* Mobile: auto-scrolling filmstrip (touch to pause) */}
      <div className="film-grain night-sky filmstrip-shell h-full sm:hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {METEORS.map((m, i) => (
            <span
              key={i}
              className="meteor"
              style={{
                left: m.left,
                top: m.top,
                animationDelay: m.delay,
                animationDuration: m.duration,
              }}
            />
          ))}
        </div>
        <SprocketBar />
        <div ref={viewportRef} className="filmstrip-viewport">
          <div
            className="filmstrip-track"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {loopedProjects.map((p, i) => (
              <FilmFrame
                key={`${p.id}-${i}`}
                project={p}
                index={i}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>
        </div>
        <SprocketBar />
      </div>

      {/* Desktop: static 2x2 grid, sized to always fit the viewport, no motion */}
      <div className="film-grain night-sky relative hidden h-full w-full sm:flex sm:items-center sm:justify-center sm:p-3 lg:p-5">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {METEORS.map((m, i) => (
            <span
              key={i}
              className="meteor"
              style={{
                left: m.left,
                top: m.top,
                animationDelay: m.delay,
                animationDuration: m.duration,
              }}
            />
          ))}
        </div>
        <div className="relative h-full w-full max-w-[1200px] rounded-2xl border border-white/10 bg-white/[0.03] p-3 lg:p-5">
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-3 lg:gap-5">
            {projects.map((p, i) => (
              <FilmFrame
                key={p.id}
                project={p}
                index={i}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function SprocketBar() {
  const [count, setCount] = useState(SPROCKET_COUNT_DESKTOP);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () =>
      setCount(mq.matches ? SPROCKET_COUNT_MOBILE : SPROCKET_COUNT_DESKTOP);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="filmstrip-sprocket sm:hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-white/85 shadow-[0_0_4px_rgba(255,255,255,0.6)]"
        />
      ))}
    </div>
  );
}

function FilmFrame({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <div className="filmstrip-frame-gutter relative flex shrink-0 items-center bg-transparent sm:h-full sm:w-full">
      <span className="absolute left-[-9px] top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap text-[8px] font-mono tracking-[0.3em] text-white/30 sm:block">
        {String(index + 1).padStart(2, "0")} SOYU
      </span>
      <button
        type="button"
        onClick={onClick}
        style={{ "--glow": GLOW_COLORS[project.color] } as CSSProperties}
        className="group relative h-[38vh] w-[85vw] max-w-[380px] overflow-hidden rounded-sm bg-gradient-to-br from-stone-800 via-stone-900 to-black text-left ring-1 ring-inset ring-white/10 transition-all duration-300 [filter:sepia(0.12)_saturate(1.08)_contrast(1.04)] hover:-translate-y-1 hover:scale-105 focus-visible:scale-105 focus:outline-none sm:h-full sm:w-full shadow-[0_18px_36px_-16px_rgba(0,0,0,0.75),0_2px_0_rgba(255,255,255,0.04)_inset] hover:shadow-[0_28px_55px_-16px_rgba(0,0,0,0.8),0_0_50px_-8px_var(--glow)]"
      >
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            style={{ objectPosition: project.imagePosition ?? "center" }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(circle at 78% 28%, var(--glow), transparent 62%)" }}
        />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_25px_rgba(0,0,0,0.65)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/10 to-black/35" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-5 lg:p-6">
          <h3 className="mt-2 break-keep text-xl font-bold leading-snug text-white sm:text-2xl">
            {project.title.split(" — ")[0]}
          </h3>
          <p className="mt-1.5 line-clamp-2 break-keep text-xs text-stone-300 sm:text-sm">
            {project.cardSummary ?? project.summary}
          </p>
          <p className="mt-3 text-[10px] font-medium tracking-wide text-amber-300/90 sm:text-xs">
            {project.tags.slice(0, 4).join("  ·  ")}
          </p>
        </div>
      </button>
    </div>
  );
}
