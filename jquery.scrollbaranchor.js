/*global jQuery */
(function ($) {
  $.fn.scrollbarAnchor = function (options) {
    var settings = $.extend({
        'position' : 'middle',
        'scope' : window,
        'scrollbar_button_height' : 20
      }, options),
      element_offset = 0,
      barFollower = function (e) {
        var target = $(e.data.target),
          window_height = $(window).height(),
          max_target_offset = window_height - target.height(),
          scroll_position = $(window).scrollTop(),
          body_height = $('body').height(),
          // Ratio of full body height to full height of the scroll area which doesn't include buttons
          scroll_scale_factor = body_height / (window_height - (settings.scrollbar_button_height * 2)),
          offset = 0;

        if (body_height <= window_height) { // If there's no scrollbar.
          offset = max_target_offset / 2 - element_offset; // Position halfway down the window
        } else {
          offset = settings.scrollbar_button_height
            + (scroll_position + (window_height / 2)) / scroll_scale_factor // mid-window position reduced to scroll area scale
            - element_offset; // offset for chosen 'position' based on element height - see notes below
        }

        /* Some catches for when element height might mean it would get positioned outside the window */
        if (offset < 0) { // Top bounds
          offset = 0;
        } else if (offset > max_target_offset) { // Bottom bounds
          offset = max_target_offset;
        }
        target.css('top', scroll_position + offset);
      };

    return this.each(function () {
      var $this = $(this);
      $this.css({'position' : 'absolute', 'right' : '0', 'top' : '0'});

      switch (settings.position) {
      case 'middle':
        element_offset = $this.height() / 2;
        break;
      case 'bottom':
        element_offset = $this.height();
        break;
      default:
      }

      $(settings.scope).bind(
        'scroll resize',
        {target : $this},
        barFollower
      );
      $(settings.scope).trigger('scroll');
    });
  };
}(jQuery));
