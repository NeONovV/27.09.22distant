let subsribers = {
  '1': [function(arr) {
    document.querySelector('#message').innerHTML = 'данные получены';
}],
  '2': [function(arr) {
  list = document.querySelectorAll('#list li');
  list.forEach(li => {
    for (let i = 0; i < list.length; i++) {
      list[i].innerHTML = arr[i];
    }
  });
}],
  '3': [function(arr) {
  document.querySelector('#amount').innerHTML = arr.length;
}],
  '4': [function(arr) {
  document.querySelector('#result').innerHTML = arr[0]+arr[1]+arr[2]+arr[3]+arr[4];
}]
};

function on(name, callback) {
  if (!subsribers[name]) {
    subsribers[name] = [];
  }
  
  subsribers[name].push(callback);
}

function emit(name, data) {
  if (subsribers[name]) {
    for (let callback of subsribers[name]) {
      callback(data);
    }
  }
}

for (let i = 1; i <= 4; i++) {
  setTimeout(function() {
    emit(`${i}`, [1, 2, 3, 4, 5]);
  }, 3000);
}
