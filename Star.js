/*
This class represents a Star object. The star's size, color, and trail color
are changeable. The coloring mode can be changed between RGB, HSL, and HSB.
*/

class Star {
  constructor(size=1,r=255,g=255,b=255,rTrail=255,gTrail=255,bTrail=255,colorType=RGB) {
    this.x = random(-width / 2,width / 2);//x-coordinate
    this.y = random(-height / 2,height / 2);//y-coordinate
    this.z = random(0,width);//z-coordinate
    this.zOrigin = 0.0;//star original z-coordinate
    this.size = size;//star size
    this.colorType = colorType;//set the colorMode for drawing stars
    this.r = r;//star red amount
    this.g = g;//star green amount
    this.b = b;//star blue amount
    this.rTrail = rTrail;//trail red amount
    this.gTrail = gTrail;//trail green amount
    this.bTrail = bTrail;//trail blue amount
    this.speed = 5;//star movement speed
  }
  
  move() {
    this.z = this.z - this.speed;//move star closer to viewer
    //reset the star if it passes the viewer
    if(this.z < 1) {
      this.resetStar();
    }
  }
  
  resetStar() {
    //reset the star's position to be far away
    this.x = random(-width / 2,width / 2);
    this.y = random(-height / 2,height / 2);
    this.z = width;
    this.zOrigin = this.z;
  }
  
  display() {
    //get offsets for moving star
    let offsetX = map((this.x / this.z),0,1,0,width);
    let offsetY = map((this.y / this.z),0,1,0,height);
    let scaleZ = map(this.z,0,width,this.size,0);
    
    //get offsets for moving star trails
    let offsetXOrigin = map((this.x / this.zOrigin),0,1,0,width);
    let offsetYOrigin = map((this.y / this.zOrigin),0,1,0,height);
    this.zOrigin = this.z;
    
    //set the color mode for drawing stars
    colorMode(this.colorType);
    
    //draw star trail
    stroke(color(this.rTrail,this.gTrail,this.bTrail));
    line(offsetXOrigin,offsetYOrigin,offsetX,offsetY);
    
    //draw star
    noStroke();
    fill(color(this.r,this.g,this.b));
    circle(offsetX,offsetY,scaleZ);
    
    this.zOrigin = this.z;
  }//end display
}//end class