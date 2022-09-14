
var canvas = null;
var context = null;

var isClicked = false;

$(function () {
  console.log('Initialized the canvas');
  canvas = $('#canvas');
  context = canvas[0].getContext('2d');

});


$('#canvas').on('click', function(e) {
  console.log(`Clicked: state=${isClicked}`);

  let x = e.offsetX;
  let y = e.offsetY;
  
  if (!isClicked) {
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  }
  isClicked = true;

});


$('.esc').on('click', function(e) {
  console.log(`Clicked esc-button`);
  
  context.closePath();
  isClicked = false;

});
