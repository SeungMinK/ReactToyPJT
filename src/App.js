import logo from './logo.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import food1 from './food1.JPG';
import { useState } from 'react';
import menuData from './dataMenu';

/*



*/


function App() {

  let [menu,menuChange] = useState(menuData);

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
       
      <hr/>
        <div className="container">
          <h1>Menu</h1>
          <div className="row">
            <div className="col-md-4"><img src ={food1} width="100%"/> 
            <h4>{menu[0].title} </h4>
            <h4>{menu[0].price}</h4>
            </div>

            <div className="col-md-4"><img src ={food1}width="100%"/> 
            <h4>{menu[1].title}</h4>
            <h4>{menu[1].price}</h4>
            </div>

            <div className="col-md-4"><img src ={food1} width="100%"/> 
            <h4>{menu[2].title}</h4>
            <h4>{menu[2].price}</h4>
            </div>
          
          </div>

       

      </div>


    </>
  );
    function menuComponnent(props){
      
        return (
        <>
        <div>
        <div className="col-md-4"><img src ={food1} width="100%"/> 
            <h4>{menu[0].title} </h4>
            <h4>{menu[0].price}</h4>
        </div>

        </div>
        </>
        )
    }
}


export default App;