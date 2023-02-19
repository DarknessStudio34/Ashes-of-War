var c = 0
function cenarios (){
   if (propor == 20.9){
     if(c == 0){
       background (loading.tld20_9)
       particFun(6, 400, 400, 600, 800);
       particFun(6, 400, 400, 600, 800);
       particFun(6, 400, 400, 600, 800);
     }
   }
   else if (propor == 16.9){
     if(c == 0){
       background (loading.tld16_9)
       //tld16_1();
     }
   }
}
var graphics = {};
function tld20_1 (){
  var img1 = loadImage('assets/20_9/int/mp_bg.png');
  
  Promise.all([img1]).then(function(values) {
    graphics.bg = values[0];
    /*graphics.bt = values[1];
    graphics.int = values[2];*/
    c = 1;
  });
}
