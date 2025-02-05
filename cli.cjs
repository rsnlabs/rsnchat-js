#!/usr/bin/env node

const { RsnChat } = require("./build/cjs/index.cjs");
const colors = require("colors");
const readline = require("readline");
const axios = require("axios");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const asciiArt = `
                        ##                
####               #### ##           ##   
##  #  #### # ##  ### # ## #   ###  ##### 
##  # ##    ## ## ##    #####    ##  ##   
####  ####  ## ## ##    ## ##  ####  ##   
## #   #### ## ## ##    ## ## ## ##  ##   
##  #    ## ## ## ###   ## ## ## ##  ##   
##  # ####  ## ##  #### ## ##  ## #   ### 
`;

async function fetchActiveModels() {
  try {
    const response = await axios.get("https://api.rnilaweera.lk/api/models");
    if (response.status === 200) {
      return response.data.chat_models
        .filter((model) => model.status === "active")
        .map((model) => model.name.toUpperCase());
    } else {
      console.error(colors.red("Failed to fetch models. Using defaults."));
      return ["GPT", "GEMINI", "GROK-2", "GROK-2-MINI"];
    }
  } catch (error) {
    console.error(colors.red("Error fetching models:"), error.message);
    return ["GPT", "GEMINI", "GROK-2", "GROK-2-MINI"];
  }
}

function promptApiKey() {
  console.log(colors.bold.green(asciiArt));

  rl.question(colors.bold.green("Enter your API key: "), async (apiKey) => {
    try {
      const response = await axios.post(
        "https://api.rnilaweera.lk/api/auth/validate",
        { apikey: apiKey }
      );

      if (response.status === 200) {
        const username = response.data.name;
        const rsnChat = new RsnChat(apiKey);
        startChat(rsnChat, username);
      } else {
        handleErrorResponse(response.status);
      }
    } catch (error) {
      if (error.response && error.response.status) {
        handleErrorResponse(error.response.status);
      } else {
        console.error(colors.red("Error validating API key:"), error.message);
        promptApiKey();
      }
    }
  });
}

function handleErrorResponse(status) {
  if (status === 401) {
    console.error(colors.red("Invalid API key. Please try again."));
  } else if (status === 503) {
    console.error(colors.red("Service Unavailable - Maintain Mode"));
  } else {
    console.error(
      colors.red(`Unexpected response from the server. Status: ${status}. Please try again.`)
    );
  }
  promptApiKey();
}

async function startChat(rsnChat, username) {
  console.log(colors.bold.yellow(`\nWelcome to ${username}'s RsnChat CLI!\n`));

  const availableModels = await fetchActiveModels();

  function promptChatMethod() {
    console.log(colors.cyan(`Available chat models: ${availableModels.join(", ")}`));

    rl.question(colors.cyan('Select a chat model or type "exit" to quit: '), (method) => {
      method = method.toUpperCase().trim();
      if (method === "EXIT") {
        console.log(colors.yellow("\nExiting RsnChat CLI. Goodbye!\n"));
        rl.close();
      } else if (availableModels.includes(method)) {
        promptUser(method, rsnChat);
      } else {
        console.error(colors.red("Invalid selection. Try again."));
        promptChatMethod();
      }
    });
  }

  function promptUser(method, rsnChat) {
    rl.question(colors.green(`Enter your ${method} prompt (or type "exit" to quit): `), async (prompt) => {
      if (prompt.toLowerCase().trim() === "exit") {
        console.log(colors.yellow("\nExiting RsnChat CLI. Goodbye!\n"));
        rl.close();
      } else {
        try {
          const response = await rsnChat.chat(prompt, method.toLowerCase());
          console.log(colors.bold.blue(`${method} Response:`), response.message);
        } catch (error) {
          console.error(colors.red(`Error calling ${method}:`), error.message);
        }

        rl.question(colors.cyan(`Do you want to select another model or continue chatting with "${method}"? (type "exit" to quit, or "another" for a new model): `), (choice) => {
          if (choice.toLowerCase().trim() === "exit") {
            console.log(colors.yellow("\nExiting RsnChat CLI. Goodbye!\n"));
            rl.close();
          } else if (choice.toLowerCase().trim() === "another") {
            promptChatMethod();
          } else {
            promptUser(method, rsnChat);
          }
        });
      }
    });
  }

  promptChatMethod();
}

promptApiKey();