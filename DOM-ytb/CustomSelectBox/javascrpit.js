var select = document.getElementById('selectBox');

var language = document.getElementById('language');
var country = ["vietnam","sao","cam"];

country.forEach(e=>{
    var option = document.createElement('option');
    var item = document.createElement('div');
    
    item.innerText = e;
    item.style.border = "1px solid red";
    item.style.width = "100px";
    option.textContent = e;
    option.setAttribute("value",e);

    select.appendChild(item); 
    language.appendChild(option);

})

Array.from(select.children).forEach((e,i)=>{
    if(i > 0){
        e.style.display = "none";
    }
})

select.addEventListener("click",Chose);

function Chose(e){
    let value = e.target.innerText;
    Array.from(select.children).forEach((e,i)=>{
        if(i > 0){
            if(e.style.display ==  "block"){
                e.style.display = "none";
            }else{
                e.style.display = "block";
            }
        }else{
            e.innerText = value;
            Array.from(language.childNodes).forEach(item=>{
                item.setAttribute("value",value);
                item.innerText = value;
            })
        }
    })
}


