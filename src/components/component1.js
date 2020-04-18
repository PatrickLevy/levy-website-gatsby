import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
const runningTime = 5000;
const stopAnimationTime = 20000;
const canvasWidth = () => (typeof window !== 'undefined' ? window.innerWidth - 40 : 200);
const canvasHeight = () => (typeof window !== 'undefined' ? window.innerHeight - 70 : 200);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const radiusOfShape = (shape, startTime = 0) => {
  const currentTime = new Date().getTime()
  const timeElapsed = currentTime - startTime;
  if (!startTime || (timeElapsed < runningTime)) { 
    return 25 + 100 * Math.abs(Math.cos(shape.angle))
  } else {
    console.log('currentTime', currentTime)
    console.log('timeElapsed', timeElapsed)
    console.log('runningTime', runningTime)
    return 25 + (100 * Math.abs(Math.cos(shape.angle)) + ((timeElapsed - runningTime) / 20))//
  }
}

const distanceBetweenTwoPoints = (shape1, shape2) => {
  const dx = shape2.x - shape1.x
  const dy = shape2.y - shape1.y
  return Math.sqrt(dx * dx + dy * dy)
}

class Component1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      screenIsAllBlack: false,
      startTime: 0,
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
      },
      shapes: [
        {
          id: 'shape1',
          angle: 30,
          x: getRandomInt(100),
          y: getRandomInt(325),
          xVelocity: -getRandomInt(20),
          yVelocity: getRandomInt(20),
          color: '#F71E54'
        },
        {
          id: 'shape2',
          angle: 30,
          x: getRandomInt(500),
          y: getRandomInt(500),
          xVelocity: getRandomInt(20),
          yVelocity: getRandomInt(20),
          color: '#006699'
        },
        {
          id: 'shape8',
          angle: 30,
          x: getRandomInt(100),
          y: getRandomInt(325),
          xVelocity: -getRandomInt(20),
          yVelocity: getRandomInt(20),
          color: 'cyan'
        },
        {
          id: 'shape3',
          angle: getRandomInt(10),
          x: getRandomInt(900),
          y: getRandomInt(300),
          xVelocity: getRandomInt(10),
          yVelocity: -getRandomInt(8),
          color: 'green'
        },
        {
          id: 'shape4',
          angle: getRandomInt(10),
          x: getRandomInt(100),
          y: getRandomInt(100),
          xVelocity: -getRandomInt(10),
          yVelocity: -getRandomInt(10),
          color: '#007699'
        },
        {
          id: 'shape6',
          angle: 30,
          x: getRandomInt(100),
          y: getRandomInt(325),
          xVelocity: -getRandomInt(20),
          yVelocity: getRandomInt(20),
          color: 'yellow'
        },
        {
          id: 'shape7',
          angle: 30,
          x: getRandomInt(100),
          y: getRandomInt(325),
          xVelocity: -getRandomInt(20),
          yVelocity: getRandomInt(20),
          color: 'orange'
        },
        
        {
          id: 'shape5',
          angle: 2,
          x: getRandomInt(500),
          y: getRandomInt(500),
          xVelocity: -getRandomInt(20),
          yVelocity: -getRandomInt(10),
          color: 'black'
        },

      ]
    }
  }
  componentDidMount () {
    this.animate()
    this.setState({ startTime: new Date().getTime()})
  }
  componentWillUnmount () {
    this.state = { animate: false }
  }

  animate () {
    if (this.state.animate && this.state.startTime === 0 || (new Date().getTime() - this.state.startTime) < stopAnimationTime) {
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

      (this.state.shapes || []).forEach(shape => {
        this.drawCircle(mainContext, shape.id);
      })
      //this.drawCircle(mainContext, 'shape1');
      // this.drawCircle(mainContext, 'shape2');

      requestAnimationFrame(() => this.animate());
    }
    
  }

  replaceItemInArray (arrayOfObjects, newItem) {
    const listWithItemRemoved = arrayOfObjects.filter(obj => (obj.id !== newItem.id));
    listWithItemRemoved.push(newItem);
    return listWithItemRemoved;
  }
  
  drawCircle (mainContext, shapeId) {
    let shape = this.state.shapes.find(sh => sh.id === shapeId)

    // draw the circle
    mainContext.beginPath();

    let radius = radiusOfShape(shape, this.state.startTime);
    
    mainContext.arc(shape.x, shape.y, radius, 0, Math.PI * 2, false);
    mainContext.closePath();
    
    // color in the circle
    mainContext.fillStyle = shape.color;
    mainContext.fill();

    // update the shape for next time
    const radiusOfBlack = radiusOfShape(this.state.shapes.find(s => s.id === 'shape5'), this.state.startTime)
    
    const screenIsAllBlack = typeof canvasWidth() === 'number' && canvasWidth() < (2 * radiusOfBlack);
    if (screenIsAllBlack) {
      console.log('canvasWidth()', canvasWidth());
      console.log('radiusOfBlack', radiusOfBlack)
      console.log('canvasWidth() < (2 * radiusOfBlack)', canvasWidth() < (2 * radiusOfBlack))
      this.setState({ screenIsAllBlack: true })
    }
    if ((new Date().getTime() - this.state.startTime) < runningTime) {
      shape.angle = shape.angle += Math.PI / 640
    }
    

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

    
    const updatedShapeList = this.replaceItemInArray(this.state.shapes, shape);
  
    // this.setState({ [shapeId]: shape })
    // this.setState({ shapes: updatedShapeList });


    // Check if the two balls have collided
    const checkForCollisions = false;
    if (checkForCollisions) {
      const shape1 = this.state.shape1;
      const shape2 = this.state.shape2;
      const distanceBetweenCenters = distanceBetweenTwoPoints(shape1, shape2)
      if (distanceBetweenCenters < (radiusOfShape(shape1, this.state.startTime) + radiusOfShape(shape2, this.state.startTime))) {

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

  }
  render () {
    if (typeof window == 'undefined' ) {
      return null;
    }

    // const screenIsAllBlack = radiusOfShape(this.state.shapes.find(s => s.id === 'shape5'), this.state.startTime) > 0.5 * canvasWidth();
    console.log('screenIsAllBlack', this.state.screenIsAllBlack);
    // console.log('canvasWidth', canvasWidth());
    return (
      <div>
        {
          this.state.screenIsAllBlack ?  (
            <div className="overlay aboutMeWrapperIntroPage .fade-in">
              <h1>Patrick Levy</h1>
              <section className="summary">
                <p>
                  I'm a software developer in Saint Paul, MN.
                  My career has taken a rather roundabout journey but I have loved every stop along the way.
                  I have worked in analytical chemistry, taught high school, and am now a software developer working in industrial IoT.
                </p>
                <p>
                  School has always been enjoyable to me.
                  I have bachelor's degrees in Chemistry and Computer Science and a master's degree in secondary science education.
                </p>
                <p>
                  I probably most enjoy writing JavaScript for the frontend and am well versed in React, Vue, and GraphQL.
                  I have also enjoyed dabbling in React Native, Python, Ruby, and GoLang.
                </p>
                <p>
                  I consider myself a bit of a maker and enjoy small side projects as a way to keep learning new skills.
                  You can visit a project that I have been working on for teaching high school chemistry at <a href="https://www.grokchemistry.com" target="_blank">www.grokchemistry.com</a>.
                </p>
              </section>
              <section className="socialLinks">
                <p>
                  <a href="https://github.com/patricklevy" target="_blank"><i class="fab fa-github fa-4x" /></a>
                  <a href="https://www.linkedin.com/in/patrick-levy-39009b78/" target="_blank"><i class="fab fa-linkedin fa-4x" /></a>
                </p>
              </section>
            </div>
          ) : null
        }
        <canvas id="myCanvas" height={canvasHeight()} width={canvasWidth()}></canvas>
      </div>
    )
  }
}

export default Component1