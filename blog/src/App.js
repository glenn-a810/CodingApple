import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css';

function App() {
  const [title, newTitle] = useState(['남자코트 추천', '강남 우동맛집', '리액트 독학'])
  const [likeCount, newLikeCount] = useState(0)
  // const posts = '강남 고기 맛집'

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={() => {newTitle(['여자코트 추천','강남 우동맛집','리액트 독학'])}} >제목변경</button>
      <div className='list'>
        <h3>{title[0]} <span onClick={() => { newLikeCount(likeCount+1) }} >👍</span> {likeCount} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
