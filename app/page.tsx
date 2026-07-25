import { projects } from "@/data/projects";
import FilmStrip from "@/components/FilmStrip";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden">
      {/* Projects */}
      <section id="projects" className="min-h-0 flex-1 scroll-mt-16">
        <FilmStrip projects={projects} />
      </section>

      {/* Contact / footer */}
      <footer id="contact" className="shrink-0 bg-gradient-to-b from-[#111111] to-black text-slate-300">
        <div className="max-w-5xl mx-auto px-6 py-2.5 text-center sm:py-6">
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
            <a
              href="https://t.me/soyuring"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="텔레그램으로 대화하기"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#229ED9] transition-transform hover:scale-105 sm:h-10 sm:w-10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                fill="white"
              >
                <path d="M21.05 3.35 2.98 10.53c-1.24.5-1.23 1.19-.23 1.5l4.63 1.44 1.78 5.52c.22.6.36.84.75.84.32 0 .47-.15.65-.33l1.9-1.86 4.35 3.22c.8.45 1.38.22 1.58-.74l2.86-13.66c.29-1.18-.44-1.71-1.2-1.11ZM8.4 13.5l9.4-6c.44-.27.85-.12.51.18l-8.06 7.34-.31 3.36-1.54-4.88Z" />
              </svg>
            </a>
            <a
              href="https://discord.com/users/1455362094131183780"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="디스코드로 대화하기"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5865F2] transition-transform hover:scale-105 sm:h-10 sm:w-10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                fill="white"
              >
                <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.26a18.27 18.27 0 0 0-5.48 0 12.6 12.6 0 0 0-.62-1.26.08.08 0 0 0-.08-.04c-1.71.29-3.35.8-4.89 1.52a.07.07 0 0 0-.03.03C.97 8.6.24 12.7.57 16.76a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1 0-.13c.13-.09.25-.19.37-.28a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01c.12.1.24.19.37.28a.08.08 0 0 1 0 .13c-.6.35-1.22.65-1.87.89a.08.08 0 0 0-.04.11c.36.7.78 1.37 1.23 2a.08.08 0 0 0 .08.03 19.85 19.85 0 0 0 6.01-3.03.08.08 0 0 0 .03-.06c.4-4.7-.66-8.76-2.77-12.36a.06.06 0 0 0-.03-.03ZM8.02 14.3c-1.18 0-2.15-1.08-2.15-2.42s.95-2.42 2.15-2.42c1.21 0 2.17 1.1 2.15 2.42 0 1.34-.95 2.42-2.15 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42s.95-2.42 2.15-2.42c1.21 0 2.17 1.1 2.15 2.42 0 1.34-.94 2.42-2.15 2.42Z" />
              </svg>
            </a>
          </div>
          <p className="mt-1.5 text-[10px] text-slate-500 sm:mt-3 sm:text-xs">
            © {new Date().getFullYear()} Soyu Park
          </p>
        </div>
      </footer>
    </main>
  );
}
