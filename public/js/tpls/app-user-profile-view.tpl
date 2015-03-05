<div class="well well-light well-sm no-margin no-padding">
    <div class="row">
        <div class="col-sm-12">
            <div id="myCarousel" class="carousel fade profile-carousel">
                <div class="air air-bottom-right padding-10">
                    <a href="#" class="btn txt-color-white bg-color-pinkDark btn-sm js-editProfile"><i class="fa fa-pencil-square-o"></i> Edit Profile</a>
                </div>
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="public/img/smartadmin/img/demo/s1.jpg" alt="demo user">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-12">
            <div class="row">
                <div class="col-sm-3 profile-pic">
                    <img src="public/img/smartadmin/img/avatars/sunny-big.png" alt="demo user">
                    <!-- todo: profile picture on parse.com  -->
                    <div class="padding-10">
                        <h4 class="font-md"><strong>12</strong>
                            <br>
                            <small>Helps</small></h4>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h1> <%= username %> <br> <small><%= fullname%></small></h1>

                    <ul class="list-unstyled">
                        <li>
                            <p class="text-muted"><i class="fa fa-phone"></i>&nbsp;&nbsp;<span class="txt-color-darken"><%= phone %></span></p>
                        </li>
                        <li>
                            <p class="text-muted"><i class="fa fa-envelope"></i><a href="mailto:<%= email %>">&nbsp;&nbsp;<span class="txt-color-darken"><%= email %></span></a></p>
                        </li>
                        <li>
                            <p class="text-muted"><i class="fa fa-home"></i>&nbsp;&nbsp;
                                <span class="txt-color-darken">
                                    <% if( city===null && state===null && zip===null) { %>We don't know
                                    <% } else { %>
                                    <%= city %>&nbsp<%= state %>&nbsp<%= zip %></span>
                                    <% } %>
                            </p>
                        </li>
                        <li>
                            <p class="text-muted"><i class="fa fa-birthday-cake"></i>&nbsp;&nbsp;<span class="txt-color-darken"><%= dob %></span></p>
                        </li>
                    </ul>
                    <br>
                    <p class="font-md">
                        <i>A little about me...</i>
                    </p>
                    <p>
                        Todo

                    </p>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
</div>

