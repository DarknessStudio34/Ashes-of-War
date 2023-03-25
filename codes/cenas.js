var graphics = {};
var c = 0;

function cenarios() {
  if (propor == 20.9) {
    if (c == 0){}
  }
  else if (propor == 16.9){
    if (c == 0){}
  }
}

if (window.Worker) {
  var worker = new Worker('codes/worker.js');
  worker.addEventListener('message', function(e) {
    if (typeof e.data === 'object' && 'bg' in e.data && 'flM' in e.data && 'flA' in e.data && 'flP' in e.data && 'btJ' in e.data && 'btO' in e.data) {
      graphics.bg = e.data.bg;
      graphics.flM = e.data.flM;
      graphics.flA = e.data.flA;
      graphics.flP = e.data.flP;
      graphics.btJ = e.data.btJ;
      graphics.btO = e.data.btO;
    }
    if (typeof e.data === 'number' && e.data === 1) {
      if (c === 1) {
        cenarios();
      }
    }
  }, false);
  worker.postMessage('loadImages');
} else {
  // fallback para navegadores que não suportam worker
  tld20_1();
}
