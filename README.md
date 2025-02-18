<h1 align="center"><b>RsnChat</b> <img src="https://i.ibb.co/0J89TrT/rsn-bot-1.png" width="30" style="border-radius: 50%; margin-bottom: -5px"></h1>
<p align="center"><i>The ultimate AI-powered RsnChat</i></p>

This package for AI chats and AI images.

## Installation

**Installation For CLI**

```bash
npm i -g rsnchat
```

**Installation**

```bash
npm i rsnchat
```

# APIKEY

Discord : [https://api.rnilaweera.lk/discord](https://api.rnilaweera.lk/discord)

Join discord server and create account with **/register** slash command and get your apikey with **/generate-key** slash command for free!

## Usage Available Models

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnlabs_××××××××××××××××××××××××××××××");

rsnchat.getModels().then((models) => {
  console.log("Active Chat Models:", models.chatModels);
  console.log("Active Image Models:", models.imageModels);
}).catch((error) => {
  console.error(error.message);
});
```

## Usage Chat Completion

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnlabs_××××××××××××××××××××××××××××××");

const prompt = "Hello, what is your name?"
const model = "gemini" // gpt, grok-2, llama, etc... (https://api.rnilaweera.lk/api/models)

rsnchat.chat(prompt, model).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error.message);
});
```

## Usage Image Generation

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnlabs_××××××××××××××××××××××××××××××");

const prompt = "beautiful girl";
const model = "flux"; // rsnlabs, photograpy, etc... (https://api.rnilaweera.lk/api/models)

rsnchat.image(prompt, model).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error.message);
});
```

**Example CLI Command**

```hs
rsnchat
```