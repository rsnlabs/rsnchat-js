"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsnChat = void 0;
const axios_1 = __importDefault(require("axios"));
const apiUrl = "https://api.rnilaweera.lk/api/v1/user";
class RsnChat {
    /**
     * **RsnChat**
     *
     * Discord : https://discord.gg/r5QWdKfQxr
     *
     * Join discord server and create account with /new slash command and get your apikey with /key slash command for free!
     *
     * @param {string} apikey - RsnChat API Key (required)
     */
    constructor(apikey) {
        this.headers = {
            Authorization: "",
        };
        if (!apikey) {
            throw new Error("Please provide API key");
        }
        this.validateApiKey(apikey);
        this.headers = {
            Authorization: `Bearer ${apikey}`,
        };
    }
    validateApiKey(apikey) {
        const validateUrl = `${apiUrl}/validate`;
        axios_1.default.post(validateUrl, {
            key: apikey
        }).then((res) => {
            if (res.status !== 200) {
                throw new Error(`Invalid API Key: ${apikey}`);
            }
        }).catch((error) => {
            if (error.response && error.response.status === 403) {
                throw new Error(`Invalid API Key (403 Forbidden): ${apikey}`);
            }
            else {
                throw new Error(`API Key Validation Error: ${error.message}`);
            }
        });
    }
    /**
     * Generate Text Completion via GPT3
     * @param {string} prompt GPT3 prompt
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
    gpt(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/gpt`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat GPT3 Error: ${error}`);
            }
        });
    }
    /**
     * Generate Text Completion via GPT4
     * @param {string} prompt GPT4 prompt
     * @example
     * ```js
     * const { RsnChat } = require("rsnchat");
     *
     * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
     *
     * rsnchat.gpt4("Hello, what is your name?").then((response) => {
     *   console.log(response.message);
     * });
     * ```
     * @returns {Promise<TextResult>}
     */
    gpt4(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/gpt4`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat GPT4 Error: ${error}`);
            }
        });
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
    openchat(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/openchat`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat OpenChat Error: ${error}`);
            }
        });
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
    bard(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/bard`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Bard Error: ${error}`);
            }
        });
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
    gemini(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/gemini`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Gemini Error: ${error}`);
            }
        });
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
    bing(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/bing`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Bing Error: ${error}`);
            }
        });
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
    llama(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/llama`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat LlaMa Error: ${error}`);
            }
        });
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
    mixtral(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/mixtral`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Mixtral Error: ${error}`);
            }
        });
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
    claude(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/claude`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Claude Error: ${error}`);
            }
        });
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
    naomi(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/naomi`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Naomi Error: ${error}`);
            }
        });
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
    codellama(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/codellama`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat CodeLlaMa Error: ${error}`);
            }
        });
    }
    /**
     * Generate Text Completion via ZeroTwo
     * @param {string} prompt ZeroTwo prompt
     * @example
     * ```js
     * const { RsnChat } = require("rsnchat");
     *
     * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
     *
     * rsnchat.zerotwo("Hello, what is your name?").then((response) => {
     *   console.log(response.message);
     * });
     * ```
     * @returns {Promise<TextResult>}
     */
    zerotwo(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/zerotwo`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat ZeroTwo Error: ${error}`);
            }
        });
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
    prodia(prompt, negative_prompt, model) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield axios_1.default.post(`${apiUrl}/prodia`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Prodia Error: ${error}`);
            }
        });
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
    kandinsky(prompt, negative_prompt) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield axios_1.default.post(`${apiUrl}/kandinsky`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Kandinsky Error: ${error}`);
            }
        });
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
    absolutebeauty(prompt, negative_prompt) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield axios_1.default.post(`${apiUrl}/absolutebeauty`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Absolutebeauty Error: ${error}`);
            }
        });
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
    sdxl(prompt, negative_prompt) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield axios_1.default.post(`${apiUrl}/sdxl`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Sdxl Error: ${error}`);
            }
        });
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
    dalle(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!prompt) {
                    return "No prompt provided.";
                }
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/dalle`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Dalle Error: ${error}`);
            }
        });
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
    icon(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!prompt) {
                    return "No prompt provided.";
                }
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/icon`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Icon Error: ${error}`);
            }
        });
    }
    /**
     * Generate Image with Anime
     * @param {string} prompt Anime prompt
     * @example
     * ```js
     * const { RsnChat } = require("rsnchat");
     *
     * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
     *
     * const prompt = "beautiful girl";
     *
     * rsnchat.anime(prompt).then((response) => {
     *   console.log(response);
     * });
     * ```
     * @returns {Promise<"No prompt provided." | Image>}
     */
    anime(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!prompt) {
                    return "No prompt provided.";
                }
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/anime`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Anime Error: ${error}`);
            }
        });
    }
    /**
     * Generate Image with cartoon
     * @param {string} prompt cartoon prompt
     * @example
     * ```js
     * const { RsnChat } = require("rsnchat");
     *
     * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
     *
     * const prompt = "beautiful girl";
     *
     * rsnchat.cartoon(prompt).then((response) => {
     *   console.log(response);
     * });
     * ```
     * @returns {Promise<"No prompt provided." | Image>}
     */
    cartoon(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!prompt) {
                    return "No prompt provided.";
                }
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/cartoon`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat cartoon Error: ${error}`);
            }
        });
    }
    /**
     * Generate Image with Photograpy
     * @param {string} prompt DallE prompt
     * @example
     * ```js
     * const { RsnChat } = require("rsnchat");
     *
     * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
     *
     * const prompt = "beautiful girl";
     *
     * rsnchat.photograpy(prompt).then((response) => {
     *   console.log(response);
     * });
     * ```
     * @returns {Promise<"No prompt provided." | Image>}
     */
    photograpy(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!prompt) {
                    return "No prompt provided.";
                }
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/photograpy`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Photograpy Error: ${error}`);
            }
        });
    }
    /**
     * Generate Image with Disney
     * @param {string} prompt Disney prompt
     * @example
     * ```js
     * const { RsnChat } = require("rsnchat");
     *
     * const rsnchat = new RsnChat("rsnai_××××××××××××××××××××××");
     *
     * const prompt = "beautiful girl";
     *
     * rsnchat.disney(prompt).then((response) => {
     *   console.log(response);
     * });
     * ```
     * @returns {Promise<"No prompt provided." | Image>}
     */
    disney(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!prompt) {
                    return "No prompt provided.";
                }
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(`${apiUrl}/disney`, payload, {
                    headers: this.headers,
                });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Disney Error: ${error}`);
            }
        });
    }
}
exports.RsnChat = RsnChat;
