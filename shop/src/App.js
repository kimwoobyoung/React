import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Detail from './pages/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'



function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [pageIdx, setPageIdx] = useState(2);
  let [count, setCount] = useState(0);
  let [loding, setLoding] = useState(true);

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
                return ( <Card shoes={shoes[i]} i={i} />  )
              })
            }
            </div>
          </div>
          <Button onClick={()=>{
            setLoding(alert('로딩중 입니다.'));
            setCount(count+1);
            if (count > 1) {
              alert('마지막 상품 입니다.');
            }
            axios.get('https://codingapple1.github.io/shop/data'+ (pageIdx) + '.json').then((result)=>{
              setShoes([...shoes, ...result.data]);
              setPageIdx(pageIdx + 1);
              setLoding(false);
              }).catch(()=>{
                console.log('실패')
              })

              axios.post('/asdas', {name : 'kim'})
              Promise.all([ axios.get('/url1'), axios.get('/url2') ]).then(()=>{}) //url1, rul2 둘다 성공했을때 then 실행
              

          }}>더보기</Button>
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
