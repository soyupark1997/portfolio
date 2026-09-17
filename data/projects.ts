export type Project = {
  id: string;
  title: string;
  meta: string;
  summary: string;
  cardSummary?: string;
  demoUrl: string;
  githubUrl?: string;
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
    id: "doctorcharting",
    title: "닥터차팅(DoctorCharting) — 간호 실무 차트 학습 앱",
    meta: "외주 프로젝트 · 2인 팀(구현 담당) · 2026.08 ~ 진행중",
    summary:
      "간호학과 학생·신규 간호사를 위한 차트 학습 앱입니다. 실제 형식의 의무기록(EMR 차트)을 읽고 의학용어를 익히며 문제를 풀어 확인하는 3축 학습 구조(차트학습·용어학습·문제풀이)를 구현했습니다.",
    cardSummary: "간호학과 학생·신규 간호사를 위한 차트 학습 앱입니다.",
    demoUrl: "https://dcuser.revuplan.com",
    adminUrl: "https://dcadmin.revuplan.com",
    image: "/image/doctorcharting-poster.png",
    color: "teal",
    tags: [
      "Vue 3",
      "TypeScript",
      "Laravel 13",
      "Sanctum",
      "MariaDB",
      "Capacitor",
      "Firebase Cloud Messaging",
      "Tailwind CSS v4",
    ],
    contributions: [
      "hwp 원고(15개 진료과) → Python 파서로 추출·정제해 진료과 15 · 질환 112 · 기록지 471 · 의학용어 8,801건 DB 적재, Laravel 13 + Sanctum API 27개 라우트 설계·구현",
      "차트학습 UI(질환→기록지 유형 칩→본문 렌더 + 약어 자동 하이라이트·툴팁)를 목데이터에서 실 API 연동으로 전환",
      "퀴즈·차트 문제 저작 기능 — chart_questions 테이블 및 CRUD API, 사용자 차트학습 하단 문제 섹션(30초 카운트다운 후 정답 공개) 구현, 문제 초안(퀴즈 430·차트문제 471건) 적재 스크립트 작성",
      "FCM 푸시 Android 실발송 — 서비스 계정 JWT(RS256)를 직접 서명해 OAuth2 토큰을 발급하는 FcmSender 구현(외부 SDK 미사용), 쉘앱 토큰 수신부터 관리자 타겟 발송까지 실기기 E2E 검증. API 스펙 선작성 → 리뷰 → 구현 프로세스로 진행",
      "FCM 푸시 iOS 대응 — Capacitor 쉘앱에 APNs→Firebase 브리지(AppDelegate.swift) 추가, 플랫폼이 항상 android로 저장되던 기존 버그 수정, 앱스토어 심사 요청까지 완료",
      "FAQ 하드코딩 3문항을 DB 테이블 + 공개/관리자 API 5종(CRUD+순서변경) + 관리자 UI로 전환, Playwright E2E로 전 흐름 검증",
      "게스트(비로그인) 콘텐츠 접근 제한, 1:1 문의 기능, DB 백업 크론 구축, 원고 대조 중 발견한 원본 데이터 오류 6건을 문서화해 발주사에 확인 요청",
    ],
    troubleshooting: [
      {
        issue: "php artisan migrate:fresh 오실행으로 로컬 DB 콘텐츠 테이블 전체 삭제",
        fix: "스키마·마이그레이션·시드·파서·문제초안 순으로 복구, 이후 콘텐츠 테이블은 ALTER만 허용하고 migrate:fresh/refresh를 금지하는 규칙 확립",
      },
      {
        issue: "hwp5txt로 추출 시 표 안의 내용이 누락됨",
        fix: "hwp5proc의 XML 출력을 직접 파싱하는 방식으로 전환해 표 데이터 보존",
      },
      {
        issue: "FCM 만료 토큰 처리 기준 불명확",
        fix: "404(UNREGISTERED)만 삭제하고 400(INVALID_ARGUMENT)은 페이로드 버그 가능성이 있어 삭제하지 않도록 분리 처리",
      },
    ],
    note: "발주사가 있는 외주 프로젝트라 관리자 계정 정보는 비공개입니다. 데모 계정은 요청 시 제공드립니다.",
  },
  {
    id: "kanto",
    title: "Kanto — 필리핀 생활 필수 플랫폼",
    meta: "팀장 · 4인 팀 · 2026.05.28 ~ 07.07 (6주)",
    summary:
      "필리핀에서 3년간 호텔 매니저로 일하며 목격한 문제를, 6주 만에 결제까지 붙은 플랫폼으로 만들었습니다. 중고거래·구인구직·부동산·지도 기반 번개모임을 제공합니다.",
    cardSummary:
      "필리핀 거주 한인을 위한 중고거래·구인구직·부동산·번개모임 통합 플랫폼입니다.",
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
      "프로젝트 아이디어 제안 및 팀원 합류 유도 — 프로젝트 초기 세팅, 헤더 UI 전체 구현, 찜·공유·신고 공통 컴포넌트 설계",
      "팀 리드 — 업무 분배·데드라인 설정, 팀 PR 병합·통합 관리자 역할 (본인 주도 PR 15건 이상 + 타 팀원 PR 100건 이상 리뷰·병합, 39일간 본인 커밋 283건, 팀 전체 1,191건 중 약 24%)",
      "구인구직 상세·찜·내 게시글·관리자 채팅관리·관리자 결제관리 페이지 최초 구현 (페이지별 기여도 55~68%, 팀 기여도 분석 보고서 기준)",
      "Xendit 에스크로 결제·정산 연동 (Disbursement 지급, 정산 계좌 등록, 중복 결제 방지) 및 관리자 결제내역·KPI 대시보드 구축",
      "채팅 성능 개선 — Supabase 인덱스 4개 추가, 읽음 처리 로직 3쿼리→RPC 1회 통합, 채팅방 진입 API 3회 왕복→1회 통합, 메시지 전송 전 정지·차단 검증을 클라이언트→서버로 이전",
      "이용약관 5개 페이지를 클라이언트 fetch에서 Notion API 서버 SSR + ISR(24시간 캐싱)로 전환 — 데스크탑 5페이지 전부 Performance 93~98점 → 100점, LCP 약 1.0s → 0.73s로 확정 개선",
    ],
    troubleshooting: [
      {
        issue: "이미지 업로드 용량 과다",
        fix: "업로드 전 Canvas API로 1600px 리사이즈 + WebP 변환 적용 — 실측 203KB → 16.67KB (약 92% 감소, 12배 이상 압축)",
      },
      {
        issue: "RLS 쿼리 성능 저하",
        fix: "auth.uid() 호출을 서브쿼리로 변경해 InitPlan 1회 평가로 개선 — EXPLAIN ANALYZE 실측 0.110ms → 0.050ms (약 55% 단축)",
      },
      {
        issue: "RLS 정책의 익명 사용자 정보 노출",
        fix: "anon role에도 열려 있던 정책 발견 → 불필요한 정책 drop 후 인증 사용자 기준으로 재작성해 접근 범위 축소",
      },
      {
        issue: "칸토고 지도 SDK 지연 로딩이 배포 후 모바일에서 효과 없음",
        fix: "next/dynamic으로 지연 로딩 컴포넌트를 만들었지만 배포 후 재측정에서 모바일 TBT가 480ms→1999ms로 오히려 4배 악화됨을 발견 → grep으로 코드 추적한 결과 실제 페이지가 이 컴포넌트를 한 번도 import하지 않는 죽은 코드였음을 확인. 데스크탑은 LCP 2.1s→0.73s로 이미 개선되어 있었음",
      },
    ],
    testAccount: {
      label: "테스트 계정",
      id: "asdf1234@naver.com",
      password: "asdf1234",
    },
  },
  {
    id: "SW칸타빌레",
    title: "SW칸타빌레 — 노래방 인기 차트",
    meta: "2인 팀 · Frontend Bootcamp 17기 · 2026.04.20 ~ 05.22 (관리자·소개 페이지 담당)",
    summary:
      "프레임워크 없이 Vanilla JS + Vite + Tailwind로 구현한 노래방 TOP10 차트 & 관리자 시스템입니다.",
    demoUrl: "https://rawbeef-orcin.vercel.app",
    githubUrl: "https://github.com/soyupark1997/rawbeef",
    adminUrl: "https://rawbeef-orcin.vercel.app/admin",
    image: "/image/rawbeef-poster.png",
    color: "amber",
    tags: ["Vanilla JS", "Vite", "Tailwind CSS", "Fetch API", "JWT"],
    contributions: [
      "본인 PR 105건 · 팀원 PR 36건 (총 141건), 8회 정식 코드 리뷰",
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
    testAccount: { label: "관리자 테스트 계정", password: "8888" },
  },
  {
    id: "pokemon",
    title: "포켓몬 도감 — TypeScript 개인 프로젝트",
    meta: "개인 프로젝트 · 1인 · 2026.06.10 ~ 06.15",
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
