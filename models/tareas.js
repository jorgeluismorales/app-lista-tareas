const Tarea = require('./tarea');

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })


        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoCompleto() {
        this.listadoArr.forEach((tarea, indice) => {
            const index = `${indice + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${index} ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas(completadas = true) {

        let indice = 0;

        this.listadoArr.forEach((tarea) => {


            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;

            if (completadas) {
                if (completadoEn) {
                    indice += 1;
                    console.log(`${indice} ${desc} :: ${estado}`);
                }
            } else {
                if (!completadoEn) {
                    indice += 1;
                    console.log(`${indice} ${desc} :: ${estado}`);
                }
            }

        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;