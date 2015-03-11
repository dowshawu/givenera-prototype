define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var PostCollection = require('collections/PostCollection');
    var Post = require('models/Post');

    var HeaderActionViewUserTpl = require('tpl!tpls/user/header-action-view-user.tpl');

    var AppContentLayout = require('views/app-content-layout');
    var AppSinglePostNewView = require('views/app-single-post-new-view');


    return Backbone.Marionette.LayoutView.extend({
        template: HeaderActionViewUserTpl,

        ui: {
            newPost: ".js-navbarWriteReview",
            profileLink: ".js-navbarProfile",
            logoutLink: ".js-navbarLogout"
        },

        events: {
            "click @ui.newPost": "newPost",
            "click @ui.profileLink": "showProfileView",
            "click @ui.logoutLink": "logout"
        },

        initialize: function () {
            this.posts = new PostCollection();
            var dataPool = {
                posts: this.posts
            };
            this.posts.query = new Parse.Query(Post);
            this.posts.query.equalTo("postBy", Parse.User.current());
            this.posts.fetch();

            app.reqres.setHandler("get:data:posts", function () {
                return dataPool.posts;
            });
        },

        onBeforeShow: function () {
            app.getContentRegion().show(new AppContentLayout());
        },

        showProfileView: function () {
            app.vent.trigger('main:show:profile');
        },

        newPost: function () {
            app.getOverlayRegion().show(new AppSinglePostNewView({model: new Post()}));
        },

        logout: function () {
            Parse.User.logOut();

        }
    });
});