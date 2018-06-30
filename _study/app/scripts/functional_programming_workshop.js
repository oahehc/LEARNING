/* eslint-disable no-console */
// https://github.com/timoxley/functional-javascript-workshop
function upperCaser(input) {
    return input.toUpperCase();
}
module.exports = upperCaser;
// function repeat(operation, num) {
//     if (num > 0) {
//         operation();
//         const numNew = num - 1;
//         repeat(operation, numNew);
//     }
// }
// module.exports = repeat;

function doubleAll(numbers) {
    return numbers.map(number => number * 2);
}
module.exports = doubleAll;

function getShortMessages(messages) {
    return messages
        .filter(msgObj => msgObj.message.length < 50)
        .map(msgObj => msgObj.message);
}
module.exports = getShortMessages;

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.reduce((result, user) => {
            const resultNew = result && goodUsers.reduce((check, goodUser) => {
                let checkNew = false;
                if (goodUser.id === user.id) {
                    checkNew = true;
                }
                return checkNew;
            }, false);
            return resultNew;
        }, true);
    };
}
module.exports = checkUsersValid;
// module.exports = function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function(submittedUser) {
//       return goodUsers.some(function(goodUser) {
//         return goodUser.id === submittedUser.id
//       })
//     })
//   }
// }

function countWords(inputWords) {
    return inputWords.reduce((result, word) => {
        result[word] = result[word] + 1 || 1;
        return result;
    }, {});
}
module.exports = countWords;

// function reduce(arr, fn, initial) {
//     return (function reduceOne(index, value) {
//             if (index > arr.length - 1) return value // end condition
//             return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//         })(0, initial) // IIFE. kick off recursion with initial values
// }
// module.exports = reduce

function duckCount(...args) {
    console.log(args);
    return Array.from(args).reduce((num, arg) => {
        if (Object.prototype.hasOwnProperty.call(arg, 'quack')) num += 1;
        return num;
    }, 0);
}
module.exports = duckCount;

// var slice = Array.prototype.slice;
// function logger(namespace) {
//     return (...x) => console.log(namespace, ...x);
// return function() {
//     console.log.apply(console, [namespace].concat(slice.call(arguments)))
// }
// }
// module.exports = logger

function logger(namespace) {
    return console.log.bind(console, namespace);
    // return function() {
    //     var bindedLog = console.log.bind(console, namespace); // bind namespace with console.log
    //     bindedLog.apply(null, Array.prototype.slice.call(arguments));
    // };
}
module.exports = logger;


module.exports = function arrayMap(arr, fn) {
    return arr.reduce((result, element) => {
        result.push(fn(element));
        return result;
    }, []);
};

module.exports = function Spy(target, method) {
    const tracker = {
        count: 0,
    };
    const originalMethod = target[method];
    target[method] = (...args) => {
        tracker.count += 1;
        return originalMethod.apply(this, args);
    };
    return tracker;
};

// function repeat(operation, num) {
//     if (num <= 0) return;
//     operation();
//     if (num % 10 === 0) {
//         setTimeout(() => {
//             num -= 1;
//             repeat(operation, num);
//         }, 1);
//     } else {
//         num -= 1;
//         repeat(operation, num);
//     }
// }
// module.exports = repeat;

function repeat(operation, num) {
    return function repeated() {
        if (num <= 0) return false;
        operation();
        num -= 1;
        return repeat(operation, num);
    };
}

function trampoline(fn) {
    while (fn && typeof fn === 'function') {
        fn = fn();
    }
}

module.exports = function repeated(operation, num) {
    trampoline(() => repeat(operation, num));
};


function loadUsers(userIds, load, done) {
    const users = userIds.reduce((result, userId) => load(userId).done((data) => {
        result.push(data);
        return result;
    }), []);
    return users;
}
module.exports = loadUsers;
// function loadUsers(userIds, load, done) {
//     var completed = 0
//     var users = []
//     userIds.forEach(function(id, index) {
//         load(id, function(user) {
//             users[index] = user
//             if (++completed === userIds.length) return done(users)
//         })
//     })
// }

// function getDependencies(tree, result = []) {
//     if (tree.dependencies !== undefined) {
//         for (let key in tree.dependencies) {
//             let dep = `${key}@${tree.dependencies[key].version}`;
//             if (result.indexOf(dep) < 0) result.push();
//             result = getDependencies(tree.dependencies[key], result);
//         }
//     }
//     return result.sort();
// }
// module.exports = getDependencies;

const curryN = (fn, n) => {
    let num = n || fn.length;
    if (num > 1) {
        const curryFn = (...args) => fn(n, ...args);
        num -= 1;
        curryN(curryFn, num);
    } else {
        return fn;
    }
};
module.exports = curryN;
