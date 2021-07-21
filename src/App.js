import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import food1 from './food1.JPG';
import food2 from './food2.png';
import food3 from './food3.png';
import { useState } from 'react';
import menuData from './dataMenu';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

/*



*/


function App() {
  /*
  중요한 데이터들은 최상위 컴퍼넌트인 App에 저장해놓고 상위컴퍼넌트에서 하위컴퍼넌트로 props로 보내주는 방식으로 해야함
  */

  let [menu, menuChange] = useState(menuData);
  let [foodImg, foodImgChange] = useState([food1, food2, food3]);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MinHouse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Route exact path="/">


        <div className="Jumbotron">

          <div className="title"> <h1>Minhouse</h1> </div>
          <div className="content">이태리 양식을 전문으로 하는 가게입니다.</div>
        </div>
        <hr />
        <div className="container">

          <h1>Menu</h1>
          <div className="row">


            {
              menu.map(function (data, index) {//map에서 두번째 파라미터는 반복횟수를 가르키는 변수가 됨
                return (
                  <MenuCard menu2={menu[index]} index={index} foodImg={foodImg}></MenuCard>
                )
              }
              )
            }
          </div>



        </div>

      </Route>
      
      <Switch>
      
      <Route path="/detail/:id">
        <Detail menu={menu}/>
      </Route>
      <Route path="/:id">
            <div> 아무거나 적었을때 보여주는 페이지</div>
      </Route>
     
      </Switch>     

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