//1
    let elem = document.querySelector('#elem');
    elem.addEventListener('change', function() {
	    pole.innerHTML =  this.value;
    });

//2
    let elem = document.querySelector('#elem');
    elem.addEventListener('change', function() {
	    pole.innerHTML =  this.value;
    });

//3
//blur - ��������������, ������� ������� ����� ��� ���������
//change - ����� ����������

//4
    let elem = document.querySelector('#elem');
    elem.addEventListener('change', function() {
	    this.value.length > 5 ? elem.style.borderColor = "green" : elem.style.borderColor = "red";
        console.log(this.value);
    });