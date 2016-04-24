// (function(document) {
(function() {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    var win = $(window);

    win.resize(function() {

      var win_w = win.width(),
          win_h = win.height(),
          $bg    = $("#bg");
      // console.log('win_w: %i, win_h: %i, $bg: %O', win_w, win_h, $bg);

      var available = [
        600, 768, 960,
        1025, 1050, 1260,
        1440, 1920
      ];

      var current = null;

      if (!current || ((current < win_w) && (current < available[available.length - 1]))) {
        var chosen = available[available.length - 1];

        for (var i=0; i<available.length; i++) {
          if (available[i] >= win_w) {
            chosen = available[i];
            break;
          }
        }

        // Set the new image
        console.log('chosen: ' + chosen);
        $bg.attr('src', '/images/bg/037_by_koko_stock-d4zq28i-' + chosen + '.jpg');
      }

    }).resize();

  });

})(jQuery);
// });
