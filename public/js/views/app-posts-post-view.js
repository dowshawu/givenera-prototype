define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var Post = require('models/Post');

    var AppPostsPostviewTpl = require('tpl!tpls/app-posts-post-view.tpl');

    var AppSinglePostView = require('views/app-single-post-view');

    return Backbone.Marionette.CompositeView.extend({
        tagName: 'div',
        className: 'row',
        template: AppPostsPostviewTpl,

        ui: {
            singlePostLink: ".js-singlePostLink"
        },

        events: {
            "click @ui.singlePostLink": "showSinglePostView"
        },

        initialize : function() {
            this.listenTo(this.model, 'change', this.render, this);
        },

        showSinglePostView: function () {
            console.log('expend');
            app.getOverlayRegion().show(new AppSinglePostView());
        }
    });
})
