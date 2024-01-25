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
declare class RsnChat {
    headers: {
        Authorization: string;
    };
    constructor(apikey: string);
    /**
     * Generate Text Completion via ChatGPT
     * @param prompt
     * @returns
     */
    gpt(prompt: string): Promise<TextResult>;
    /**
   * Generate Text Completion via OpenChat
   * @param prompt
   * @returns
   */
    openchat(prompt: string): Promise<TextResult>;
    /**
   * Generate Text Completion via Bard
   * @param prompt
   * @returns
   */
    bard(prompt: string): Promise<TextResult>;
    /**
   * Generate Text Completion via Gemini
   * @param prompt
   * @returns
   */
    gemini(prompt: string): Promise<TextResult>;
    /**
   * Generate Text Completion via LLaMa
   * @param prompt
   * @returns
   */
    llama(prompt: string): Promise<TextResult>;
    /**
   * Generate Text Completion via Mixtral
   * @param prompt
   * @returns
   */
    mixtral(prompt: string): Promise<TextResult>;
    /**
   * Generate Text Completion via CodeLLaMa
   * @param prompt
   * @returns
   */
    codellama(prompt: string): Promise<TextResult>;
    /**
   * Generate Image with Prodia
   * @param prompt
   * @returns
   */
    prodia(prompt: string, negative_prompt: string, model: string): Promise<ProdiaResult | "No prompt provided." | "No negative_prompt provided." | "No model provided.">;
    /**
   * Generate Image with kandinsky
   * @param prompt
   * @returns
   */
    kandinsky(prompt: string, negative_prompt: string): Promise<Image | "No prompt provided." | "No negative_prompt provided.">;
    /**
   * Generate Image with AbsoluteBeauty
   * @param prompt
   * @returns
   */
    absolutebeauty(prompt: string, negative_prompt: string): Promise<Image | "No prompt provided." | "No negative_prompt provided.">;
    /**
  * Generate Image with SDXL
  * @param prompt
  * @returns
  */
    sdxl(prompt: string, negative_prompt: string): Promise<Image | "No prompt provided." | "No negative_prompt provided.">;
    /**
  * Generate Image with DallE
  * @param prompt
  * @returns
  */
    dalle(prompt: string): Promise<Image | "No prompt provided.">;
    /**
  * Generate Image with IconAPI
  * @param prompt
  * @returns
  */
    icon(prompt: string): Promise<Image | "No prompt provided.">;
}
export { RsnChat, Result, Image, TextResult, ProdiaResult };
