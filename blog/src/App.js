import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학', '성수동']);
  let [title, setTitle] = useState(0);
  let [따봉, 따봉변경] = useState([0, 0, 0, 0]);
  let [modal, setmodal] = useState(false);
  let [입력값, 입력값변경] = useState('');

  // [1, 2, 3].map(function(a){
  //   return '123';
  // })

  function OrderTitle() {
    let newOrder = [...글제목].sort();
    글제목변경(newOrder);   
  }

  function 제목버튼누르면상세페이지() {
    if(modal === true) {
      setmodal(false);
    }
    else{
      setmodal(true);
    }
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {/* <div className="list">
        <button onClick={OrderTitle}>글정렬</button>
        <h4 onClick={ ()=> {setmodal(!modal)} }> {글제목[0]} </h4>
        <p>2월 17일 발행</p>
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}> 수정버튼 </button>
      </div> */}

      {/* <div className="list">
        <h4> {글제목[1]} <span onClick={() => { 따봉변경(따봉 + 1) }} >👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4> {글제목[2]} <span onClick={() => { 따봉변경(따봉 + 1) }} >👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={ ()=> {setmodal(!modal); setTitle(i)} } > { 글제목[i] } 
              <span onClick={ (e)=> {
                e.stopPropagation(); //이벤트 버블링 막아줌
                let copy = [...따봉];
                copy[i] = copy[i]+1;
                따봉변경(copy);
              }}>👍</span> {따봉[i]}</h4>
              <p>2월 17일 발행</p>
              <button onClick={ ()=> {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }
      
      <input onChange={(e)=> {입력값변경(e.target.value)}} type="text"/>
      <button onClick={(e)=> {
        if(e.target.value == ''){
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }
      }}>등록</button>

      {
        modal === true ? <Component title={title} 글제목변경={글제목변경} 글제목={글제목} /> 
        : null
       
      }

    </div>
  );
}


function Component(props) {

  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ ()=> {
        props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학', '성수동']);
      } }>글수정</button>
    </div>
  )
}



export default App;
