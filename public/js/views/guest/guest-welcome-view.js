define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var GuestWelcomeViewTpl = require('tpl!tpls/guest/guest-welcome-view.tpl');
    var LoginModalLayout = require('views/login-modal-layout');

    return Backbone.Marionette.ItemView.extend({
        template: GuestWelcomeViewTpl,

        className: "test",

        ui: {
            signupLink: ".js-signupLink",
            loginLink: ".js-loginLink"
        },

        events: {
            "click @ui.signupLink": "showSignupModal",
            "click @ui.loginLink": "showLoginModal"
        },

        showLoginModal: function () {
            if (!app.getOverlayRegion().currentView) {
                app.getOverlayRegion().show(new LoginModalLayout({activeTab: 'login'}));
            }
        },

        showSignupModal: function () {
            if (!app.getOverlayRegion().currentView) {
                app.getOverlayRegion().show(new LoginModalLayout({activeTab: 'signup'}));
            }
        }


    });
})