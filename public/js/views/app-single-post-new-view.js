define( function (require) {
    'use strict';

    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');

    var AppSinglePostViewTpl = require('tpl!tpls/app-single-post-edit.tpl');
    var Post = require('models/Post');
    var AppSinglePostView = require('views/app-single-post-view');

    return Backbone.Marionette.ItemView.extend({
        className: "single-post-modal modal-layout",

        template: AppSinglePostViewTpl,

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
            "change @ui.uploadPhoto": "attachPhoto",
            "click @ui.savePostButton": "clickSavePost",
            "click @ui.cancelButton": "clickCancel"
        },

        initialize: function () {
            this.updatePhotoReader();
            this.model = new Post();
        },

        serializeData: function () {
            return {
                ImageUrl: null,
                Title: this.model.get("Title"),
                Summary: this.model.get("Summary")
            };
        },

        clickSavePost: function () {
            var post = this.validateInput();
            if( post===false ) {
                // Todo: alert function;
                alert("no photo select");
            }
            else {
                this.model.save();
                this.collection.add(this.model);
            }
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

        },

        updatePhotoReader: function () {
            if( this.ui.previewPhoto.attr('src')===null ) {
                this.ui.previewPhoto.hide();
            } else {
                this.ui.previewPhoto.show();
            }
        },

        validateInput: function () {
            var fileUploadControl = this.ui.uploadPhoto.get(0);
            console.log(fileUploadControl);
            if ( fileUploadControl.files.length>0 ) {
                var file = fileUploadControl.files[0];
                var name = "photo.jpg";

                var parseFile = new Parse.File(name, file);
                parseFile.save().then(function () {
                    console.log("file uploaded");
                }, function(error) {
                    alert("error");
                });

                this.model.set("Title", this.ui.titleInput.val().trim());
                this.model.set("Summary", this.ui.summaryInput.val().trim());
                this.model.set("Image", parseFile);
                this.model.set("postBy", Parse.User.current());
                return true;
            } else {
                return false;
            }
        }

    });
});