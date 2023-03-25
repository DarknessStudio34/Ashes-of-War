console.log('worker funcionando');
function tld20_1() {
  var img0 = loadImage('assets/20_9/int/mp_bg.png');
  var img1 = loadImage('assets/int_un/Mike-fl-scene1.png');
  var img2 = loadImage('assets/int_un/Allan-fl-scene1.png');
  var img3 = loadImage('assets/int_un/Pai-fl-scene1.png');
  var img4 = loadImage('assets/int_un/bt_jogar.png');
  var img5 = loadImage('assets/int_un/bt_options.png');

  Promise.all([img0, img1, img2, img3, img4, img5]).then(function(values) {
    var graphics = {
      bg: values[0],
      flM: values[1],
      flA: values[2],
      flP: values[3],
      btJ: values[4],
      btO: values[5]
    };
    self.postMessage(graphics);
    self.postMessage(1);
    // Envia a variável graphics para a página principal
    self.postMessage({ type: 'graphics', data: graphics });
  });
}
