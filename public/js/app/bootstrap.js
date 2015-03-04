define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    require('backbone.wreqr');
    var app = require('app');
    // var Parse = require('parse');
    var HeaderActionGuestView = require('views/header-action-guest-view');
    var HeaderActionUserView = require('views/header-action-user-view');
    var GuestWelcomeView = require('views/guest-welcome-view');
    var AppContentLayout = require('views/app-content-layout');

    var initApplication = function () {
        var application = new Backbone.Marionette.Application();
        app.me = application;

        application.addInitializer(function () {
            Backbone.Marionette.Behaviors.behaviorsLookup = function () {
                return app.behaviors;
            };
            require(['app/behaviors']);
        });

        application.addInitializer(function () {
            var vent = new Backbone.Wreqr.EventAggregator();
            app.vent = vent;
        });
        Parse.initialize("kOs0abVTIwGAl3pJmHjvpuczLdv0ds0DuFWIXLZz", "v8lbja7VgYEYtbJ7UTHJnEteBzFTy1FfsGkCOBcs");
        // require(['app/facebookSDK']);

        application.addInitializer(function () {
            application.addRegions({
                headerModalRegion: '#js-headerActionView',
                contentModalRegion: '#js-contentModalRegion',
                overlayModalRegion: '#js-overlayModalRegion'
            });
            app.getContentRegion = function () {
                return app.me.contentModalRegion;
            };
            app.getHeaderRegion = function () {
                return app.me.headerModalRegion;
            };
            app.getOverlayRegion = function () {
                return app.me.overlayModalRegion;
            };
        });

        application.addInitializer(function () {
            require(['app/router'], function (Router) {
                app.router = new Router();
                Backbone.history.start();
            });
        });

        application.addInitializer(function () {
            if(Parse.User.current()) {
                console.log("user login");
                app.getHeaderRegion().show(new HeaderActionUserView());
                app.getContentRegion().show(new AppContentLayout());
            } else {
                // todo: redirect to the intro page for the user later.
                console.log("guest visit");
                app.getHeaderRegion().show(new HeaderActionGuestView());
                app.getContentRegion().show(new GuestWelcomeView());
            }
        });

        return application.start();
    };

    return {
        startApp: function () {
            initApplication();
        }
    };
});
