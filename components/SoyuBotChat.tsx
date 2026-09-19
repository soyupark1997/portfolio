"use client";

import { useEffect, useRef, useState } from "react";

const API_URL = "https://soyubot.onrender.com/api/chat";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function SoyuBotChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const send = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "오류가 발생했어요.");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "소유봇이 잠깐 잠들어 있나봐요. 몇 초 후 다시 시도해주세요."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40 flex h-[70vh] max-h-[520px] w-[calc(100vw-2rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c14] shadow-2xl sm:bottom-28 sm:right-6">
          <div className="flex shrink-0 items-center gap-2.5 border-b border-white/10 bg-gradient-to-b from-[#17172a] to-[#0c0c14] px-4 py-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image/soyubot.jpg"
              alt="소유봇"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-white">소유봇</p>
              <p className="truncate text-[10px] text-slate-400">궁금한 거 편하게 물어봐</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="닫기"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.length === 0 && (
              <p className="mt-6 text-center text-xs text-slate-500">
                소유봇한테 박소유님에 대해 물어보세요 🐱
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-purple-500/90 text-white"
                      : "bg-white/[0.07] text-slate-100 ring-1 ring-white/10"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white/[0.07] px-3.5 py-2 text-sm text-slate-400 ring-1 ring-white/10">
                  입력 중...
                </div>
              </div>
            )}
            {error && (
              <p className="text-center text-xs text-red-400">{error}</p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2 border-t border-white/10 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="메시지 입력..."
              maxLength={300}
              className="min-w-0 flex-1 rounded-full bg-white/[0.07] px-3.5 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-400/60"
            />
            <button
              type="button"
              onClick={send}
              disabled={isLoading || !input.trim()}
              aria-label="전송"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white transition-colors hover:bg-purple-400 disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M3 20l18-8L3 4v6l12 2-12 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="소유봇과 대화하기"
        className="group fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
      >
        <span className="hidden whitespace-nowrap rounded-full bg-black/85 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100 sm:block">
          {isOpen ? "닫기" : "소유봇과 대화하기"}
        </span>
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-16 sm:w-16">
          {!isOpen && <span className="absolute inset-0 animate-ping rounded-full bg-purple-400/30" />}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/soyubot.jpg"
            alt="소유봇"
            className="relative h-full w-full rounded-full object-cover shadow-[0_8px_24px_rgba(0,0,0,0.55)] ring-2 ring-white/20 transition-transform duration-200 group-hover:scale-105"
          />
        </span>
      </button>
    </>
  );
}
