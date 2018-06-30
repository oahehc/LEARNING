/* eslint-disable no-console */
var express = require('express');
var path = require('path');
var request = require('request');
var fs = require('fs');

var app = express();
var port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
// var oauth2Client = new OAuth2(process.env.YOUR_CLIENT_ID, process.env.YOUR_CLIENT_SECRET, process.env.YOUR_REDIRECT_URL);
var oauth2Client = new OAuth2('googleusercontent.com', '', 'http://localhost:3000/authFinish');
var drive = google.drive('v3');
var infoFile = './data/info.json';
app.get('/auth3', (req, res, next) => { // auth google account
    console.log('get auth');
    var scopes = ['https://www.googleapis.com/auth/drive'];
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
        if (!err) {
            oauth2Client.setCredentials(tokens);
            fs.readFile(infoFile, function(err, content) {
                if (err) {
                    console.log('Error loading client secret file: ' + err);
                    return;
                }
                createFolder(oauth2Client, function(err, file) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Folder Id: ', file.id);
                        var userInfo = JSON.parse(content);
                        userInfo.push({
                            token: tokens,
                            folder_id: file.id,
                            code: req.query.code,
                        });
                        fs.writeFile(infoFile, JSON.stringify(userInfo), (err) => {
                            if (err) throw err;
                            console.log('user data has been update');
                        });
                    }
                });
            });
            res.send('授權成功，您可以開始使用line資料備份功能');
        } else {
            res.send('授權失敗');
            console.log('ERROR', err);
        }
    });
});
app.get('/upload', (req, res, next) => {
    console.log('upload test file');
    fs.readFile(infoFile, function(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        var infoArray = JSON.parse(content);
        oauth2Client.setCredentials(infoArray[0].token);
        console.log('oauth2Client', oauth2Client);
        uploadTestFile(oauth2Client, {
            name: 'test.jpg',
            type: 'image/jpeg',
            path: 'files/test.jpg',
            folderId: infoArray[0].folder_id,
        });
        res.send('upload test file');
    });
});


app.listen(port, () => {
    console.log('app is listening at port 3000');
});


function listFiles(auth) { // list all file in google drive
    drive.files.list({
        auth: auth,
        pageSize: 10,
        fields: "nextPageToken, files(id, name)"
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
        parents: [fileObj.folderId]
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
