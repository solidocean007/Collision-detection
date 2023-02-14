// Initial Setup
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// Variables
let mouse = {
  x: 10,
  y: 10,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event listeners
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function () {
  canvas.width = this.window.innerWidth;
  canvas.height = this.window.innerHeight;

  init();
});
// Utility Functions
function randomIntFromRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Objects
function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  // this.dx = dx;
  // this.dy = dy;
  this.radius = radius;
  // this.minRadius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  this.update = function () {

    this.draw();
  };

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath;
  };
}

// Implementation
let circle1;
let circle2;
function init() {
  circle1 = new Circle(300,300,100, 'black'); 
  circle2 = new Circle(10, 10, 30, 'red'); 


}


// let circleArray = [];


// function init() {
//   circleArray = [];
//   for (let i = 0; i < 800; i++) {
//     const radius = Math.random() * 10 + 1;
//     let x = Math.random() * (innerWidth - radius * 2) + radius;
//     let y = Math.random() * (innerHeight - radius * 2) + radius;
//     let dx = Math.random() - 0.5;
//     let dy = Math.random() - 0.5;
//     circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
// }

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  circle1.update();
  circle2.x = mouse.x
  circle2.y = mouse.y
  circle2.update();

  if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {
    circle1.color = 'red';
  } else { circle1.color = 'black'};
  }

init()
animate();
