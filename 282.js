// 1
    let select = document.querySelector('#select');
    but.onclick = function(){
        pole.innerHTML = select.value;
        console.log(select.value);
    }

// 2
    let select = document.querySelector('#select');
    but.onclick = function(){
        (((select.value % 4 == 0) && (select.value % 100 != 0)) || (select.value % 400 == 0)) ? pole.innerHTML = "YES" : pole.innerHTML = "NO";
    }

// 3
    let select = document.querySelector('#select');
    but.onclick = function(){
        select.value == 6 || select.value == 7? pole.innerHTML = "weekend" : pole.innerHTML = "week";
    }