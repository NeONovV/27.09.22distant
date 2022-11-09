    let select = document.querySelector('#select');
    let button = document.querySelector('#button');
    let now = new Date;
    button.addEventListener('click', function() {
	    select.value = now.getMonth();
    });