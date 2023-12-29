class ALL_DATA {
    static backgroundColor_all;
    static color_all = ["red", "blue", "green", "pink", "maroon", "orange", "olive", "yellow", "lime", "teal", "cyan", "aqua", "purple", "fuchsia"];
    static button = ["Для абитуриентов", "Для студентов"];
    static width_all;
    static height_all;
    static colorText;
    static colorView;
    static colorBackground;
    static button_list;
    static group_button_list;
}
class ALL {
    // This method creates a button with the specified name, width, height, color, and background color
    createButton(name) {
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
        all_data = new ALL_DATA()
        return Math.floor(Math.random() * all_data.colors.length); // Get a random integer between 0 and the length of the colors array
    }
    setupBackground(){
        all_data = new ALL_DATA()
        // Устанавливаем фоновый цвет в соответствии с случайным числом
        document.body.style.backgroundColor = all_data.colorBackground;
    }
    setupColor_all() {
        all_data = new ALL_DATA()
        // Generate random colors for the button text, view, and background
        let colorText = this.random_color();
        let colorView = this.random_color(); 
        while (colorView == colorText) {
            colorView = this.random_color(); 
        }
        let colorBackground = this.random_color();
        while (colorText == colorBackground | colorView == colorBackground) {
            colorBackground = this.random_color(); 
        color = all_data.color;
        all_data.colorBackground = color[colorBackground];
        all_data.colorView = color[colorView];
        all_data.colorText = color[colorText];
        }
    }
    get_window(){
        all_data = new ALL_DATA();
        all_data.height_all = window.innerHeight;
        all_data.width_all =window.innerWidth;
    }
    buttonwindow(){
        all_data = new ALL_DATA();
        width_all = all_data.width_all
        
    }
    createButton_setup(){
        all_data = new ALL_DATA();
        // Создаем кнопки
        button = all_data.button
        for ( i in button){
            button_list.push(this.createButton(i))
        }
        all_data.button_list = button_list
    }
    createGroup(){
        all_data = new ALL_DATA();
        // Добавляем кнопки в группу
        const buttonGroup = document.createElement("div");
        buttonGroup.style.display = "flex";
        buttonGroup.style.justifyContent = "center";
        buttonGroup.style.alignItems = "center";
        buttonGroup.appendChild(buttonForAbbiturient);
        buttonGroup.appendChild(buttonForStudens);
    }
    createGroup_setup(){
        all_data = new ALL_DATA();
        group_button_list = all_data.group_button_list
        // Добавляем группу кнопок на страницу
        for (i in group_button_list){
            document.body.appendChild(i);
        }
    }
}