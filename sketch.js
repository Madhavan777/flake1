var bg;
var snow;

function preload(){
  getBackgroundImg();

}
function setup() {
  createCanvas(1000,600);
  

}

function draw() {
  background(bg); 
  if(frameCount%50 === 0){
    var rand = Math.round(random(25,675));
    snow = new Snow(rand,100);
    snow.display();
  }

  drawSprites();
}
 function getBackgroundImg(){
   var rand1 = Math.round(random(1,3));
   if(rand1 === 1 ){
     bg = loadImage("snow1.jpg");
   }
   if(rand1 === 2 ){
    bg = loadImage("snow2.jpg");
  }
  if(rand1 === 3 ){
    bg = loadImage("snow3.jpg");
  }
 }