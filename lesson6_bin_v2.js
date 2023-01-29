/* Реализовать модуль корзины. Создать блок товаров и блок корзины.
У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. 
Корзина должна уметь считать общую сумму заказа. */

const goods = [
  { 
    id: "1",
    src: "img1.png",
    price: 200,
  },
  { 
    id: "2",
    src: "img2.png",
    price: 300,
  },  
  { 
    id: "3",
    src: "img3.png",
    price: 100,
  }
];

const binObject = {};
const btn = document.querySelector("#add-bin_1");
const btn2 = document.querySelector("#add-bin_2");
const btn3 = document.querySelector("#add-bin_3");
btn.addEventListener("click", addBin);
btn2.addEventListener("click", addBin);
btn3.addEventListener("click", addBin);

function addBin(event) {
    const idBtn =  `#${event.target.id}`;
    const productId = idBtn.split("_");
    const idButton = productId[1];
    let product = goods.filter(item => item.id === idButton)[0];
    if (binObject[idButton]) { // если такой ключ уже существует, то прибавляем количество
      ++binObject[idButton].quantity
    } else { // случай, если в корзине такого ключа нет
      product.quantity = 1;
      binObject[idButton] = product;
    }
    renderBin();
};


function renderBin() {
    const binItem = document.querySelector("#cart");
    binItem.innerHTML = "";
    console.log(binObject)
    const binKeys = Object.keys(binObject);
    let total = 0; // итоговая сумма
    binKeys.forEach(key => {
      const productItem = document.createElement("p");
      const product = binObject[key];
      const productText = `товар ${product.id} стоит ${product.price} за штуку. Итого - ${product.price * product.quantity}`;
      productItem.textContent = productText;
      total = product.price * product.quantity + total;
      binItem.appendChild(productItem);
    })
    const bin = document.createElement("p");
    const textBin = `Итого ${total}`;
    bin.textContent = textBin;
    binItem.appendChild(bin);
}