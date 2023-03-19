const worker = new Worker('worker.js')
var c = 0;

function cenarios (){
   if (propor == 20.9){
     if(c == 0){
       background (loading.tld20_9);
       tld20_1();
     } else if (c == 1){
         background(graphics.bg);
         image(graphics.btJ, screenX * 0.80, screenY * 0.25, screenY * 0.35, screenY * 0.35);
         image(graphics.btO, screenX * 0.80, screenY * 0.55, screenY * 0.35, screenY * 0.35);
         if (mouseX > screenX * 0.825 && mouseX < screenX * 0.95 && mouseY > screenY * 0.29 && mouseY < screenY * 0.463){
           c = 1.1;
         }
         if (mouseX > screenX * 0.825 && mouseX < screenX * 0.95 && mouseY > screenY * 0.61 && mouseY < screenY * 0.73){
           c = 1.2;
         }
     } else if (c == 1.1){
         background(graphics.bg);
     } else if (c == 1.2){
         background(graphics.bg);
     }
   } else if (propor == 16.9){
     if(c == 0){
       background (loading.tld16_9);
       tld16_1();
     } else if (c == 1){
         background(graphics.bg);
     }
   }
}
