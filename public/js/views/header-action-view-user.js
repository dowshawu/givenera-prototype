define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');
    var headerActionViewUserTpl = require('tpl!tpls/header-action-view-user.tpl');

    return Backbone.Marionette.LayoutView.extend({
        template: headerActionViewUserTpl,

        ui: {
            addReview: ".js-navbarWriteReview",
            logoutLink: ".js-navbarLogout"
        },

        events: {
            "click @ui.addReview": "showAddReview",
            "click @ui.logoutLink": "logout"
        },

        showAddReview: function () {
            alert('add review // todo');
        },

        logout: function () {
            Parse.User.logOut();

        }
    });
});