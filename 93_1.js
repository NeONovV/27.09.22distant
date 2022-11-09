function func1(arr) {
  document.querySelector('#message').innerHTML = 'данные получены';
}

function func2(arr) {
  list = document.querySelectorAll('#list li');
  list.forEach(li => {
    for (let i = 0; i < list.length; i++) {
      list[i].innerHTML = arr[i];
    }
  });
}

function func3(arr) {
  document.querySelector('#amount').innerHTML = arr.length;
}

function func4(arr) {
  document.querySelector('#result').innerHTML = arr[0]+arr[1]+arr[2]+arr[3]+arr[4];
}

setTimeout(function() {
  let arr = [1, 2, 3, 4, 5];
  
  func1(arr);
  func2(arr);
  func3(arr);
  func4(arr);
}, 3000);

