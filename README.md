# 마스킷 프론트엔드 과제

## 프로젝트 개요

이 프로젝트는 마스킷의 티켓 관리 시스템을 위한 프론트엔드 애플리케이션입니다. Next.js 14, TypeScript, TailwindCSS를 기반으로 구축되며, 효율적인 티켓 관리와 사용자 경험 향상을 목표로 합니다.

## 기술 스택

- Next.js 14 (필수)
- TypeScript (필수)
- TailwindCSS
- Zustand
- Shadcn/ui
- ...

## 과제 주제 목록

다음 주제 중 일부를 선택하여 구현해주세요. 주어진 기간 내에 완성할 수 있는 범위를 고려하여 선택하세요.

1. 공연/티켓 목록 및 상세 정보 페이지
   - 데이터 fetching 및 상태 관리
   - 반응형 디자인
   - 공연 및 티켓의 목록과 상세 정보를 보여주는 페이지
2. **티켓 발권 프로세스**
   - 다단계 프로세스 관리
   - 상태 관리
3. 대시보드 구현
   - 데이터 시각화 (차트, 그래프 등)
   - 실시간 데이터 업데이트
   - 레이아웃 구성 및 성능 최적화
4. **할인 정책 관리 인터페이스**
   - 복잡도가 높은 폼 관리 (CRUD)
   - 사용자 권한 관리
5. **할인 AI DEMO (AI Playground)**
   - 외부 API 및 서비스와의 연계
6. **티켓 검증 및 체크인 시스템**
   - 카메라 API 사용
   - **오프라인 지원**
7. 이벤트 생성 및 관리 인터페이스
8. 사용자 알림 시스템
   - 웹소켓 사용
   - 백그라운드 동기화
9. 유사 서비스 분석 기반 과제
   - 최소 3개의 유사 티켓 관리 서비스를 선정하여 분석

## 마일스톤 및 계획 수립

이 섹션에서는 여러분이 선택한 과제 주제에 대한 개발 계획과 마일스톤을 작성해주세요. 아래는 1주일과 2주일 기준의 예시입니다. 여러분의 계획에 따라 이 섹션을 자유롭게 수정하고 확장하세요.

### 1주일 계획 예시

1. 1-2일차: 프로젝트 설정 및 기본 구조 구현
   - [ ] 개발 환경 설정 및 기본 레이아웃 구현
   - [ ] 티켓 목록 페이지 UI 구현
   - [ ] 상태 관리 라이브러리 설정 (Zustand)

2. 3-4일차: 핵심 기능 구현
   - [ ] 티켓 목록 데이터 fetching 및 상태 관리
   - [ ] 티켓 상세 정보 페이지 구현
   - [ ] 페이지네이션 또는 무한 스크롤 구현

3. 5-6일차: 추가 기능 및 최적화
   - [ ] 반응형 디자인 적용
   - [ ] 성능 최적화 (이미지 최적화, 코드 스플리팅 등)
   - [ ] 간단한 검색 또는 필터 기능 추가

4. 7일차: 마무리 및 문서화
   - [ ] 코드 리팩토링 및 주석 추가
   - [ ] README 업데이트 및 기술 문서 작성
   - [ ] 최종 테스트 및 버그 수정

### 2주일 계획 예시

1. 1-3일차: 프로젝트 설정 및 기본 구조 구현
   - [ ] 개발 환경 설정 및 기본 레이아웃 구현
   - [ ] 티켓 목록 및 상세 정보 페이지 UI 구현
   - [ ] 상태 관리 라이브러리 설정 (Zustand)

2. 4-6일차: 티켓 관리 핵심 기능 구현
   - [ ] 티켓 목록 및 상세 정보 데이터 fetching 구현
   - [ ] 페이지네이션 또는 무한 스크롤 구현
   - [ ] 티켓 발권 프로세스 기본 플로우 구현

3. 7-9일차: 할인 정책 관리 및 대시보드 구현
   - [ ] 할인 정책 관리 인터페이스 UI 구현
   - [ ] 할인 정책 CRUD 기능 구현
   - [ ] 간단한 대시보드 레이아웃 및 데이터 시각화 구현

