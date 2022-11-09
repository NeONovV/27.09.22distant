let input = document.getElementById('inp');
let sent = document.querySelector('#sent');

input.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    sent.innerHTML += input.value;
    input.value = '';
  }
});
