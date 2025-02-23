const { RsnChat } = require("../build/cjs/index.cjs");

const rsnchat = new RsnChat("rsnlabs_××××××××××××××××××××××××××××××");

const image_url = "";

rsnchat.checkNSFW(image_url).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error.message);
});