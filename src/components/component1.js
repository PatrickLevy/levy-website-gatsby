import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

class Component1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = { angle: 0, animate: true }
  }
  componentDidMount () {
    this.drawCircle()
    // this.startAnimation()
    
  }
  componentWillUnmount () {
    this.state = { animate: false }

    // call window.cancelAnimationFrame(id) with the id on the ?
  }

  // startAnimation () {
  //   console.log('this.state', this.state)
  //   if (this.state.animate) {
  //     var mainCanvas = document.querySelector("#myCanvas");
  //     var mainContext = mainCanvas.getContext("2d");
      
  //     var canvasWidth = mainCanvas.width;
  //     var canvasHeight = mainCanvas.height;

  //     var requestAnimationFrame = window.requestAnimationFrame || 
  //                             window.mozRequestAnimationFrame || 
  //                             window.webkitRequestAnimationFrame || 
  //                             window.msRequestAnimationFrame;

  //     // color in the background
  //     mainContext.fillStyle = "#EEEEEE";
  //     mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

  //     this.drawCircle()

  //     // requestAnimationFrame(() => this.drawCircle())
  //   }
  // }

  drawCircle () {
    if (this.state.animate) {
      var mainCanvas = document.querySelector("#myCanvas");
      var mainContext = mainCanvas.getContext("2d");
      var canvasWidth = mainCanvas.width;
      var canvasHeight = mainCanvas.height;

      // color in the background
      mainContext.fillStyle = "#EEEEEE";
      mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

      var requestAnimationFrame = window.requestAnimationFrame || 
                                window.mozRequestAnimationFrame || 
                                window.webkitRequestAnimationFrame || 
                                window.msRequestAnimationFrame;
      
      let angle = this.state.angle

      // clear the old circle
      mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // draw the circle
      mainContext.beginPath();

      var radius = 25 + 150 * Math.abs(Math.cos(this.state.angle));
      
      mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
      mainContext.closePath();
      
      // color in the circle
      mainContext.fillStyle = "#006699";
      mainContext.fill();

      this.setState({ angle: angle += Math.PI / 64 });

      requestAnimationFrame(() => this.drawCircle())
    }
    
  }
  render () {
    return (
      <div>
      <SEO title="Page two" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <canvas id="myCanvas" height="450" width="450"></canvas>
      </div>
    </div>
    )
  }
}

export default Component1