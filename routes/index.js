var express = require('express');
var useragent = require('express-useragent');
var router = express.Router();
var os;
var ip =  require('request-ip');;
var language;
var clientIP;

/* GET home page. */
router.get('/', function(req, res, next) {
    clientIP = ip.getClientIp(req);
    os = useragent.parse(req.headers['user-agent']);
    var arr = req.headers['accept-language'].split(",");
    language = req.acceptsLanguages(arr[0] );
    res.render('index', { IP: clientIP, OS: os.os, LAN:language});
});

module.exports = router;
