define( function (require) {
   'use strict';

    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var AppSinglePostViewTpl = require('tpl!tpls/user/post/single-post-view.tpl');

    var AppSinglePostEditView = require('views/user/post/single-post-edit-view');

    return Backbone.Marionette.ItemView.extend({
        className: "single-post-modal modal-layout",

        template: AppSinglePostViewTpl,

        ui: {
            editPost: ".js-editPost"
        },

        events: {
            "click @ui.editPost": "showEditPost"
        },

        initialize: function () {
            console.log(this.model);
        },

        serializeData: function () {
            return {
                ImageUrl: this.model.get("Image").url(),
                Title: this.model.get("Title"),
                Summary: this.model.get("Summary")
            };
        },

        showEditPost: function () {
            app.getOverlayRegion().show(new AppSinglePostEditView({model: this.model}));
        }

    });
});