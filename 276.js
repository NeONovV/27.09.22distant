// 1
but1.onclick = function(){
        elem.checked = true;
    }
but2.onclick = function(){
        elem.checked = false;
    }

// 2
but1.onclick = function(){
        elem.checked == true ? p.innerHTML = "Hi" : p.innerHTML = "bye";
    }