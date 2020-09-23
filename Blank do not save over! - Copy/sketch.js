//let c = color(0,255,0);

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);


  translate(300, 300);

  fill(34,139,34);
  arc(0, 0, 300, 300, 0, PI);

  fill(255);
  arc(0, 0, 290, 290, 0, PI);
//pink portion
  noStroke();
  fill(255, 10, 50);
  arc(0, 0, 285, 270, 0, PI);

  fill(255, 20);
  arc(0, 0, 200, 270, 0, PI);

  push();
  rotate(45);
  fill(0);
  ellipse(60, 90, 25, 12.5);
  pop();

  push();
  translate(65, 80);
  rotate(90);
  fill(0);
  ellipse(45, 45, 25, 12.5);
  pop();

  push();
  translate(175, 30);
  rotate(90);
  fill(0);
  ellipse(45, 45, 25, 12.5);
  pop();

  push();
  translate(-45, 10);
  rotate(90);
  fill(0);
  ellipse(45, 45, 25, 12.5);
  pop();

  push();
  translate(75, 150);
  rotate(35);
  fill(0);
  ellipse(45, 45, 25, 12.5);
  pop();

  push();
  translate(-60, 130);
  rotate(35);
  fill(0);
  ellipse(45, 45, 25, 12.5);
  pop();

  //white highlights
  push();
  translate(-65, 130);
  rotate(35);
  fill(255);
  ellipse(45, 45, 6, 3);
  pop();

  //white highlights
  push();
  translate(71, 150);
  rotate(35);
  fill(255);
  ellipse(45, 45, 12, 2);
  pop();



}
