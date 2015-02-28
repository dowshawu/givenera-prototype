<div class="app-modal-overlay js-overlay"></div>
<div class="app-modal-body">
    <i class="fa fa-close app-modal-close-btn js-closeBtn"></i>
    <div class="app-modal-content">
        <div class="tab">
            <div class="tab-item js-tabItem js-signupTab" data-tab-id="signup">註冊</div>
            <div class="tab-item js-tabItem js-loginTab" data-tab-id="login">登入</div>
        </div>

        <div class="content">
            <div class="heading js-headingText">
                登入馬上看到百萬筆薪水＆面試資訊！
            </div>

            <div class="social-login">
                <button type="button" class="btn btn-google js-googleBtn"><i class="fa fa-google-plus pull-left"></i>使用 Google 登入</button>
                <button type="button" class="btn btn-facebook js-facebookBtn"><i class="fa fa-facebook pull-left"></i>使用 Facebook 登入</button>
            </div>

            <div class="privacy-text">
                您在本站的所有瀏覽以及評論都是匿名的
            </div>

            <div class="hr text-center">
                <span class="center">Or</span>
            </div>

            <div class="js-alertWidgetRegion"></div>

            <form class="js-form" action="" method="POST">
                <div class="form-group">
                    <input type="email" class="form-control js-emailInput" id="email" name="email" placeholder="Email Address">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control js-passwordInput" id="password" name="password" placeholder="Password">
                </div>

                <div class="form-group login-helper js-loginHelper">
                    <div class="row">
                        <div class="col-md-6">
                            <label>
                                <input type="checkbox" id="remember" class="js-rememberCheckbox" name="remember"> 下次自動登入
                            </label>
                        </div>
                        <div class="col-md-6">
                            <a href="#forgot" class="pull-right">忘記密碼？</a>
                        </div>
                    </div>
                </div>

                <div class="signup-policy js-signupPolicy">
                    創造帳號的同時代表您同意了本網站的: <br><a href="#">使用者規範</a>以及<a href="#">隱私權政策</a>
                </div>
                <button type="button" class="btn btn-primary js-formBtn">登入</button>
            </form>
        </div>
    </div>
</div>
