//const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  menuDinamico,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
require("colors");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }
  do {
    opt = await menuDinamico();

    switch (opt) {
      case "1":
        const desc = await leerInput("descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;

      case "3":
        tareas.listarPendientesCompletadas();
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        console.log(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("¿estas seguro?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada");
          }
        }

        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
