// 1
    let elem = document.querySelector('#elem');
    elem.addEventListener('input', function() {
        if (this.value.length > 5){
            alert("���� ������ 5��");
        }
    });

// 2
    let elem = document.querySelector('#elem');
    elem.addEventListener('input', function() {
        this.value.length > 5 ? pole.innerHTML = this.value.length - 5 : pole.innerHTML = 5 - this.value.length;
    });