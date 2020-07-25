var btn = document.querySelector('#addForm');
var items = document.getElementById('items');
var list = document.querySelector("#items");
var filter = document.getElementById('filter');


btn.addEventListener('submit',function(e){
    e.preventDefault();
    let value = btn[0].value;
    addItem(value);
});

items.addEventListener('click',Delete);

filter.addEventListener("keyup",Search);

function Search(e){
    let value = e.target.value;
    Array.from(list.children).forEach((element,index) => {
    let textC = element.firstChild.textContent;
       if(textC.toLowerCase().indexOf(value) != -1){
            element.style.display = 'block';
       }else{
           element.style.display = "none";
       }
    });
}


function addItem(value){
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = value;
        let button = document.createElement("button");
        button.className = "btn btn-danger btn-sm float-right delete";
        button.innerText = "X";
        li.appendChild(button);
        items.appendChild(li);
}

function Delete(e){
    let li = e.target.parentElement ;
    items.removeChild(li);
}