4. 10-11일차: 추가 기능 및 최적화
   - [ ] 티켓 검증 기본 기능 구현 (QR 코드 생성 등)
   - [ ] 반응형 디자인 적용
   - [ ] 성능 최적화 (이미지 최적화, 코드 스플리팅, 메모이제이션 등)

5. 12-13일차: 테스트 및 오류 수정
   - [ ] 단위 테스트 작성 및 실행
   - [ ] 통합 테스트 실행
   - [ ] 발견된 버그 수정 및 UI/UX 개선

6. 14일차: 최종 마무리 및 문서화
   - [ ] 코드 리팩토링 및 주석 추가
   - [ ] README 업데이트 및 기술 문서 작성
   - [ ] 최종 점검 및 배포 준비

여러분의 계획에 따라 이 섹션을 자유롭게 수정하고 확장하세요. 구체적인 목표와 기간을 설정하는 것이 중요합니다.

## 환경 설정 가이드

### 1. GitHub 레포지토리 접근 및 클론

- [ ] 이메일로 전송된 GitHub 프라이빗 레포지토리 초대를 수락합니다.
- [ ] 초대받은 프라이빗 레포지토리를 클론합니다:

  ```
  git clone https://github.com/MaskitOfficial/maskit-frontend-task-[name].git
  cd maskit-frontend-task-[name]
  ```

작업이 완료되면 메인 브랜치에 직접 커밋하고 푸시하여 진행 상황을 공유할 수 있습니다:

  ```
  git add .
  git commit -m "작업 내용 설명"
  git push origin main
  ```

진행 중 문의사항이 있으면 레포지토리의 Issues 탭을 통해 질문해 주세요.

**참고**: 이 프로젝트를 완료한 후, 원하신다면 해당 레포지토리를 자신의 GitHub 계정으로 포크하여 포트폴리오에 추가할 수 있습니다. 이는 여러분의 작업을 공개적으로 전시하고 향후 경력에 활용할 수 있는 좋은 방법입니다. 단, 포크 시 레포지토리를 public으로 설정하기 전에 민감한 정보가 포함되어 있지 않은지 반드시 확인해 주세요.

### 2. Next.js 프로젝트 생성

- [ ] 다음 명령어로 새로운 Next.js 프로젝트를 생성합니다:

  ```
  pnpm install next@latest react@latest react-dom@latest
  ```

### 3. 프로젝트 구조 설정

다음과 같은 기본적인 디렉토리 구조를 생성합니다:

```
app/
  (dashboard)/
    page.tsx
  login/
    page.tsx
  layout.tsx
components/
  ui/
    button.tsx
lib/
  utils.ts
public/
  images/
types/
  user.ts
package.json
tsconfig.json
next.config.js
```

이 구조는 기본적인 예시이며, 프로젝트의 요구사항에 따라 자유롭게 수정하고 확장할 수 있습니다.

### 4. 기본 페이지 생성

- [ ] `app/(dashboard)/page.tsx`와 `app/login/page.tsx`에 기본 페이지를 생성합니다.

### 5. 환경 변수 설정

- [ ] `.env.local` 파일을 생성하고 필요한 환경 변수를 설정합니다.

### 6. UI 컴포넌트 생성

- [ ] `components/ui/`에 필요한 UI 컴포넌트들을 생성합니다.

### 7. 상태 관리 설정

- [ ] `store/`에 선택한 상태 관리 라이브러리를 설정합니다.

### 8. 타입 정의

- [ ] `types/`에 필요한 TypeScript 타입들을 정의합니다.

### 9. 개발 서버 실행

- [ ] 다음 명령어로 개발 서버를 시작합니다:

  ```
  pnpm dev
  ```

## API 모킹 가이드

