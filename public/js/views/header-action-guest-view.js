define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');
    var headerActionViewGuestTpl = require('tpl!tpls/header-action-view-guest.tpl');
    var loginModalLayout = require('views/login-modal-layout');
    //var guestWelcomeView = require('views/guest-welcome-view');

    return Backbone.Marionette.ItemView.extend({
        template: headerActionViewGuestTpl,

        ui: {
            signupLink: ".js-signupLink",
            loginLink: '.js-loginLink'
        },

        events: {
            "click @ui.signupLink": "showSignupModal",
            "click @ui.loginLink": "showLoginModal"
        },

        //afterRender: function () {
        //    app.getContentRegion().show(new guestWelcomeView());
        //},

        showLoginModal: function () {
            if (!app.getOverlayRegion().currentView) {
                app.getOverlayRegion().show(new loginModalLayout({activeTab: 'login'}));
            }
        },

        showSignupModal: function () {
            if (!app.getOverlayRegion().currentView) {
                app.getOverlayRegion().show(new loginModalLayout({activeTab: 'signup'}));
            }
        }
    });
});