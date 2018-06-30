var express = require('express');
var linebot = require('linebot');
var request = require('request');

var bot = linebot({
    channelId: process.env.channelId,
    channelSecret: process.env.channelSecret,
    channelAccessToken: process.env.channelAccessToken,
});

const app = express();

bot.on('message', function(event) {
    // console.log('userId', event.source.userId);
    console.log('message event', event);
    event.message.content().then((result) => {
        console.log('result', result);
    }).catch((error) => {
        console.log('error', error);
    });

    // Object.keys(event.message).forEach((key) => {
    //     console.log(key);
    //     console.log(event.message[key]);
    // });
    // var options = {
    //     'url': `https://api.line.me/v2/bot/message/${event.message.id}/content`,
    //     'method': 'GET',
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.channelAccessToken}`
    // };
    // request(options, (error, response, body) => {
    //     if (!error && response.statusCode === 200) {
    //         console.log(response);
    //         console.log(body);
    //         // const resultObj = JSON.parse(body);
    //     } else {
    //         console.log('STATUS', response.statusCode);
    //         console.log('ERROR', error);
    //         console.log('response', response);
    //         console.log('body', body);
    //     }
    // });





    // lineReply(msgArray);
    // {
    //     type: 'message',
    //     replyToken: '9a970be3',
    //     source: {
    //         userId: '918',
    //         type: 'user',
    //         profile: [Function]
    //     },
    //     timestamp: 148707,
    //     message: {
    //         type: 'text',
    //         id: '57231',
    //         text: 'Check',
    //         content: [Function]
    //     },
    //     reply: [Function]
    // }
});
bot.on('follow', function(event) {
    console.log('follow event', event);
});
bot.on('join', function(event) {
    console.log('join event', event);
});
bot.on('unfollow', function(event) {
    console.log('unfollow event', event);
});
bot.on('leave', function(event) {
    console.log('leave event', event);
});
bot.on('postback', function(event) {
    console.log('postback event', event);
});
bot.on('beacon', function(event) {
    console.log('beacon event', event);
});

function lineReply(msgObj) {
    event.reply(msgObj).then(function(data) {
        console.log('reply success', data);
    }).catch(function(error) {
        console.log('reply fail', error);
    });
}

// bot.push(event.source.userId, 'received your msg');


const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});

// line message event
// > send message
// {
//     type: 'message',
//     replyToken: '9a9be3',
//     source: {
//         userId: 'U18918',
//         type: 'user',
//         profile: [Function]
//     },
//     timestamp: 1487707,
//     message: {
//         type: 'text',
//         id: '5531',
//         text: 'Check',
//         content: [Function]
// console.log(event.message.content.toString()); // return that.getMessageContent(event.message.id);
// console.log(event.message.content()); // Promise { <pending> }
//     },
//     reply: [Function]
// }
// > unfollow/block
// {
//     type: 'unfollow',
//     source: {
//         userId: 'U918',
//         type: 'user',
//         profile: [Function]
//     },
//     timestamp: 144225,
//     reply: [Function]
// }
// > add / follow / unblock
// {
//     type: 'follow',
//     replyToken: '164581',
//     source: {
//         userId: 'U1b04918',
//         type: 'user',
//         profile: [Function]
//     },
//     timestamp: 1196,
//     reply: [Function]
// }
