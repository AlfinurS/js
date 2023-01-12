/* 
do {//Выводим первый вопрос
    ok = false;
    fact = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (fact == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, fact);
    }
} while (!ok);


switch (fact) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            fact = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (fact == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, fact);
            }
        } while (!ok);
        switch (fact) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    fact = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (fact == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, fact);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    fact = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (fact == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, fact);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            fact = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (fact == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, fact);
            }
        } while (!ok);
        switch (fact) {
            case 1: // Второе действие
                do {
                    ok = false;
                    fact = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (fact == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, fact);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    fact = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (fact == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, fact);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру'); */
