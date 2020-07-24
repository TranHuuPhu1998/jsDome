//https://codelearn.io/blog/view/code-javascript-cool-tricks?fbclid=IwAR131Vy-doUKuocDihggIwFcYLyQ8eEFoxfV5AMXZCObHvYjnY4Y0E5ilUA
// https://javascript.info/nullish-coalescing-operator
// 1. Loại bỏ các phần tử trùng lặp trong mảng
// const arr = [1, 1, 1, 2, 2, 2, 3, 5, 3, 2];
// const newArr = [...new Set(arr)];
console.log(newArr); // [ 1, 2, 3, 5 ]
// 2. Loại bỏ các falsy values trong 1  mảng. 
// Falsy values trong Javascript bao gồm có 0, false, NaN, undefined, null, '' (xâu rỗng).
const arr = [
	0,
	false,
	NaN,
	undefined,
	"",
	null,
	1,
	true,
	"Hello World",
	{ name: "value" },
];
const filteredArr = arr.filter(Boolean);
console.log(filteredArr); // [ 1, true, 'Hello World', { name: 'value' } ]

//Toán tử kết hợp Nullish '??'
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// show the first not-null/undefined variable
const rs = firstName ?? lastName ?? nickName ?? "Anonymous" // ? 
console.log(rs)

console.log(rs)
