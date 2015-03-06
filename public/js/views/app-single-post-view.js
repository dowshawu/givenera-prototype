define( function (require) {
   'use strict';

    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var AppSinglePostViewTpl = require('tpl!tpls/app-single-post-view.tpl');

    return Backbone.Marionette.ItemView.extend({
        className: "single-post-modal modal-layout",

        template: AppSinglePostViewTpl,

        behaviors: {
            overlay: {}
        }
    });
});