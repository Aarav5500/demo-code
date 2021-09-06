var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200 ,200 , 50 , 50);
  ball.shapeColor = "red";
}

function draw() 
{
  background(30);
  drawSprites();

  if(keyDown(RIGHT_ARROW)) {
    ball.x = ball.x+2;
  }
  if(keyDown(LEFT_ARROW)) {
    ball.x = ball.x-2;
  }
  if(keyDown(UP_ARROW)) {
    ball.y = ball.y-2;
  }
  if(keyDown(DOWN_ARROW)) {
    ball.y = ball.y+2;
  }
}




