let x = 0, y = 0;

async function update(info) { 
    info.forEach((value, i) => {
    const xPos = x * pixelSize
    const yPos = y * pixelSize

    const color = colorMap[value]
    if (color) {
        ctx.fillStyle = color
        ctx.fillRect(xPos, yPos, pixelSize, pixelSize)
    }

    x++
    if (x === 16) {
        x = 0
        y++
    }
    });
}