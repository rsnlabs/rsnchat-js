import axios from "axios";

const apiUrl = "https://api.rsnai.org/api/v1/user"

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

type ProdiaModels =
  | "3Guofeng3_v34.safetensors [50f420de]"
  | "absolutereality_V16.safetensors [37db0fc3]"
  | "absolutereality_v181.safetensors [3d9d4d2b]"
  | "amIReal_V41.safetensors [0a8a2e61]"
  | "analog-diffusion-1.0.ckpt [9ca13f02]"
  | "anythingv3_0-pruned.ckpt [2700c435]"
  | "anything-v4.5-pruned.ckpt [65745d25]"
  | "anythingV5_PrtRE.safetensors [893e49b9]"
  | "AOM3A3_orangemixs.safetensors [9600da17]"
  | "blazing_drive_v10g.safetensors [ca1c1eab]"
  | "cetusMix_Version35.safetensors [de2f2560]"
  | "childrensStories_v13D.safetensors [9dfaabcb]"
  | "childrensStories_v1SemiReal.safetensors [a1c56dbb]"
  | "childrensStories_v1ToonAnime.safetensors [2ec7b88b]"
  | "Counterfeit_v30.safetensors [9e2a8f19]"
  | "cuteyukimixAdorable_midchapter3.safetensors [04bdffe6]"
  | "cyberrealistic_v33.safetensors [82b0d085]"
  | "dalcefo_v4.safetensors [425952fe]"
  | "deliberate_v2.safetensors [10ec4b29]"
  | "deliberate_v3.safetensors [afd9d2d4]"
  | "dreamlike-anime-1.0.safetensors [4520e090]"
  | "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]"
  | "dreamlike-photoreal-2.0.safetensors [fdcf65e7]"
  | "dreamshaper_6BakedVae.safetensors [114c8abb]"
  | "dreamshaper_7.safetensors [5cf5ae06]"
  | "dreamshaper_8.safetensors [9d40847d]"
  | "edgeOfRealism_eorV20.safetensors [3ed5de15]"
  | "EimisAnimeDiffusion_V1.ckpt [4f828a15]"
  | "elldreths-vivid-mix.safetensors [342d9d26]"
  | "epicrealism_naturalSinRC1VAE.safetensors [90a4c676]"
  | "ICantBelieveItsNotPhotography_seco.safetensors [4e7a3dfd]"
  | "juggernaut_aftermath.safetensors [5e20c455]"
  | "lofi_v4.safetensors [ccc204d6]"
  | "lyriel_v16.safetensors [68fceea2]"
  | "majicmixRealistic_v4.safetensors [29d0de58]"
  | "mechamix_v10.safetensors [ee685731]"
  | "meinamix_meinaV9.safetensors [2ec66ab0]"
  | "meinamix_meinaV11.safetensors [b56ce717]"
  | "neverendingDream_v122.safetensors [f964ceeb]"
  | "openjourney_V4.ckpt [ca2f377f]"
  | "pastelMixStylizedAnime_pruned_fp16.safetensors [793a26e8]"
  | "portraitplus_V1.0.safetensors [1400e684]"
  | "protogenx34.safetensors [5896f8d5]"
  | "Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]"
  | "Realistic_Vision_V2.0.safetensors [79587710]"
  | "Realistic_Vision_V4.0.safetensors [29a7afaa]"
  | "Realistic_Vision_V5.0.safetensors [614d1063]"
  | "redshift_diffusion-V10.safetensors [1400e684]"
  | "revAnimated_v122.safetensors [3f4fefd9]"
  | "rundiffusionFX25D_v10.safetensors [cd12b0ee]"
  | "rundiffusionFX_v10.safetensors [cd4e694d]"
  | "sdv1_4.ckpt [7460a6fa]"
  | "shoninsBeautiful_v10.safetensors [25d8c546]"
  | "theallys-mix-ii-churned.safetensors [5d9225a4]"
  | "timeless-1.0.ckpt [7c4971d4]"
  | "toonyou_beta6.safetensors [980f6b15]";

class RsnChat {
  headers = {
    Authorization: "",
  };

