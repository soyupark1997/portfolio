# soyu-portfolio-site

박소유 인터랙티브 포트폴리오 — Next.js 14 (App Router) + Tailwind CSS.
프로젝트 카드마다 "사이트 바로 체험하기" 버튼을 누르면 실제 배포된 사이트(Kanto, rawbeef, 포켓몬 도감)를 아이프레임으로 바로 열어볼 수 있습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000 접속

## 배포 (Vercel 추천)

이미 Vercel을 쓰고 계시니 가장 빠른 방법입니다.

1. 이 폴더를 GitHub 저장소로 push
2. https://vercel.com/new 에서 저장소 import
3. 별도 설정 없이 Deploy (Next.js 프로젝트 자동 인식)

또는 Vercel CLI가 있다면 이 폴더에서 바로:

```bash
npx vercel
```

## 아이프레임 관련 참고

Kanto/rawbeef/포켓몬 도감은 전부 본인이 배포한 Vercel 프로젝트라 대부분 아이프레임으로 정상적으로 열립니다.
다만 사이트에 `X-Frame-Options` 또는 `Content-Security-Policy: frame-ancestors` 헤더를 나중에 추가하면 미리보기가 막힐 수 있는데,
이 경우를 대비해 각 카드에 "새 탭에서 열기" 버튼도 함께 넣어뒀습니다.

## 프로젝트 내용 수정

`data/projects.ts` 파일 하나에 프로젝트 소개, 기술스택, 기여 내용, 트러블슈팅이 전부 정리되어 있습니다.
내용을 바꾸고 싶으면 이 파일만 수정하면 됩니다.

## 참고

이 코드는 Cowork 샌드박스 환경 제약으로 `npm install` 전체 완료 및 `next build`까지는 실행하지 못했고,
TypeScript 컴파일러로 타입 오류 여부만 확인했습니다(정상). 배포 전에 로컬에서 `npm install && npm run dev`로 한 번 확인해보시길 권장합니다.
