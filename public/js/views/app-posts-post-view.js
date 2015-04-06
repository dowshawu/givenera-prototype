define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var Post = require('models/Post');

    var AppPostsPostviewTpl = require('tpl!tpls/app-posts-post-view.tpl');

    var AppSinglePostView = require('views/user/post/single-post-view');

    return Backbone.Marionette.CompositeView.extend({
        tagName: 'div',
        className: 'well posts-grid col-md-6',
        template: AppPostsPostviewTpl,

        ui: {
            singlePostLink: ".js-singlePostLink"
        },

        events: {
            "click @ui.singlePostLink": "showSinglePostView"
        },

        initialize : function () {
            var self = this;
            this.listenTo(this.model, 'change', this.render, this);
            app.vent.on("post:show:single"+this.model.id, function () {
               self.showSinglePostView();
            });
        },

        serializeData: function () {
            return {
                ImageUrl: this.model.get("Image").url(),
                Title: this.model.get("Title"),
                Summary: this.model.get("Summary")
            };
        },

        onRender: function () {
            //console.log(this.model);

        },

        showSinglePostView: function () {
            app.getOverlayRegion().show(new AppSinglePostView({model: this.model}));
        }
    });
});
