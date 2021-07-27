//const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { menuDinamico, pausa } = require("./helpers/inquirer");
require("colors");

console.clear();

const main = async () => {
  console.log("hola mundo");

  let opt = "";

  do {
    opt = await menuDinamico();
    console.log({ opt });
    await pausa();
  } while (opt !== "0");
};

main();
