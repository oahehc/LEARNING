const string = `137
-104
2 58
+0
++3
+1
23.9
2000000000
-0
five
-1
+-3`;

const arr = string.split('\n');
console.log(arr);

const result = arr.reduce((res, str) => {
    const check = str.replace(/^\+/, '').replace(/^\-/, '').replace(/[0-9]/g, '');
    console.log(str, check, parseInt(str, 10));
    if (check === '' && parseInt(str, 10) < 1000000000 && parseInt(str, 10) > -1000000000) res.push(parseInt(str, 10));
    return res
}, [])

console.log(result);