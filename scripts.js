$(function() {
  // elemek összegyűjtése
  let $window = $(window);
  let $htmlBody = $('html,body');
  let $scrollToTop = $('#scroll-to-top');

  // konstansok
  const triggerDistance = 200;

  // scroll-ra reagálás
  $window.scroll(function() {
    // aktuális távolság a lap tetejétől
    let actualDistance = $htmlBody.scrollTop();

    // ha a távolság elég nagy, akkor megjelenítjük a gombunkat
    if (actualDistance >= triggerDistance) {
      $scrollToTop.show();
    }
    // egyébként elrejtjük
    else {
      $scrollToTop.hide();
    }
  });

  // gombnyomásra reagálás
  $scrollToTop.click(function() {
    // lap tetejére görgetés
    $htmlBody.animate({ scrollTop: 0 }, 500);
  });
});
