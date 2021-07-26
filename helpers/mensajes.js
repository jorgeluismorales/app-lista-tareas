require("colors");
const readline = require("readline");

const mostrarMenu = () => {
  console.log("========================".rainbow);
  console.log("Seleccione una opcion".america);
  console.log("========================".rainbow);

  console.log(`${"1.".blue} Crear tarea`);
  console.log(`${"2.".blue} Listar tareas`);
  console.log(`${"3.".blue} Listar tareas completadas`);
  console.log(`${"4.".blue} Listar tareas pendientes`);
  console.log(`${"5.".blue} Completar tarea(s)`);
  console.log(`${"6.".blue} Borrar tarea`);
  console.log(`${"0.".blue} Salir`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Seleccione una opcion: ", (answer) => {
    console.log(`opt: ${answer}`);
    rl.close();
  });
};

const pausa = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`\nPresione ${"ENTER".green} para continuar`, (answer) => {
    rl.close();
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
