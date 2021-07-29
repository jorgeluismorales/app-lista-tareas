const fs = require('fs');

const archivo = './db/tareasbd.json'

const guardarDB = (info) => {
    fs.writeFileSync('./db/tareasbd.json', JSON.stringify(info))
}

const leerDB = () => {

    if(!fs.existsSync('./db/tareasbd.json')){
        return null;
    }
    const data = fs.readFileSync('./db/tareasbd.json', {encoding: 'utf8'})
    return JSON.parse(data)
}

module.exports = {guardarDB, leerDB};