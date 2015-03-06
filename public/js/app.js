//
// A singleton instance of the entire Marionette.Application and potentially
// other attributes that need a global scope.
//
define(function () {
    'use strict';

    return {
        // the Marionette.Application instance

        me: null,
        router: null,
        userModel: null, // todo
        behaviors: {},
        vent: null,
        reqres: null
    };
});
