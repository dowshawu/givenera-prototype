<div class="app-modal-overlay js-overlay"></div>
<div class="app-modal-body">
    <i class="fa fa-close app-modal-close-btn js-closeBtn"></i>
    <div class="app-modal-content">
        <div class="tab">
            <div class="tab-item js-tabItem js-signupTab" data-tab-id="signup">Sign-up</div>
            <div class="tab-item js-tabItem js-loginTab" data-tab-id="login">Sign-in</div>
        </div>

        <div class="content">
            <div class="heading js-headingText">
                Sign-in to share the loves
            </div>

            <div class="social-login">
                <button type="button" class="btn btn-google js-googleBtn"><i class="fa fa-google-plus pull-left"></i>Google sign-in</button>
                <button type="button" class="btn btn-facebook js-facebookBtn"><i class="fa fa-facebook pull-left"></i>Facebook sign-in</button>
            </div>

            <div class="hr text-center">
                <span class="center">Or</span>
            </div>

            <div class="js-alertWidgetRegion"></div>

            <form class="js-form" action="" method="POST">
                <div class="form-group">
                    <input type="email" class="form-control js-usernameInput" id="username" name="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control js-passwordInput" id="password" name="password" placeholder="Password">
                </div>

                <div class="form-group login-helper js-loginHelper">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="#forgot" class="pull-right js-forgetPassword">forget password？</a>
                        </div>
                    </div>
                </div>

                <div class="signup-policy js-signupPolicy">
                    By signing up, I accept the <br><a href="#">Terms of Service</a>以及<a href="#">Privacy Policy</a>
                </div>
                <button type="button" class="btn btn-primary js-formBtn">Sign-in</button>
            </form>
        </div>
    </div>
</div>
