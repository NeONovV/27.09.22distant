let elem = document.getElementById('inp');

elem.addEventListener('keyup', function(event) {
  console.log(event.key);
});

elem.addEventListener('keyup', function(event) {
  console.log(event.keyCode);
});


// d - 68
// w - 87
// a - 65
// enter - 13
// backspace - 8