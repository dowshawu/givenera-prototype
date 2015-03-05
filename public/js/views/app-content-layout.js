define(function (require) {
   'use strict';
    var Backbone = require('backbone');
    var app = require('app');
    require('backbone.marionette');

    var appContentLayoutTpl = require('tpl!tpls/app-content-layout.tpl');

    var appSidebarView = require('views/app-sidebar-view');
    var appMainView = require('views/app-main-view');
    var appUserProfileView = require('views/app-user-profile-view');

    return  Backbone.Marionette.LayoutView.extend({
        template: appContentLayoutTpl,

        regions: {
            sidebarRegion: '.js-app-content-sidebar',
            mainRegion: '.js-app-content-main'
        },

        initialize: function() {
            var self = this;
            app.vent.on('main:show:profile', function () {
                self.showUserProfileView();
            });
            app.vent.on('main:show:main', function () {
                self.showMainView();
            });
        },

        onBeforeShow: function () {
            this.showSidebarView();
            this.showMainView();
        },

        showUserProfileView: function () {
            if( this.getRegion('mainRegion').currentView ) {
                this.getRegion('mainRegion').show(new appUserProfileView());
            }
        },

        showMainView: function () {
            this.getRegion('mainRegion').show(new appMainView());
        },

        showSidebarView: function () {
            this.getRegion('sidebarRegion').show(new appSidebarView());
        }

    });
});