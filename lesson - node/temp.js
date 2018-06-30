var commentSchema = new Schemma({
    rating: {type: Number, min:1,max:5,required:true},
    comment: {type:String, required:true},
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true});


Dishes.find({}).populate('comments.postedBy').exec(function(err,dish){
    if(err) throw err;
    res.json(dish);
});


var https = require('https');
var fs = require('fs');
var options = {
    key: fs.readFileSync(__dirname+'/private.key'),
    cert: fs.readFileSync(__dirname+'/certificate.pem')
};
var secureServer = https.createServer(options,app);

