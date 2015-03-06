define( function (require) {
    'use strict';

    var Post = require('models/Post');

    return Parse.Collection.extend({
        model: Post


    });
});