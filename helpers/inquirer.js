const inquirer = require("inquirer");
require("colors");

const menuDinamico = async () => {
  console.clear();
  console.log("========================".rainbow);
  console.log("Seleccione una opcion".america);
  console.log("========================".rainbow);

  const { option } = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "¿Que opcion desea seleccionar?",
      choices: [
        {
          value: "1",
          name: `${"1.".blue} Crear tarea`,
        },
        {
          value: "2",
          name: `${"2.".blue} Listar tareas`,
        },
        {
          value: "3",
          name: `${"3.".blue} Listar tareas completadas`,
        },
        {
          value: "4",
          name: `${"4.".blue} Listar tareas pendientes`,
        },
        {
          value: "5",
          name: `${"5.".blue} Completar tarea(s)`,
        },
        {
          value: "6",
          name: `${"6.".blue} Eliminar tarea`,
        },
        {
          value: "0",
          name: `${"0.".blue} Salir`,
        },
      ],
    },
  ]);

  return option;
};

const pausa = async () => {
  await inquirer.prompt({
    type: "input",
    name: "pausaMenu",
    message: `Presione ${"ENTER".green} para continuar`,
  });
};

const leerInput = async (msg) => {
  const { desc } = await inquirer.prompt({
    type: 'input',
    name: 'desc',
    message: msg,
    validate: (value) => {
      if (value.length === 0) {
        return "por favor ingrese un valor";
      }
      return true;
    }
  });
  return desc;
}

const listadoTareasBorrar = async (tareas = []) => {
  const options = tareas.map((tarea, i) => {
    const indice = i + 1
    return {
      value: tarea.id,
      name: `${indice} ${tarea.desc}`
    };
  })

  options.unshift({
    value: "0",
    name: '0. Cancelar'
  });

  const { id } = await inquirer.prompt({
    type: "list",
    name: "id",
    message: "Borrar",
    choices: options,
  });
  return id;
}

const confirmar = async(mensaje) => {
  const { ok } = await inquirer.prompt({
    type: "confirm",
    name: "ok",
    message: mensaje,
  });
  return ok;
}

module.exports = { menuDinamico, pausa, leerInput, listadoTareasBorrar, confirmar };
