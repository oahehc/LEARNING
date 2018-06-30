const string = `Sun 10:00-20:00
Fri 05:00-10:00
Fri 16:30-23:50
Sat 10:00-24:00
Sun 01:00-04:00
Sat 02:00-06:00
Tue 03:30-18:15
Tue 19:00-20:00
Wed 04:25-15:14
Wed 15:14-22:40
Thu 00:00-23:59
Mon 05:00-13:00
Mon 15:00-21:00`;
const arr = string.split('\n');
console.log(arr);

const weekdayMap = {
    'Mon': 0,
    'Tue': 1,
    'Wed': 2,
    'Thu': 3,
    'Fri': 4,
    'Sat': 5,
    'Sun': 6,
};

let timeStampArr = arr.reduce((result, string) => {
    const weekday = string.split(' ')[0];
    const timeArray = string.split(' ')[1].split('-');
    console.log(weekday, timeArray);
    const startTime = timeArray[0].split(':');
    const endTime = timeArray[1].split(':');
    const start = weekdayMap[weekday] * 60 * 24 + parseInt(startTime[0], 0) * 60 + parseInt(startTime[1], 0);
    const end = weekdayMap[weekday] * 60 * 24 + parseInt(endTime[0], 0) * 60 + parseInt(endTime[1], 0);
    result.push(start, end);
    return result;
}, [])

console.log(timeStampArr);
timeStampArr.sort((a, b) => {
    return (a >= b) ? 1 : -1;
});
console.log(timeStampArr);

let max = 0;
for (let i = 2; i < timeStampArr.length; i += 2) {
    max = Math.max(max, timeStampArr[i] - timeStampArr[i - 1]);
}
console.log(max);