"use strict";
//1/Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три.

let a = 2;
let b = a * 3;
let c = a + b;

console.log(a);
console.log(b);
console.log(c);


//2/Создайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие (“What’s up John Doe”).

let firstName = prompt('firstName');
let lastName = prompt('lastName');

console.log('What’s up', firstName, lastName);


//3/Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.

let x = Number(prompt('x'));
let y = Number(prompt('y'));

alert (x + ` * ${y} = ` + (x * y));
alert (x + ` / ${y} = ` + (x / y));
alert (x + ` - ${y} = ` + (x - y));
alert (x + ` + ${y} = ` + (x + y));


//4/Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные значения читаются из prompt.

let workingHours  = Number(prompt('количество рабочих часов?'))//количество рабочих часов в день
let workingDays  = Number(prompt('количество рабочих дней в неделе?'))//количество рабочих дней в неделе
let hourRate = Number(prompt('рейт за час?'))//рейт за час
let weeksInMonth = 4 //количество недель в месяце
let formula = ((hourRate*workingHours)*workingDays)*weeksInMonth;

alert(`з/п за июль: ${formula} $`);


//5/Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным.

let num = Number(prompt('введите число'))
if(num%2){
    alert('число не четное')
}



//6/Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.

let num = (prompt())
if(isNaN(num)){
    alert('не число')
}else{
    alert('число')
};


//7/Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.

let randomNumber = Math.random();
console.log(randomNumber);
let count = Math.round(randomNumber * 100);
console.log(count);
let num = Number(prompt('введите число'))

if(count < num){
    alert('Первое число ' + count + ' меньше чем второе число ' + num);
}else{
    alert('Первое число ' + count + ' больше чем второе число ' + num)
}


//8/Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной. Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать (примените для этого обратные кавычки ` `). Отобразите результат в модальном окне.

let str = prompt('введите предложение', '«Мне нравится изучать Front-end»');
let str2 = prompt('что вам нравится изучать?');
console.log(str2.includes('Front-end'));
console.log(str2);
let str3 = str.slice(0, -10);
let result = `${str3} ${str2}`;
alert(result);