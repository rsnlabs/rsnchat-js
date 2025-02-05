const { RsnChat } = require("../build/cjs/index.cjs");

const rsnchat = new RsnChat("rsnlabs_××××××××××××××××××××××××××××××");

rsnchat.getModels().then((models) => {
  console.log("Active Chat Models:", models.chatModels);
  console.log("Active Image Models:", models.imageModels);
}).catch((error) => {
  console.error(error.message);
});