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
    var AppUserFriendsCollectionView = require('views/user/friend/friends-collection-view');

    return  Backbone.Marionette.LayoutView.extend({
        template: AppContentLayoutTpl,

        regions: {
            sidebarRegion: '.js-app-content-sidebar',
            mainRegion: '.js-app-content-main'
        },

        initialize: function(options) {
            var self = this;
            var Posts = options.dataPool.allPosts;
            //this.Posts = Posts;
            app.vent.on('main:show:profile', function () {
                self.showUserProfileView();
            });
            app.vent.on('main:show:main', function () {
                self.showMainView();
            });
            app.vent.on('main:show:collectionPost', function () {
                self.showPostsCollectionView({collection: options.dataPool.allPosts});
            });
            app.vent.on('main:show:', function (view) {
                self.showMainView(view);
            });
            app.vent.on('sidebar:show', function () {
                self.showSidebarView({dataPool: options.dataPool});
            });
            app.vent.on('main:show:friendsList', function () {
                self.showUserFriendsListView();
            });
        },

        onBeforeShow: function () {
            app.vent.trigger('sidebar:show');
            app.vent.trigger('main:show:collectionPost');

        },

        showUserProfileView: function () {
            this.getRegion('mainRegion').show(new AppUserProfileView());
        },

        showPostsCollectionView: function (Posts) {
            this.getRegion('mainRegion').show(new AppPostsCollectionView(Posts));
        },

        showMainView: function (view) {
            this.getRegion('mainRegion').show(new AppMainView());
        },

        showUserFriendsListView: function (Friends) {
            this.getRegion('mainRegion').show(new AppUserFriendsCollectionView(Friends));
        },

        showSidebarView: function (dataPool) {
            this.getRegion('sidebarRegion').show(new AppSidebarView(dataPool));
        }

    });
});