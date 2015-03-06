define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');
    var PostsCollection = require('collections/PostCollection');
    var AppPostsPostView = require('views/app-posts-post-view');

    var AppPostsCollectionViewTpl = require('tpl!tpls/app-posts-collection-view.tpl');

    return Backbone.Marionette.CompositeView.extend({
        template: AppPostsCollectionViewTpl,

        childView: AppPostsPostView,

        childViewContainerContainer: '#app-posts-collection-view',

        onRender: function () {
            console.log('rendering');
        }

    });
})