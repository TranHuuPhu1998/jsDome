var select = document.querySelector('.select-selected-text');
var list = document.querySelector('.select-selected ul');

var after = document.querySelector('.select-selected-text');
var year_01 = document.querySelector('#year_01');

var routeI = 135;
var routeY = 315;

Array.from(list.children).forEach(e=>{
    e.addEventListener("click",SelectValue);
})
select.addEventListener('click',Toggle);

// SelectValue
function SelectValue(){
    let _this = this;
    SelectItem(select,year_01,_this);
}

function SelectItem(select,year_01,_this){
    select.innerText = _this.innerText;
    let data = _this.getAttribute('data-option');
     Array.from(year_01.children).forEach(e=>{
        if(e.getAttribute('value') == data){
            var selected = document.createAttribute('selected');
            e.setAttributeNode(selected);
        }
     })
    select.nextElementSibling.style.height = "0px";
    document.documentElement.style.setProperty('--h', routeI + 'deg');  
}
// Toggle
function Toggle(){
    if(this.nextElementSibling.style.height == "200px"){
        this.nextElementSibling.style.height = "0px";
        document.documentElement.style.setProperty('--h', routeI + 'deg');  
    }else{
        document.documentElement.style.setProperty('--h', routeY + 'deg');  
        this.nextElementSibling.style.height = "200px";
    }
}


