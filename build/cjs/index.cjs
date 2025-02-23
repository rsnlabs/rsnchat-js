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
const apiUrl = "https://api.rnilaweera.lk/api/";
class RsnChat {
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
    constructor(apikey) {
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
    getModels() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const response = yield axios_1.default.get(`${apiUrl}models`, { headers: this.headers });
                const chatModels = response.data.chat_models
                    .filter((model) => model.status === "active")
                    .map((model) => model.name);
                const imageModels = response.data.image_models
                    .filter((model) => model.status === "active")
                    .map((model) => model.name);
                return { chatModels, imageModels };
            }
            catch (error) {
                throw new Error(`Failed to fetch models: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || error.message}`);
            }
        });
    }
    /**
     * Generate Text Completion
     * @param {string} prompt - Required text input
     * @param {string} model - AI model name (https://api.rnilaweera.lk/api/models)
     * @returns {Promise<TextResult>}
     */
    chat(prompt, model) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!prompt || typeof prompt !== "string") {
                throw new Error("Prompt is required and must be a string.");
            }
            if (!model || typeof model !== "string") {
                throw new Error("Model is required and must be a string.");
            }
            try {
                const response = yield axios_1.default.post(`${apiUrl}chat/generate`, { prompt, model }, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`Chat Generation Error: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || error.message}`);
            }
        });
    }
    /**
     * Generate Image Completion
     * @param {string} prompt - Required image description
     * @param {string} model - AI model name (https://api.rnilaweera.lk/api/models)
     * @returns {Promise<Image>}
     */
    image(prompt, model) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!prompt || typeof prompt !== "string") {
                throw new Error("Prompt is required and must be a string.");
            }
            if (!model || typeof model !== "string") {
                throw new Error("Model is required and must be a string.");
            }
            try {
                const response = yield axios_1.default.post(`${apiUrl}image/generate`, { prompt, model }, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`Image Generation Error: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || error.message}`);
            }
        });
    }
    /**
     * Check NSFW Image Completion
     * @param {string} image_url - Required image url
     * @returns {Promise<Image>}
     */
    checkNSFW(image_url) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!image_url || typeof image_url !== "string") {
                throw new Error("image_url is required and must be a string.");
            }
            try {
                const response = yield axios_1.default.post(`${apiUrl}image/check-nsfw`, { image_url }, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`Check NSFW Error: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || error.message}`);
            }
        });
    }
}
exports.RsnChat = RsnChat;
