let ul = document.querySelector('#elem');
let li = document.querySelectorAll('#elem li');

let addUl = document.createElement('li');
addUl.innerHTML = 'text';

ul.addEventListener('click', () => ul.append(addUl));

li.forEach( elem => {
  elem.addEventListener('click', () => elem.innerHTML += '!');
});