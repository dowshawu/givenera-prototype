define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');

    var appMainViewTpl = require('tpl!tpls/app-main-view.tpl');

    return Backbone.Marionette.LayoutView.extend({
        template: appMainViewTpl,

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