이 프로젝트에서는 별도의 백엔드 API를 제공하지 않습니다. 대신, 프론트엔드 개발에 집중할 수 있도록 API 응답을 모킹하여 사용합니다. 실제 API 통신과 유사한 환경을 구현하기 위해 다음 가이드라인을 따라주세요:

1. `fetch`나 `axios` 등의 HTTP 클라이언트를 사용하여 실제 API를 호출하는 것처럼 코드를 작성합니다.
2. API 응답 데이터는 로컬에서 모킹합니다.
3. 비동기 처리를 통해 실제 네트워크 지연을 시뮬레이션합니다.

### 예시 코드

`lib/api.ts` 파일을 생성하고 다음과 같이 모킹된 API 함수를 구현할 수 있습니다:

```typescript
// lib/api.ts

import { Ticket } from '../types/ticket';

// 모킹된 티켓 데이터
const mockTickets: Ticket[] = [
  { id: '1', eventName: '콘서트 A', price: 50000, status: 'AVAILABLE' },
  { id: '2', eventName: '연극 B', price: 30000, status: 'SOLD' },
  // ... 더 많은 모킹 데이터
];

export async function fetchTickets(): Promise<Ticket[]> {
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // 여기서 실제 fetch 호출 대신 모킹된 데이터를 반환
  return mockTickets;
}

export async function fetchTicketById(id: string): Promise<Ticket | undefined> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockTickets.find(ticket => ticket.id === id);
}
```

이렇게 구현된 모킹 API 함수는 실제 컴포넌트에서 다음과 같이 사용할 수 있습니다:

```typescript
// app/tickets/page.tsx

import { fetchTickets } from '../../lib/api';

export default async function TicketsPage() {
  const tickets = await fetchTickets();

  return (
    <div>
      <h1>티켓 목록</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>{ticket.eventName} - {ticket.price}원</li>
        ))}
      </ul>
    </div>
  );
}
```

## 도메인 타입 참조

아래는 Qless 사용되는 주요 도메인 타입들의 간략한 설명입니다. 아래 타입들을 그대로 사용하거나 참고하여 개발할 수 있습니다.

### 사용자 관련

- `User`: 사용자 기본 정보 (이름, 이메일, 전화번호 등)
- `UserState`: 사용자 상태 (활성, 비활성 등)
- `UserLoginType`: 로그인 방식 (이메일, 소셜 로그인 등)

### 티켓 관련

- `Ticket`: 티켓 정보 (좌석, 가격, 상태 등)
- `TicketBundle`: 티켓 번들 정보
- `TicketLifecycleState`: 티켓 생명주기 상태
- `TicketProcessingStatus`: 티켓 처리 상태
- `TicketAction`: 티켓에 대한 액션 유형

### 이벤트 관련

- `Event`: 이벤트 정보 (제목, 날짜, 장소 등)
- `Facility`: 시설 정보
- `BoxOffice`: 박스오피스 정보

### 할인 관련

- `DiscountPolicy`: 할인 정책 정보
- `DiscountApplication`: 할인 신청 정보
- `DiscountDocument`: 할인 증빙 문서 정보
- `DiscountEligibility`: 할인 자격 정보

### 관리자 관련

- `Officer`: 관리자 정보

이 타입들은 `types/` 디렉토리에서 찾을 수 있으며, 프로젝트의 요구사항에 따라 수정하거나 확장할 수 있습니다.

## 주의사항

- Next.js의 App Router를 사용하여 페이지와 레이아웃을 구성해 주세요.
- 컴포넌트는 가능한 한 재사용 가능하게 설계해 주세요.
- TypeScript와 ESLint를 적극 활용하여 코드 품질을 유지해 주세요.
- 성능 최적화를 위해 적절한 데이터 페칭 전략을 사용해 주세요.

## 개발 가이드

- 서버 컴포넌트와 클라이언트 컴포넌트를 적절히 구분하여 사용합니다.
- 접근성(a11y)을 고려하여 개발합니다.
- 관리자 서비스의 경우 Shadcn/ui 컴포넌트를 활용하여 일관된 디자인 시스템을 구축합니다.

## 테스트

## 배포
