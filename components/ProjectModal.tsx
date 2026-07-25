"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

const COLOR_MAP = {
  teal: {
    text: "text-teal-300",
    border: "border-teal-400/50",
    dot: "bg-teal-300",
    solidBtn: "bg-teal-300 text-black hover:bg-teal-200",
    ring: "ring-teal-400/60",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-400/50",
    dot: "bg-amber-300",
    solidBtn: "bg-amber-300 text-black hover:bg-amber-200",
    ring: "ring-amber-400/60",
  },
  pink: {
    text: "text-pink-300",
    border: "border-pink-400/50",
    dot: "bg-pink-300",
    solidBtn: "bg-pink-300 text-black hover:bg-pink-200",
    ring: "ring-pink-400/60",
  },
} as const;

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [showFrame, setShowFrame] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const c = COLOR_MAP[project.color];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast(`${label} 복사되었습니다`);
    } catch {
      setToast("복사에 실패했어요");
    }
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/85 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="film-grain h-full w-full max-w-2xl touch-pan-y overflow-y-auto rounded-none border-0 border-white/10 bg-[#0c0c0b] shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-md sm:border"
        style={{ WebkitOverflowScrolling: "touch" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sprocket accent row */}
        <div className="flex justify-between gap-[3px] bg-black px-4 py-1.5 opacity-70 sm:px-7 sm:py-2">
          {Array.from({ length: 22 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1 shrink-0 rounded-[1px] bg-[#d8d2c4]/70 sm:h-2.5 sm:w-2"
            />
          ))}
        </div>

        {/* Header band */}
        <div className="relative border-b border-white/10 px-5 py-5 sm:px-8 sm:py-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-stone-300 hover:border-white/40 hover:text-white"
          >
            ✕
          </button>
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${c.text}`}
          >
            {project.meta}
          </p>
          <h3 className="mt-2 pr-10 text-xl font-bold leading-snug text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-300 sm:text-base">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {project.tags.map((t, i) => (
              <span key={t} className="text-xs font-medium tracking-wide text-stone-400">
                {t}
                {i < project.tags.length - 1 && <span className="ml-3 text-stone-700">/</span>}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setShowFrame((v) => !v)}
              className={`hidden items-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold transition-colors sm:inline-flex ${c.solidBtn}`}
            >
              {showFrame ? "미리보기 닫기" : "▶ 사이트 미리보기"}
            </button>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold text-stone-200 transition-colors hover:border-white/50 hover:text-white"
            >
              새 탭에서 열기 ↗
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold text-stone-200 transition-colors hover:border-white/50 hover:text-white"
            >
              GitHub 코드 보기
            </a>
            {project.adminUrl && (
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold text-stone-200 transition-colors hover:border-white/50 hover:text-white"
              >
                관리자 페이지 →
              </a>
            )}
          </div>
          {(project.testAccount || project.note) && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {project.testAccount?.label && (
                <span className={`text-xs font-bold ${c.text}`}>
                  {project.testAccount.label}
                </span>
              )}
              {project.testAccount?.id && (
                <button
                  type="button"
                  onClick={() => copy(project.testAccount!.id!, "아이디가")}
                  className={`inline-flex items-center gap-1.5 rounded-sm border border-dashed ${c.border} px-3 py-1.5 text-xs font-semibold text-stone-200 transition-colors hover:bg-white/5`}
                >
                  아이디 : {project.testAccount.id}
                </button>
              )}
              {project.testAccount?.password && (
                <button
                  type="button"
                  onClick={() => copy(project.testAccount!.password!, "비밀번호가")}
                  className={`inline-flex items-center gap-1.5 rounded-sm border border-dashed ${c.border} px-3 py-1.5 text-xs font-semibold text-stone-200 transition-colors hover:bg-white/5`}
                >
                  비밀번호 : {project.testAccount.password}
                </button>
              )}
              {project.note && <span className="text-xs text-stone-500">{project.note}</span>}
            </div>
          )}
        </div>

        {/* Live iframe simulation */}
        {showFrame && (
          <div className="border-b border-white/10 bg-black p-3 sm:p-4">
            <div
              className={`touch-pan-y overflow-hidden rounded-sm ring-1 ${c.ring}`}
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <iframe
                src={project.demoUrl}
                title={project.title}
                className="h-[400px] w-full touch-pan-y sm:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}

        {/* Details */}
        <div className="grid gap-6 px-5 py-5 sm:grid-cols-2 sm:px-8 sm:py-8">
          <div>
            <h4 className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${c.text}`}>
              주요 기여
            </h4>
            <ul className="space-y-2">
              {project.contributions.map((t, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-stone-300">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${c.text}`}>
              트러블슈팅
            </h4>
            <ul className="space-y-3">
              {project.troubleshooting.map((t, i) => (
                <li key={i} className="text-sm leading-relaxed text-stone-300">
                  <span className="font-semibold text-white">{t.issue}</span>
                  <span className="text-stone-600"> → </span>
                  {t.fix}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${
          toast
            ? "opacity-100 translate-y-0"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-sm border border-amber-400/30 bg-black px-4 py-2 text-sm font-medium text-white shadow-lg">
          {toast}
        </div>
      </div>
    </div>
  );
}
