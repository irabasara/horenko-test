const langBtn = document.querySelectorAll('.header__lang-item');

for (var i = 0; i < langBtn.length; i++) {
  langBtn[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('header__lang-active');
    current[0].className = current[0].className.replace(
      ' header__lang-active',
      ''
    );

    this.className += ' header__lang-active';
  });
}
