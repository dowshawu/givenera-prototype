define( function (require) {
   'use strict';

    return Parse.Object.extend({
        className: 'Posts',

        defaults: {
            Summary: "no summary",
            Title: "Missing Title",
            createdAt: 0,
            postBy: '',
            Image: 'no image'
        }

        //initialize: function () {
        //
        //}
    });
});