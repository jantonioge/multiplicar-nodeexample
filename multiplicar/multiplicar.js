const fs = require('fs');
const colors = require('colors');

let data = '';

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
        }
        for (let cont = 1; cont <= limite; cont++) {
            data += `${base} * ${cont} = ${base * cont}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

let listarTabla = (base, limite) => {
    console.log('======================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('======================='.green);
    for (let cont = 1; cont <= limite; cont++) {
        console.log(`${base} * ${cont} = ${base * cont}`);
    }
};


//se agrega de forma global crearArchivo
module.exports = {
    crearArchivo,
    listarTabla
}