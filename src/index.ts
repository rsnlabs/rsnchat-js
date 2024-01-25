import axios from "axios";

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

interface Result {
  success: string;
}

interface TextResult extends Result {
  message: string;
}

interface ProdiaResult extends Result {
  imageUrl: string;
  base64: string;
}

interface Image extends Result {
  image: string;
}

class RsnChat {
  apiKey: string;
  constructor(apikey: string) {
    this.apiKey = apikey;
  }

  /**
   * Generate Text Completion via ChatGPT
   * @param prompt 
   * @returns 
   */
  async gpt(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(GPT_ApiUrl, payload, { headers });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat GPT Error: ${error}`);
    }
  }

  /**
 * Generate Text Completion via OpenChat
 * @param prompt 
 * @returns 
 */
  async openchat(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(OpenChat_ApiUrl, payload, { headers });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat OpenChat Error: ${error}`);
    }
  }

  /**
 * Generate Text Completion via Bard
 * @param prompt 
 * @returns 
 */
  async bard(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(Bard_ApiUrl, payload, { headers });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Bard Error: ${error}`);
    }
  }

  /**
 * Generate Text Completion via Gemini
 * @param prompt 
 * @returns 
 */
  async gemini(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(Gemini_ApiUrl, payload, { headers });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Gemini Error: ${error}`);
    }
  }

  /**
 * Generate Text Completion via LLaMa
 * @param prompt 
 * @returns 
 */
  async llama(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(LlamaApiUrl, payload, { headers });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat LlaMa Error: ${error}`);
    }
  }

  /**
 * Generate Text Completion via Mixtral
 * @param prompt 
 * @returns 
 */
  async mixtral(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(MixtralApiUrl, payload, { headers });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Mixtral Error: ${error}`);
    }
  }

  /**
 * Generate Text Completion via CodeLLaMa
 * @param prompt 
 * @returns 
 */
  async codellama(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${this.apiKey}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(CodeLlamaApiUrl, payload, { headers });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat CodeLlaMa Error: ${error}`);
    }
  }

  /**
 * Generate Image with Prodia
 * @param prompt 
 * @returns 
 */
  async prodia(prompt: string, negative_prompt: string, model: string) {
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
      return response.data as ProdiaResult;
    } catch (error) {
      throw new Error(`RsnChat Prodia Error: ${error}`);
    }
  }
  /**
 * Generate Image with kandinsky
 * @param prompt 
 * @returns 
 */
  async kandinsky(prompt: string, negative_prompt: string) {
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
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Kandinsky Error: ${error}`);
    }
  }
  /**
 * Generate Image with AbsoluteBeauty
 * @param prompt 
 * @returns 
 */
  async absolutebeauty(prompt: string, negative_prompt: string) {
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
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Absolutebeauty Error: ${error}`);
    }
  }

  /**
* Generate Image with SDXL
* @param prompt 
* @returns 
*/
  async sdxl(prompt: string, negative_prompt: string) {
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
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Sdxl Error: ${error}`);
    }
  }
  /**
* Generate Image with DallE
* @param prompt 
* @returns 
*/
  async dalle(prompt: string) {
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
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Dalle Error: ${error}`);
    }
  }

  /**
* Generate Image with IconAPI
* @param prompt 
* @returns 
*/
  async icon(prompt: string) {
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
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Icon Error: ${error}`);
    }
  }
}

export {
  RsnChat,
  Result,
  Image,
  TextResult,
  ProdiaResult
};