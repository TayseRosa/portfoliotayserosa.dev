let developerJS = document.querySelector('.banner .banner-esquerda .typed-text')
// Typed Initiate
if (developerJS.length == 1) {
  var typed_strings = developerJS.text()
  var typed = new Typed('.banner .banner-esquerda .typed-text h2', {
    strings: typed_strings.split(', '),
    typeSpeed: 100,
    backSpeed: 20,
    smartBackspace: false,
    loop: true
  })
}

/* if ($('.banner .banner-esquerda .typed-text').length == 1) {
  var typed_strings = $('.hero .hero-text .typed-text').text()
  var typed = new Typed('.hero .hero-text h2', {
    strings: typed_strings.split(', '),
    typeSpeed: 100,
    backSpeed: 20,
    smartBackspace: false,
    loop: true
  })
} */
