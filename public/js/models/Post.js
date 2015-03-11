define( function (require) {
   'use strict';

    return Parse.Object.extend({
        className: 'Posts',

        defaults: {
            Summary: null,
            Title: null,
            postBy: null,
            Image: null
        }

        //initialize: function () {
        //
        //}
    });
});