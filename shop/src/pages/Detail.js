import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import {Nav} from 'react-bootstrap'

// let YellowBtn = styled.button`
//   background : ${  props => props.bg };
//   color : ${  props => props.bg == 'blue' ? 'white' : 'blakc' };
//   padding : 10px;
// `
// let NewBtn = styled.button(YellowBtn)`  // YellowBtn css 복사
// `

// let Box = styled.div`
//   background : grey;
//   padding : 20px
// `

function Detail(props) {
  // html 먼저 렌더링 후에 useEffect 실행함 즉 시간이 오래 걸리는 작업을 이 함수에 넣음
  let [ alert2, setAlert] = useState(true);
  let [ inputData, setInputData] = useState('');
  let [ tap, setTap ] = useState(0);

  useEffect( ()=> {  
  let timer = setTimeout(()=>{ setAlert(false) }, 2000);
  
  return ()=> { clearTimeout(timer) }

  }, [ alert2] );

  useEffect( ()=> {
    if (isNaN(inputData) == true) {
      alert("숫자만 입력하세요");
    }
  }, [inputData])


  let {id} = useParams();
  let 찾은상품 = props.shoes.find((a) => a.id == id)

    return (
    <div className="container">
      
      {
        alert2 == true ? (
      <div className="alert alert-warning">
        2초이내 구매시 할인
      </div>
      ) : null
      }

    <div className="row">
      <div className="col-md-6">
        <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
      </div>
      <div className="col-md-6">
        
        <input onChange={ (e)=>{ setInputData(e.target.value)}}></input>
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>

    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=>{setTap(0)}} eventKey="ling0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTap(1)}} eventKey="ling1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTap(2)}} eventKey="ling2">버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent tap={tap}/>


  </div>
  )
  }

  function TabContent({tap}) {
  // if (tap == 0){
  //   return <div>내용0</div>
  // } else if (tap == 1){
  //   return <div>내용1</div>
  // } else if (tap == 2){
  //   return <div>내용2</div>
  // }
  return [<div>내용0</div>, <div>내용1</div>, <div>내용3</div>][tap]
}


  export default Detail;