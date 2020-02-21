const fs = require('fs');

let listarTabla = (limite, base) => {

    return new Promise((resolve, reject) => {

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, err => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-limite-${limite}.txt`);
        });

    });

}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        let data = '';
        for (let i = 0; i <= 10; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}