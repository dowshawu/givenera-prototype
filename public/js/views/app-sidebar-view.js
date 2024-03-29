define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    var app = require('app');
    require('backbone.marionette');

    var AppSidebarViewTpl = require('tpl!tpls/app-sidebar-view.tpl');

    return Backbone.Marionette.LayoutView.extend({
        template: AppSidebarViewTpl,

        className: 'sidebar',

        ui: {
            overviewLink: ".js-sidebar-overview",
            friendsLink: ".js-sidebar-friends",
            mapLink: ".js-sidebar-map"
        },

        events: {
            "click @ui.overviewLink": "clickOverview",
            "click @ui.friendsLink": "clickFriends",
            "click @ui.mapLink": "clickMap"
        },

        clickOverview: function () {
            app.vent.trigger('main:show:collectionPost');
        },

        clickFriends: function () {
            app.vent.trigger('main:show:friendsList');
            //todo: friend function
        },

        clickMap: function () {
            //todo: map
        }
    });
});