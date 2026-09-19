import { projects } from "@/data/projects";
import FilmStrip from "@/components/FilmStrip";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden">
      {/* Intro */}
      <section className="shrink-0 border-b border-white/10 bg-gradient-to-b from-black to-[#0b0b0b] px-4 py-2 sm:px-6 sm:py-3">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-sm font-bold text-white sm:text-base">
              박소유 <span className="text-slate-500">·</span> 웹 서비스 개발자
            </p>
            <p className="text-xs text-slate-400 sm:text-sm">
              필리핀 현지 생활의 불편함을 직접 겪고, 그 문제를 해결하는 서비스를 배포한 것이 개발자로서의 첫걸음이었습니다.
            </p>
          </div>
          <p className="text-[10px] font-medium tracking-wide text-teal-300/90 sm:text-xs">
            React · Next.js · TypeScript · Tailwind CSS · Supabase
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-0 flex-1 scroll-mt-16">
        <FilmStrip projects={projects} />
      </section>

      {/* Contact / footer */}
      <footer id="contact" className="shrink-0 bg-gradient-to-b from-[#111111] to-black text-slate-300">
        <div className="max-w-5xl mx-auto px-6 py-2.5 text-center sm:py-3">
          <a
            href="/박소유_포트폴리오.pdf"
            download="박소유_포트폴리오.pdf"
            className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-slate-600 px-3 py-1.5 text-[11px] text-slate-200 transition-colors hover:border-slate-400 hover:bg-white/5 sm:mb-2 sm:px-4 sm:py-1.5 sm:text-sm"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            포트폴리오 PDF 다운로드
          </a>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href="https://github.com/soyupark1997"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 프로필 보기"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#181717] transition-transform hover:scale-105 sm:h-10 sm:w-10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                fill="white"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://open.kakao.com/o/s60LmPDi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 오픈채팅으로 대화하기"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FEE500] transition-transform hover:scale-105 sm:h-10 sm:w-10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                fill="#3C1E1E"
              >
                <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.19 4.6 6.58-.2.74-.73 2.7-.84 3.12-.13.52.19.51.4.37.17-.11 2.7-1.83 3.79-2.58.66.1 1.35.15 2.05.15 5.52 0 10-3.48 10-7.64C22 6.48 17.52 3 12 3z" />
              </svg>
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-400 sm:mt-2 sm:text-sm">
            <a href="mailto:soyupark1997@gmail.com" className="hover:text-slate-200">
              soyupark1997@gmail.com
            </a>
            <span className="mx-2 text-slate-600">·</span>
            <a href="tel:010-7774-0699" className="hover:text-slate-200">
              010-7774-0699
            </a>
          </p>
          <p className="mt-1.5 text-[10px] text-slate-500 sm:mt-1 sm:text-xs">
            © {new Date().getFullYear()} Soyu Park
          </p>
        </div>
      </footer>

      {/* 소유봇 floating button */}
      <a
        href="https://t.me/soyuring_bot"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="소유봇과 대화하기"
        className="group fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
      >
        <span className="hidden whitespace-nowrap rounded-full bg-black/85 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100 sm:block">
          소유봇과 대화하기
        </span>
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-16 sm:w-16">
          <span className="absolute inset-0 animate-ping rounded-full bg-purple-400/30" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/soyubot.jpg"
            alt="소유봇"
            className="relative h-full w-full rounded-full object-cover shadow-[0_8px_24px_rgba(0,0,0,0.55)] ring-2 ring-white/20 transition-transform duration-200 group-hover:scale-105"
          />
        </span>
      </a>
    </main>
  );
}
