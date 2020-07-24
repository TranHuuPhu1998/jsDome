// const foo = { name: "tom", age: 30, nervous: false }
// const bar = { name: "dick", age: 40, nervous: false }
// const baz = { name: "harry", age: 50, nervous: true }

// 'Bad Code '
// css style
// console.log('%c My Frirends', 'color: orange;')

// console.table([foo, bar, baz])

//
// const user = [
//     "phu", "lien", "phu", "an", "an"
// ]
// const unique = Array.from(new Set(user))

// console.log(unique)

// const dynamic = "hobbies";

// const userIF = {
//     name: "Phu",
//     email: " tranhuuphu877@gmail.com",
//     [dynamic]: "sleep"
// }

// console.log(userIF)

// const userNB = [1, 2, 3, 4, 5, 6, 7, 8];

// userNB.length = 2

// console.log(userNB.slice(-2));

// const userObject = { ...userNB }

// console.log(userObject)

const userArray = {
    name: "Phu",
    email: " tranhuuphu877@gmail.com",
    dynamic: "sleep"
}

const rsKeys = Object.keys(userArray)
const rsValue = Object.values(userArray)
console.log({ rsKeys, rsValue })

// 10. 
let startAt = performance.now();
