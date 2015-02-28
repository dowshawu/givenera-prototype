define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');
    // var Parse = require('parse');
    var HeaderActionViewGuest = require('views/header-action-view-guest');
    var HeaderActionViewUser = require('views/header-action-view-user');

    var initApplication = function () {
        var application = new Backbone.Marionette.Application();
        app.me = application;

        application.addInitializer(function () {
            Backbone.Marionette.Behaviors.behaviorsLookup = function () {
                return app.behaviors;
            };
            require(['app/behaviors']);
        });

        Parse.initialize("kOs0abVTIwGAl3pJmHjvpuczLdv0ds0DuFWIXLZz", "v8lbja7VgYEYtbJ7UTHJnEteBzFTy1FfsGkCOBcs");
        // require(['app/facebookSDK']);

        application.addInitializer(function () {
            application.addRegions({
                headerModalRegion: '#js-headerActionView',
                globalModalRegion: '#js-globalModalRegion',
                overlayModalRegion: '#js-overlayModalRegion'
            });
            app.getGlobalRegion = function () {
                return app.me.globalModalRegion;
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
                app.getHeaderRegion().show(new HeaderActionViewUser());
            } else {
                // todo: redirect to the intro page for the user later.
                console.log("guest visit");
                app.getHeaderRegion().show(new HeaderActionViewGuest());
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
