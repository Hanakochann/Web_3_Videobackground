import React from 'react';
import img1 from './assets/skt.png';
import img2 from './assets/rank.png';
import video from './assets/videoplayback.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <div className="logo-header">
        <img src={img1} className="skt" alt="skt" height="100" width="100"/>
        </div>
        <ul>
            <li>
              FEATURES
            </li>
            <li>
               DEMOS
            </li>
            <li>
              DOCUMENTATION
            </li>          
            <li>
             SUPPORT
            </li>
            <li>
              BUY NOW
            </li>
          </ul>
      </header>
      <div className="video">
          <video autoPlay loop muted src={video} type="videoplayback/mp4"/>
        </div>
      <body className="App-body">
      <div className="color-overlay"></div>
        <div className="text-body">
          TAKAHASHI HAKAKO
        </div>
        <div className="logo-body">
        <img src={img2} className="rank" alt="rank" height="300" width="300"/>
        </div>
        <div className="text-body">
          #1 Hoa cute hihi haha huhu =)))))))
        </div>
          <div className="button-body">
          <div>
            <button className="button-body1">VIEW ALL DEMOS</button>
          </div>
          <div>
            <button className="button-body2">BUY NEWSPAPER</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
