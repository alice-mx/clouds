import React, {Component} from 'react';
import style from './Cloud.css'

class Cloud extends Component {

  generatePlume(width, index) {
    var r = parseInt(index*4+Math.random()*4-2);
    width += r+Math.random()*4-2;
    var cx = (parseInt(width)+this.state.offset)+"%";
    var cy = parseInt(90-r)+"%";
    r =  r+"%";
    return(<circle cx={cx} cy={cy} r={r}/>);

  }

  constructor(props) {

    super(props);

    this.state = {
      offset : 5,
      yOffset : Math.random()*10
    }
    var plumes = [];
    var width = 2;

    var leftPlumeCount = Math.random()*4 + 1
    for(var i = 0; i < leftPlumeCount ; i++) {
      var plume = this.generatePlume(width, i);
      width += parseFloat(plume.props.r);
      plumes.push(plume);
    }

    var rightPlumeCount = Math.random()*4+1;
    for(var i = rightPlumeCount; i >= 0; i--) {
      var plume = this.generatePlume(width, i);
      width += parseFloat(plume.props.r);
      plumes.push(plume);
    }



    this.state = {
      plumes: plumes,
      id: parseInt(Math.random()*10000000),
      style: {
        top: (45+parseInt(this.props.layer))+"%",
        animationDuration:  (60+Math.random()*120)+"s",
        animationDelay : "-"+(Math.random()*180)+"s",
        animationDirection : (Math.random() > 0.8 ? "reverse" : "initial")
      }
    }
  }



  render() {

    return(
      <div class="layer">
          <svg className="Cloud" style={this.state.style}>
            <defs filter="url(#f1)" >
              <clipPath id={`shape-${this.state.id}`}>
                {this.state.plumes}
              </clipPath>
            </defs>
            <g>
              <rect style={{transform:"scale(0.99)"}} width="100%" height="100%" fill="white" clip-path={`url(#shape-${this.state.id})`}/>
            </g>
            <g filter="url(#f1)" >
              <rect  width="100%" height="100%" fill="#d7abae" clip-path={`url(#shape-${this.state.id})`}/>
            </g>
            <g filter="url(#f1)" >
              <rect style={{transform:"scale(0.99)"}}  width="100%" height="100%" opacity="0.9" fill="url(#grad1)" clip-path={`url(#shape-${this.state.id})`}/>
            </g>
            </svg>
      </div>
    );

  }
}

export default Cloud;
