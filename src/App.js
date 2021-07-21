import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import food1 from './food1.JPG';
import food2 from './food2.png';
import food3 from './food3.png';
import { useState } from 'react';
import menuData from './dataMenu';

/*



*/


function App() {

  let [menu, menuChange] = useState(menuData);
  let [foodImg,foodImgChange] = useState([food1,food2,food3]);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MinHouse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="Jumbotron">

        <div className="title"> <h1>Minhouse</h1> </div>
        <div className="content">이태리 양식을 전문으로 하는 가게입니다.</div>
      </div>
      {/*
        Component로 만들어 첨부하기
        Component에 데이터 바인당 완료하기
        Component를 반복문 돌리기
      
       */}

      <hr />
      <div className="container">

        <h1>Menu</h1>
        <div className="row">


          {
            menu.map(function (data, index) {//map에서 두번째 파라미터는 반복횟수를 가르키는 변수가 됨
              return (
                <MenuCard menu2={menu[index]}index={index}foodImg={foodImg}></MenuCard>
              )
            }
            )
          }
        </div>



      </div>


    </>
  );

}


function MenuCard(props) {
  return (

    <div className="col-md-4"><img src={props.foodImg[props.index]} width="100%" />
      <h4>{props.menu2.title} </h4>
      <h4>{props.menu2.price}</h4>

    </div>

  )

}


export default App;