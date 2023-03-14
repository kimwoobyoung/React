import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let posts = '강남 우동 맛집';
  let [ 따봉, 따봉변경 ] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
       <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 }</h4>
        <p>2월 17일 발행</p>
        <button onClick={ ()=>{ 
       글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학'])
    } }> 수정버튼 </button>
      </div>
      <div className="list">
      <h4> { 글제목[1] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4> { 글제목[2] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
