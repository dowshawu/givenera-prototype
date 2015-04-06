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
            this.allPosts = new PostCollection();
            this.personalPosts = new PostCollection();
            this.dataPool = {
                allPosts: this.allPosts,
                personalPosts: this.personalPosts
            };
            this.allPosts.query = new Parse.Query(Post);
            this.allPosts.query.equalTo("postBy", Parse.User.current());
            this.allPosts.query.descending("updatedAt");
            this.allPosts.fetch();

            app.reqres.setHandler("get:data:allPosts", function () {
                return this.dataPool.allPosts;
            });
            app.reqres.setHandler("get:data:personalPosts", function () {
                return this.dataPool.personalPosts;
            });
        },

        onBeforeShow: function () {
            app.getContentRegion().show(new AppContentLayout({dataPool: this.dataPool}));
        },

        showProfileView: function () {
            app.vent.trigger('main:show:profile');
        },

        newPost: function () {
            app.getOverlayRegion().show(new AppSinglePostNewView({dataPool: this.dataPool}));
        },

        logout: function () {
            Parse.User.logOut();

        }
    });
});