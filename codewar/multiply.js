function multiply(a, b) {
    const arraySum = [];
    a.split('').reverse().forEach((valA, indexA) => {
        b.split('').reverse().forEach((valB, indexB) => {
            if (arraySum[indexA + indexB]) arraySum[indexA + indexB] += parseInt(valA, 10) * parseInt(valB, 10);
            else arraySum[indexA + indexB] = parseInt(valA, 10) * parseInt(valB, 10);
        })
    })
    arraySum.forEach((val, index) => {
        val.toString().split('').reverse().forEach((subVal, subIndex) => {
            if (subIndex === 0) {
                arraySum[index + subIndex] = parseInt(subVal, 10);
            } else {
                if (arraySum[index + subIndex]) arraySum[index + subIndex] += parseInt(subVal, 10);
                else arraySum[index + subIndex] = parseInt(subVal, 10);
            }
        })

    })

    let check = true;
    const result = arraySum.reverse().reduce((str, val) => {
        if (val !== 0 || !check) {
            check = false;
            str += val;
        }
        return str;
    }, '');
    return (result) ? result : '0';
}



console.log(multiply("0", "30"));
console.log(multiply("00002", "000030"));
console.log(multiply("1020303004875647366210", "2774537626200857473632627613"));
console.log(multiply("58608473622772837728372827", "7586374672263726736374"));
// 1020303004875647366210
// 2774537626200857473632627613
// 277453704060000283249153612141812421210
// 2830869077153280552556547081187254342445169156730
// 1.0203030048756474e+21 2.7745376262008574e+27 '1.0203030048756474e+21' '2.7745376262008574e+27'
//  "2830869077153280552556547081187254342445169156730");

// multiply("58608473622772837728372827", "7586374672263726736374")
// // , "444625839871840560024489175424316205566214109298");
// multiply("9007199254740991", "9007199254740991")
// // , "81129638414606663681390495662081");