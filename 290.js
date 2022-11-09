let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func() {
  if (event.type == 'click') {
    elem.style.background = 'red';
  }
  if (event.type == 'dblclick') {
    elem.style.background = 'green';
  } 
}
