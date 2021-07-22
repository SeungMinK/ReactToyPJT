# React Toy PJT <br>
ShoppingMall 만들기


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
> 외부에서 파일 import하기
* 외부파일에서 Component를 만든 경우 export default 내보낼 함수or변수명 을 꼭 써줘야됨
~~~
function temp(){

    return(
        <div> temp </div>
    )

};

export default temp
~~~

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
> 특징
*  state, lifeCycle 관련 기능사용 불가능 [Hook을 통해 해결 됨]
*  메모리 자원을 함수 컴포넌트보다 덜 사용한다.
*  컴포넌트 선언이 편하다.

***

> 결론
* 클래스 컴포넌트의 경우 state 기능, lifecycle 기능 사용, 임의의 메소드 정의가 가능하며 render() 함수가 꼭 필요하고 , 그 안에 JSX 를 반환해야 합니다. 
* 함수 컴포넌트는 state 기능과 lifecycle 을 사용할 수 없었는데 이후 react hooks가 도입되면서 해결되었다. <br>
* 리액트 레퍼런스에서는 함수형 컴포넌트와 Hooks를 사용하도록 권장하고 있다.


> props
* 외부에 Component 선언시 데이터는 상위 -> 하위로 흘러야함
* State를 만들때 필요로 하는 Component 중 최상위 Component에 만드는것이 가장 바람직함


## 4. Routue
* SPA 에서 여러가지 페이지를 만들고 싶을때 사용
> 설치
* 터미널에서 react-router-dom 라이브러리를 설치하여 사용
~~~
npm install react-router-dom
~~~
* index.js 설정
~~~
import {BrowserRouter,HashRouter} from 'react-router-dom';
.
.
.
<BrowserRouter>
<App/>
</BrowseRouter>
.
.
.
~~~
> HashRouter VS BrowserRouter
* HashRouter : URL 맨 뒤에 /#/ 이 붙은채로 시작
* BrowserRouter : URL 맨 뒤에 /link 으로 시작
* HashRouter 사용 이유 : URL에 #을 통해 요청되는것은 서버에서 요청을 받아주지않음. 즉, URL을 통해 서버에게 이상한 페이지를 요청하지 않기 위해 사용

> 사용
~~~
<Route path="/경로" component={componentName}> </Rotue>
~~~
or
~~~
<Route path="/경로"> <Component/> </Route>
~~~

> 특징
* HTML 내부의 네용을 갈아치워서 다른 페이지 처럼 흉내내는것일 뿐, 각각 페이지 마다 다른 HTML을 보여주는것이 아님.
* Path의 경로가 포함될 경우 특별한 설정을 하지 않으면 모든 Component가 보임
* exact 를 사용할 경우 경로가 정확히 일치할 때만 Component를 보여줌
~~~
<Route exact path="/home">
~~~

> Link
* 'react-router-dom'에서 import 해서 사용할 수 있는 Component
* 페이지를 이동시킬 수 있음
* '<a>' 태그를 만드는것과 유사함
~~~
<Link to="/경로">home</Link>
~~~

> useHistory()
* Link 처럼 페이지를 이동 시킬 수 있는 hook
* 'react-router-dom'에서 import 해서 사용

~~~
let history = useHistory();
~~~

* 페이지 이동내역 + 다양한 함수가 저장된 objcet{} 자료 형태
~~~
   <button onClick = {()=>{
                history.goBack();//뒤로가기
                history.push('/')//원하는 경로로 이동
            }}>뒤로가기</button>
~~~

> Switch
* 매치되는 Route들을 전부 보여주지말고 한번에 하나의 Route만 보고싶을때 사용(맨 위에꺼 부터 보임)
~~~
    <Switch>
      
      <Route path="/detail/:id">
        <Detail menu={menu}/>
      </Route>
      <Route path="/:id">
            <div> 아무거나 적었을때 보여주는 페이지</div>
      </Route>
     
      </Switch>     

~~~

> useParams
* URL에 있는 파라미터를 사용할 수 있는 hook
* 'react-router-dom'에서 import 해서 사용
~~~
let {id} = useParams();
~~~
* URL에 적혀있는 모든 파라미터를 {파라미터1,파라미터2...} 으로 저장해주는 함수(hook)