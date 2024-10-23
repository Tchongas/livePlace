getData();


let pixelSize = 50;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let mouse = {
    x: 0,
    y: 0
};

const colors = [
    'white',
    '#47b347',
    '#4769b3',
    '#b34747',
    'black',

];
let color = colors[0];

const colorMap = {
    "0": colors[0],
    "1": colors[1],
    "2": colors[2],
    "3": colors[3],
    "4": colors[4],
}

setInterval(getData, 5000);