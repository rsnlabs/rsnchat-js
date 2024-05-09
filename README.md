<h1 align="center"><b>RsnChat</b> <img src="https://i.ibb.co/0J89TrT/rsn-bot-1.png" width="30" style="border-radius: 50%; margin-bottom: -5px"></h1>
<p align="center"><i>The ultimate AI-powered RsnChat</i></p>

<p align="center"> <a href="https://www.digitalocean.com/?refcode=52756eb13d44&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img width=200 height=90 src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" /></a> </p>

This package package for interacting with GPT4-based chat services, OpenChat, Bard, Gemini, LlaMa, Mixtral, Claude, Naomi, Prodia, Kandinsky, Absolutebeauty, Sdxl, Dalle, AI Icon, etc.. without restrictions or limits

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

Discord : [https://discord.gg/r5QWdKfQxr](https://discord.gg/r5QWdKfQxr)

Join discord server and create account with **/new** slash command and get your apikey with **/key** slash command for free!

## Usage GPT3

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.gpt("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage GPT4

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.gpt4("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage OpenChat

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.openchat("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage Bard

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.bard("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage Gemini

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.gemini("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage Bing

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.bing("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage LlaMa

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.llama("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage Mixtral

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.mixtral("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage CodeLlama

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.codellama("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage Claude3 (premium)

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.claude("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage Naomi (ai girlfriend) (premium)

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.naomi("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage ZeroTwo (ai girl) (premium)

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

rsnchat.zerotwo("Hello, what is your name?").then((response) => {
  console.log(response.message);
});
```

## Usage Prodia

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";
const negative_prompt = "blury, bad quality";
const model = "absolutereality_v181.safetensors [3d9d4d2b]";

rsnchat.prodia(prompt, negative_prompt, model).then((response) => {
  console.log(response);
});
```

#### Prodia Models

List of prodia models

- 3Guofeng3_v34.safetensors [50f420de]
- absolutereality_V16.safetensors [37db0fc3]
- absolutereality_v181.safetensors [3d9d4d2b]
- amIReal_V41.safetensors [0a8a2e61]
- analog-diffusion-1.0.ckpt [9ca13f02]
- anythingv3_0-pruned.ckpt [2700c435]
- anything-v4.5-pruned.ckpt [65745d25]
- anythingV5_PrtRE.safetensors [893e49b9]
- AOM3A3_orangemixs.safetensors [9600da17]
- blazing_drive_v10g.safetensors [ca1c1eab]
- cetusMix_Version35.safetensors [de2f2560]
- childrensStories_v13D.safetensors [9dfaabcb]
- childrensStories_v1SemiReal.safetensors [a1c56dbb]
- childrensStories_v1ToonAnime.safetensors [2ec7b88b]
- Counterfeit_v30.safetensors [9e2a8f19]
- cuteyukimixAdorable_midchapter3.safetensors [04bdffe6]
- cyberrealistic_v33.safetensors [82b0d085]
- dalcefo_v4.safetensors [425952fe]
- deliberate_v2.safetensors [10ec4b29]
- deliberate_v3.safetensors [afd9d2d4]
- dreamlike-anime-1.0.safetensors [4520e090]
- dreamlike-diffusion-1.0.safetensors [5c9fd6e0]
- dreamlike-photoreal-2.0.safetensors [fdcf65e7]
- dreamshaper_6BakedVae.safetensors [114c8abb]
- dreamshaper_7.safetensors [5cf5ae06]
- dreamshaper_8.safetensors [9d40847d]
- edgeOfRealism_eorV20.safetensors [3ed5de15]
- EimisAnimeDiffusion_V1.ckpt [4f828a15]
- elldreths-vivid-mix.safetensors [342d9d26]
- epicrealism_naturalSinRC1VAE.safetensors [90a4c676]
- ICantBelieveItsNotPhotography_seco.safetensors [4e7a3dfd]
- juggernaut_aftermath.safetensors [5e20c455]
- lofi_v4.safetensors [ccc204d6]
- lyriel_v16.safetensors [68fceea2]
- majicmixRealistic_v4.safetensors [29d0de58]
- mechamix_v10.safetensors [ee685731]
- meinamix_meinaV9.safetensors [2ec66ab0]
- meinamix_meinaV11.safetensors [b56ce717]
- neverendingDream_v122.safetensors [f964ceeb]
- openjourney_V4.ckpt [ca2f377f]
- pastelMixStylizedAnime_pruned_fp16.safetensors [793a26e8]
- portraitplus_V1.0.safetensors [1400e684]
- protogenx34.safetensors [5896f8d5]
- Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]
- Realistic_Vision_V2.0.safetensors [79587710]
- Realistic_Vision_V4.0.safetensors [29a7afaa]
- Realistic_Vision_V5.0.safetensors [614d1063]
- redshift_diffusion-V10.safetensors [1400e684]
- revAnimated_v122.safetensors [3f4fefd9]
- rundiffusionFX25D_v10.safetensors [cd12b0ee]
- rundiffusionFX_v10.safetensors [cd4e694d]
- sdv1_4.ckpt [7460a6fa]
- shoninsBeautiful_v10.safetensors [25d8c546]
- theallys-mix-ii-churned.safetensors [5d9225a4]
- timeless-1.0.ckpt [7c4971d4]
- toonyou_beta6.safetensors [980f6b15]

## Usage Kandinsky

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";
const negative_prompt = "blury, bad quality";

rsnchat.kandinsky(prompt, negative_prompt).then((response) => {
  console.log(response);
});
```

## Usage Absolutebeauty

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";
const negative_prompt = "blury, bad quality";

rsnchat.absolutebeauty(prompt, negative_prompt).then((response) => {
  console.log(response);
});
```

## Usage Sdxl

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";
const negative_prompt = "blury, bad quality";

rsnchat.sdxl(prompt, negative_prompt).then((response) => {
  console.log(response);
});
```

## Usage Dalle

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";

rsnchat.dalle(prompt).then((response) => {
  console.log(response);
});
```

## Usage AI Icon

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";

rsnchat.icon(prompt).then((response) => {
  console.log(response);
});
```

## Usage Anime (premium)

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";

rsnchat.anime(prompt).then((response) => {
  console.log(response);
});
```

## Usage Cartoon (premium)

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";

rsnchat.cartoon(prompt).then((response) => {
  console.log(response);
});
```

## Usage Photograpy (premium)

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";

rsnchat.photograpy(prompt).then((response) => {
  console.log(response);
});
```

## Usage Disney (premium)

```javascript
const { RsnChat } = require("rsnchat");

const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");

const prompt = "beautiful girl";

rsnchat.premium(prompt).then((response) => {
  console.log(response);
});
```

**Example CLI Command**

```hs
rsnchat
```
