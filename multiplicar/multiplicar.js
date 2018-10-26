//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (isNaN(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return
        }
        if (isNaN(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return
        }
        if (limite < 0) {
            reject(`El valor introducido ${limite} debe ser mayor o igual a 0`);
            return
        }

        let data = '';

        console.log('====================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('====================='.green);

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };

        resolve(data)

    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (isNaN(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.rainbow)
            console.log(`El archivo tabla-${base}-al-${limite}.txt hasido creado`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}