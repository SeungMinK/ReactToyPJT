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
* mport 변수명 from '경로' 불러와서 변수명.으로 데이터 바인딩해서 사용하기
