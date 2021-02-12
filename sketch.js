/*
This program is created as a coding challenge inspired from
The Coding Train channel's "Coding Challenge #1: Starfield in Processing"
video: https://youtu.be/17WoOqgXsRM

This program added just a few more features to the challenge such
as changing the background colors and allowing modification of the stars
and their trails.
The color modes allowed for use are RGB, HSL, and HSB.
*/

let stars = [];//initialize an array
let speed;//initialize speed of the stars
let blueShift;//initialize blueshift value

function setup() {
  createCanvas(1280, 720);//create a canvas w/ 1280x720 dimensions
  for(let i = 0; i < 4096; i++) {
    let starSize = 5;
    // let colorType = HSL;
    // let h = 0;
    // let s = 0;
    // let l = 100;
    // let hTrail = random(150,270);
    // let sTrail = random(25,100);
    // let lTrail = random(30,100);
    // let tempStar = new Star(starSize,h,s,l,hTrail,sTrail,lTrail,colorType);
    let colorType = RGB;
    let r = 255;
    let g = 255;
    let b = 255;
    let rTrail = random(0,255);
    let gTrail = random(0,255);
    let bTrail = random(0,255);
    let tempStar = new Star(starSize,r,g,b,rTrail,gTrail,bTrail,colorType);
    stars.push(tempStar);
  }
}

function draw() {
  colorMode(RGB);
  background(0,0,blueShift);
  translate((width / 2),(height / 2));
  //speed of stars is mapped with mouseX position in window
  speed = map(mouseX,0,width,0,50);
  //blueshift maps mouseX to blue amounts 0 to 100 in the RGB scale
  blueShift = map(mouseX,0,width,0,100);
  for(const element of stars) {
    element.speed = speed;
    element.move();
    element.display();
  }
}