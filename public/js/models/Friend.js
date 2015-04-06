define( function (require) {
    'use strict';

    return Parse.Object.extend({
        className: 'Friends',

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