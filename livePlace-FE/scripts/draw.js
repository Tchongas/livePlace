function draw(x, y) {
    // Snap the coordinates to the grid
    let snappedX = Math.floor(x / pixelSize) * pixelSize;
    let snappedY = Math.floor(y / pixelSize) * pixelSize;

    let positionX = snappedX / 50;
    let positionY = snappedY / 50;

    ctx.fillStyle = color;
    ctx.fillRect(snappedX, snappedY, pixelSize, pixelSize);
}

function getMousePosition(e) {
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height; 

    // Adjust mouse coordinates for canvas position, scrolling, and scaling
    mouse.x = (e.clientX - rect.left) * scaleX;
    mouse.y = (e.clientY - rect.top) * scaleY;
}

canvas.addEventListener('mousemove', getMousePosition);


canvas.addEventListener('click', function(e) {
    getMousePosition(e);
    draw(mouse.x, mouse.y);
});



function changeColor(selectedColor) {
    if (!colors.includes(selectedColor)) {
        color = "white";
        return
    }
    color = selectedColor;
}