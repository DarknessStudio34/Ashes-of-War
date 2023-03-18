/*image-loader.js: 
o p5 roda o jogo de forma linear, ou seja, em apenas um núcleo do processador.
Isso resulta em diversos problemas de desempenho, uma solução pra isso é usar o Worker.
O Worker basicamente é um gerenciador de thread, então cálculos pesados, imagens e etc podem ser executados em segundo plano
E não comprometendo o desempenho do jogo
*/
self.onmessage = function(event) {
  var imageList = event.data;

  // Carregar todas as imagens em paralelo usando Promise.all()
  Promise.all(imageList.map(loadImageAsBitmap)).then(function(values) {
    // Enviar as imagens processadas de volta para o arquivo principal do p5.js
    self.postMessage(values);
  });
}

function loadImageAsBitmap(imageUrl) {
  return fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => createImageBitmap(blob));
}
