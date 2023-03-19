import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Detail from './pages/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'



function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ ()=> { navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={ ()=> { navigate('/detail/0') }}>상세 페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
            {
              shoes.map(function(a, i) {
                return ( <Card shoes={shoes[i]} i={i}/> )
              })
            }
            </div>
          </div>
          </>
        } />
        
        <Route path='/detail/:id' element={ <Detail shoes={shoes} />} />
        <Route path='/event' element={ <Event/> } >
         <Route path='one' element={ <p>첫 주문시 양배추즙 서비스</p> } />
         <Route path='two' element={ <p>생일기념 쿠폰받기</p> } />
        </Route>
        <Route path='*' element={ <div>없는 페이지</div> } />
      </Routes>

      
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%"alt=""/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  );
}

export default App;
