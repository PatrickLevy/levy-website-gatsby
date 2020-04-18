import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const canvasWidth = () => (typeof window !== 'undefined' ? window.innerWidth - 40 : 200);
const canvasHeight = () => (typeof window !== 'undefined' ? window.innerHeight - 70 : 200);

const radiusOfShape = (shape) => (100)// (25 + 100 * Math.abs(Math.cos(shape.angle)))

const distanceBetweenTwoPoints = (shape1, shape2) => {
  const dx = shape2.x - shape1.x
  const dy = shape2.y - shape1.y
  return Math.sqrt(dx * dx + dy * dy)
}

class Component1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      angle: 0,
      animate: true,
      shape1: {
        angle: 30,
        x: 100,
        y: 325,
        xVelocity: -5,
        yVelocity: 8,
        color: '#F71E54'
      },
      shape2: {
        angle: 30,
        x: 500,
        y: 500,
        xVelocity: 5,
        yVelocity: 3,
        color: '#006699'
      }
    }
  }
  componentDidMount () {
    this.animate()
  }
  componentWillUnmount () {
    this.state = { animate: false }
  }

  animate () {
    if (this.state.animate) {
      let mainCanvas = document.querySelector("#myCanvas");
      let mainContext = mainCanvas.getContext("2d");

      // color in the background
      mainContext.fillStyle = "#EEEEEE";
      mainContext.fillRect(0, 0, canvasWidth(), canvasHeight());

      let requestAnimationFrame = window.requestAnimationFrame || 
                                window.mozRequestAnimationFrame || 
                                window.webkitRequestAnimationFrame || 
                                window.msRequestAnimationFrame;

      // clear the old canvas
      mainContext.clearRect(0, 0, canvasWidth(), canvasHeight());

      this.drawCircle(mainContext, 'shape1');
      this.drawCircle(mainContext, 'shape2');

      requestAnimationFrame(() => this.animate());
    }
    
  }
  
  drawCircle (mainContext, shapeId) {
    let shape = this.state[shapeId]

    // draw the circle
    mainContext.beginPath();

    let radius = radiusOfShape(shape);
    
    mainContext.arc(shape.x, shape.y, radius, 0, Math.PI * 2, false);
    mainContext.closePath();
    
    // color in the circle
    mainContext.fillStyle = shape.color;
    mainContext.fill();

    // update the shape for next time
    shape.angle = shape.angle += Math.PI / 640
    

    // Check X velocity 
    const shapeIsAtRightSide = (shape.x > 0 && canvasWidth() < (shape.x + radius))
    const shapeIsAtLeftSide = ((shape.x - radius) < 0)
    if (shapeIsAtRightSide && shape.xVelocity > 0) {
      shape.xVelocity = shape.xVelocity * -1
    } else if (shapeIsAtLeftSide && shape.xVelocity < 0) {
      shape.xVelocity = shape.xVelocity * -1
    }
    shape.x = shape.x + shape.xVelocity;

    // Check Y velocity and reverse it only if it as at an edge and the velocity hasn't been reversed yet
    const shapeIsAtBottom = (shape.y > 0 && canvasHeight() < (shape.y + radius))
    const shapeIsAtTop = ((shape.y - radius) < 0)
    if (shapeIsAtBottom && shape.yVelocity > 0) {
      shape.yVelocity = shape.yVelocity * -1
    } else if (shapeIsAtTop && shape.yVelocity < 0) {
      shape.yVelocity = shape.yVelocity * -1
    }
    shape.y = shape.y + shape.yVelocity;

    this.setState({ [shapeId]: shape })


    // Check if the two balls have collided
    const shape1 = this.state.shape1;
    const shape2 = this.state.shape2;
    const distanceBetweenCenters = distanceBetweenTwoPoints(shape1, shape2)
    if (distanceBetweenCenters < (radiusOfShape(shape1) + radiusOfShape(shape2))) {

        shape1.xVelocity = shape1.xVelocity * -1
        shape2.xVelocity = shape2.xVelocity * -1

        shape1.yVelocity = shape1.yVelocity * -1
        shape2.yVelocity = shape2.yVelocity * -1
      
      // If they have opposite directions (not reversed yet), reverse them
      // if (shape1.xVelocity * shape2.xVelocity < 0) {
      //   shape1.xVelocity = shape1.xVelocity * -1
      //   shape2.xVelocity = shape2.xVelocity * -1
      // }
      
      // if (shape1.yVelocity * shape2.yVelocity < 0) {
      //   shape1.yVelocity = shape1.yVelocity * -1
      //   shape2.yVelocity = shape2.yVelocity * -1
      // }
      

      this.setState({ shape1, shape2 })
    }

  }
  render () {
    if (typeof window == 'undefined' ) {
      return null;
    }
    return (
      <div>
        <canvas id="myCanvas" height={canvasHeight()} width={canvasWidth()}></canvas>
    </div>
    )
  }
}

export default Component1