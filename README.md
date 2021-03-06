# 가상자산 조회 서비스

가상자산 시세목록을 조회하고 원하는 코인을 북마크로 등록 할 수 있는 React 웹 애플리케이션

## 프로젝트 실행

```html
1. npm install or yarn install 2. npm start or yarn start
```

## 프로젝트 구조

- 관리하기 쉽고 컴포넌트의 재사용성을 높이기 위함

  ### 1. Ducks패턴 사용

  - 리덕스의 액션, 액션함수, 리듀서를 하나의 파일에서 관리

  ### 2. 프리젠테이셔널 컴포넌트와 컨테이너 컴포넌트 분리

  - 프리젠테이셔널 컴포넌트(components) : 리덕스 스토어에 직접 접근하지 않고 필요한 값 또는 함수를 props로만 받아와서 사용
  - 컨테이너 컴포넌트(containers) : 리덕스 스토어의 상태 조회. 액션 디스패치를 사용

## styled-component 라이브러리

- component단위로 스타일링 가능
- 조건부 스타일링 가능
- 확장 스타일링 가능

## react-icons 라이브러리

- 손쉽게 icon 사용 가능

## react-loading 라이브러리

- 손쉽게 로딩 애니메이션 사용 가능

## react-router-dom v6 사용

- Link 컴포넌트를 사용해 검색탭 즐겨찾기탭 이동
- 중첩된 라우트와 Outlet컴포넌트를 이용해 페이지에 공통으로 보여줘야 하는 [헤더]/ [하단탭] 을 공통 레이아웃 컴포넌트 구현

## react-redux 라이브러리

- 손쉽게 로딩 애니메이션 사용 가능

## LocalStorage 사용

- 북마크 체크한 코인을 저장하기위해 사용
- 다음 접속시에도 북마크정보가 남아있도록 구현
