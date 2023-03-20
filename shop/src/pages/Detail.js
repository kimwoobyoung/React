import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

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
  </div>
  )
  }


  export default Detail;