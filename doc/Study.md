# ReactStudy

>  React ToyProject로 ShoppingMall을 만들면서 공부하는 내용 markDown 기록
<br>[MarkDown 문법 정리](https://simhyejin.github.io/2016/06/30/Markdown-syntax/)
## 0. VSCode <-> Github 연동하기
1. Github Repository 생성, 생성시 branch를 master로 설정
2. VS Code React PJT 생성
3. git remote add origin 프로젝트 주소
4. 프로젝트 수정 후, FirstCommit하기
5. git push origin master
<br>[세부 설명](https://velog.io/@blair-lee/VSCode%EC%97%90%EC%84%9C-Github-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%A7%B1%EC%89%AC%EC%9B%80%E3%85%8B%E3%85%8B)

## 1. ReactBootstrap 적용하기
* Bootstrap 을 적용하면 디자인을 편하게 할 수 있음
* 리엑트 전용 Bootstrap 존재
* [ReactBootStarp](https://react-bootstrap.github.io/)

## 2. 파일 나누기
* import, export
> export
* 중요한 변수를 export하고 싶을 땐 export default라는 문법을 쓰시고 우측에 배출을 원하는 변수를 담아줄
* 변수명, 함수명, 자료형 전부 배출가능
* 파일마다 export default 라는 키워드는 하나만 사용가능
* import 변수 from '경로'
> import
* import 변수명 from '경로' 불러와서 변수명.으로 데이터 바인딩해서 사용하기

## 3. Component
* class , function
> 클래스 컴포넌트 작성법
* class로 정의하고 render() 함수에서 JSX를 반환한다.
~~~
java

import React, {Component} from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}

export default App;
~~~

>> 특징
*  state, lifeCycle 관련 기능사용 가능하다.
*  메모리 자원을 함수 컴포넌트보다 조금 더 사용한다.
*  임의 메서드를 정의할 수 있다.

> 함수 컴포넌트 작성법
* function 으로 정의하고 return 문에 JSX로 렌더링한다.
~~~
java

import React from 'react';
import './App.css';

function App() {
  const name = 'react';
  return <div className = "react">{name}</div>
}

export default App;
~~~
>> 특징
*  state, lifeCycle 관련 기능사용 불가능 [Hook을 통해 해결 됨]
*  메모리 자원을 함수 컴포넌트보다 덜 사용한다.
*  컴포넌트 선언이 편하다.

***

> 결론
* 클래스 컴포넌트의 경우 state 기능, lifecycle 기능 사용, 임의의 메소드 정의가 가능하며 render() 함수가 꼭 필요하고 , 그 안에 JSX 를 반환해야 합니다. 
* 함수 컴포넌트는 state 기능과 lifecycle 을 사용할 수 없었는데 이후 react hooks가 도입되면서 해결되었다. <br>
** 리액트 레퍼런스에서는 함수형 컴포넌트와 Hooks를 사용하도록 권장하고 있다. **