  /**
   * **RsnChat**
   *
   * Discord : https://discord.gg/r5QWdKfQxr
   *
   * Join discord server and create account with /new slash command and get your apikey with /key slash command for free!
   *
   * @param {string} apikey - RsnChat API Key (required)
   */
  constructor(apikey?: string) {
    if (!apikey) {
      throw new Error("Please provide API key");
    }
    
    this.validateApiKey(apikey);
    
    this.headers = {
      Authorization: `Bearer ${apikey}`,
    };
  }

  validateApiKey(apikey: string) {
    const validateUrl = `${apiUrl}/validate`;
    axios.post(validateUrl, { 
      key: apikey
    }).then((res) => {
      if (res.status !== 200) {
        throw new Error(`Invalid API Key: ${apikey}`);
      }
    }).catch((error: any) => {
      if (error.response && error.response.status === 403) {
        throw new Error(`Invalid API Key (403 Forbidden): ${apikey}`);
      } else {
        throw new Error(`API Key Validation Error: ${error.message}`);
      }
    });
  }

  /**
   * Generate Text Completion via ChatGPT
   * @param {string} prompt ChatGPT prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.gpt("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns {Promise<TextResult>}
   */
  async gpt(prompt: string): Promise<TextResult> {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/gpt`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat GPT Error: ${error}`);
    }
  }

  /**
   * Generate Text Completion via OpenChat
   * @param {string} prompt OpenChat prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.openchat("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns {Promise<TextResult>}
   */
  async openchat(prompt: string): Promise<TextResult> {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/openchat`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat OpenChat Error: ${error}`);
    }
  }

  /**
   * Generate Text Completion via Bard
   * @param {string} prompt Bard AI prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.bard("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns {Promise<TextResult>}
   */
  async bard(prompt: string): Promise<TextResult> {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/bard`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Bard Error: ${error}`);
    }
  }

  /**
   * Generate Text Completion via Gemini
   * @param {string} prompt Gemini prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.gemini("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns
   */
  async gemini(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/gemini`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Gemini Error: ${error}`);
    }
  }
  
  /**
   * Generate Text Completion via Bing
   * @param {string} prompt Bing prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.bing("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns
   */
  async bing(prompt: string) {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/bing`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Bing Error: ${error}`);
    }
  }

  /**
   * Generate Text Completion via LLaMa
   * @param {string} prompt LlaMa prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.llama("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns {Promise<TextResult>}
   */
  async llama(prompt: string): Promise<TextResult> {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/llama`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat LlaMa Error: ${error}`);
    }
  }

  /**
   * Generate Text Completion via Mixtral
   * @param {string} prompt Mixtral prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.mixtral("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns {Promise<TextResult>}
   */
  async mixtral(prompt: string): Promise<TextResult> {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/mixtral`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Mixtral Error: ${error}`);
    }
  }
  
  /**
   * Generate Text Completion via Claude
   * @param {string} prompt Claude prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.claude("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns {Promise<TextResult>}
   */
  async claude(prompt: string): Promise<TextResult> {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/claude`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Claude Error: ${error}`);
    }
  }
  
  /**
   * Generate Text Completion via Naomi
   * @param {string} prompt Naomi prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.naomi("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns {Promise<TextResult>}
   */
  async naomi(prompt: string): Promise<TextResult> {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/naomi`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat Naomi Error: ${error}`);
    }
  }

  /**
   * Generate Text Completion via CodeLLaMa
   * @param {string} prompt CodeLlaMa prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * rsnchat.codellama("Hello, what is your name?").then((response) => {
   *   console.log(response.message);
   * });
   * ```
   * @returns {Promise<TextResult>}
   */
  async codellama(prompt: string): Promise<TextResult> {
    try {
      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/codellama`, payload, {
        headers: this.headers,
      });
      return response.data as TextResult;
    } catch (error) {
      throw new Error(`RsnChat CodeLlaMa Error: ${error}`);
    }
  }

  /**
   * Generate Image with Prodia
   *
   * @param {string} prompt Prodia prompt
   * @param {string} negative_prompt Prodia negative prompt
   * @param {string} model Prodia model
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * const prompt = "beautiful girl";
   * const negative_prompt = "blury, bad quality";
   * const model = "absolutereality_v181.safetensors [3d9d4d2b]";
   *
   * rsnchat.prodia(prompt, negative_prompt, model).then((response) => {
   *   console.log(response);
   * });
   * ```
   * @returns
   */
  async prodia(prompt: string, negative_prompt: string, model: ProdiaModels) {
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

      const response = await axios.post(`${apiUrl}/prodia`, payload, {
        headers: this.headers,
      });
      return response.data as ProdiaResult;
    } catch (error) {
      throw new Error(`RsnChat Prodia Error: ${error}`);
    }
  }

  /**
   * Generate Image with kandinsky
   * @param {string} prompt kandinsky prompt
   * @param {string} negative_prompt kandinsky negative prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * const prompt = "beautiful girl";
   * const negative_prompt = "blury, bad quality";
   *
   * rsnchat.kandinsky(prompt, negative_prompt).then((response) => {
   *   console.log(response);
   * });
   * ```
   * @returns {Promise<"No prompt provided." | "No negative_prompt provided." | Image>}
   */
  async kandinsky(
    prompt: string,
    negative_prompt: string
  ): Promise<"No prompt provided." | "No negative_prompt provided." | Image> {
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

      const response = await axios.post(`${apiUrl}/kandinsky`, payload, {
        headers: this.headers,
      });
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Kandinsky Error: ${error}`);
    }
  }

  /**
   * Generate Image with AbsoluteBeauty
   * @param {string} prompt AbsoluteBeauty prompt
   * @param {string} negative_prompt AbsoluteBeauty negative prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * const prompt = "beautiful girl";
   * const negative_prompt = "blury, bad quality";
   *
   * rsnchat.absolutebeauty(prompt, negative_prompt).then((response) => {
   *   console.log(response);
   * });
   * ```
   * @returns {Promise<"No prompt provided." | "No negative_prompt provided." | Image>}
   */
  async absolutebeauty(
    prompt: string,
    negative_prompt: string
  ): Promise<"No prompt provided." | "No negative_prompt provided." | Image> {
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

      const response = await axios.post(`${apiUrl}/absolutebeauty`, payload, {
        headers: this.headers,
      });
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Absolutebeauty Error: ${error}`);
    }
  }

  /**
   * Generate Image with SDXL
   * @param {string} prompt SDXL prompt
   * @param {string} negative_prompt SDXL negative prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * const prompt = "beautiful girl";
   * const negative_prompt = "blury, bad quality";
   *
   * rsnchat.sdxl(prompt, negative_prompt).then((response) => {
   *   console.log(response);
   * });
   * ```
   * @returns {Promise<"No prompt provided." | "No negative_prompt provided." | Image>}
   */
  async sdxl(
    prompt: string,
    negative_prompt: string
  ): Promise<"No prompt provided." | "No negative_prompt provided." | Image> {
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

      const response = await axios.post(`${apiUrl}/sdxl`, payload, {
        headers: this.headers,
      });
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Sdxl Error: ${error}`);
    }
  }

  /**
   * Generate Image with DallE
   * @param {string} prompt DallE prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * const prompt = "beautiful girl";
   *
   * rsnchat.dalle(prompt).then((response) => {
   *   console.log(response);
   * });
   * ```
   * @returns {Promise<"No prompt provided." | Image>}
   */
  async dalle(prompt: string): Promise<"No prompt provided." | Image> {
    try {
      if (!prompt) {
        return "No prompt provided.";
      }

      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/dalle`, payload, {
        headers: this.headers,
      });
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Dalle Error: ${error}`);
    }
  }

  /**
   * Generate Image with IconAPI
   * @param {string} prompt IconAPI prompt
   * @example
   * ```js
   * const { RsnChat } = require("rsnchat");
   *
   * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
   *
   * const prompt = "beautiful girl";
   *
   * rsnchat.icon(prompt).then((response) => {
   *   console.log(response);
   * });
   * ```
   * @returns {Promise<"No prompt provided." | Image>}
   */
  async icon(prompt: string): Promise<"No prompt provided." | Image> {
    try {
      if (!prompt) {
        return "No prompt provided.";
      }

      const payload = {
        prompt: prompt,
      };

      const response = await axios.post(`${apiUrl}/icon`, payload, {
        headers: this.headers,
      });
      return response.data as Image;
    } catch (error) {
      throw new Error(`RsnChat Icon Error: ${error}`);
    }
  }
}

export { RsnChat, Result, Image, TextResult, ProdiaResult };
