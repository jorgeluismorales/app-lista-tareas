const fs = require('fs');

const guardarDB = (info) => {
    const archivo = './db/tareasbd.json'
    fs.writeFileSync(archivo, JSON.stringify(info))
}

module.exports = guardarDB;