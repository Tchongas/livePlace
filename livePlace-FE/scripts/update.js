

async function update(info) { 
    document.getElementsByClassName("error")[0].style.visibility = "none";
    let x = 0, y = 0;
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

function updateBinaryArray(index, color) {
    // Define the data to be sent in the request body
    const data = {
        position: index,
        value: color
    };

    // Send a POST request with the JSON data
    fetch('http://127.0.0.1:5000/info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
    })
    .catch(error => {
        console.error('Error:', error);
    });
}