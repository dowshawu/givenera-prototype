define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');
    var headerActionViewUserTpl = require('tpl!tpls/header-action-view-user.tpl');
    var appContentLayoutView = require('views/app-content-layout');

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

        onRender: function() {
            console.log('test before Render');
            console.log(app.getContentRegion().hasView());
            app.getContentRegion().empty();
            //app.getContentRegion().show(new appContentLayoutView());
        },

        showAddReview: function () {
            alert('add review // todo');
        },

        logout: function () {
            Parse.User.logOut();

        }
    });
});