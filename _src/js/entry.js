import Tetris from './modules/Tetris';

const KEYS = {
  37: 'left',  // ←
  39: 'right',  // →
  40: 'down',  // ↓
  38: 'rotate',  // ↑
  32: 'rotate'  // space
};
var tetris = new Tetris({
  disableTouch: true,
  disableKey: true,
});
var container = document.querySelector('.container');

// init
document.addEventListener('keydown', function(evt){
  if (typeof KEYS[evt.keyCode] === 'undefined') return;
  evt.preventDefault();
  
  console.table(tetris.board);
  console.table(tetris.rotateBoard());
}, false);



// Event
tetris.on('gamestart', function(){
});
tetris.on('tick', function(){
});
tetris.on('gameOverEffect', function(){
});
tetris.on('gamequit', function(){
  tetris.newGame();
});


// start
tetris.newGame();


function appendLink(data_url) {
  var p = document.createElement('p');
  var link = document.createElement('a');
  link.href = data_url;
  link.target = '_blank';
  link.innerText = 'gif on ' + getTime();
  p.appendChild(link);
  container.appendChild(p);
}

function getTime() {
  var d = new Date();
  var h = zeroPadding(d.getHours(), 2);
  var m = zeroPadding(d.getMinutes(), 2);
  var s = zeroPadding(d.getSeconds(), 2);
  var ms = zeroPadding(d.getMilliseconds(), 3);
  return h + ':' + m + ':' + s;
}

function zeroPadding(num, len) {
  return (new Array(len).join('0') + num).slice(-len);
}
