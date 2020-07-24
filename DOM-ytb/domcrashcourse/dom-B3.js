

// var button = document.getElementById('button');
// button.addEventListener('click',buttonClick);
// var inputtext = document.getElementById('inputtext');
// inputtext.addEventListener('input',inputClick);
// inputtext.addEventListener('change',inputClick);

// function inputClick(e){
//     console.log(e.target.value);
//     console.log(e.target.name);
// }
// function buttonClick(e){
    // document.getElementById('header-title').textContent = "changed";
    // document.querySelector('#main').style.backgroundColor = "red"
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // var output = document.getElementById('output');
    // output.innerHTML = "<h3>" + e.target.id + "</h3>";

    // console.log(e.type);
    // console.log('e.clientX',e.clientX);
    // console.log(e.target.name);

    // console.log("y",e.offsetY);

    // console.log(e.altKey); kiểm tra có đè phím "alt" hay k khi nhất chuột
    // console.log(e.ctrlKey); //kiểm tra có đè phím "ctrl" hay k khi nhất chuột
    // console.log(e.shiftKey); //kiểm tra có đè phím "shift" hay k khi nhất chuột
// }

//javascript check click mouse right
// window.oncontextmenu = function () {
//     alert('Right Click')
// }

// window.oncontextmenu = function (e) {
//     e.preventDefault()
//     alert('Right Click')
//   }
  
// var button = document.getElementById('button');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// var box = document.getElementById('box');
// var output = document.getElementById('output');
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);// hover chuột vào element của box event mới hoạc động

// box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var box = document.querySelector('#box');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown',runEvent)

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// select.addEventListener('change',runEvent);

form.addEventListener('submit',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log(`event`,e.type);
    // console.log(`event`,e.target.value);
    // console.log(`event`,e.target.name);
    // box.innerHTML = "<h3> MouseX:" +e.offsetX+ "</h3><h3> MouseY: "+e.offsetY+"</h3>";

    // box.style.backgroundColor 
    // = "rgb("+e.offsetX+","+e.offsetY+",40)";

}