import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박소유 포트폴리오 | Soyu Park",
  description:
    "박소유 개발 포트폴리오 — Kanto, SW칸타빌레, 포켓몬 도감 프로젝트를 직접 체험해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased text-slate-800">{children}</body>
    </html>
  );
}
