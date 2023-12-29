class View_1{
    createButton(name, buttonWidth, buttonHeight, color, backgroundColor){
        const button = document.createElement("button");
        button.textContent = name;
        button.style.display = "flex";
        button.style.height = buttonHeight;
        button.style.width = buttonWidth;
        button.style.color = color;
        button.style.margin = 10;
        button.style.backgroundColor = backgroundColor;
        button.style.border = 1;
        button.style.borderRadius = 5;
        button.style.textAlign = "center";
        button.style.fontSize = 16;
    }
}