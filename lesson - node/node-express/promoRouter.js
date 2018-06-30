 module.exports = function(app){ 
    //set header for all kind of request method
    app.all('/promotions',function(req,res,next){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    });
    //set body for each method
    app.get('/promotions',function(req,res,next){
        res.end('Will send all the promotions to you!');
    });
    app.post('/promotions',function(req,res,next){
        res.end('Will add the promotion: ' + req.body.name + ' with detail: ' + req.body.description);
    });
    app.delete('/promotions',function(req,res,next){
        res.end('Deleting all promotions');
    });
    app.get('/promotions/:promoId', function(req,res,next){
        res.end('Will send details of the promotion: ' + req.params.promoId +' to you!');
    });
    app.put('/promotions/:promoId', function(req, res, next){
        res.write('Updating the promotion: ' + req.params.promoId + '\n');
        res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    });
    app.delete('/promotions/:promoId', function(req, res, next){
        res.end('Deleting promotion: ' + req.params.promoId);
    });
} 

