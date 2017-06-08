var express = require('express');
var useragent = require('os');
var router = express.Router();
var os = useragent.type() + " " + useragent.release();
var ip;
var language;

/* GET home page. */
router.get('/', function(req, res, next) {
    ip = req.ip;
    var arr = req.headers['accept-language'].split(",");
    language = req.acceptsLanguages(arr[0] );
    res.render('index', { IP: ip, OS: os, LAN:language});
});

module.exports = router;
