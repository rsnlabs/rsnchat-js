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

function promptApiKey() {
  console.log(colors.bold.green(asciiArt));

  rl.question(colors.bold.green("Enter your API key: "), async (apiKey) => {
    try {
      const response = await axios.post(
        "https://api.rsnai.org/api/v1/user/validate",
        { key: apiKey }
      );

      if (response.status === 200) {
        const username = response.data.user;
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
  if (status === 403) {
    console.error(colors.red("Invalid API key. Please try again."));
  } else if (status === 503) {
    console.error(colors.red("Service Unavailable - Maintain Mode"));
  } else {
    console.error(
      colors.red(
        `Unexpected response from the server. Status: ${status}. Please try again.`
      )
    );
  }
  promptApiKey();
}

function startChat(rsnChat, username) {
  console.log(colors.bold.yellow(`\nWelcome to ${username}'s RsnChat CLI!\n`));

  function promptChatMethod() {
    rl.question(
      colors.cyan(
        'Select a chat method (GPT, OPENCHAT, BARD, GEMINI, BING, LLAMA, CODELLAMA, MIXTRAL), or type "exit" to exit: '
      ),
      (method) => {
        if (method.toLowerCase().trim() === "exit") {
          console.log(colors.yellow("\nExiting RsnChat CLI. Goodbye!\n"));
          rl.close();
        } else if (
          ["GPT", "OPENCHAT", "BARD", "GEMINI", "BING", "LLAMA", "CODELLAMA", "MIXTRAL"].includes(
            method.toUpperCase()
          )
        ) {
          promptUser(method.toUpperCase(), rsnChat);
        } else {
          console.error(
            colors.red(
              'Invalid chat method. Please select GPT, OPENCHAT, BARD, GEMINI, BING, LLAMA, CODELLAMA, MIXTRAL, or type "exit" to exit.'
            )
          );
          promptChatMethod();
        }
      }
    );
  }

  function promptUser(method, rsnChat) {
    rl.question(
      colors.green(`Enter your ${method} prompt (or type "exit" to exit): `),
      async (prompt) => {
        if (prompt.toLowerCase().trim() === "chat") {
          promptChatMethod();
        } else if (prompt.toLowerCase().trim() === "exit") {
          console.log(colors.yellow("\nExiting RsnChat CLI. Goodbye!\n"));
          rl.close();
        } else {
          try {
            const response = await rsnChat[method.toLowerCase()](prompt);
            console.log(
              colors.bold.blue(`${method} Response:`),
              response.message
            );
          } catch (error) {
            console.error(
              colors.red(`Error calling ${method}:`),
              error.message
            );
          }

          promptUser(method, rsnChat);
        }
      }
    );
  }

  promptChatMethod();
}

promptApiKey();
