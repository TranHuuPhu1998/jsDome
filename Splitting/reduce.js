var array = [{
    key: 'one',
    value: 1
}, {
    key: 'two',
    value: 2
}, {
    key: 'three',
    value: 3
}];

var rs_1 = array.reduce(function (obj, current) {
    console.log("1",obj ,current)
    obj[current.key] = current.value;
    console.log("sd",obj[current.key] , current.value)
    return obj;
}, {});

console.log(rs_1);

// array.reduce((obj, current) => ({
//     ...obj,
//     [current.key]: current.value
// }), {});


// var arr = [4, 2, 1, -10, 9]
// var rs = arr.reduce(function (a, b) { return a > b ? a : b }, 0);
// console.log(rs);//9
// var rs = [100, 1000, 10, 10000, 1].sort(function (a, b) {
//     console.log('a', a);
//     console.log('b', b);
//     console.log('a-b', a - b)
//     return a - b;
// });
// console.log(rs);// [ 1, 10, 100, 1000, 10000 ]