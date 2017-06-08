var express = require('express');
var useragent = require('express-useragent');
var router = express.Router();
var os;
var add = require('ip');
var ip;
var language;

/* GET home page. */
router.get('/', function(req, res, next) {
    ip = add.address();
    os = useragent.parse(req.headers['user-agent']);
    var arr = req.headers['accept-language'].split(",");
    language = req.acceptsLanguages(arr[0] );
    res.render('index', { IP: ip, OS: os.os, LAN:language});
});

module.exports = router;
