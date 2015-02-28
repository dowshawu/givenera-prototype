module.exports = function (router) {
    'use strict';
    router.get('/', function (req, res) {
        res.render('index', {year: Date.prototype.getYear()});
    });
};