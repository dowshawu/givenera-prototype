define( function (require) {
    'use strict';
    var Parse = require('parse');

    var Post = require('models/Post');

    return Parse.Collection.extend({
        model: Post

    });
});