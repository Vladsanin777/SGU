class ALL_DATA {
    static backgroundColor_all;
    static color_all;
    static button;
    static width_all;
    static height_all;
    static button_amt;
    static colorText;
    static colorView;
    static colorBackground;
    static button_list;
    static group_button_list;
}
class ALL extends ALL_DATA {
    // This method creates a button with the specified name, width, height, color, and background color
    createButton(name) {
        const button = document.createElement("button");
        button.textContent = name; // Set the button's text content to the specified name
        button.style.display = "inline"; // Set the button's display property to inline
        button.style.color = this.colorText; // Set the button's text color to the specified color
        button.style.margin = "10px"; // Add 10px of margin to the button
        button.style.backgroundColor = this.colorBackground; // Set the button's background color to the specified color
        button.style.border = "5px"; // Add a 5px border to the button
        button.style.borderRadius = "7px"; // Round the button's corners with a radius of 7px
        button.style.textAlign = "center"; // Center the button's text horizontally
        button.style.fontSize = "10px"; // Set the button's font size to 10px
        return button; // Return the created button element
    }
    init_start(){
        this.color_all = ["red", "blue", "green", "pink", "maroon", "orange", "olive", "yellow", "lime", "teal", "cyan", "aqua", "purple", "fuchsia"];
        this.button = ["Для абитуриентов", "Для студентов"]
    }
    // This method generates a random index from the colors array
    random_color() {
        return Math.floor(Math.random() * this.color_all.length); // Get a random integer between 0 and the length of the colors array
    }
    setupBackground(){
        // Устанавливаем фоновый цвет в соответствии с случайным числом
        document.body.style.backgroundColor = this.colorBackground;
    }
    setupColor_all() {
        // Generate random colors for the button text, view, and background
        let colorText = this.random_color();
        let colorView = this.random_color(); 
        while (colorView == colorText) {
            colorView = this.random_color(); 
        }
        let colorBackground = this.random_color();
        while (colorText == colorBackground | colorView == colorBackground) {
            colorBackground = this.random_color(); 
        let color = this.color_all;
        this.colorBackground = color[colorBackground];
        this.colorView = color[colorView];
        this.colorText = color[colorText];
        }
    }
    get_window(){
        this.height_all = window.innerHeight;
        this.width_all = window.innerWidth;
    }
    buttonwindow(){
        let width_all = this.width_all
        width_all -= 30
        let button_amt = Math.floor( width_all / 100)
        if (button_amt > 5){
            button_amt = 5
        }
        this.button_amt = button_amt
    }
    createButton_setup(){
        // Создаем кнопки
        let button_list = [];
        let button = this.button;
        for (let i of button) {
            button_list.push(this.createButton(i));
        }
        this.button_list = button_list;
    }
    createGroup_1(list_button) {
        let buttonGroup = document.createElement("div");
        buttonGroup.style.display = "flex";
        buttonGroup.style.justifyContent = "center";
        buttonGroup.style.alignItems = "center";
    
        for (let button of list_button) {
            buttonGroup.appendChild(button);
        }
        
        this.group_button_list.push(buttonGroup);
    }
    createGroup_2(){
        let n = 0;
        let list_but = [];
        if (this.group_button_list == null){
            this.group_button_list = []
        }
        for (let i of this.button_list){
            list_but.push(i);
            n += 1;
            if (n == this.button_amt){
                this.createGroup_1(list_but);
                n = 0;
            }
        }
    }
    createGroup_setup(){
        // Добавляем группу кнопок на страницу
        for (i in this.group_group_list){
            document.body.appendChild(i);
        }
    }
    setup(){
        this.get_window();
        this.init_start();
        this.setupColor_all();
        this.setupBackground();
        this.buttonwindow();
        this.createButton_setup();
        this.createGroup_2();
        this.createGroup_setup();
    }
}
all = new ALL()
all.setup()