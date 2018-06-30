var myArray = /d(b+)d/g.exec('dbbbbd');
// console.log(myArray); //["dbbbbd", "bbbb", index: 0, input: "dbbbbd"]
// myArray The matched string and all remembered substrings.
// index	The 0-based index of the match in the input string.	1
// input	The original string.	"cdbbdbsbz"

var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// console.log(newstr);//Smith, John

var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re); //["fee ", "fi ", "fo "]
// console.log(myArray);

var str = "hello world!";
var result = /^hello/.test(str);
// console.log(result); // true

var str = "hello world!";
var result = str.search(/ello/);
// console.log(result); // 1

var str = "fee fi fo fum";
var result = str.split(/\s/);
// console.log(result); //["fee", "fi", "fo", "fum"]