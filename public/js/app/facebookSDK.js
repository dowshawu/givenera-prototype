define(function () {
	'use strict';

	window.fbAsyncInit = function() {
	    Parse.FacebookUtils.init({
	      appId      : '315261162017807',
	      status     : true,
	      cookie     : true,
	      xfbml      : true,
	      version    : 'v2.2'
	    });
	  };

	  // Maybe it should be moved to another place like app.js and bootstrap.js
	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "//connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));

});