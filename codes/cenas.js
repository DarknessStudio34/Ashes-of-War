var c = 0
function cenarios (){
   if (propor == 20.9){
     if(c == 0){
       background (loading.tld20_9)
       tld20_1()
     } else if (c == 1){
         background(graphics.bg)
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
  var img1 = loadImage('assets/20_9/int/mp_bg.png');
  var img2 = loadImage('assets/int_un/int-fl-Pai.png');
  var img3 = loadImage('assets/int_un/int-fl-Mike-1sc.png');

  Promise.all([img1, img2, img3]).then(function(values) {
    graphics.bg = values[0];
    graphics.fl1 = values[1];
    graphics.fl2 = values[2];
    c = 1;
  });
}



function tld16_1() {
  var img1 = loadImage('assets/16_9/int/mp_bg.png');
  var img2 = loadImage('assets/int_un/int-fl-Pai.png');
  var img3 = loadImage('assets/int_un/int-fl-Mike-1sc.png');

  Promise.all([img1, img2, img3]).then(function(values) {
    graphics.bg = values[0];
    graphics.fl1 = values[1];
    graphics.fl2 = values[2];
    c = 1;
  });
}
