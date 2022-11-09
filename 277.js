// 1: как работает:
// мы считываем элементы, а после через addEventListener делаем функцию по нажатию, где проверяем доступен ли блок или нет

// 2
let elem   = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function() {
	elem.disabled = !elem.disabled;
})