// 1
    let select = document.querySelector('#select');
    inp.onblur = function() {
        select.selectedIndex = inp.value;
    }

//2
    let select = document.querySelector('#select');
    let now = new Date();
    select.selectedIndex = now.getDay();