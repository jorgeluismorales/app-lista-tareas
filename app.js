//const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { menuDinamico, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
require("colors");

console.clear();

const main = async () => {

  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await menuDinamico();

    switch (opt) {
      case "1":
        const desc = await leerInput('descripcion:');
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;
    }
    await pausa();
  } while (opt !== "0");
};

main();
