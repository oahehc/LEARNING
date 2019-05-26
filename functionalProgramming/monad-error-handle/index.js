const _ = require('lodash');
const Left = require('./Left');
const Right = require('./Right');

Left.of = function of(x) {
  return new Left(x);
};
Right.of = function of(x) {
  return new Right(x);
};
function left(x) {
  return Left.of(x);
}
function right(x) {
  return Right.of(x);
}
function either(leftFunc, rightFunc, e) {
  return e instanceof Left ? leftFunc(e._val) : rightFunc(e._val);
}

const heads = ['timestamp', 'content', 'viewed', 'href'];
const rows = [
  '2018-10-27T05:33:34+00:00,@madhatter invited you to tea,unread,https://example.com/invite/tea/3801',
  '2018-10-25T03:50:08+00:00,@cheshirecat sent you a grin,unread,https://example.com/interactions/grin/88',
];

function splitFields(row) {
  return row.split(',');
}

function zipRow(headerFields) {
  // curried version
  return function zipRowWithHeaderFields(fieldData) {
    const lengthMatch = headerFields.length == fieldData.length;
    return !lengthMatch
      ? left(new Error('Row has an unexpected number of fields'))
      : right(_.zipObject(headerFields, fieldData));
  };
}

function addDateStr(messageObj) {
  const d = new Date(messageObj.timestamp);
  if (isNaN(d)) {
    return left(new Error('Unable to parse date stamp in message object'));
  }

  const datestr = `${d.getDate()} ${d.getMonth() + 1} ${d.getFullYear()}`;
  return right({ datestr, ...messageObj });
}

function handleError(val) {
  console.error('ERROR', val);
}
function handleSuccess(val) {
  console.log(val);
}

function processRow(headerFields, row) {
  // const fieldsEither = right(row).map(splitFields);
  // // const rowObj = fieldsEither.map(zipRow(headerFields)).join();
  // const rowObj = fieldsEither.chain(zipRow(headerFields));
  // // const rowObjWithDate = rowObj.map(addDateStr).join();
  // const rowObjWithDate = rowObj.chain(addDateStr);
  // return either(handleError, handleSuccess, rowObjWithDate);

  const rowObjWithDate = right(row)
    .map(splitFields)
    .chain(zipRow(headerFields))
    .chain(addDateStr);
  return either(handleError, handleSuccess, rowObjWithDate);
}
rows.map((row, index) => {
  console.log(`${index} ------------------------------`);
  processRow(heads, row);
});
