define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');
    var AppPostsPostView = require('views/app-posts-post-view');

    var AppPostsCollectionViewTpl = require('tpl!tpls/app-posts-collection-view.tpl');

    return Backbone.Marionette.CompositeView.extend({
        template: AppPostsCollectionViewTpl,

        childView: AppPostsPostView,

        childViewContainerContainer: '#app-posts-collection-view',

        initialize : function () {
            this.listenTo(this.collection, 'add', this.render);
        }

    });
});