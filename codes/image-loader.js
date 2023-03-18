
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
