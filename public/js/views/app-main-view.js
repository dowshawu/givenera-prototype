define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var AppMainViewTpl = require('tpl!tpls/app-main-view.tpl');

    return Backbone.Marionette.LayoutView.extend({
        template: AppMainViewTpl,

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
            app.vent.trigger('main:show:main');
        },

        clickFriends: function () {
            console.log('click Friends');
            app.vent.trigger('main:show:collectionPost');
        },

        clickMap: function () {
            console.log('click Map');
        }
    });
});