const _ = require('lodash');

const heads = ['timestamp', 'content', 'viewed', 'href'];
const rows = [
  '2018-10-27T05:33:34+00:00,@madhatter invited you to tea,unread,https://example.com/invite/tea/3801',
  '2018-10-25T03:50:08+00:00,@cheshirecat sent you a grin,unread,https://example.com/interactions/grin/88',
];

function splitFields(row) {
  return row.split(',');
}

function zipRow(headerFields, fieldData) {
  if (headerFields.length !== fieldData.length) {
    throw new Error('Row has an unexpected number of fields');
  }
  return _.zipObject(headerFields, fieldData);
}

function addDateStr(messageObj) {
  const d = new Date(messageObj.timestamp);
  if (isNaN(d)) {
    throw new Error('Unable to parse date stamp in message object');
  }

  const datestr = `${d.getDate()} ${d.getMonth() + 1} ${d.getFullYear()}`;
  return { datestr, ...messageObj };
}

function processRow(headerFieldNames, row) {
  try {
    fields = splitFields(row);
    rowObj = zipRow(headerFieldNames, fields);
    rowObjWithDate = addDateStr(rowObj);
    return rowObjWithDate;
  } catch (e) {
    console.error('Error: ', e);
  }
}
rows.map((row, index) => {
  const result = processRow(heads, row);
  console.log(index, result);
});
// hard to identify the error unless add more if-statements
