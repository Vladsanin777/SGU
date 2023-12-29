
import View_1 from './cogs/View.js';


// Массив цветов
const colors = ["red", "blue", "green", "pink", "maroon", "orange", "olive",
    "yellow", "lime", "teal", "cyan", "aqua", "purple", "fuchsia"];

// Генерируем случайное число от 0 до 3
const colorIndex = Math.floor(Math.random() * colors.length);
const colorView = Math.floor(Math.random() * colors.length);
while (colorIndex == colorView) {
    colorView = Math.floor(Math.random() * colors.length);
}

// Устанавливаем фоновый цвет в соответствии с случайным числом
document.body.style.backgroundColor = colors[colorIndex];

// Объявляем переменные для ширины и высоты кнопки
let buttonWidth;
let buttonHeight;

// Получаем ширину и высоту окна
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth, windowHeight);

// Рассчитываем ширину и высоту кнопки
buttonWidth = windowWidth / 3;
buttonHeight = windowHeight / 6;
const view = new View_1();
// Создаем кнопки
const buttonForAbbiturient = view.createButton("Для абитуриентов", buttonWidth, buttonHeight, colors[colorIndex], colors[colorView]);
const buttonForStudens = view.createButton("Для студентов", buttonWidth, buttonHeight, colors[colorIndex], colors[colorView]);

// Добавляем кнопки в группу
const buttonGroup = document.createElement("div");
buttonGroup.style.display = "flex";
buttonGroup.style.justifyContent = "center";
buttonGroup.style.alignItems = "center";
buttonGroup.appendChild(buttonForAbbiturient);
buttonGroup.appendChild(buttonForStudens);

// Добавляем группу кнопок на страницу
document.body.appendChild(buttonGroup);