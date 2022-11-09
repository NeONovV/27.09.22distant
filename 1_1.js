function make(callback) {
  setTimeout(function() {
    let res = [1, 2, 3, 4, 5];
    callback(res[0]+res[1]+res[2]+res[3]+res[4]);
  }, 1000);
}

make(function(res) {
  console.log(res);
});