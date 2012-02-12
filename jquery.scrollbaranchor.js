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
          scroll_position = $(window).scrollTop(),
          body_height = $('body').height(),
          offset = scroll_position + ((scroll_position * (window_height - (settings.scrollbar_button_height * 2))) / body_height) + (((window_height - (settings.scrollbar_button_height)) * (window_height - (settings.scrollbar_button_height))) / (2 * body_height)) + settings.scrollbar_button_height - element_offset;

        if (body_height < window_height) { // if there's no scrollbar.
          offset =(window_height / 2) + (target.height() / 2);
        } else if (offset < scroll_position) { // top bounds
          offset = scroll_position;
        } else if (offset > scroll_position + window_height - target.height()) { // bottom bounds
          offset = scroll_position + window_height - target.height();
        }
        target.css('top', offset);
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
