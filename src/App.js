import React, { Component } from 'react';
import Cloud from './Cloud.js';
import style from './App.css';
import Mountain from './Mountain.js';


class App extends Component {

  constructor(props) {
  super(props);


  var clouds = this.drawClouds();
  var layers = clouds;
  layers[1] = <Mountain/>;

  layers[4] = <Mountain/>;

  layers[25] = <Mountain/>;

  this.state = {
    position: 0,
    counter: 1,
    isDay : true,
    layers : layers
    }
  }

  drawClouds() {
    var clouds = [];
    for(var i = 0; i < 100; i++) {
      clouds.push(<Cloud layer={i}/>);
    }
    return clouds;
  }




  render() {
    return (
      <div className="App">

        <div className="sky">
          <svg style={{width:"0", height:"0"}}>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style={{stopColor:"#ffb683", stopOpacity:"0.5"}} />
                <stop offset="50%" style={{stopColor:"#ffeee2",stopOpacity:"1"}} />
                <stop offset="100%" style={{stopColor:"#ffeee2",stopOpacity:"1"}} />
              </linearGradient>

              <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:"#c5a7bc",stopOpacity:"1"}}/>
                <stop offset="150%" style={{stopColor:"#a2a0d7",stopOpacity:"1"}}/>
              </linearGradient>

              <filter id="f1" x="0" y="0">
               <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
             </filter>

              <mask id="gradient">
                <rect x="0" y="0" width="210" height="210" fill="url(#grad1)"  />
              </mask>
            </defs>
          </svg>
          {this.state.layers}
        </div>
      </div>


    );
  }
}

export default App;
