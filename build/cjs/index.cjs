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
    constructor(apikey) {
        this.headers = {
            Authorization: "",
        };
        this.headers = {
            Authorization: `Bearer ${apikey}`
        };
    }
    /**
     * Generate Text Completion via ChatGPT
     * @param prompt
     * @returns
     */
    gpt(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(GPT_ApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat GPT Error: ${error}`);
            }
        });
    }
    /**
   * Generate Text Completion via OpenChat
   * @param prompt
   * @returns
   */
    openchat(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(OpenChat_ApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat OpenChat Error: ${error}`);
            }
        });
    }
    /**
   * Generate Text Completion via Bard
   * @param prompt
   * @returns
   */
    bard(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(Bard_ApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Bard Error: ${error}`);
            }
        });
    }
    /**
   * Generate Text Completion via Gemini
   * @param prompt
   * @returns
   */
    gemini(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(Gemini_ApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Gemini Error: ${error}`);
            }
        });
    }
    /**
   * Generate Text Completion via LLaMa
   * @param prompt
   * @returns
   */
    llama(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(LlamaApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat LlaMa Error: ${error}`);
            }
        });
    }
    /**
   * Generate Text Completion via Mixtral
   * @param prompt
   * @returns
   */
    mixtral(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(MixtralApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Mixtral Error: ${error}`);
            }
        });
    }
    /**
   * Generate Text Completion via CodeLLaMa
   * @param prompt
   * @returns
   */
    codellama(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    prompt: prompt,
                };
                const response = yield axios_1.default.post(CodeLlamaApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat CodeLlaMa Error: ${error}`);
            }
        });
    }
    /**
   * Generate Image with Prodia
   * @param prompt
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
                const response = yield axios_1.default.post(ProdiaApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Prodia Error: ${error}`);
            }
        });
    }
    /**
   * Generate Image with kandinsky
   * @param prompt
   * @returns
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
                const response = yield axios_1.default.post(KandinskyApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Kandinsky Error: ${error}`);
            }
        });
    }
    /**
   * Generate Image with AbsoluteBeauty
   * @param prompt
   * @returns
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
                const response = yield axios_1.default.post(AbsolutebeautyApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Absolutebeauty Error: ${error}`);
            }
        });
    }
    /**
  * Generate Image with SDXL
  * @param prompt
  * @returns
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
                const response = yield axios_1.default.post(SdxlApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Sdxl Error: ${error}`);
            }
        });
    }
    /**
  * Generate Image with DallE
  * @param prompt
  * @returns
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
                const response = yield axios_1.default.post(DalleApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Dalle Error: ${error}`);
            }
        });
    }
    /**
  * Generate Image with IconAPI
  * @param prompt
  * @returns
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
                const response = yield axios_1.default.post(IconApiUrl, payload, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`RsnChat Icon Error: ${error}`);
            }
        });
    }
}
exports.RsnChat = RsnChat;
