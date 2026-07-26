export type Project = {
  id: string;
  title: string;
  meta: string;
  summary: string;
  demoUrl: string;
  githubUrl: string;
  adminUrl?: string;
  image?: string;
  imagePosition?: string;
  color: "teal" | "amber" | "pink";
  tags: string[];
  contributions: string[];
  troubleshooting: { issue: string; fix: string }[];
  testAccount?: { label?: string; id?: string; password?: string };
  note?: string;
};

export const projects: Project[] = [
  {
    id: "kanto",
    title: "Kanto — 필리핀 생활 필수 플랫폼",
    meta: "팀장 · 4인 팀 · 2026.05.28 ~ 07.07 (6주)",
    summary:
      "필리핀 현지에 필요한 중고거래·구인구직·부동산·지도 기반 번개모임을 제공하는 생활 플랫폼입니다.",
    demoUrl: "https://kanto-iota.vercel.app",
    githubUrl: "https://github.com/soyupark1997/kanto",
    adminUrl: "https://kanto-iota.vercel.app/admin",
    image: "/image/kanto.png",
    imagePosition: "center 75%",
    color: "teal",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Xendit",
      "Google Maps API",
      "Groq/Gemini/Cerebras",
    ],
    contributions: [
      "프로젝트 초기 세팅, 헤더 UI 전체 구현, 찜·공유·신고 공통 컴포넌트 설계",
      "Xendit 기반 결제·정산 시스템 연동, 결제 중복 방지, 관리자 결제내역·KPI 대시보드 구축",
      "RLS 보안 정책 점검(익명 사용자 정보 노출 차단), Supabase 타입 자동생성 파이프라인, CI lint 게이트 구축",
      "AI 챗봇(RAG + Gemini·Groq·Cerebras 3단 모델 폴백) 구현 참여",
    ],
    troubleshooting: [
      {
        issue: "결제 웹훅 누락",
        fix: "webhook 수신 경로 보강 + 결제완료 페이지 인보이스 상태 재검증 폴백 추가",
      },
      {
        issue: "RLS 쿼리 성능 저하",
        fix: "auth.uid() 호출을 서브쿼리로 변경해 InitPlan 1회 평가로 개선",
      },
      {
        issue: "결제 중복 요청",
        fix: "버튼 즉시 비활성화 + 서버 측 상태 확인 로직으로 중복 인보이스 방지",
      },
    ],
    testAccount: {
      label: "슈퍼어드민 계정",
      id: "asdf1234@naver.com",
      password: "asdf1234",
    },
  },
  {
    id: "SW칸타빌레",
    title: "SW칸타빌레 — 노래방 인기 차트",
    meta: "2인 팀 · Frontend Bootcamp 17기 · 관리자·소개 페이지 담당",
    summary:
      "프레임워크 없이 Vanilla JS + Vite + Tailwind로 구현한 노래방 TOP10 차트 & 관리자 시스템입니다.",
    demoUrl: "https://rawbeef-orcin.vercel.app",
    githubUrl: "https://github.com/soyupark1997/rawbeef",
    adminUrl: "https://rawbeef-orcin.vercel.app/admin",
    image: "/image/rawbeef.jpg",
    color: "amber",
    tags: ["Vanilla JS", "Vite", "Tailwind CSS", "Fetch API", "JWT"],
    contributions: [
      "관리자 페이지(카테고리 드래그 앤 드롭 정렬, 노래·신청곡 CRUD, 로그인) UI·기능을 레이아웃부터 전체 구축",
      "노래 신청 페이지 UI 개선, 앨범아트·유튜브 URL API 연동 및 신청 삭제 기능 추가",
      "소개(About) 페이지 신규 제작, 라이트/다크모드 토글 구현, index.html → 소개 페이지 리디렉션 처리",
      "500줄 이상 단일 파일을 admin_song_api.js/admin_song_main.js로 분리, 로그인 토큰 검증을 auth.js(requireAuth)로 통합해 관리자 페이지 무단 접근 문제 해결, XSS 방어용 esc() 유틸 적용",
    ],
    troubleshooting: [
      {
        issue: "ES Module 로딩 순서 버그",
        fix: "모든 <script>를 type=module로 통일, window.API_BASE로 명시적 참조",
      },
      {
        issue: "API 실패 시 무반응",
        fix: "전 구간 try/catch + res.ok 체크 추가, 실패 시 사용자 안내",
      },
    ],
    testAccount: { label: "관리자용", password: "8888" },
  },
  {
    id: "pokemon",
    title: "포켓몬 도감 — TypeScript 개인 프로젝트",
    meta: "개인 프로젝트",
    summary: "1~4세대 포켓몬 조회 및 배틀 기능을 제공하는 개인 프로젝트입니다.",
    demoUrl: "https://pokemon-battle.com",
    githubUrl: "https://github.com/soyupark1997/pokemon",
    image: "/image/pokemon.png",
    color: "pink",
    tags: ["TypeScript", "Vite", "Tailwind CSS v4", "PokéAPI"],
    contributions: [
      "721마리 전체 조회, 희귀도/타입 필터, 20개 단위 페이지네이션 구현",
      "배틀 승률 계산 기능 — 선택 포켓몬의 전체 대상 승률 및 TOP3 계산",
    ],
    troubleshooting: [
      {
        issue: "모바일 네트워크 부하",
        fix: "721마리 전체 요청 대신 10개 단위 배치 Fetching으로 분산 처리",
      },
      {
        issue: "배틀 계산 시 UI 멈춤",
        fix: "720명×30회 시뮬레이션을 Web Worker로 분리해 메인 스레드 블로킹 해결",
      },
      {
        issue: "폼 포켓몬 404 오류",
        fix: "deoxys-normal 등 폼 이름 대신 species.name(베이스 종)으로 재요청",
      },
    ],
  },
];
