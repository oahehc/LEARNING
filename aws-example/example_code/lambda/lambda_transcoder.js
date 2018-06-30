'use strict';

const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
});
const eltr = new AWS.ElasticTranscoder({
    apiVersion: '2012-09-25',
    region: 'ap-northeast-1',
});
const pipelineId = '1496210331322-70lmsf'; // elastic transcoder id
const mp4 = '1351620000001-100190'; // presetId for mp4

function basename(path) {
    return path.split('/').reverse()[0].split('.')[0];
}

function sendVideoToET(key, context) {
    const params = {
        PipelineId: pipelineId,
        OutputKeyPrefix: null,
        Input: {
            Key: key,
            FrameRate: 'auto',
            Resolution: 'auto',
            AspectRatio: 'auto',
            Interlaced: 'auto',
            Container: 'auto',
        },
        Output: {
            Key: `transcoder/${basename(key)}.mp4`,
            PresetId: mp4,
            Rotate: 'auto',
        },
    };
    eltr.createJob(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
            context.fail();
        } else {
            console.log("Create Job Success");
            context.succeed();
        }
    });
}
exports.handler = function(event, context) {
    console.log('event', event);
    const bucket = event.Records[0].s3.bucket.name;
    const key = event.Records[0].s3.object.key;
    const params = {
        Bucket: bucket,
        Key: key,
    };
    console.log('params', params);
    s3.getObject(params, (err, data) => {
        if (err) {
            const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
            console.log(message);
            context.fail(message);
        } else {
            sendVideoToET(key, context);
        }
    });
};
