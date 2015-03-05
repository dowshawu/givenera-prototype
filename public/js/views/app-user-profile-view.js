define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    require('backbone.marionette');
    var app = require('app');
    //var Parse = require('parse');

    //var UserModel = require('models/User');

    var AppUserProfileViewTpl = require('tpl!tpls/app-user-profile-view.tpl');

    return Backbone.Marionette.ItemView.extend({
        template: AppUserProfileViewTpl,

        className: "user-profile",

        //model: app.userModel,

        serializeData: function () {
            return {
                username: app.userModel.getUsername(),
                email: (app.userModel.get('email')===undefined)? "We don't know" : app.userModel.get('email'),
                city: (app.userModel.get('city')===undefined)? null : app.userModel.get('city'),
                dob: (app.userModel.get('dob')===undefined)? "We don't know" : app.userModel.get('dob'),
                fullname: (app.userModel.get('fullname')===undefined)? "We don't know" : app.userModel.get('fullname'),
                gender: (app.userModel.get('gender')===undefined)? "We don't know" : app.userModel.get('gender'),
                phone: (app.userModel.get('phone')===undefined)? "We don't know" : app.userModel.get('phone'),
                joinDate: (app.userModel.get('createdAt')===undefined)? "We don't know" : app.userModel.get('createdAt'),
                state: (app.userModel.get('state')===undefined)? null : app.userModel.get('state'),
                zip: (app.userModel.get('zip')===undefined)? null : app.userModel.get('zip')
            }
        },

        ui: {
            editProfileLink: ".js-editProfile"
        },

        events: {
            "click @ui.editProfileLink": "showEditProfileView"
        },

        showEditProfileView: function () {

            alert('todo: edit view');

        }

    });
})