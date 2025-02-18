interface Result {
    success: string;
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
declare class RsnChat {
    headers: {
        Authorization: string;
    };
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
    constructor(apikey: string);
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
    getModels(): Promise<ModelsResponse>;
    /**
     * Generate Text Completion
     * @param {string} prompt - Required text input
     * @param {string} model - AI model name (https://api.rnilaweera.lk/api/models)
     * @returns {Promise<TextResult>}
     */
    chat(prompt: string, model: string): Promise<TextResult>;
    /**
     * Generate Image Completion
     * @param {string} prompt - Required image description
     * @param {string} model - AI model name (https://api.rnilaweera.lk/api/models)
     * @returns {Promise<Image>}
     */
    image(prompt: string, model: string): Promise<Image>;
}
export { RsnChat, Result, Image, TextResult, ModelsResponse };
