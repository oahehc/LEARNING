/**
 * CSV Parser.  Takes a string as input and returns
 * an array of arrays (for each row).
 * 
 * @param input String, CSV input
 * @param separator String, single character used to separate fields.
 *        Defaults to ","
 * @param quote String, single character used to quote non-simple fields.
 *        Defaults to "\"".
 */
function parseCSV(input, separator, quote) {
    console.log(input);
    console.log(separator, quote);
    separator = separator || ',';
    quote = quote || '"';
    escapeCharactor = ['\/', '\\', '\^', '\$', '\*', '\+', '\?', '\.', '\(', '\)', '\{', '\}', '\[', '\]', '\|'];
    if (escapeCharactor.indexOf(quote) > -1) quote += '\\';
    regQuoteString = new RegExp(`^${quote}[\\S\\s]*${quote}$`); // /^"[\S\s]*"$/
    regDoubleQuote = new RegExp(`${quote}${quote}`, 'g');
    regStartQuote = new RegExp(`^${quote}`);
    regEndQuote = new RegExp(`${quote}$`);
    const arr = input.split(separator);
    let status = '';
    const result = arr.reduce((res, string) => {
        const quoteBetween = regQuoteString.test(string);
        const quoteStart = regStartQuote.test(string);
        const quoteEnd = regEndQuote.test(string);
        const newline = /\n/.test(string);
        const len = res.length;
        string = string.replace(regStartQuote, '').replace(regEndQuote, '').replace(regDoubleQuote, quote);
        console.log(string, quoteBetween, newline, status);
        if (quoteBetween) {
            res[len - 1].push(string);
        } else if (quoteStart) {
            status = 'starting';
            res[len - 1].push(string);
        } else if (quoteEnd) {
            status = '';
            let last = res[len - 1].pop();
            last = last + ',' + string;
            res[len - 1].push(last);
        } else if (status === 'starting') {
            let last = res[len - 1].pop();
            last = last + string;
            res[len - 1].push(last);
        } else if (newline) {
            const subArray = string.split('\n');
            const first = subArray.shift();
            res[len - 1].push(first);
            subArray.forEach(element => res.push([element]));
        } else {
            res[len - 1].push(string);
        }
        return res;
    }, [
        []
    ]);
    return result;
}


const test1 = `one,",,,,,..two,,,,,
,,,,,,",three
4,,6`;
// Expected: '[[\'one\', \',,,,,..two,,,,,\\n,,,,,,\', \'three\'], [\'4\', \'\', \'6\']]', 
// tead got: '[[\'one\', \'..two\\n\', \'three\\n46\']]'
const test2 = `1	2	"3	three"
4	5	6`;
// Expected: '[[\'1\', \'2\', \'3\\tthree\'], [\'4\', \'5\', \'6\']]', 
// tead got: '[[\'1\', \'2\', \'3three"\\n456\']]'

result = parseCSV(test1);
console.log(result);




const test3 = `$a $$string$$ using $$ as the quote$.$multi
line$.
$1.2$.3.4`;
result = parseCSV(test3);
console.log(result);
// . $
// $a $$string$$ using $$ as the quote$$ false false
// $multi
// line$$ false true

// $1$ false true
// 2$$ false false
// 3$ false false
// 4$ false false

// Expected: '[[\'a $string$ using $ as the quote\', \'multi\\nline\', \'\'], [\'1.2\', \'3\', \'4\']]', 
// tead got: '[[\'undefined$a $$string$$ using $$ as the quote$$$multi\\nline$$\\n$1$2$$3$4$\']]'



// should handle using a backslash (\) as the quote
// SyntaxError: Invalid regular expression: /^\/: \ at end of pattern









// If you need to use an expression like /\/word\:\w*$/, 
// be sure to escape your backslashes: new RegExp( '\\/word\\:\\w*$' )


// should handle separators in quoted fields
// pected: '[[\'1\', \'two, too\', \'3\'], [\'4\', \'5\', \'6\']]', 
// ad got: '[[\'1\', \'"two\', \' too"\', \'3\'], [\'4\', \'5\', \'6\']]'
// should handle multiple separators in multiline quoted fields
// Expected: '[[\'one\', \',,,,,..two,,,,,\\n,,,,,,\', \'three\'], [\'4\', \'\', \'6\']]', 
// tead got: '[[\'one\', \'"\', \'\', \'\', \'\', \'\', \'..two\', \'\', \'\', \'\', \'\', \'\'], [\'\', \'\', \'\', \'\', \'\', \'\', \'"\', \'three\'], [\'4\', \'\', \'6\']]'


// should handle using a dollar sign ($) as a quote character
// Expected: '[[\'a $string$ using $ as the quote\', \'multi\\nline\', \'\'], [\'1.2\', \'3\', \'4\']]', 
// tead got: '[[\'$a $$string$$ using $$ as the quote$\', \'$multi\'], [\'line$\', \'\'], [\'$1\', \'2$\', \'3\', \'4\']]'

// should handle using a backslash (\) as the quote
// Expected: '[[\'a \\\\string\\\\ using \\\\ as the quote\', \'multi\\nline\', \'\'], [\'1\', \'2\', \'3.4\']]', 
// tead got: '[[\'\\\\a \\\\\\\\string\\\\\\\\ using \\\\\\\\ as the quote\\\\\', \'\\\\multi\'], [\'line\\\\\', \'\'], [\'1\', \'2\', \'\\\\3\', \'4\\\\\']]'

// should handle alternate separators
// Expected: '[[\'1\', \'2\', \'3\\tthree\'], [\'4\', \'5\', \'6\']]', 
// tead got: '[[\'1\', \'2\', \'"3\', \'three"\'], [\'4\', \'5\', \'6\']]'

// should handle alternate quotes
// Expected: '[[\'1\', \'2\', \'3\'], [\'4\', \'this \\\'is\\\'\\na test\', \'6\']]', 
// tead got: '[[\'1\', \'2\', \'3\'], [\'4\', \'\\\'this \\\'\\\'is\\\'\\\'\'], [\'a test\\\'\', \'6\']]'