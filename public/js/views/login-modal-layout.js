define(function (require) {
    'use strict';
    var app = require('app');
    var $ = require('jquery');
    var Backbone = require('backbone');
    require('backbone.marionette');
    require('backbone.wreqr');

    var AlertWidget = require('views/widgets/alert-widget');

    var loginModalViewTpl = require('tpl!tpls/login-modal-layout.tpl');

    return Backbone.Marionette.LayoutView.extend({
        template: loginModalViewTpl,

        className: 'login-modal-layout modal-layout',

        behaviors: {
            overlay: {}
        },

        ui: {
            tabItem: '.js-tabItem',
            signupTab: '.js-signupTab',
            loginTab: '.js-loginTab',
            headingText: '.js-headingText',
            googleBtn: '.js-googleBtn',
            facebookBtn: '.js-facebookBtn',
            form: '.js-form',
            usernameInput: '.js-usernameInput',
            passwordInput: '.js-passwordInput',
            rememberCheckbox: '.js-rememberCheckbox',
            signupPolicy: '.js-signupPolicy',
            loginHelper: '.js-loginHelper',
            formBtn: '.js-formBtn'
        },

        events: {
            'click @ui.tabItem': 'clickTab',
            'click @ui.facebookBtn': 'loginWithFacebook',
            'click @ui.formBtn': 'onSubmit'
        },

        regions: {
            alertWidgetRegion: '.js-alertWidgetRegion'
        },

        viewState: {
            activeTab: 'signup' // default tab is set to sign up
        },

        initialize: function (options) {
            options.activeTab = options.activeTab || this.viewState.activeTab;
            this.viewState.activeTab = options.activeTab;
            app.vent.on("foo", function() {
                console.log("foo event");
            });
        },

        onRender: function () {
            this.updateUiState();
        },

        clickTab: function (e) {
            // Set active class as a state to DOM
            this.viewState.activeTab = e.target.getAttribute('data-tab-id');
            this.updateUiState();
        },

        updateUiState: function () {
            this.updateTabState();
            this.updateHeadingText();
            this.updateFormState();
        },

        updateTabState: function () {
            $(this.ui.tabItem).removeClass('active');
            $(this.ui[this.viewState.activeTab + 'Tab']).addClass('active');
        },

        updateHeadingText: function () {
            var text = (this.viewState.activeTab === 'signup')? "Sign-up" : "Sign-in";

            $(this.ui.headingText).html(text + " to start share the loves");
        },

        updateFormState: function () {
            // clear existing data upon switch tab
            this.ui.usernameInput.blur();
            this.ui.usernameInput.val('');
            this.ui.passwordInput.blur();
            this.ui.passwordInput.val('');

            if (this.viewState.activeTab === 'signup') {
                this.ui.form.attr('action', 'signup');
                this.ui.signupPolicy.show();
                this.ui.loginHelper.hide();
                this.ui.formBtn.html('Sign-up Now');
            } else {
                this.ui.form.attr('action', 'login');
                this.ui.signupPolicy.hide();
                this.ui.loginHelper.show();
                this.ui.formBtn.html('Sign-in');
            }
        },

        loginWithFacebook: function () {
            app.vent.trigger("foo");
            // window.location.href = '/login/facebook';
        },

        onSubmit: function () {
            var username = this.ui.usernameInput.val();
            var password = this.ui.passwordInput.val();
            (this.viewState.activeTab === 'signup')? this.signup(username, password) : this.login(username, password);
        },

        login: function (username, password) {
            var self = this;
            Parse.User.logIn(username, password, {
                success: function (user) {
                    console.log('login success', user);
                    window.location.href = "/";
                    self.close();
                },
                error: function () {
                    // console.log('error', error);
                    self.showAlert("Invalid Username or Password", "danger");
                }
            });
        },

        signup: function (username, password) {

            var self = this;
            Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
                success: function (user) {
                    // console.log('signup success', user);
                    self.showAlert("Sign Up Success", "success");
                    window.location.href = "/";
                },
                error: function (user, error) {
                    // console.log(errorMessage);
                    self.showAlert(error.message, "danger");
                }
            });
        },

        showAlert: function (msg, type) {
            this.alertWidgetRegion.show(new AlertWidget({
                type: type,
                text: msg,
                animation: true,
                flash: 5
            }));
        }
    });
});