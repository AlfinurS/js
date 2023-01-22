/* 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., 
причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
3. *Заменить буквы, обозначающие фигуры, картинками. */

function prepareDesk() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]; 
  const app = document.querySelector("#App");
  app.className = "app";
  let rowNumbers = rankingNumbers();
  app.appendChild(rowNumbers);
  letters.forEach((letter, index) => {
    if (index % 2 === 0) {
      let row = renderRow(0, letter);
      app.appendChild(row);
    } else {
      row = renderRow(1, letter);
      app.appendChild(row);
    }
  });
  rowNumbers = rankingNumbers();
  app.appendChild(rowNumbers);
}

function renderRow(number, character) {
  const row = document.createElement("div");
  row.className = "row";
  let letter = document.createElement("div");
  letter.className = "cell letter";
  letter.textContent = character;
  row.appendChild(letter);

  for (let i = 1; i <= 8; i++) {
    const cell = document.createElement("div");
    let id = character + i;
    cell.setAttribute("id", id);
    if (i % 2 === number) {
      cell.className = "cell black";
      
    } else {
      cell.className = "cell white";
    }
    
    row.appendChild(cell);
  }
  letter = document.createElement("div");
  letter.className = "cell letter";
  letter.textContent = character;
  row.appendChild(letter);

  return row;
}

function rankingNumbers() {
  const arrayNumbers = ["", 1, 2, 3, 4, 5, 6, 7, 8, ""];
  const row = document.createElement("div");
  row.className = "row";
  arrayNumbers.forEach(digit => {
    const cell = document.createElement("div");
    cell.className = "cell letter";
    cell.textContent = digit;
    row.appendChild(cell);
  });
  return row;
}

const whiteFigures = [
  {cell: "A1", code: "&#9814;"},
  {cell: "A2", code: "&#9816;"},
  {cell: "A3", code: "&#9815;"},
  {cell: "A4", code: "&#9813;"},
  {cell: "A5", code: "&#9812;"},
  {cell: "A6", code: "&#9815;"},
  {cell: "A7", code: "&#9813;"},
  {cell: "A8", code: "&#9812;"},
  {cell: "B1", code: "&#9817;"},
  {cell: "B2", code: "&#9816;"},
  {cell: "B3", code: "&#9815;"},
  {cell: "B4", code: "&#9813;"},
  {cell: "B5", code: "&#9812;"},
  {cell: "B6", code: "&#9815;"},
  {cell: "B7", code: "&#9813;"},
  {cell: "B8", code: "&#9812;"}
];

const blackFigures = [
  {cell: "H1", code: "&#9814;"},
  {cell: "H2", code: "&#9816;"},
  {cell: "H3", code: "&#9815;"},
  {cell: "H4", code: "&#9813;"},
  {cell: "H5", code: "&#9812;"},
  {cell: "H6", code: "&#9815;"},
  {cell: "H7", code: "&#9813;"},
  {cell: "H8", code: "&#9812;"},
  {cell: "G1", code: "&#9817;"},
  {cell: "G2", code: "&#9816;"},
  {cell: "G3", code: "&#9815;"},
  {cell: "G4", code: "&#9813;"},
  {cell: "G5", code: "&#9812;"},
  {cell: "G6", code: "&#9815;"},
  {cell: "G7", code: "&#9813;"},
  {cell: "G8", code: "&#9812;"}
];


function setFigures(figures, color) {
  figures.forEach(element => {
    const figure = document.createElement("h1");
    figure.className = color;
    figure.innerHTML = element.code;
    const cellForFigure = document.querySelector(`#${element.cell}`);
    cellForFigure.append(figure);
  });

}    

prepareDesk();
setFigures(whiteFigures, "figureWhite");
setFigures(blackFigures, "figureBlack");