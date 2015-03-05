define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');
    var HeaderActionViewUserTpl = require('tpl!tpls/header-action-view-user.tpl');

    var testView = require('views/app-sidebar-view');

    return Backbone.Marionette.LayoutView.extend({
        template: HeaderActionViewUserTpl,

        ui: {
            addReview: ".js-navbarWriteReview",
            profileLink: ".js-navbarProfile",
            logoutLink: ".js-navbarLogout"
        },

        events: {
            "click @ui.addReview": "showAddReview",
            "click @ui.profileLink": "showProfileView",
            "click @ui.logoutLink": "logout"
        },

        //Render: function() {
        //    console.log('test before Render');
        //    console.log(app.getContentRegion().hasView());
        //    app.getContentRegion().empty();
        //    //app.getContentRegion().show(new appContentLayoutView());
        //},

        showProfileView: function() {
            console.log('click user');
            app.vent.trigger('main:show:profile');
        },

        showAddReview: function () {
            alert('add review // todo');
        },

        logout: function () {
            Parse.User.logOut();

        }
    });
});