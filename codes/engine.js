var screenX = windowWidth, screenY = windowHeight
function setup (){
  createCanvas(screenX, screenY);
}
function draw (){
  screenConfig();
  cenarios();
  frames();
}
var cmd = false
function cmds (){
  if(keyIsDown(118) && keyIsDown(67)){
    cmd = true;
    if (cmd == true){cmd = false}
  }
  if(cmd == true){
    rect(screenX * 0.70, 0, screenX * 0.30, screenY * 0.30)
    describe(gray rect)
  }
}
function preload (){
  
}
function mouseClicked (){
  if(mouseX > screenX - screenX * 0.10 && mouseY < screenY - screenY * 0.90){
    toggleFullScreen();
    fscreen = true;
    if(screenY > screenX){
      alert("Vire seu dispositivo na horizontal e recarregue a página, se este erro persistir ative a rotação automática no painel de notificações e tente o passo anterior.");
    }
  }
}
function frames (){
  fill (0);
  if (c == 1 || c == 1.2){fill (220)}
  text (frameCount, 10, 10);
  text (mouseY, 40, 30);
  text (mouseX, 40, 10)
}
function screenConfig (){
  if (screenX > screenY + screenY * 0.80){
    propor = 20.9
    //20:9
  }
  else {
    propor = 16.9
    //16:9
  }
}

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScrenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  } 
} 
