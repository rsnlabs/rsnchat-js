const RsnChat = require('../index');

const rsnchat = new RsnChat('chatgpt_××××××××××××××××××××××');

rsnchat.gpt('Hello, what is your name?')
  .then(response => {
    console.log(response.message);
  })