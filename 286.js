//1
    let select = document.querySelector('#select');
    for (let option of select) {
        option.selected == true ? option.innerHTML += "!" : option.innerHTML += "?";
    }

//2
    let select = document.querySelector('#select');
    let option = select[2];
    but.onclick = function() {
        option.selected = true;
    }

//3
    let select = document.querySelector('#select');
    but.onclick = function() {
        alert(select[select.selectedIndex].innerHTML);
    }

//4
    let select = document.querySelector('#select');
    but.onclick = function() {
        select[select.selectedIndex].innerHTML += "!";
    }
