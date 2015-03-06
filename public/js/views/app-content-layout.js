define(function (require) {
   'use strict';
    var Backbone = require('backbone');
    var app = require('app');
    require('backbone.marionette');

    var AppContentLayoutTpl = require('tpl!tpls/app-content-layout.tpl');

    var AppSidebarView = require('views/app-sidebar-view');
    var AppMainView = require('views/app-main-view');
    var AppPostsCollectionView = require('views/app-posts-collection-view');
    var AppUserProfileView = require('views/app-user-profile-view');

    return  Backbone.Marionette.LayoutView.extend({
        template: AppContentLayoutTpl,

        regions: {
            sidebarRegion: '.js-app-content-sidebar',
            mainRegion: '.js-app-content-main'
        },

        initialize: function() {
            var self = this;
            var Posts = app.reqres.request("get:data:posts");
            this.Posts = Posts;
            console.log(Posts);
            app.vent.on('main:show:profile', function () {
                self.showUserProfileView();
            });
            app.vent.on('main:show:main', function () {
                self.showMainView();
            });
            app.vent.on('main:show:collectionPost', function () {
                self.showPostsCollectionView({collection: Posts});
            });
        },

        onBeforeShow: function () {
            this.showSidebarView();
            this.showPostsCollectionView({collection: this.Posts});
        },

        showUserProfileView: function () {
            this.getRegion('mainRegion').show(new AppUserProfileView());
        },

        showPostsCollectionView: function (Posts) {
            this.getRegion('mainRegion').show(new AppPostsCollectionView(Posts));
        },

        showMainView: function () {
            this.getRegion('mainRegion').show(new AppMainView());
        },

        showSidebarView: function () {
            this.getRegion('sidebarRegion').show(new AppSidebarView());
        }

    });
});