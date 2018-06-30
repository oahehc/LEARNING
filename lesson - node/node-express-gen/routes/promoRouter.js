var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/').all(function(req,res,next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end('Will send all the promotion to you!');
})
.post(function(req,res,next){
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req,res,next){
    res.end('Deleting all promotion');
});



module.exports = promoRouter;

