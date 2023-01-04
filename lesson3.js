    ///***** Урок 3
/* /*     1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */
/* const initFirst = () => {
    let i = 0;
    while (i <=100) {
        let check = true;
        for (let n = 2; n < i; n++){
            if (i % n === 0) {
                check = false;
                break;
            }
        }
        if (check) console.log(i);
        i++;
    }
} */
//initFirst();

/* function initSecond() {
    const goods = [
        {
            title:"Колбаса",
            price: 100,
            quantity: 2
        },
        {
            title:"Икра",
            price: 200,
            quantity: 3
        },
        {
            title:"Шоколад",
            price: 300,
            quantity: 3
        },
        {
            title:"Пончик",
            price: 400,
            quantity: 1
        },
    ];
    function countBasketPrice(array) { */
     /*    let costGoods = 0; */
        /* for (const product of array) {
            const itemPrice = product.price * product.quantity;
            costGoods = costGoods + itemPrice;
            console.log(`${product.title} стоит ${itemPrice}`);
        } */
/*         array.forEach(product => {
            const itemPrice = product.price * product.quantity;
            costGoods = costGoods + itemPrice;
            console.log(`${product.title} стоит ${itemPrice}`);
        });
        console.log(`Итого ${costGoods}`);
    }
    countBasketPrice(goods);
} */
//initSecond();

/* 4.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 
Выглядеть это должно так: for(…){// здесь пусто} */
/* for(let n = 0; n <= 9; n++) */
/* console.log(n); */

/* 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5: */

let item = "x";
for (let i = 0; i <= 20; i++) {
    console.log(item);
    item = item + "x"
    }