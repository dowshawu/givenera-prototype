/**
 * Alert Widget:
 *
 * @use:
 *      new AlertWidget({
 *          type: ""   // bootstrap's alert classes: success(green), info(blue), warning(yellow), danger(red)
 *          text: "",  // text you want to show
 *          flash: 5,  // number of seconds you want alert to stay. if not specified, alert stays forever
 *          animation: true   // if true alert will fade in
 *      });
 *
 * @dependencies:
 *      1. bootstrap.css
 *
 */
define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');

    var alertWidgetTpl = require('tpl!tpls/widgets/alert-widget.tpl');

    return Backbone.Marionette.ItemView.extend({
        template: alertWidgetTpl,

        className: 'alert alert-widget',

        templateHelpers: {
            getFaClassName: function () {
                var classHash = {
                    success: "fa-check",
                    info: "fa-info-circle",
                    warning: "fa-warning",
                    danger: "fa-exclamation-circle"
                };
                return classHash[this.type];
            }
        },

        initialize: function (options) {
            options.type = options.type || "info";
            this.$el.addClass('alert-' + options.type);

            this.options = options;
        },

        serializeData: function () {
            return {
                type: this.options.type,
                text: this.options.text
            };
        },

        onRender: function () {
            if (this.options.animation) {
                this.$el.fadeIn(200);
            }

            if (this.options.flash) {
                this.$el.delay(this.options.flash * 1000).fadeOut(200);
            }
        }
    })
});