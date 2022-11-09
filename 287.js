//1
    let textarea = document.querySelector('textarea');
    let div = document.querySelector('div');

    textarea.onblur = function() {
        div.innerHTML = textarea.value;
    };

//2
    console.log(elem.checked);
    btn.addEventListener('click', function() {
        elem.checked == true ? div.innerHTML = "111" : div.innerHTML = "222";
    });

//3
    let checkbox = document.querySelector('[type="checkbox"]');
    let button = document.querySelector('button');

    button.addEventListener('click', function() {
        if (checkbox.checked == true) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });