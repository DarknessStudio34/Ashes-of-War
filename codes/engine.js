var screenX = window.screen.width, screenY = window.screen.height
function setup (){
  createCanvas(screenX, screenY);
}
function draw (){
  screenConfig();
  cenarios();
  frames();
}
function preload (){
  
}
function mouseClicked (){
  
}
function frames (){
  fill (0);
  if (c == 1 || c == 1.2){fill (220)}
  text (frameCount, 10, 10);
  text (mouseY, 40, 30);
  text (mouseX, 40, 10)
}
function screenConfig (){
  
}
