let elem = document.querySelector('#elem');
console.log(elem.value);

elem.onblur = function() {
console.log(elem.value);
}