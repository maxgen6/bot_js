'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let getRandomNumber = function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// const getCounter = function() {
//     let counter = 0;
//     return function(){
//         return ++counter;
//     }

// };

// const gameRandom = function(attemps){

//     const randomNum = getRandomNumber(1, 100);
//     console.log(randomNum);
//     const counter = getCounter();

//     return function checkNumber(){
//         const count = counter()
//         const userNumber = promt('Угадай число от 1 от 100?');

//         if(isNum(userNumber)){
//             let repeat = false;
//             if(count < attemps){
//                 const num = +userNumber;
//                 if(num > randomNum){
//                     alert('Загаданное число меньше');
//                     return checkNumber();
//                 }
//                 if(num < randomNum){
//                     alert('Загаданное число больше');
//                     return checkNumber();
//                 }
//                 let repeat = confirm('Вы угадали число! Хотите сыграть еще?');
            
                 
//             }else {
//                 let repeat = confirm('Количество попыток закончилось! Хотите сыграть еще?');
//             }

            
//             if (repeat)  gameRandom(attemps);
//         } else {
//             if (userNumber !== null) { 
//             alert('Введи число!');
//             checkNumber();
//             alert('Пока друг');
//         }

//     }

// };

// const game = gameRandom(10);
// game();

let game = function(){
    const randomNumber = getRandomNumber(1, 100);
    console.log(randomNumber);
    
    let searchNumber = function (){
        let number = 0;
        number = +prompt('Угадай число от 1 до 100');
        if((isNaN(number)) && (number > randomNumber)){
            alert('Загаданное число меньше, введите еще раз');
            return searchNumber();
        } else if(number < randomNumber){
             alert('Загаданное число больше, введите еще раз');
            return searchNumber();
        } else if(number == randomNumber){
             alert('Вы угадали!');
                  
        } else if(number === null){
            alert('Вы вышли из игры');
         }  
    
    

}
    searchNumber();
};
game();


