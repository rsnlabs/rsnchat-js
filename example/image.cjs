const { RsnChat } = require("../build/cjs/index.cjs");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";
const negative_prompt = "blury, bad quality";
const model = "absolutereality_v181.safetensors [3d9d4d2b]";

rsnchat.prodia(prompt, negative_prompt, model).then((response) => {
  console.log(response);
});
