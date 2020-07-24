////==================trim()===============================
// let chartString = " some whitespaced string    ".trim();
// console.table(chartString)
//splitting a string into an array 
//==================split()===============================
//==================join()===============================
// var s = "one , two , three , four , five";
// var array = s.split(' , ');
// console.log('string to array:', array)
// var arrayJoin = array.join(":");
// console.log('array to string', arrayJoin)
//==================Strings are unicode===============================
// var s = "some ∆≈ƒ unicode ¡™£¢¢¢";
// var s = s.charCodeAt(0);
// console.log(s)

// var isString = function (value) {
//     return typeof value === "string" || value instanceof String;
// };
// console.log(isString("AbortController"))
//================================String typeof==============
// var pString = "Primitive String";
// var oString = new String("Object Form of String");
// var pResult = Object.prototype.toString.call(pString);//"[object String]" 
// var oResult = Object.prototype.toString.call(oString);//"[object String]"
// console.log("q:", pResult)
// console.log("o:", oResult)

//==================Substrings with slice===============================

// var s = "tran huu phu"
// var rs = s.slice(0, 5)
// var rsIndex = s.slice(5)
// console.log(rs)
// console.log(rsIndex)
//==================String Representations of Numbers===============================

// let b16 = '3.243f3e0370cdc';// Split into integer and fraction parts 
// let rs = b16.split('.').join(' ').slice(0, 1)

// console.log('i16', rs)

// let [i16, f16] = b16.split('.');

// console.log('i16', i16)
// console.log('f16', f16)

//==================indexOf===============================
// var string = "hello1 , world1"

// console.log(string.indexOf("1"))//-1
// console.log(string.indexOf("o"))//0
// console.error('lastindexOf', string.lastIndexOf("1"))

//==================Incudes===============================
// var string = "hi hi haha helo"
// console.log(string.includes("hi hi"));
// console.log(string.includes("kaka"));

////==================replace:{thây thế}===============================

// var string = "phu 123 huu"

// var sr = string.replace("phu", "tran")
// console.log(sr);

// ==================== String to Lower Case================
//String to Lower Case
// console.log('QWERTY'.toLowerCase())
// ==================== Repeat a String ===================
// repeatString = '1'
// console.log(repeatString.repeat(3))

// function formatDate(dayOfWeek, day, month, year) {
//     var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     return `${daysOfWeek[dayOfWeek]}/${months[month]}/${day}/${year}`
// }

// var birthday = new Date();
// console.log(birthday.getDay(), birthday.getDate(), birthday.getMonth(),
//     birthday.getFullYear())
// console.log("Foo was born on : " + formatDate(birthday.getDay(), birthday.getDate(), birthday.getMonth(),
//     birthday.getFullYear())
// )


// var DateObject = (function () {
//     var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var date = function (str) {
//         this.set(str);
//     };
//     date.prototype = {
//         set: function (str) {
//             var dateDef = str ? new Date(str) : new Date();
//             this.day = dateDef.getDate();
//             this.dayPadded = (this.day < 10) ? ("0" + this.day) : "" + this.day;
//             this.month = dateDef.getMonth() + 1;
//             this.monthPadded = (this.month < 10) ? ("0" + this.month) : "" + this.month;
//             this.monthName = monthNames[this.month - 1];
//             this.year = dateDef.getFullYear();
//         },
//         get: function (properties, separator) {
//             var separator = separator ? separator : '-'
//             ret = [];
//             for (var i in properties) {
//                 ret.push(this[properties[i]]);
//             }
//             return ret.join(separator);
//         }
//     };
//     return date;
// })();

// dayPadded = 2
// monthPadded = 3P
// year = 2011

// const dataResult = new DateObject().get(['dayPadded', 'monthPadded', 'year']);
// console.log(dataResult);

//===================valueOf

// var date = new Date()
// var rs = date.valueOf() + 1
// console.log(rs)

var splitS = 'JS R.'
console.log( splitS.split(' '))
