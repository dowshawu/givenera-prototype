define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    var app = require('app');

    // Views
    var LoginModalLayout = require('views/login-modal-layout');

    return Backbone.Router.extend({
        routes: {
            'login': 'showLoginModal',
            'signup': 'showSignupModal'
        },

        showLoginModal: function () {
            if (!app.getOverlayModalRegion().currentView) {
                app.getOverlayModalRegion().show(new LoginModalLayout({activeTab: 'login'}));
            }
        },

        showSignupModal: function () {
            if (!app.getOverlayModalRegion().currentView) {
                app.getOverlayModalRegion().show(new LoginModalLayout({activeTab: 'signup'}));
            }
        }
    });
});