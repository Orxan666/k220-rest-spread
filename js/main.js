

// $(".btn").click(function(){
//     $(".box").stop().slideToggle(1000)
// })

// ------------------
// $("#accordion button").click(function () {
//     $("#accordion p").stop().slideUp(500)
//      $(this).next().stop().slideToggle(500)
//      })
// ---------------------

// $("#tabMenu button").click(function () {
//     const ind = $(this).index()
//     $("#tabMenu p").stop().slideUp()

//     $("#tabMenu p").eq(ind).slideToggle()
// })

// $(".btn").click(function () {
//     $(".box").animate({
//         position: "relative",
//         left: "0",
//         left: "200px",
//     },1000,function(){
//         $(".box").animate({
//             left:"0"
//         })
//     }),function(){
//         $(".box").animate({
//             top:"200px"
//         })
//     }
// })
// ------------------------------------------

// console.log(topla(3));
// function topla(a,b=4){
//     return a+b
// }
// object , array destructuring
// const person ={ad:"ORxam",yas:25}
// const {ad,...qalanlar}=person
// console.log(qalanlar);
// --------------
// rest , spreat operator


// let person = { ad: "Orxan", yas: 25, seher: "Baki" }
// // person.seher="Quba" sehvdir

// person = { ...person, seher: "Quba" };
// console.log(person);
// ---------
// function topla(a,b,c){
//     return a+b+c
// }

// const reqemler=[1,3,5]
// console.log(topla(...reqemler));
// ----------rest birlesdirme
// const say1 = [1, 2, 3]
// const say2=[4,5,6]
// // const birlesme=say1.concat(say2)

// console.log(...say1,...say2);

// ternary operator
// const korpununVeziyyeti = "masin sururem"

// korpununVeziyyeti == "aciq"
//     ? console.log("hal hazirda korpu isleyir")
//     : korpununVeziyyeti == "temir"
//         ? console.log("temire baglidir")
//         : console.log("agilli ol Ilkin");
// const topla=(a=3,b=5)=>{
// return a+b
// } 
// console.log(topla);
// -------------
// const mehsullar = [

//     { id: 3, name: "kitab", qiymet: 11 },
//     { id: 1, name: "qelem", qiymet: 15 },
//     { id: 4, name: "vereq", qiymet: 10 },
//     { id: 2, name: "defter", qiymet: 30 },

// ]
// console.log(mehsullar.find((mes) => mes.qiymet > 10)); find ilk tapdigin getirir

// console.log(mehsullar.every((mes)=>mes.qiymet<30)); 



// var say1=[1,2,3]
// var say2=[4,5,6]

// var cem=say1.concat(say2)
// console.log(cem

// );
// console.log(...say1,...say2);
// let person ={
//     ad:"Rena",
//     yas:23,
//     seher:"Baki"

// }
// console.log(person.seher="Quba"); sehvdir

// person = {...person,seher:"Quba"}
// console.log(person);

// function topla(a,b,c){
//     return a+b+c
// }

// const reqemler=[1,3,5]
// console.log(topla(...reqemler));
// ======================================
// 25.04.2022 APREL
'use strict'

// let say1 = 10;
// //  say1="Orxan"
// let student = { id: 1, name: "Orxan" }
// // console.log(student);

// function save(toplam = 10, telebe) {
//     console.log(telebe.name + " : " + toplam);
// }
// save(undefined, student)
// .............................................
// rest  , Spread , Destructure
// ------

let myObj = {
    id: 1,
    name: 'Eli'
}

let students = ['Eli', 'Orxan', 'Senan']
// console.log(students);

let student2 = [myObj, { id: 2, name: "Aygun" }, "Senan", { city: 'Baku' }]
// console.log(student2);
// // -- rest - geriye  qalanlar
// let showProducts = function (id, ...params) {
//     console.log(id);
//     console.log(params);
// }
// showProducts(1, 2, 4, 6, 8)
// showProducts(1,[2,4,5,6]) duzgun deyil











// --spread - ayrilma
// let points =[1,3,50,7]

// console.log(Math.min(...points));




// --destructuring

// let qiymetler=[100,200,300,[400,500]]
// let [small,medium,high,[veryHigh,maximum]]=qiymetler;
// console.log(small);
// console.log(medium);
// console.log(high);
// console.log(veryHigh);
// console.log(maximum);



// 0000000000000000000000



// let say1 = 10
// say1 = "Togrul"

// let student = {
//     id: 1,
//     name: "Ramil"
// }
// // console.log(student);

// function save(toplam = 51, telebe) {
//     console.log(telebe.name + " : " + toplam);
// }

// save(100, student)


let api=[100,200,300,[400,500]]
let [small,medium,high,[veryhigh,maxhigh]]=api
console.log(small);
console.log(medium);
console.log(high);
console.log(veryhigh);
console.log(maxhigh);

























