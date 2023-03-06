var c = 0
function cenarios (){
   if (propor == 20.9){
     if(c == 0){
       background (loading.tld20_9)
       tld20_1()
     } else if (c == 1){
         background(graphics.bg)
         image(graphics.btJ, screenX * 0.80, screenY * 0.25, screenY * 0.5, screenY * 0.5);
         image(graphics.btO, screenX * 0.80, screenY * 0.55, screenY * 0.5, screenY * 0.5);
       }
   }
   else if (propor == 16.9){
     if(c == 0){
       background (loading.tld16_9)
       tld16_1();
     } else if (c == 1){
         background(graphics.bg)
       }
   }
}


var graphics = {};

function tld20_1() {
  var img0 = loadImage('assets/20_9/int/mp_bg.png');
  var img1 = loadImage('assets/int_un/Mike-fl-scene1.png');
  var img2 = loadImage('assets/int_un/Allan-fl-scene1.png');
  var img3 = loadImage('assets/int_un/Pai-fl-scene1.png');
  var img4 = loadImage('assets/int_un/bt_jogar.png');
  var img5 = loadImage('assets/int_un/bt_options.png')

  Promise.all([img0, img1, img2, img3, img4, img5]).then(function(values) {
    graphics.bg = values[0];
    graphics.flM = values[1];
    graphics.flA = values[2];
    graphics.flP = values[3];
    graphics.btJ = values[4];
    graphics.btO = values[5];
    c = 1;
  });
}


function tld16_1() {
  var img0 = loadImage('assets/16_9/int/mp_bg.png');
  var img1 = loadImage('assets/int_un/Mike-fl-scene1.png');
  var img2 = loadImage('assets/int_un/Allan-fl-scene1.png');
  var img3 = loadImage('assets/int_un/Pai-fl-scene1.png');
  var img4 = loadImage('assets/int_un/bt_jogar.png');
  var img5 = loadImage('assets/int_un/bt_options.png')

  Promise.all([img0, img1, img2, img3, img4, img5]).then(function(values) {
    graphics.bg = values[0];
    graphics.flM = values[1];
    graphics.flA = values[2];
    graphics.flP = values[3];
    graphics.btJ = values[4];
    graphics.btO = values[5];
    c = 1;
  });
}
