getData();

const gridWidth = 16;
const pixelSize = 50;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let mouse = {
    x: 0,
    y: 0
};



const colors = [
    'white',
    '#47b347',
    '#7380de',
    '#b34747',
    'black',
    '#5c32a8',
    '#d6d140',
    '#de73d0',
    '#db9948',
    '#485edb',

];
let color = colors[0];

const colorMap = {
    "0": colors[0],
    "1": colors[1],
    "2": colors[2],
    "3": colors[3],
    "4": colors[4],
    "5": colors[5],
    "6": colors[6],
    "7": colors[7],
    "8": colors[8],
    "9": colors[9],

}

setInterval(getData, 200);