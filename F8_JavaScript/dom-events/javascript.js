var input = document.querySelector('input[type="text"]');

var checkbox = document.querySelector('input[type="checkbox"]');

// var select = document.querySelector('#select');
// console.log("select", select)

// var selectID = document.getElementById('select');
// console.log("selectID", selectID)

// var selectClass = document.getElementsByClassName('select');
// console.log("selectClass", selectClass)


var onkeyup = document.getElementById('onkeyup');
// oninput

input.addEventListener("input",function(e){
    console.log("input", e.target.value)
})

// onchange

input.onchange = function(e){
    console.log("onchange",e.target.value)
}

// checkbox

checkbox.onchange = function(e){
    console.log("checkbox" , e.target.checked)
}

//select

select.onchange = function(e){
    console.log('select' ,e.target.value)
}

// onkeyup 

// onkeyup.addEventListener('keyup',function(e){

//     console.log("onkeyup", e.key);
//     console.log("typeof" ,typeof e.key);
// })

// onkeyup.addEventListener('keydown',function(e){

//     console.log("keydown", e.key);
//     console.log("typeof" ,typeof e.key);
// })

onkeyup.addEventListener('keypress',function(e){

    console.log("keypress", e.key);
    console.log("typeof" ,typeof e.key);
})

const client = document.getElementById("client");
//  clientHeight
console.log('clientHeight',client.clientHeight)
//  clientLeft
console.log('clientLeft',client.clientLeft)
//  clientTop
console.log('clientTop',client.clientTop)
//  clientWidth
console.log('clientWidth',client.clientWidth)

//  offsetHeight
console.log('offsetHeight',client.offsetHeight)
//  offsetLeft
// khoảng cách của div có class "client" so với phía bên phải của thẻ body
console.log('offsetLeft',client.offsetLeft)
//  offsetTop
// khoảng cách từ vị trí "0 0" của window tới thẻ div có class "client"
console.log('offsetTop',client.offsetTop)
//  offsetWidth
console.log('offsetWidth',client.offsetWidth)
