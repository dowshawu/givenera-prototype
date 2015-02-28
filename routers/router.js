var express = require('express');
var router = express.Router();

/**
 * Setup public folder for Front-End resources
 */
router.use('/public', express.static('public'));

/**
 * simple logger for this router's requests
 * all requests to this router will first hit this middleware
 */
router.use(function (req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

/**
 * Include Children Routers
 */
// Page Routes
require('./index')(router);
//require('./')
// require('./search')(router);

// Action Routes
// require('./login')(router);
// require('./signup')(router);

/**
 * logout for passport
 */
// router.get('/logout', function (req, res) {
//     req.session.destroy();
//     res.redirect('/');
// });

module.exports = router;