


function setup() {
  createCanvas(480,800);
  var particles = [];
  var plinkos = [];
  var divisions = [];

  
  ground = new Ground(240,height,480,50);
  division1 = new Division(80,0,100,30);
  division2 = new Division(160,80,100,30);
  division3 = new Division(240,160,100,30);
  division4 = new Division(320,240,100,30);
  division5 = new Division(400,320,100,30);
  division6 = new Division(480,400,100,30);
  division7 = new Division(480,320,100,30);

}

var divisionHeight = 300;
for(var k = 0; k <= innerWidth; k = k +88){
  divisionsHeight.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
}

function draw() {
  background(255,255,255); 
  ground.display();
  drawSprites();
}