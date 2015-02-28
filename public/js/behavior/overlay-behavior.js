define(function (require) {
   'use strict';
    var app = require('app');
    var Backbone = require('backbone');
    require('backbone.marionette');

    return app.behaviors.overlay = Backbone.Marionette.Behavior.extend({
        ui: {
            overlay: '.js-overlay',
            closeBtn: '.js-closeBtn'
        },

        events: {
            'click @ui.overlay': 'close',
            'click @ui.closeBtn': 'close'
        },

        close: function () {
            this.view.destroy();
        }

    });
});