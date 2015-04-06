define( function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    require('typeahead');

    var FriendsCollectionViewTpl = require('tpl!tpls/user/friend/friends-collection-view.tpl');

    return Backbone.Marionette.LayoutView.extend({
        template: FriendsCollectionViewTpl,

        ui: {
            smartSearch: ".js-search"
        },

        event: {

        },

        initialize: function () {
            this.liveResult();
        },

        liveResult: function () {

        },

        substringMatcher: function (strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {
                        // the typeahead jQuery plugin expects suggestions to a
                        // JavaScript object, refer to typeahead docs for more info
                        matches.push({ value: str });
                    }
                });

                cb(matches);
            };
        }
    });

})