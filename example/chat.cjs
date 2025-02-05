const { RsnChat } = require("../build/cjs/index.cjs");

const rsnchat = new RsnChat("rsnlabs_××××××××××××××××××××××××××××××");

const prompt = "Hello, what is your name?"
const model = "gemini"

rsnchat.chat(prompt, model).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error.message);
});