# 컴포넌트의 라이프사이클

## 컴포넌트 생성과 dom에 마운트(추가)

컴포넌트 생성 후 dom에 마우늩 될 때 아래 순서로 메서드가 호출됨

- constructor(props) : 객체 생성시
- componentWillMount() : mount 되기 직전
- render() : 컴포넌트가 랜더링될때
- componentDidMount() : 컴포넌트가 마운트 된 직후

## 컴포넌트 업데이트

- componentWillReceiveProps(nextProps) : 프로퍼티가 변경될 때
- shouldComponentUpdate(nextProps, nextState) : 컴포넌트가 외관을 변경해도
  좋을지 판단할 때
- componentWillUpdate() : 업데이트 되기 직전
- render() : 렌더링 될 때
- componentDidUpdate() 

- componentWillReceiveProps() 내부에서 setState() 호출해 컴포넌트 상태를
  변경할 수 있음. 다른 곳에서 사용하면 재귀적으로 이벤트 발생함

## dom 에서 언마운트

- componentWillUnmount()
