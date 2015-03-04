define(function (require) {
   'use strict';
    var Backbone = require('backbone');
    require('backbone.wreqr');

    return new Backbone.Wreqr.EventAggregator();
});