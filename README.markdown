# The Scrollbar Anchor plugin for jQuery

Scrollbar Anchor will position a selected element such that it is bound to
the center of the browser's vertical scroll bar.

Inspiration for this plugin came from the [Path iPhone app] (http://itunes.apple.com/us/app/path/id403639508).

## How to use Scrollbar Anchor

Requires:

* The jQuery library
* This plugin
* Intialisation

...so, something like this:

    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="jquery.scrollbaranchor.js" type="text/javascript"></script>
    <script type="text/javascript">
      $('#element').scrollbarAnchor();
    </script>

...where '#element' is the id of the element you wish to anchor to the scrollbar.

## Some options

There are a few options you can pass when you instantiate the Scrollbar Anchor plugin:

    <script type="text/javascript">
      $('#element').scrollbarAnchor({
        'position' : 'top',
        'scrollbar_button_height' : 20,
        'scope' : window
      });
    </script>

### position
Options: 'top', 'middle'(default), or 'bottom'.

Determines whether the top, middle, or bottom of the chosen element bind to the center of the browser's vertical scrollbar

### scrollbar_button_height

This is a bit of a tricky one, in that I've not yet found a way to determine the height of the browser's scrollbar buttons (top and bottom).
Default is 20px, but you can adjust it, if necessary.

### scope

This is not currently supported, but the intention is that you can use the Scrollbar Anchor plugin on any element that has a vertical scrollbar.
Currently only supports 'window' (default).


## Todo

* Implement 'scope' functionality, to allow the targeted element to be anchored to any parent element with a vertical scrollbar.
* Implement an option to have the element fade in as you start to scroll, and then fade out once the user stops scrolling.

## Author

[Dan Willis](http://twoseven.co.nz) ([@danw](http://twitter.com/danw))

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2012, Dan Willis (dan [*dot*] willis -[at]- gmail [*dot*] com)