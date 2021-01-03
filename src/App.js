import React, {useEffect, useRef} from 'react'
import logo from './logo.svg';
import './App.css';

import {TweenMax, Power3} from 'gsap';


function App() {

  let imageItem = useRef(null);
  let textAnimation = useRef(null);

  useEffect(() => {
    console.log(imageItem);
    TweenMax.to(
      imageItem,
      .8,
      {
        opacity: 1,
        y: -25,
        ease: Power3.easeOut
      }
    )

    TweenMax.to(
      textAnimation,
      .8,
      {
        opacity: 1,
        y: -25,
        delay: .3,
        ease: Power3.easeOut
      }

    )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img 
        ref = {el => {imageItem = el}}
        src={logo} className="App-logo" alt="logo" />
        <p ref = {el => {textAnimation = el;}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
