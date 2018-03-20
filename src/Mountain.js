import React, {Component} from 'react';
import style from './Mountain.css';


class Mountain extends Component {

  constructor(props) {
    super(props);
    var style = {
      left : Math.random()*50-25+"%",
      transform : "scale("+(Math.random()+0.25)+")"
    }
    this.state = {
      style: style
    }
  }

  render() {
    return (
      <div className="layer">
        <svg style={this.state.style} class="Mountain"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 135 35"
           >
          <g>
            <path fill="url(#grad2)"
            d={`m 0,35
                c 0,0
                20,0
                40,-19
                25,-19
                25,-19
                50,0
                20,19
                40,19
                40,19 Z`}
               />
          </g>
        </svg>
      </div>
    );
  }
}
export default Mountain;
