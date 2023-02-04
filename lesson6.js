/* 1.Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу. */
/* const smallPicArray = ["img1", "img2", "img3"];
let buttons = document.querySelectorAll("button");
for(let i = 0; i<3; i++) {
  buttons[i].onclick = function(e) {
    img = document.createElement("img");
    img.src = e.target.id + ".png";
    document.querySelector("div").append(img);
  }
}; */


const images = ["img-mini_1", "img-mini_2", "img-mini_3"];
let counter = 1;
function setImages(event) {
  const idMiniPic = `#${event.target.id}`;
  const arrayId = idMiniPic.split("_");
  const src = `./img/img${arrayId[1]}.png`;
  const firstImage = document.querySelector("#img_big");
  firstImage.src = src;
  counter = +arrayId[1];
  firstImage.onerror = function() {
    alert("Ошибка загрузки");
  }

};

images.forEach(element => {
  const image = document.querySelector(`#${element}`);
  image.addEventListener("click", setImages);
});

const previousBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
nextBtn.addEventListener("click", handleButtons);
previousBtn.addEventListener("click", handleButtons);


function handleButtons() {
  if (event.target.id === "left") {
    if (counter - 1 < 1) {
      counter = images.length;
    } else {
      counter --;
    }
  } 
  if (event.target.id === "right") {
    if (counter + 1 > images.length){
      counter = 1;
    } else {
      counter ++;
    }
  }
  const src = `./img/img${counter}.png`;
  const firstImage = document.querySelector("#img_big");
  firstImage.src = src;
};

/* Реализовать модуль корзины. Создать блок товаров и блок корзины.
У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. 
Корзина должна уметь считать общую сумму заказа. */
