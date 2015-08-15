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

        onRender: function() {

        },

        liveResult: function () {

        }
    });

})