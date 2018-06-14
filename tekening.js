var xCar = 150; //Meest links boven
var yCar = 200; //Meest links boven
var xSize = 400;
var ySize = 350;
var wheelSize = 24;
var speed = 3;

function setup() {
  createCanvas(400, 350);
  background(220);
  xCar = 150;
  yCar = 200;
  wheelSize = 24;
  speed = 3;

}
function draw(){
  background(220);
  drawCar(xCar, yCar, wheelSize,);

  if (xCar > width || xCar < 0){
    speed = -speed
  }
  xCar += speed;

}

function drawCar(xCar, yCar, wheelSize) {
    noStroke();
    fill(97, 173, 0);
    rect(xCar, yCar, 110, 20);
    rect(xCar + 95, yCar-10, 25, 25);
    rect(xCar - 8, yCar-10, 25, 25);
    // Wielen
    stroke(255);
    strokeWeight(5);
    fill(97, 173, 226);
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    stroke(0); //Zwarte weg
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2);
    //skaterbro
    //leg
    stroke(38, 148, 231);
    rect(xCar + 45, yCar - 47, 5, 45);
    rect(xCar + 60, yCar - 47, 5, 45);
    //sickbod
    noStroke();
    fill(153, 5, 2)
    rect(xCar + 44, yCar - 78, 25, 45);
    rect(xCar + 8, yCar - 75, 100, 10)
    fill(150, 138, 71);
    ellipse(xCar + 55, yCar - 105, 45, 55);




};
