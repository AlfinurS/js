/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */
/* function parseNumber(number) {
    let result = {units: null, tens: null, hundreds: null};

    if (number <= 9) {
        result.units = number;
    } else if (number <= 99) {
        let arrayNumbers = [number];
        let numberStr = arrayNumbers.join(" ");
        result.units = numberStr[1];
        result.tens = numberStr[0];
    } else if (number <= 999) {
        let arrayNumbers = [number];
        let numberStr = arrayNumbers.join(" ");
        result.units = numberStr[2];
        result.tens = numberStr[1];
        result.hundreds = numberStr[0];
    } else {
        init();
    }
    return result;
}

let numberObject = {units: null, tens: null, hundreds: null};

function init() {
    const guessedNumber = +prompt("Введите число от 0 до 999");
    numberObject = parseNumber(guessedNumber);
    console.log(numberObject)
}
init();

const resaltArray =[];
    if(numberObject.units !== null) {
        resaltArray.push(`единицы: ${numberObject.units}`);
    } if (numberObject.tens !== null) {
        resaltArray.push(`десятки: ${numberObject.tens}`);
    } if (numberObject.hundreds !== null) {
        resaltArray.push(`сотни: ${numberObject.hundreds}`);
    }
const resaltStr = resaltArray.join(', ');
console.log(resaltStr);
 */

/* *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?» */

const arrayGame = [
    objectOne = {
        question: "Возле какой горы-вулкана был впервые найден драгоценный камень танзанит?",
        answer1: "Килиманджаро",
        answer2: "Эльбрус",
        answer3: "Джомолунгма",
        answer4: "Эверест",
        correct: 1,
    },
    objectTwo = {
        question: "Какой продукт в разных странах называют папиной бородой и бабушкиными волосами?",
        answer1: "Сено",
        answer2: "Сахарная вата",
        answer3: "Волосы из подмышек",
        answer4: "Пахлава",
        correct: 2,
    },
    objectThree = {
        question: "Как называется красная тряпка в руках у матадора?",
        answer1: "Срулета",
        answer2: "Багетта",
        answer3: "Мулета",
        answer4: "Дурлета",
        correct: 3,
    }
];

let isAnswersCorrect = true;
let forYouQuestion = null;
let count = 0;

arrayGame.forEach((object) => {
    if (!isAnswersCorrect) {
        return;
    }
    forYouQuestion = alert(`${object.question}`);
    let answerOptions = +prompt(`Варианты ответов:
    1. ${object.answer1},
    2. ${object.answer2},
    3. ${object.answer3},
    4. ${object.answer4}`);
    if (answerOptions === object.correct){
        alert("Ответ правильный.");
        ++count;
    } else {
        isAnswersCorrect = false;
        alert(`Не верно! Правильный ответ № ${object.correct}`);
    };
});
alert(`Количество правильных ответов: ${count}`);

