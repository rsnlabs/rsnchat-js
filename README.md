# rsnchat

This package package for interacting with GPT4-based chat services, OpenChat, Bard, Gemini, LlaMa and Mixtral without restrictions or limits

## Installation

**Installation For CLI**
```bash
npm i -g rsnchat
```

**Installation**
```bash
npm i rsnchat
```

## Usage GPT4

```javascript
const RsnChat = require('rsnchat');

const rsnchat = new RsnChat('chatgpt_××××××××××××××××××××××');

rsnchat.gpt('Hello, what is your name?')
  .then(response => {
    console.log(response.message);
  })
```

## Usage OpenChat

```javascript
const RsnChat = require('rsnchat');

const rsnchat = new RsnChat('chatgpt_××××××××××××××××××××××');

rsnchat.openchat('Hello, what is your name?')
  .then(response => {
    console.log(response.message);
  })
```

## Usage Bard

```javascript
const RsnChat = require('rsnchat');

const rsnchat = new RsnChat('chatgpt_××××××××××××××××××××××');

rsnchat.bard('Hello, what is your name?')
  .then(response => {
    console.log(response.message);
  })
```

## Usage Gemini

```javascript
const RsnChat = require('rsnchat');

const rsnchat = new RsnChat('chatgpt_××××××××××××××××××××××');

rsnchat.gemini('Hello, what is your name?')
  .then(response => {
    console.log(response.message);
  })
```

## Usage LlaMa

```javascript
const RsnChat = require('rsnchat');

const rsnchat = new RsnChat('chatgpt_××××××××××××××××××××××');

rsnchat.llama('Hello, what is your name?')
  .then(response => {
    console.log(response.message);
  })
```

## Usage Mixtral

```javascript
const RsnChat = require('rsnchat');

const rsnchat = new RsnChat('chatgpt_××××××××××××××××××××××');

rsnchat.mixtral('Hello, what is your name?')
  .then(response => {
    console.log(response.message);
  })
```

# APIKEY

Discord : [https://discord.gg/r5QWdKfQxr](https://discord.gg/r5QWdKfQxr)

**Example CLI Command**
```hs
rsnchat
```

Join discord server and create account with **/new** slash command and get your apikey with **/key** slash command for free!
