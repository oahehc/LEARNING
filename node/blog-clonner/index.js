/* eslint-disable no-console */
var express = require('express');
var path = require('path');
var superagent = require('superagent');
var request = require('request');
var requestPromise = require('request-promise');
var geoip = require('geoip-lite');
var fs = require('fs');

var app = express();
var port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/blog', (req, res, next) => { // clone blog
    var queryUrl = req.query.q;
    console.log('queryUrl', queryUrl);
    superagent.get(queryUrl)
        .end((err, sres) => {
            if (err) next(err);
            console.log('sres', sres);
            var regex = /[\S\s]+<body/;
            var body = sres.text.replace(regex, '').replace(/[\S\s]+?>/, ''); // .replace(/<script[\S\s]+<\/script>/, '')
            res.send(body);
        });
});

app.get('/address', (req, res, next) => { // get location by googlemap api
    var key = '';
    var location = '25.044363,121.54223';
    var radius = 5000;
    var options = {
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        method: 'GET',
        qs: {
            'location': location,
            'radius': radius,
            'types': 'food',
            'name': req.query.q,
            'key': key,
            'language': 'zh-TW',
        },
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            var resultObj = JSON.parse(body);
            if (resultObj.results.length === 0) {
                res.send('no result');
            } else {
                console.log(resultObj.results);
                var result = resultObj.results.reduce((string, obj) => {
                    string += obj.name + ': ' + obj.vicinity + ' | ' + obj.geometry.location.lat + ',' + obj.geometry.location.lng + '<br>';
                    return string;
                }, '');
                console.log(result);
                res.send(result);
            }
        } else {
            console.log('STATUS', response.statusCode);
            console.log('ERROR', error);
        }
    });
});

app.get('/location', (req, res, next) => { // check location by ip
    var ip = getClientIp(req);
    var geo = geoip.lookup(ip);
    console.log(ip, geo);
    res.send(geo);
});

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
// var oauth2Client = new OAuth2(process.env.YOUR_CLIENT_ID, process.env.YOUR_CLIENT_SECRET, process.env.YOUR_REDIRECT_URL);
var oauth2Client = new OAuth2('132512om', 'iVKnTwc', 'http://localhost:3000/authFinish');
var token = {
    access_token: 'ya29.GGNxQOJA24rk-',
    refresh_token: '1/tW_k_6gwEvJgc',
    token_type: 'Bearer',
    expiry_date: 148927
};
var drive = google.drive('v3');
var infoFile = './data/info.json';
app.get('/auth4', (req, res, next) => { // auth google account
    console.log('get auth');
    var scopes = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.metadata'];
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
        scope: scopes,
    });
    console.log(url);
    res.writeHead(301, {
        Location: url,
    });
    res.end();
});
app.get('/authFinish', (req, res, next) => { // auth google account
    console.log('authFinish');
    console.log('authCode', req.query.code);
    oauth2Client.getToken(req.query.code, (err, tokens) => {
        console.log('tokens', tokens);
        console.log(JSON.stringify(tokens));
        if (!err) {
            oauth2Client.setCredentials(tokens);
            // listFiles(oauth2Client);
            // fs.readFile(infoFile, function(err, content) {
            //     if (err) {
            //         console.log('Error loading client secret file: ' + err);
            //         return;
            //     }
            //     createFolder(oauth2Client, function(err, file) {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             console.log('Folder Id: ', file.id);
            //             var userInfo = JSON.parse(content);
            //             userInfo.push({
            //                 token: tokens,
            //                 folder_id: file.id,
            //                 code: req.query.code,
            //             });
            //             fs.writeFile(infoFile, JSON.stringify(userInfo), (err) => {
            //                 if (err) throw err;
            //                 console.log('user data has been update');
            //             });
            //         }
            //     });
            // });
            res.send('授權成功，您可以開始使用line資料備份功能');
        } else {
            console.log('ERROR', err);
            res.send('授權失敗');
        }
    });
});
app.get('/upload', (req, res, next) => {
    console.log('upload test file');
    var infoArray = JSON.parse(content);
    oauth2Client.setCredentials(token);
    console.log('oauth2Client', oauth2Client);
    uploadTestFile(oauth2Client, {
        name: 'test.jpg',
        type: 'image/jpeg',
        path: 'files/test.jpg',
        folderId: infoArray[0].folder_id,
    });
    res.send('upload test file');
});
app.get('/download', (req, res, next) => { // download json file
    res.download(infoFile, 'data.json', (error) => {
        if (error) {
            console.log('ERR', error);
        }
    });
});
app.get('/getDriveFileList', (req, res, next) => { // get file list from google drive
    oauth2Client.setCredentials(token);

    drive.files.list({
        auth: oauth2Client,
        q: "mimeType='application/json' and name contains 'data'", // parents in ['0B_mgLbDfEkr8WkYwZWtXUHhuSnc']
        fields: 'nextPageToken, files(id, name)',
        spaces: 'drive',
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            res.files.forEach((file) => {
                console.log('Found file: ', file.name, file.id);
            });
        }
    });

    // listFiles(oauth2Client);
    // drive.files.list({
    //     auth: auth,
    //     pageSize: 10,
    //     fields: "nextPageToken, files(id, name)",
    // }, function(err, response) {
    //     if (err) {
    //         console.log('The API returned an error: ' + err);
    //         return;
    //     }
    //     var files = response.files;
    //     if (files.length == 0) {
    //         console.log('No files found.');
    //     } else {
    //         console.log('Files:');
    //         for (var i = 0; i < files.length; i++) {
    //             var file = files[i];
    //             console.log('%s (%s)', file.name, file.id);
    //         }
    //     }
    // });


    res.end();
});
app.get('/getDriveFile', (req, res, next) => { // get file from google drive
    oauth2Client.setCredentials(token);
    var fileId = '0B_mgLbDfEkr8aHdlV1NzcWxwdVk';
    drive.files.get({
        auth: oauth2Client,
        fileId: fileId,
        alt: 'media'
    }, (err, response) => {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        console.log(response);
        fs.writeFile('./data/data.json', JSON.stringify(response), (err) => {
            if (err) throw err;
        });
    });
    res.end();
});

app.listen(port, () => {
    console.log('app is listening at port 3000');
});


function getClientIp(req) {
    return (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
};

function listFiles(auth) { // list all file in google drive
    console.log('get google drive file list');
    drive.files.list({
        auth: auth,
        pageSize: 10,
        fields: "nextPageToken, files(id, name)",
    }, function(err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var files = response.files;
        if (files.length == 0) {
            console.log('No files found.');
        } else {
            console.log('Files:');
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                console.log('%s (%s)', file.name, file.id);
            }
        }
    });
}
/**
 * fileObj = {
 *  name:
 *  path:
 *  type:
 * }
 */
function uploadTestFile(auth, fileObj) { // upload test img
    var fileMetadata = {
        'name': fileObj.name,
        parents: [fileObj.folderId],
    };
    var media = {
        mimeType: fileObj.type,
        body: fs.createReadStream(fileObj.path),
    };
    drive.files.create({
        auth: auth,
        resource: fileMetadata,
        media: media,
        fields: 'id',
    }, (err, file) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File Id: ', file.id);
        }
    });
}

function createFolder(auth, callback) {
    var fileMetadata = {
        'name': 'line_upload',
        'mimeType': 'application/vnd.google-apps.folder'
    };
    drive.files.create({
        auth: auth,
        resource: fileMetadata,
        fields: 'id'
    }, callback);
}
