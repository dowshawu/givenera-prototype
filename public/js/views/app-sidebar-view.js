define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');

    var appSidebarViewTpl = require('tpl!tpls/app-sidebar-view.tpl');

    return Backbone.Marionette.LayoutView.extend({
        template: appSidebarViewTpl,

        ui: {
            overviewLink: ".sidebar-overview",
            friendsLink: ".sidebar-friends",
            mapLink: ".sidebar-map"
        },

        event: {
            "click @ui.overviewLink": "clickOverview",
            "click @ui.friendsLink": "clickFriends",
            "click @ui.mapLink": "clickMap"
        },

        clickOverview: function () {
            console.log('click Overview');
        },

        clickFriends: function () {
            console.log('click Friends');
        },

        clickMap: function () {
            console.log('click Map');
        }
    });
});