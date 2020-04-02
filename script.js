'use strict';
// let isNumber = function(n){
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }

let getRandomNumber = function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);

let searchNumber = function (){
    let number = 0;
     number = prompt('Угадай число от 1 до 100');
    if(number > randomNumber){
        number = prompt('Загаданное число меньше, введите еще раз');
    } else if(number < randomNumber){
        number = prompt('Загаданное число больше, введите еще раз');
    } else if(typeof number !== 'number'){
        number = prompt('Введите число');
    } 
   
    // let searchRandomNumber = function(randomNumber){
    //     return searchRandomNumber(randomNumber);
    //     console.dir(searchRandomNumber())
    // }
    
    }
searchNumber();