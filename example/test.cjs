const { RsnChat } = require("../build/cjs/index.cjs");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.gpt("Hello, what is your name?").then((response) => {
  console.log(response);
});