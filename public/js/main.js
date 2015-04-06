require.config({
    baseUrl: 'public/js',
    paths: {
        // global scope
        backbone: '../bower_components/backbone/backbone',
        'backbone.marionette': '../bower_components/marionette/lib/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        d3: '../bower_components/d3/d3',
        parse: '../bower_components/parse/parse',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        typeahead: '../bower_components/typeahead.js/dist/typeahead.jquery',
        // require loading helpers
        json: 'lib/require-json',
        text: 'lib/require-text',
        tpl: 'lib/tpl'
        //behaviors: 'app/behaviors'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.marionette': ['backbone'],
        'underscore': {
            exports: '_'
        },
        'typeahead': ['jquery']
    }
});

/**
 * Require all the globally scoped libraries first
 */
require([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'parse'
], function () {
    'use strict';

    // Now begin the application with the globally scoped libraries loaded.
    require(['app/bootstrap'], function (bootstrap) {
        bootstrap.startApp();
    });
});
