"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const SPROCKET_COUNT_MOBILE = 18;
const SPROCKET_COUNT_DESKTOP = 40;

const METEORS = [
  { left: "12%", top: "4%", delay: "0s", duration: "14s" },
  { left: "55%", top: "10%", delay: "6s", duration: "18s" },
  { left: "80%", top: "2%", delay: "11s", duration: "16s" },
];

export default function FilmStrip({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const loopedProjects = [...projects, ...projects];

  return (
    <div className="film-grain night-sky filmstrip-shell h-full">
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
      <div className="filmstrip-viewport">
        <div className="filmstrip-track">
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

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
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
    <div className="filmstrip-frame-gutter relative flex shrink-0 items-center bg-transparent">
      <span className="absolute left-[-9px] top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap text-[8px] font-mono tracking-[0.3em] text-white/30 sm:block">
        {String(index + 1).padStart(2, "0")} SOYU
      </span>
      <button
        type="button"
        onClick={onClick}
        className="group relative h-[38vh] w-[85vw] max-w-[380px] overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-black text-left transition-transform duration-300 [filter:sepia(0.12)_saturate(1.08)_contrast(1.04)] hover:scale-105 focus-visible:scale-105 focus:outline-none sm:h-[400px] sm:w-[460px]"
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
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_25px_rgba(0,0,0,0.65)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/10 to-black/35" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
          <h3 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
            {project.title.split(" — ")[0]}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs text-stone-300 sm:text-sm">
            {project.summary}
          </p>
          <p className="mt-3 text-[10px] font-medium tracking-wide text-amber-300/90 sm:text-xs">
            {project.tags.slice(0, 4).join("  ·  ")}
          </p>
        </div>
      </button>
    </div>
  );
}
