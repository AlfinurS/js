    ///***** Урок 2
//3.Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
/* const a = -2, b = 0;
if (a > 0 && b > 0)
  alert (a - b);
if (a < 0 && b < 0)
  alert (a * b);
if ((a < 0 && b >= 0) || (a >= 0 && b < 0))
  alert (a + b); */

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
/* let a = 3;
const lastNumber = 15;

function showNumber () {
  if (a <= lastNumber) {
    switchAlert(a++);
    showNumber();
  }
}
showNumber();

function switchAlert(b) {
  switch (b) {
    case b:
      alert(b);
      break;
    default:
      alert("error");
  }
} */

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function plus(a, b) {
  return a + b;
};

function minus(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function degree(a, b) {
  return a / b;
};

function init() {
  console.log(plus(5, 4));
  console.log(minus(5, 4));
  console.log(multiply(5, 4));
  console.log(multiply(5, 4));
}
//init();

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
  switch(operation) {
    case "-":
      alert (arg1 - arg2);
      break;
    case "+":
      alert (arg1 + arg2);
      break;
    case "*":
      alert (arg1 * arg2);
      break;
    case "/":
      alert (arg1 / arg2);
      break;
  }
}
//mathOperation( +prompt("Перовое число"), +prompt("Второе число"), prompt("Операция") );

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
  alert(Math.pow(val, pow));
}
//power(+prompt("число"), +prompt("степень"));


//Доп задание: 
// «Угадай число». Браузер будет загадывать случайное четырехзначное число, а мы будем отгадывать.
// Попытки отгадать число будут идти через диалоговое окно — prompt. 
// Браузер будет сообщать в ответ, больше или меньше загаданного наш ответ.
// Алгоритм будет таким:
// 1. Браузер генерирует число и приглашает пользователя к игре.
// 2. Выводится окно запроса предположения.
// 3. Браузер проверяет число и возвращает результат.
// 4. Повторяем до тех пор, пока число не будет угадано.
// 5. Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.
// Пока не будем ничего выводить на страницу. И пока наш алгоритм далек от совершенства. Как только
// изучим новые возможности языка — сразу улучшим его.

let tryCount = 0;
let initialValue = null;
function initValue() {
  initialValue = Math.round( Math.random() * ( 9000 - 1000 ) + 1000 );
  alert(initialValue);
}
//initValue();

function guessNumb (giveNumb) {
  if (giveNumb > initialValue) {
    alert ("Меньше!");
    startGuesssing();
  }
  else if (giveNumb < initialValue) {
    alert ("Больше!");
    startGuesssing();
  }
  else if (giveNumb == initialValue) {
    alert ("Угадал!");
    tryCount = 0;
    initValue();
    startGuesssing();
  }
}
function startGuesssing() {
  const number = prompt(`Угадайте число. Попытка ${++tryCount}`);
  guessNumb(number);
}
//startGuesssing();
