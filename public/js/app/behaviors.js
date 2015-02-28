define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    return [
        (function overlay() {
            require(['behavior/overlay-behavior']);
        })()
    ];

});