//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

let answers = [];
let fact = null;
let ok = false;

function switchFact (){
    action('a');
    
    if (fact === 1) {//1 действие если 1
        action('b');
        if (fact === 1) { //2 действие если 1
            action('d');
            answerBack();
        }
        else if (fact === 2) {//2 действие если 2
            action('d');
            answerBack();
         }
    }
    else if (fact === 2) {//1 действие если 2
        action('c');
        if(fact === 1) {//2 действие если 1
            action('d');
            answerBack();
        }
        else if (fact === 2) {//2 действие если 2
            action('d');
            answerBack();
        }
    }
    else {
        alert("Спасибо за игру");
    }
}
switchFact();

function action(name) {
    fact = +prompt(`${works[`${name}00`]} ${works[`${name}1`]} ${works[`${name}2`]} -1 - Выход из игры`);
    ok = isAnswer(works[`${name}0`], fact);
    if (!ok) return;
    answers.push(works[`${name}${fact}`]);
}

function answerBack() {
    let n = null;
    if (!isNaN(fact)) {
        n = +prompt("Введите номер вопроса 1 или 2");
        if (n > 0) {
            alert(`Ваш ответ был ${answers[n - 1]} Спасибо за игру!`);
        }
    }
}

function isAnswer(q, fact) {
    if (isNaN(fact) || !isFinite(fact)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (fact < 1 || fact > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}
