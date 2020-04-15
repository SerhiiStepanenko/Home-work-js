"use strict";
//1/1
let string1 = 'Ytube';
let string2 = 'ou';
let sliceString = '';

let a = string1[0] + string2;
let b = string1[1].toUpperCase() + string1.slice(2, 5)
sliceString = a + b;

console.log(sliceString); // --> YouTube

//1/2
let string1 = 'Ytube';
let string2 = 'ou';
let sliceString = '';

sliceString = string1[0] + string2 + string1[1].toUpperCase() + string1.slice(2, 5);
console.log(sliceString); // --> YouTube


//2/
let numbers = [25, 1];
let project = 'проект';
let team = 'команда';
let howMuch = 'Сколько';
let str = 'нужно программистов чтобы сделать проект ?';
let sentence = '';
sentence = howMuch + ' ' + str.slice(0, 34) + (numbers[1]) + ' ' + str.slice(34, 43);
console.log(sentence) // --> собрать предложение


//3/
// Напишите функцию fizzBuzz, которая будет возвращать
// 'Fizz' если передаваемый параметр кратен 3,
// 'Buzz', если передаваемый параметр кратен 5,
// 'FizzBuzz' - если параметр кратен 3 и 5.
// Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
const fizzBuzz = function (num) {
      if(num % 3 === 0 && num % 5 === 0) {
        console.log('fizzbuzz')
      }else if(num % 3 === 0) {
        console.log('fizz')
      }else if(num % 5 === 0) {
        console.log('buzz')
      }else {
        console.log(num)
      }
}
fizzBuzz(30);


//4/
// Напишите функцию которая будет возвращать объект
// с свойством name, а значением будет первый аргумент функции
function myFunc(theObject) {
    theObject.name = 'Вася';
    console.log(myName.name)
  }
  let myName = {name: '',};
  myFunc(myName);

  

//5/
// Функция будет принимать 1 аргумент
// - ОБЪЕКТ у которого
// будет свойство name
// и возвращать новый объект изменяя свойство name
// в большой регистр
function myFunc(theObject) {
      let newObject = {
        name: theObject.toUpperCase()
      }
      console.log(newObject.name)
    }
    
  myFunc('вася');
 

//6/
// Напишите функцию которая принимает в качестве аргумента массив и элемент массива, и добавляет элемент в конец массива (без метода push)
const myFunc = function(){
    let arr = [1, 2, 3];
    arr[arr.length] = 4
    console.log(arr);
}
myFunc()