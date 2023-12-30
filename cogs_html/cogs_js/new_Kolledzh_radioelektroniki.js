class ALL {
    is_Mobil() {
        if (/iPhone|Android|BlackBerry|webOS|Windows Phone/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }
    is_new_Geologicheskiy_koledzh(){
        return []
    }
    color(){
        return ["red", "blue", "green", "pink", "maroon", "orange", "olive", "yellow", "lime", "teal", "cyan", "aqua", "purple", "fuchsia"]
    }
    // This method generates a random index from the colors array
    random_color(color) {
        return Math.floor(Math.random() * color); // Get a random integer between 0 and the length of the colors array
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