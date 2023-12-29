class ALL_DATA {
    static backgroundColor_all;
    static color_all;
    static width_all;
    static height_all;
}
class ALL {
    // This method creates a button with the specified name, width, height, color, and background color
    createButton(name, buttonWidth, buttonHeight, color, backgroundColor) {
        const button = document.createElement("button");
        button.textContent = name; // Set the button's text content to the specified name
        button.style.display = "inline"; // Set the button's display property to inline
        button.style.height = buttonHeight; // Set the button's height to the specified value
        button.style.width = buttonWidth; // Set the button's width to the specified value
        button.style.color = color; // Set the button's text color to the specified color
        button.style.margin = "10px"; // Add 10px of margin to the button
        button.style.backgroundColor = backgroundColor; // Set the button's background color to the specified color
        button.style.border = "5px"; // Add a 5px border to the button
        button.style.borderRadius = "7px"; // Round the button's corners with a radius of 7px
        button.style.textAlign = "center"; // Center the button's text horizontally
        button.style.fontSize = "10px"; // Set the button's font size to 10px
        return button; // Return the created button element
    }

    // This method generates a random index from the colors array
    random_color() {
        return Math.floor(Math.random() * colors.length); // Get a random integer between 0 and the length of the colors array
    }
}

// Define the colors array
const colors = ["red", "blue", "green", "pink", "maroon", "orange", "olive", "yellow", "lime", "teal", "cyan", "aqua", "purple", "fuchsia"];

// Generate random colors for the button text, view, and background
const colorText = new ALL().random_color();
const colorView = new ALL().random_color(); // Get a random color for the button's view
while (colorView == colorText) {
colorView = new ALL().random_color(); // If the view color is the same as the text color, generate a new random color
}
const colorBackground = new ALL().random_color(); // Get a random color for the button's background
while (colorIndex == colorBackground) {
colorBackground = new ALL().random_color(); // If the background color is the same as the index color, generate a new random color
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