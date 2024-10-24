function createButtons() {
    //iterate trouch colors array and create buttons with the background based on its color value
    colors.forEach(color => {
        const button = document.createElement('button');
        button.id = color;
        button.onclick = () => changeColor(color);
        button.className = 'color-button';
        button.style.backgroundColor = color;
        document.getElementById('buttons').appendChild(button);
    })
};

createButtons();