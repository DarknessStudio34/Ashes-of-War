function setup (){
  createCanvas(screenX, screenY);
  /*button = createButton('');
  button.style('background-image', 'url(assets/int_un/bt_jogar.png)');
  button.mousePressed(nG);
  button.position(screenX * 0.80, screenY * 0.35);
  button.size(screenX * 0.20, screenX * 0.20)*/
}
var jg = false;
var screenX = window.screen.width, screenY = window.screen.height

function draw (){
  screenConfig();
  cenarios();
  frames();
  cmds();
}

var cmd = false
function cmds (){
  if(keyIsDown(118)){
    cmd = true;
    if (cmd == true){cmd = false}
  }
  if(cmd == true){
    rect(screenX * 0.70, 0, screenX * 0.30, screenY * 0.30)
  }
}
var loading = {};
function preload (){
  loading.tld20_9 = loadImage('assets/tldLoad.20.9.png'),
  loading.tld16_9 = loadImage('assets/tldLoad.16.9.png')
}
var btCl
function mouseClicked (){
  btCl = true
  setTimeOut(function (){btCl = false}, 50)
  if(mouseX > screenX * 0.90 && mouseY < screenY * 0.10){
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
  text (mouseX, 40, 10);
  text (screenX, 10, 30);
  text (screenY, 10, 50);
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

//gerador de particulas
var particFun = function (numPart, xInic, yInci, xFin, yFin){
  for (var i = 0; i != numPart; i++){
     var x = xInic, y = yInci;
     rect(x, y, 1, 1);
     if (xInic > xFin){
       for (; x != xFin; x -= 5){}
     } else {
         for(; x != xFin; x += 5){}
       }
     if (yInci > yFin){
       for(; y != yFin; y -= 5){}
     } else {
          for(; y != yFin; y += 5){}
       }    
  }
}
