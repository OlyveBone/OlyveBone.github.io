function setup() {
  createCanvas(400, 400);
}

var radius = 200;
function draw() {
 background(153, 51, 153);

background(75,10);
	fill(1, 10, frameCount % 255);
	console.log(frameCount % 255);
	ellipse(200,200, 300, 300);
  	stroke(255);

//hair
  noStroke();
  fill(0, 0, 179);
  ellipse(200,170,200,200);  
  quad(100,170,300,170,270,400,70,200);
  ellipse(100,260,70,100);
  ellipse(90,330,100,100);
  ellipse(270,330,100,100); 
  quad(100,160,280,160,250,400,71,400);
  rect(101,260,70,100);

 //neck
  fill(255, 153, 153);  
  quad(160,280,240,280,210,370,130,370)
  quad(160,280,240,280,210,370,130,370)
  

  //head
  fill(255, 153, 153);
  stroke(255);
  ellipse (width/2, height/2, 150,190)  
  rect (120, 120,100, 120)

  //eyes
  fill(204, 204, 255);
  ellipse(160, 180, 40, 20);
  ellipse(220, 180, 30, 40);
  fill(0, 0, 77);
  ellipse(160,180, 10, 10);
  ellipse(220,180, 10, 10);

  //nose
  noFill();
  arc(200, 220, 30, 25, 0, PI);

  //mouth
  push();
  translate(0,100);
  fill(51, 0, 26);
  stroke(255);
  arc(190,155,30,20,PI,0);
  arc(210,155,30,20,PI,0);
  fill(51, 0, 26);
  stroke(255);
  arc(200,155,50,30,0,PI);
  pop();
  
  
  //eyebrows
  fill(0, 0, 77);
  rect(145,160,35,6);
  rect(200,150,35,6);

radius+=1;

  let x1 = 100;
  let y1 = 90;
  let x2 = mouseX;
  let y2 = mouseY;

  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 20, 20);

  point(random(0,width),random(0,height));


}