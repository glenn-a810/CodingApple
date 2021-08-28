import React from 'react'
import logo from './logo.svg'
import './App.css';

function App() {
  let posts = '강남 고기 맛집'

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <p>{posts}</p>
    </div>
  );
}

export default App;
