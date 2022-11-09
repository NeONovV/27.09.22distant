
function loadImage(path, callback) {
  setTimeout(function() {
    let image = new Image();
    image.src = path;
    let err;

    image.onerror = () => {
      err = 'not found';
      return callback(img, err);
    };

    callback(image);
  }, 1000);
}

loadImage('image.png', function(image, err) {
  if(!err) document.body.append(image);
  else console.log('произошла ошибка: ' + err);
});