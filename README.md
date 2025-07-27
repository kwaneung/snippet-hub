# SnippetHub

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## 프로젝트 개요

SnippetHub는 회사에서 새로운 기술을 적용하기 전 테스트베드 및 POC(Proof of Concept)를 위한 개인 레포지토리입니다.

### 목적

- 새로운 기술 스택의 검증 및 테스트
- 마이크로프론트엔드 아키텍처 구현
- 모듈 페더레이션을 통한 애플리케이션 분리
- Nx 모노레포를 활용한 효율적인 개발 환경 구축

## 아키텍처 계획

### 애플리케이션 구조

```
snippet-hub/
├── apps/
│   ├── main-web/          # 호스트 애플리케이션
│   ├── membership-web/    # 멤버십 관련 리모트 앱
│   └── shop-web/         # 쇼핑 관련 리모트 앱
├── libs/
│   ├── shared/
│   │   ├── ui/           # 공통 UI 컴포넌트 (presentational)
│   │   ├── utils/        # 공통 유틸리티 함수
│   │   └── constants/    # 공통 상수 및 설정
│   ├── types/            # 공통 타입 정의
│   ├── federation/       # 모듈 페더레이션 설정
│   ├── feature/
│   │   ├── membership/   # 멤버십 관련 비즈니스 로직
│   │   └── shop/        # 쇼핑 관련 비즈니스 로직
│   └── data-access/      # API 연동 및 상태 관리
└── tools/                # 개발 도구 및 스크립트
```

### 모듈 페더레이션 구성

- **호스트**: `main-web` - 메인 애플리케이션으로 다른 리모트 앱들을 로드
- **리모트**:
  - `membership-web` - 멤버십 관련 기능
  - `shop-web` - 쇼핑 관련 기능

### 공통 라이브러리 (Nx 베스트 프랙티스)

`apps` 외부에 Nx 라이브러리로 구성:

#### 라이브러리 타입별 분류

- **UI 라이브러리** (`shared/ui`): 순수 프레젠테이션 컴포넌트
- **유틸리티 라이브러리** (`shared/utils`, `shared/constants`): 재사용 가능한 유틸리티 함수 및 상수
- **타입 라이브러리** (`types`): 공통 타입 정의 및 인터페이스
- **피처 라이브러리** (`feature/*`): 특정 비즈니스 도메인별 로직
- **데이터 액세스 라이브러리** (`data-access`): API 연동 및 상태 관리
- **설정 라이브러리** (`federation`): 모듈 페더레이션 설정

## 기술 스택

- **모노레포**: Nx
- **프레임워크**: Next.js
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **테스팅**: Jest, Playwright
- **린팅**: ESLint
- **패키지 매니저**: pnpm

## 개발 가이드

### 애플리케이션 실행

개발 서버 실행:

```sh
pnpm nx dev main-web
```

프로덕션 빌드:

```sh
pnpm nx build main-web
```

### 새 애플리케이션 추가

새 Next.js 애플리케이션 생성:

```sh
pnpm nx g @nx/next:app <app-name>
```

새 라이브러리 생성:

```sh
pnpm nx g @nx/react:lib <lib-name>
```

### 프로젝트 정보 확인

사용 가능한 타겟 확인:

```sh
pnpm nx show project main-web
```

프로젝트 그래프 시각화:

```sh
pnpm nx graph
```

## 개발 워크플로우 (Nx 베스트 프랙티스)

### 라이브러리 우선 개발

1. **타입 정의** (`libs/types`): 공통 인터페이스 및 타입 정의
2. **유틸리티 개발** (`libs/shared/utils`): 재사용 가능한 함수 및 상수
3. **UI 컴포넌트** (`libs/shared/ui`): 순수 프레젠테이션 컴포넌트
4. **데이터 액세스** (`libs/data-access`): API 연동 및 상태 관리
5. **피처 로직** (`libs/feature/*`): 비즈니스 도메인별 로직

### 애플리케이션 개발

6. **리모트 앱 개발**: 각 도메인별 독립적인 애플리케이션 개발
7. **호스트 앱 통합**: 모듈 페더레이션을 통한 앱 통합
8. **테스트 및 검증**: 각 단계별 단위 및 통합 테스트 수행

### 의존성 규칙

- UI 라이브러리는 다른 라이브러리에 의존하지 않음
- 피처 라이브러리는 UI, 데이터 액세스, 유틸리티 라이브러리에 의존 가능
- 애플리케이션은 모든 라이브러리에 의존 가능

## 유용한 링크

- [Nx 문서](https://nx.dev)
- [Next.js 모듈 페더레이션](https://nextjs.org/docs/advanced-features/compiler#module-federation)
- [Nx 플러그인 레지스트리](https://nx.dev/plugin-registry)

## 커뮤니티

Nx 커뮤니티에 참여하세요:

- [Discord](https://go.nx.dev/community)
- [X (Twitter)](https://twitter.com/nxdevtools)
- [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube](https://www.youtube.com/@nxdevtools)
- [블로그](https://nx.dev/blog)
