// 1
but.onclick = function(){
	elem.disabled = true;
}

// 2

but1.onclick = function(){
        elem.disabled = true;
    }

but2.onclick = function(){
        elem.disabled = false;
    }
// 3

but.onclick = function(){
        elem.disabled == true ? console.log("zablokirovan") : console.log("nezablokirovan");
    }