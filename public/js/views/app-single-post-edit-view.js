define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var AppSinglePostEditTpl = require('tpl!tpls/app-single-post-edit.tpl');

    return Backbone.Marionette.ItemView.extend({
        className: "single-post-modal modal-layout",

        template: AppSinglePostEditTpl,

        behaviors: {
            overlay: {}
        },

        ui: {
            savePostButton: ".js-savePost",
            cancelButton: ".js-cancel",
            uploadPhoto: ".js-photoUpload",
            previewPhoto: ".js-photoPreview",
            titleInput: ".js-title",
            summaryInput: ".js-summary"
        },

        events: {
            "click @ui.savePostButton": "clickSavePost",
            "click @ui.cancelButton": "clickCancel",
            "change @ui.uploadPhoto": "attachPhoto"
        },

        serializeData: function () {
            return {
                ImageUrl: this.model.get("Image").url(),
                Title: this.model.get("Title"),
                Summary: this.model.get("Summary")
            };
        },

        clickSavePost: function () {
            this.model.set('Title', this.ui.titleInput.val().trim());
            this.model.set('Summary', this.ui.summaryInput.val().trim());
            this.model.save();
            app.vent.trigger("post:show:single"+this.model.get("Title"));
        },

        clickCancel: function () {
            app.vent.trigger("post:show:single"+this.model.get("Title"));
        },

        attachPhoto: function () {
            var self = this;
            if(this.ui.uploadPhoto.get(0).files && this.ui.uploadPhoto.get(0).files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    self.ui.previewPhoto.attr('src', e.target.result);
                };
                reader.readAsDataURL(this.ui.uploadPhoto.get(0).files[0]);
            } else {
                this.ui.previewPhoto.attr('src', null);
            }
            this.updatePhotoReader();
        }
    });
});