const axios = require('axios');

const GPT_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/gpt";
const OpenChat_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/openchat";
const Bard_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/bard";
const Gemini_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/gemini";
const LlamaApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/llama";
const CodeLlamaApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/codellama";
const MixtralApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/mixtral";

const ProdiaApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/prodia";
const KandinskyApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/kandinsky";
const AbsolutebeautyApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/absolutebeauty";
const SdxlApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/sdxl"; 
const DalleApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/dalle";
const IconApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/icon";

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

  async codellama(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(CodeLlamaApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat CodeLlaMa Error: ${error}`);
    }
  }
  
  async prodia(prompt, negative_prompt, model) {
    try {
      if (!prompt) {
        return "No prompt provided.";
      }
      
      if (!negative_prompt) {
        return "No negative_prompt provided.";
      }
      
      if (!model) {
        return "No model provided.";
      }
      
      const payload = {
        prompt: prompt,
        negative_prompt: negative_prompt,
        model: model,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(ProdiaApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Prodia Error: ${error}`);
    }
  }
  
  async kandinsky(prompt, negative_prompt) {
    try {
      if (!prompt) {
        return "No prompt provided.";
      }
      
      if (!negative_prompt) {
        return "No negative_prompt provided.";
      }
      
      const payload = {
        prompt: prompt,
        negative_prompt: negative_prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(KandinskyApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Kandinsky Error: ${error}`);
    }
  }
  
  async absolutebeauty(prompt, negative_prompt) {
    try {
      if (!prompt) {
        return "No prompt provided.";
      }
      
      if (!negative_prompt) {
        return "No negative_prompt provided.";
      }
      
      const payload = {
        prompt: prompt,
        negative_prompt: negative_prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(AbsolutebeautyApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Absolutebeauty Error: ${error}`);
    }
  }
  
  async sdxl(prompt, negative_prompt) {
    try {
      if (!prompt) {
        return "No prompt provided.";
      }
      
      if (!negative_prompt) {
        return "No negative_prompt provided.";
      }
      
      const payload = {
        prompt: prompt,
        negative_prompt: negative_prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(SdxlApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Sdxl Error: ${error}`);
    }
  }
  
  async dalle(prompt) {
    try {
      if (!prompt) {
        return "No prompt provided.";
      }
      
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(DalleApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Dalle Error: ${error}`);
    }
  }
  
  async icon(prompt) {
    try {
      if (!prompt) {
        return "No prompt provided.";
      }
      
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(IconApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Icon Error: ${error}`);
    }
  }
}

module.exports = RsnChat;
