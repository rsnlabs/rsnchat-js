const { RsnChat } = require("../build/cjs/index.cjs");

const rsnchat = new RsnChat("rsnlabs_××××××××××××××××××××××××××××××");

const prompt = "beautiful girl";
const model = "flux";

rsnchat.image(prompt, model).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error.message);
});