// let data = require('../jpcolor/jpcolor-data');
//
// console.log(data.length);

let data = require('./data_raw.json');

let regName = /([^\x00-\xff]+)/,
    regHex = /(#.{6})/,
    regRGB = /(\(.*\))/;

let result = [];

for (let i = 0; i < data.length; i++) {
// for (let i = 0; i < 3; i++) {
//     let rgb = regRGB.exec(data[i])[1].slice(1, -1).split(',');
    result.push({
        name: regName.exec(data[i])[1],
        hex: regHex.exec(data[i])[1],
        // r: parseInt(rgb[0].trim()),
        // g: parseInt(rgb[1].trim()),
        // b: parseInt(rgb[2].trim()),
    });
}

require('fs').writeFileSync(require('path').join(__dirname, 'out.json'), JSON.stringify(result,));

console.log(result);