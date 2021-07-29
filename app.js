//const { mostrarMenu, pausa } = require("./helpers/mensajes");
const {guardarDB,leerDB} = require("./helpers/guardarArchivo");
const { menuDinamico, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
require("colors");


const main = async () => {

  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if(tareasDB) {

  }
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

    guardarDB( tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
