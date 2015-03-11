define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var HeaderActionViewGuestTpl = require('tpl!tpls/guest/header-action-view-guest.tpl');

    var LoginModalLayout = require('views/login-modal-layout');
    var GuestWelcomeView = require('views/guest/guest-welcome-view');

    return Backbone.Marionette.ItemView.extend({
        template: HeaderActionViewGuestTpl,

        ui: {
            signupLink: ".js-signupLink",
            loginLink: '.js-loginLink'
        },

        events: {
            "click @ui.signupLink": "showSignupModal",
            "click @ui.loginLink": "showLoginModal"
        },

        onShow: function () {
            app.getContentRegion().show(new GuestWelcomeView());
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
});