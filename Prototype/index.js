
/*======================= Map ========================= */
// Array.prototype.map2 = function(callback){
//     var output =[];
//     var arrayLength = this.length;
//     for( var i = 0;i < arrayLength ; ++i){
//         var result = callback(this[i],i);
//         console.log('result',result);
        
//         output.push(result)
//     }
//     return output;
// }

// var courses = [
//     'ReactJs',
//     'Js',
//     'VueJs'
// ]

// var htmls = courses.map2(function(courses){
//     return `<h2>${courses}</h2>`
// })
// console.log(htmls);
// var rss = htmls.join('');
// console.log(rss);
/*======================= Find ========================= */
// var Findcourses = [
//     {
//         name:'VueJs',
//         id :1
//     },
//     {
//         name:'Reactjs',
//         id :2
//     },
//     {
//         name:'AngularJs',
//         id :3
//     }
// ]
// /* Binh thuong */
// function callback(item){
//     return item.name === 'Reactjs'
// }

// var findrs = Findcourses.find(callback)
// console.log('findrs', findrs);


// /* Tự định nghĩa */
// Array.prototype.find2 = function(callback){
//     var arrayLength = this.length;
//     for( var i = 0;i < arrayLength ; ++i){
//         console.log(callback(this[i],i));
        
//         if(callback(this[i],i) === true){
//             return this[i];
//         }
//     }
//     return ;
// }

// var findrs = Findcourses.find2(function(item){
//         return item.name === 'Reactjs'
// })
// console.log('findrs', findrs);


// /*======================= forEach ========================= */
// var forEachArray = [
//     {
//         name:'VueJs',
//         count:1,
//         id :1
//     },
//     {
//         name:'Reactjs',
//         id :2,
//         count:1,
//     },
//     {
//         name:'AngularJs',
//         id :3,
//         count:1,
//     }
// ]

// Array.prototype.forEach2 = function(callback){
//     var length = this.length;
//     var rs = []
//     for(var i = 0 ;i < length ;++i){
//         rs.push(callback(this[i],index))
//     }
//     return rs;
// }
// var rss = 0;
// forEachArray.forEach((item,index)=>{
//     rss = rss + item.count;
//     console.log(rss);
    
//     return rss;
// })

// /*======================= Fitter ========================= */

// var FitterArray = [
//     {
//         id :1,
//         name:'VueJs',
//         count:1,
       
//     },
//     {
//         id :2,
//         name:'Reactjs',
//         count:3,
//     },
//     {
//         id :3,
//         name:'AngularJs',
//         count:2,
//     }
// ]

// Array.prototype.filter2 = function(callback){
//     var length = this.length;
//     var rs = [];
//     for(var i = 0 ; i < length ; ++i){
//         callback(this[i],i) === true ?  rs.push(this[i]) : ''
//     }
//     return rs;
// }


// var ResultFitter =  FitterArray.filter2((item,index)=>{
//     return item.count > 1
// })

// console.log(ResultFitter);


/*======================= Reduce ========================= */
var desks = [

    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }

];

Array.prototype.reduce2 = function(callback,previous){
    var length = this.length;
    var rs = []
    for(var i = 0 ;i < length;i++){
        // console.log("________")
        rs.push(this);
        // console.log("this",this[i]);
        
        // console.log("________")
        // console.log('previous',previous);
        
    }
}

var deskTypes = desks.reduce(function(previous, desk) {
if (desk.type === 'sitting') { console.log("Sitting!"); previous.sitting++; }
if (desk.type === 'standing') { console.log("Standing!"); previous.standing++; }

 desk.type === 'sitting' ? previous.sitting++ : "";

}, { sitting: 0, standing: 0 });

console.log("previous",deskTypes);
let a = (function(x, y, z){ delete x, delete y, delete z; return x + y + z; })(1, [2, 3], {x: 4});
 console.log(a);
