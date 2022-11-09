function loadImage(path, callback) {
  setTimeout(function() {
    let image = new Image();
    image.src = path;
    let err;

    image.onload = () => document.body.append(image);
    image.onerror = () => console.log('произошла ошибка: not found');

    callback(image, err);
  }, 1000);
}

loadImage('image1.png', function(image, err, kek) {
    loadImage('image2.png', function(image, err, kek) {
      loadImage('image3.png', function(image, err, kek) {
          loadImage('image4.png', function(image, err, kek) {
            loadImage('image5.png', function(image, err, kek) {
              loadImage('image6.png', function(image, err, kek) {
                loadImage('image7.png', function(image, err, kek) {
                  loadImage('image8.png', function(image, err, kek) {
                    loadImage('image9.png', function(image, err, kek) {
                      loadImage('image10.png', function(image, err, kek) {
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});