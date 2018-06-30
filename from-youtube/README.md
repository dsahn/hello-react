# hello-react


## 누구든지 하는 리액트
https://www.youtube.com/watch?v=fT9iFFAt60E&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH

## 환경설정
https://velopert.com/814

## 코드샌드박스
https://codesandbox.io/


jsfiddle 사용하면 웹에서 바로 가능하다

babel? 알아만 두기

jsx 문법? html 스럽지만 js로 변환됨

jsx 참고문서 : https://react-anyone.vlpt.us/03.html
문법적인거 참고하면 될듯

let https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let
const https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const
arrow func https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98

variable scope 는 함수 단위라고함 <--> let : block 단위로 정해짐, block 안에서만 let 해줘도 된다. var는 잘 안쓴다 이제..

삼항연산자 사용가능함

모든 컴포넌트는 render 함수를 작성해야함. tostring 같은 느낌

여러 개의 export는 안된다..!

그래서 jsx가 정확이 뭔데? react를 import 해야한다고함


### style
- class는 className이라고 기술함
- import 시켜서 css 적용

### props, state
- https://react-anyone.vlpt.us/04.html
- props 
  - 자식에게 상속가능한 값
- 비구조화 할당 구문 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  - 매우 편해보인다. 익숙해지면 좋을듯
- class field 문법 : https://tc39.github.io/proposal-class-fields/

### lifecycle api
- mounting, updating, unmounting
  - mounting : 브라우저상에 컴포넌트가 나타나는것
  - updating : 컴포넌트의 props, state 가 바뀌었을 때
  - unmmounting : 컴포넌트가 브라우저 상에서 사라질 때
이미지 출처 : https://twitter.com/dan_abramov/status/981712092611989509
- shouldComponentUpdate : 최적화용
- getSnapshotBeforeUpdate : 렌더링 결과가 브라우저에 반영되기 직전에 호출되는 함수
