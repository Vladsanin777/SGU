class ALL {
    button(){
        return ["Для абитуриентов", "Для студентов", "o", "p"]
    }
    // This method creates a button with the specified name, width, height, color, and background color
    createButton(name, colorView, colorText) {
        const button = document.createElement("button");
        button.textContent = name; // Set the button's text content to the specified name
        button.style.display = "inline"; // Set the button's display property to inline
        button.style.color = colorText; // Set the button's text color to the specified color
        button.style.margin = "10px"; // Add 10px of margin to the button
        button.style.backgroundColor = colorView; // Set the button's background color to the specified color
        button.style.border = "5px"; // Add a 5px border to the button
        button.style.borderRadius = "7px"; // Round the button's corners with a radius of 7px
        button.style.textAlign = "center"; // Center the button's text horizontally
        button.style.fontSize = "10px"; // Set the button's font size to 10px
        console.log("button")
        return button; // Return the created button element
    }
    color(){
        return ["red", "blue", "green", "pink", "maroon", "orange", "olive", "yellow", "lime", "teal", "cyan", "aqua", "purple", "fuchsia"]
    }
    // This method generates a random index from the colors array
    random_color(color) {
        return Math.floor(Math.random() * color); // Get a random integer between 0 and the length of the colors array
    }
    buttonwindow(){
        return Math.floor((window.innerWidth - 30) / 100)
    }
    createButton_setup(colorView, colorText){
        // Создаем кнопки
        let button_list = [];
        let button = this.button();
        for (let i of button) {
            button_list.push(this.createButton(i, colorView, colorText));
        }
        this.button_list = button_list;
        return button_list
    }
    createGroup_1(list_button) {
        let buttonGroup = document.createElement("div");
        buttonGroup.style.display = "flex";
        buttonGroup.style.justifyContent = "center";
        buttonGroup.style.alignItems = "center";
    
        for (let button of list_button) {
            buttonGroup.appendChild(button);
            console.log("2 раза")
        }
        return buttonGroup;
    }
    createGroup_2(colorView, colorText) {
        // Initialize an empty array to store button groups
        let group_group_list = [];
    
        // Create buttons and group them
        let buttons = this.createButton_setup(colorView, colorText);
        let n = 0;
        let list_buttons = []
        // Loop through the buttons and group them based on the button window size
        for (let i of buttons) {
            n += 1 
            list_buttons.push(i)
            if (n == this.buttonwindow()) {
                group_group_list.push(this.createGroup_1(list_buttons));
                list_buttons = []
                n = 0;
            }
        }
    
        // Return the array of button groups
        return group_group_list;
      
    }
    createGroup_setup(colorView, colorText){
        // Добавляем группу кнопок на страницу
        //console.log(this.group_group_list)
        console.log(this.createGroup_2(colorView, colorText))
        for (let i of this.createGroup_2(colorView, colorText)){
            console.log(i)
            document.body.appendChild(i);
        }
    }
    setupColor_all() {
        let color = this.color().length
        // Generate random colors for the button text, view, and background
        let colorText = this.random_color(color);
        let colorView = this.random_color(color); 
        while (colorView == colorText) {
            colorView = this.random_color(color); 
        }
        let colorBackground = this.random_color(color);
        while (colorText == colorBackground | colorView == colorBackground) {
            colorBackground = this.random_color(color);
        }
        console.log(colorBackground)
        console.log(colorView)
        console.log(colorText)
        let color_all = this.color()
        document.body.style.backgroundColor = color_all[colorBackground];
        this.createGroup_setup(color_all[colorView], color_all[colorText])
    }
}
all = new ALL()
all.setupColor_all()