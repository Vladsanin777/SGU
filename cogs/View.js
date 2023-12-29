class View_1{
    createButton(name, buttonWidth, buttonHeight, color, backgroundColor){
        const button = document.createElement("button");
        button.textContent = name;
        button.style.display = "flex";
        button.style.height = buttonHeight;
        button.style.width = buttonWidth;
        button.style.color = color;
        button.style.backgroundColor = backgroundColor;
        
    }
    buttonForAbbiturient(){
        const buttonForAbbiturient = document.createElement("button");
        buttonForAbbiturient.textContent = "Для абитуриетов";
        buttonForAbbiturient.style.display = "block";
        // Устанавливаем ширину и высоту кнопки
        button.style.height = "20px";
        button.style.width = "15px";
        buttonForAbbiturient.style.color = colors[colorIndex];
        buttonForAbbiturient.style.backgroundColor = colors[colorView];
        buttonForAbbiturient.style.margin = "10px";
        buttonForAbbiturient.addEventListener("click", () => {
        window.location.href = "red.html";
        document.body.style.backgroundColor = "blue";
        });
        return buttonForAbbiturient;
    }
    buttonForStudens(){
        const buttonForStudens = document.createElement("button");
        buttonForStudens.textContent = "Для учащихся";
        buttonForStudens.style.display = "block";
        buttonForStudens.style.margin = "10px";
        // Устанавливаем ширину и высоту кнопки
        buttonForStudens.style.color = colors[colorIndex];
        buttonForStudens.style.backgroundColor = colors[colorView];
        buttonForStudens.addEventListener("click", () => {
        window.location.href = "blue.html";
        document.body.style.backgroundColor = "red";
        });
        return buttonForStudens;
    }
}