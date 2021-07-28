//const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { menuDinamico, pausa } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");
require("colors");

console.clear();

const main = async () => {
  console.log("hola mundo");

  let opt = "";

  do {
    opt = await menuDinamico();
    console.log({ opt });
    const tareas = new Tareas();
    const tarea = new Tarea("comprar comida");

    tareas._listado[tarea.id] = tarea;
    console.log(tareas);
    await pausa();
  } while (opt !== "0");
};

main();
