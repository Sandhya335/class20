var ball, brick;
function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 50, 50);
  brick=createSprite(700, 200, 50, 50);
  ball.debug=true;
  brick.debug=true;
}

function draw() {
  background(0,255,255);  
  ball.x=mouseX;
  ball.y=mouseY;
  if(ball.x-brick.x<ball.width/2+brick.width/2
    && brick.x-ball.x<ball.width/2+brick.width/2
    && ball.y-brick.y<ball.height/2+brick.height/2
    &&brick.y-ball.y<ball.height/2+brick.height/2 ){
    brick.shapeColor="red";
  }
  else{
  brick.shapeColor="black";
  }
  drawSprites();
}