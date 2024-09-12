(function () {
  ScrollOut({
    threshold: .3,
    once: false
  });
  ScrollOut({
    scrollingElement: ".brand-wrapper",
    threshold: .3,
    once: true
  });

  var glide1 = new Glide('#marketing', {
    type: 'carousel',
    perView: 2,
    gap: 25,
    breakpoints: {
      800: {
        perView: 2,
        gap: 25,
      },
      480: {
        perView: 1.5,
        gap: 15,
      }
    }
  })

  glide1.mount()

  var glide2 = new Glide('#mockups', {
    type: 'carousel',
    focusAt: 'center',
    perView: 2,
    gap: 35,
    breakpoints: {
      800: {
        perView: 2,
        gap: 25,
      },
      480: {
        perView: 1.3,
        gap: 15,
      }
    }
  })

  glide2.mount()
})();
