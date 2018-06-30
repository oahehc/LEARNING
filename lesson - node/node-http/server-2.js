var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req,res){
    console.log('Request for ' + req.url + ' by method ' + req.method);

    // only handle GET method now
    if(req.method == 'GET'){
        var fileUrl;
        if(req.url == '/') fileUrl = '/index.html'; //if user just link to localhost:3000/, set index.html as default page
        else fileUrl = req.url;
        
        var filePath = path.resolve('./public' + fileUrl); //get file path
        
        var fileExt = path.extname(filePath); //only handle .html file now
        if(fileExt == '.html'){
            fs.exists(filePath, function(exists){
                //return 404 if file not exist
                if(!exists){
                    res.writeHead(404, {'Content-Type':'text/html'});
                    res.end('<h1>Error 404: ' + fileUrl + ' not found</h1>');
                    return;
                }
                //set file content to body
                res.writeHead(200,{'Content-Type':'text/html'});
                fs.createReadStream(filePath).pipe(res);
            });
        }
        //return error if request not HTML
        else{
            res.writeHead(404, {'Content-Type':'text/html'});
            res.end('<h1>Error 404: ' + fileUrl + ' not a HTML file</h1>');
            return;
        }
    }
    //return error if method is not GET
    else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('<h1>Error 404: ' + req.method + ' not supported</h1>');
        return;
    }
})

server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});