
var paper;
var 
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	 paper=new Paper(50,350,40,40);
}


function draw() {
  background("green");


 display();
  paper.display();
  
  drawSprites();
 
}



