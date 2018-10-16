
function preload(){
}

var stars = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(25);
  textFont('Futura');

  var starNumber = 300;
  for(var i=0; i < starNumber; i++) {
    var myStar = new Star(random(0,width),random(0,height),100);
    myStar.h = random(30,120);
    myStar.w = random(40,130);
    myStar.speed = random(4,10);
    stars.push(myStar);
  }
}

function draw() {
  background(random(255));

  for(var j = 0; j < stars.length; j++){
    stars[j].move();
    stars[j].display();
    // stars[j].diameter +=0.5;
    stars[j].over(mouseX, mouseY);
  }

//text
  strokeWeight(6);
  stroke(255);
  fill(random(255),random(255),random(255),random(255));
  textSize(40);
  textAlign(CENTER);
  text('It is rainbow time, move the mouse and colour the world!',width/2,height/8);

}

function Star(_x,_y,_h,_w) {
  this.x = _x;
  this.y = _y;
  this.h = _h;
  this.w = _w;
  this.color = (random(255));
  this.speed = 5;
//bouncing
  var yDir = 1;
  var xDir = 1;

  this.display = function() {
    fill(this.color);
    noStroke();
    rect(this.x,this.y,this.h,this.w);
  }

//changecolor
  this.over = function() {
  var d = dist(mouseX, mouseY, this.x, this.y);
  if (d < this.h/2) {
  this.color = color(random(255),random(255),random(255))
  }  }

this.move = function() {
  this.x += this.speed * xDir;
  this.y += this.speed * yDir;
  if (this.y > height || this.y < 0) {
    yDir = yDir * -1;
  }

  if (this.x > width || this.x < 0) {
    xDir = xDir * -1;
  }
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
