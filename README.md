# vite & react.js & typescript

## 기본 버전정보

- nodejs v19
- npm v9
- vite v3
- typescript v4
- eslint v8
- reactjs v18

## 폴더구조

```
├─ .github - Github 설정
├─ .vscode - VS Code 설정
├─ public - 빌드시 그대로 복사되는 정적 파일들 (style, image, fonts, svg...)
├─ src
| ├─ @types - typescript type 선언
| ├─ assets - 빌드시 참조되는 정적 파일들
| ├─ components
| ├─ containers
| └─ layouts
```

## 시작하기

### Node & NPM 설치

```
$ sudo brew install node

$ sudo npm install -g npm
```

### 애플리케이션 설치

```
$ npm install
```

### 애플리케이션 실행

```
$ npm run dev
$ npm run build
```

### 환경변수

아래와 같은 순서로 파일을 읽는 다. 파일이 없으면 무시된다.

- .env
- .env.local

`.env.local` 파일은 개인 로컬에서만 사용할 환경변수를 선언한다.

운영 환경의 변수를 읽기 위해 아래와 같이 실행한다.

```
$ npm run dev -m prod
```
