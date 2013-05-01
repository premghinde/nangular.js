'use strict';

/**
 * @ngdoc object
 * @name ng.$document
 * @requires $window
 *
 * @description
 * A {@link angular.element jQuery (lite)}-wrapped reference to the `global`
 * element.
 */
function $DocumentProvider(){
  this.$get = ['$window', function(window) {
    return [ window ];
  }];
}
