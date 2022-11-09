    let elem1   = document.querySelector('#elem1');
    let elem2   = document.querySelector('#elem2');

    elem1.addEventListener('input', function() {
        if (this.value.length >= 2) elem2.focus();
    });