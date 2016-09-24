import Tetris from './modules/Tetris';

var encoder = new GIFEncoder();
var tetris = new Tetris();
var container = document.querySelector('.container');

// init
encoder.setRepeat(0); //0  -> loop forever
encoder.setDelay(100); //go to next frame every n milliseconds


// Event
tetris.on('gamestart', function(){
  encoder.start();
  encoder.addFrame(tetris.ctx);
});
tetris.on('tick', function(){
  encoder.addFrame(tetris.ctx);
});
var timer;
tetris.on('gameOverEffect', function(){
  // encoder.addFrame(tetris.ctx);
  // encoder.setDelay(50);
  // timer = setInterval(() => {
  //   encoder.addFrame(tetris.ctx);
  // }, tetris.tickInterval);
});
tetris.on('gamequit', function(){
  // clearInterval(timer);
  encoder.finish();
  
  var binary_gif = encoder.stream().getData(); //notice this is different from the as3gif package!
  var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
  appendLink(data_url);
  
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
