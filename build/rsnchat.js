const axios = require('axios');

const GPT_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/gpt";
const OpenChat_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/openchat";
const Bard_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/bard";
const Gemini_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/gemini";
const LlamaApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/llama";
const MixtralApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/mixtral";

class RsnChat {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error(`Please provide an Apikey`);
    }
    this.apiKey = apiKey;
  }

  async gpt(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(GPT_ApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat GPT Error: ${error}`);
    }
  }
  
  async openchat(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(OpenChat_ApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat OpenChat Error: ${error}`);
    }
  }
  
  async bard(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(Bard_ApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Bard Error: ${error}`);
    }
  }
  
  async gemini(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(Gemini_ApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Gemini Error: ${error}`);
    }
  }
  
  async llama(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(LlamaApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat LlaMa Error: ${error}`);
    }
  }
  
  async mixtral(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(MixtralApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Mixtral Error: ${error}`);
    }
  }
}

module.exports = RsnChat;
