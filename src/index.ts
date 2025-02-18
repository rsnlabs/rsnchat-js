import axios from "axios";

const apiUrl = "https://api.rnilaweera.lk/api/";

interface Result {
  success: string;
}

interface Model {
  name: string;
  status: string;
}

interface ModelsResponse {
  chatModels: string[];
  imageModels: string[];
}

interface TextResult extends Result {
  message: string;
}

interface Image extends Result {
  image_url: string;
}

class RsnChat {
  headers: { Authorization: string };

  /**
   * **RsnChat**
   *
   * Discord: https://api.rnilaweera.lk/discord
   *
   * Join the Discord server and create an account with `/register` slash command.
   * Get your API key using `/generate-key` for free!
   *
   * @param {string} apikey - RsnChat API Key (required)
   */
  constructor(apikey: string) {
    if (!apikey) {
      throw new Error("Please provide an API key.");
    }

    this.headers = { Authorization: `Bearer ${apikey}` };
  }

  /**
   * Get available active models list (Chat & Image)
   * @returns {Promise<ModelsResponse>} - Returns active chat and image models
   * @example
   * ```js
   * const rsnchat = new RsnChat("your_api_key");
   * rsnchat.getModels().then(models => {
   *   console.log(models.chatModels); // Active chat models
   *   console.log(models.imageModels); // Active image models
   * });
   * ```
   */
  async getModels(): Promise<ModelsResponse> {
    try {
      const response = await axios.get(`${apiUrl}models`, { headers: this.headers });

      const chatModels = response.data.chat_models
        .filter((model: Model) => model.status === "active")
        .map((model: Model) => model.name);

      const imageModels = response.data.image_models
        .filter((model: Model) => model.status === "active")
        .map((model: Model) => model.name);

      return { chatModels, imageModels };
    } catch (error: any) {
      throw new Error(`Failed to fetch models: ${error.response?.data?.error || error.message}`);
    }
  }

  /**
   * Generate Text Completion
   * @param {string} prompt - Required text input
   * @param {string} model - AI model name (https://api.rnilaweera.lk/api/models)
   * @returns {Promise<TextResult>}
   */
  async chat(prompt: string, model: string): Promise<TextResult> {
    if (!prompt || typeof prompt !== "string") {
      throw new Error("Prompt is required and must be a string.");
    }
    if (!model || typeof model !== "string") {
      throw new Error("Model is required and must be a string.");
    }

    try {
      const response = await axios.post(
        `${apiUrl}chat/generate`,
        { prompt, model },
        { headers: this.headers }
      );
      return response.data as TextResult;
    } catch (error: any) {
      throw new Error(`Chat Generation Error: ${error.response?.data?.error || error.message}`);
    }
  }

  /**
   * Generate Image Completion
   * @param {string} prompt - Required image description
   * @param {string} model - AI model name (https://api.rnilaweera.lk/api/models)
   * @returns {Promise<Image>}
   */
  async image(prompt: string, model: string): Promise<Image> {
    if (!prompt || typeof prompt !== "string") {
      throw new Error("Prompt is required and must be a string.");
    }
    if (!model || typeof model !== "string") {
      throw new Error("Model is required and must be a string.");
    }

    try {
      const response = await axios.post(
        `${apiUrl}image/generate`,
        { prompt, model },
        { headers: this.headers }
      );
      return response.data as Image;
    } catch (error: any) {
      throw new Error(`Image Generation Error: ${error.response?.data?.error || error.message}`);
    }
  }
}

export { RsnChat, Result, Image, TextResult, ModelsResponse };