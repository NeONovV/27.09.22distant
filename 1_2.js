function make(a, b, callback) {
  setTimeout(function() {
    let res = [1, 2, 3, 4, 5];
    callback(res[a]+res[b]);
  }, 1000);
}

make(2, 3, function(res) {
  console.log(res);
});