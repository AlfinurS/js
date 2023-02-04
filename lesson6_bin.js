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

const binArray = [];
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
    binArray.push(product);
    renderBin()
};


function renderBin() {
    const binItem = document.querySelector("#cart");
    binItem.innerHTML = "";
    let sumBin = 0;
    binArray.forEach(element => {
        const productItem = document.createElement("p");
        const productText = `товар ${element.id} стоит ${element.price}`;
        productItem.textContent = productText;
        sumBin = element.price + sumBin;
        binItem.appendChild(productItem);
    });
    const bin = document.createElement("p");
    const textBin = `Итого ${sumBin}`;
    bin.textContent = textBin;
    binItem.appendChild(bin);
}