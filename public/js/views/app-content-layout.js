define(function (require) {
   'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');

    var appContentLayoutTpl = require(['tpl!tpls/app-content-layout.tpl']);

    var appSidebarView = require(['views/app-sidebar-view']);
    var appMainView = require(['views/app-main-view']);

    return  Backbone.Marionette.LayoutView.extend({
        template: appContentLayoutTpl,

        regions: {
            sidebarRegion: '.js-app-content-sidebar',
            mainRegion: '.js-app-content-main'
        },

        onBeforeShow: function () {
            this.showChildView('sidebarRegion', new appSidebarView());
            this.showChildView('mainRegion', new appMainView());
        }
    });
});