/* Дополнительный курс */
/* 1. Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас хранится стоимость одного евро в рублях, 
во второй - стоимость одного доллара в рублях. Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это число и считаете.
 Результат надо вывести на страницу с помощью alert. */
/*  let euro = 72.99;
 let dollar = 67.32;
 let ruble = +prompt("Cколько рублей сконвертировать?");
 let summa = ruble * dollar;
 alert(summa); */


/*  1. Игра в загадки.
 a. Загадать загадку. Если ответ верен – поздравить пользователя. Затем сообщить, что игра окончена.
 b. Если ответ неверный – написать пользователю, что он не угадал.
 c. Добавить еще 3 загадки. Подсчитать количество правильных ответов, сообщить пользователю.
 d. (По желанию). В качестве верного ответа принимать несколько вариантов ответов. Например, «Стул», «стул», «табуретка» и так далее. */

/* 
let isExit = false;

const puzzleObject = {
    1: {
        question: "В Полотняной стране, по реке Простыне, плывет пароход, то назад, то вперед, а за ним такая гладь — ни морщинки не видать.",
        answer:"Утюг",
    },
    2: {
        question: "Речка спятила с ума — По домам пошла сама.",
        answer:"Водопровод",
    },
    3: {
        question: "Музыкант, певец, рассказчик — А всего труба да ящик.",
        answer:"Граммофон"
    },
    4: {
        question: "В Полотняной стране, по реке Простыне, плывет пароход, то назад, то вперед, а за ним такая гладь — ни морщинки не видать.",
        answer:"Утюг",
    },
    5: {
        question: "Речка спятила с ума — По домам пошла сама.",
        answer:"Водопровод",
    },
    6: {
        question: "Музыкант, певец, рассказчик — А всего труба да ящик.",
        answer:"Граммофон"
    },
};

function puzzleEng() {
    for (let i = 1; i <= 6 && !isExit; i++) {
        answerPuzzle = prompt(puzzleObject[i].question).toLowerCase();
        if (answerPuzzle === "0") {
            isExit = true;
        } else if (answerPuzzle === puzzleObject[i].answer.toLowerCase()) {
            alert("Поздравляю, ответ верный!");
        } else {
            alert("Увы, не угадал!");
            puzzleEng();
        }
    } */
/* } */
/* puzzleEng(); */


/* 1. Функции для работы с массивами
a. Написать функцию, которая принимает в качестве параметра число n. 
Результатом работы функции является массив из N элементов со значениями 1, 2, 3… n.
 */
let n = +prompt ("Введите число от 0 до 10");
const array = [];
function generateArray(length) {
    for (i = 1; i <= length; i++) {
        array.push(i);
    }
    return array;
}
generateArray(n);

/* b. Написать функцию, которая принимает массив чисел. Результатом работы функции является сумма чисел этого массива. */

/* function takeArray () {
let summaNumbers = array.reduce(function(a,b) {
    return a+b;
})
console.log(summaNumbers);
 }
 takeArray (); */

/* c. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает максимальное число. 
d. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает минимальное число.*/
/* let maxNumb = Math.max.apply(null, array);
console.log(maxNumb); */
/* let maxNumb = Math.min.apply(null, array);
console.log(maxNumb);
 */
/* 
f. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает только четные числа из этого массива. 
Чтобы определить четность числа, воспользуйтесь оператором для подсчета остатка от деления: x % 2.
Если остаток от деления числа на 2 равен 0, число будет четное. */


/* let summaNumbers = null;

function takeArray () {
    summaNumbers = array.reduce(function(a,b) {
        return a*b;
    })
    console.log(summaNumbers);
     }
takeArray () */

let evenNumbers = array.filter((x) => x % 2 === 0);
console.log(evenNumbers);
