const utils = require('./utils.js')

class PromptManager {
    constructor(options) {
        this.options = options
        this.prompt_number = 0
        this.last_prompt = ""
    }

    nextPrompt() {
        this.prompt_number += 1
        this.last_prompt = utils.get_prompt(this.options, this.nextPromptName())
        return this.last_prompt
    }

    samePrompt() {
        return this.last_prompt
    }

    nextPromptName() {
        if (this.prompt_number == 1) {
            return 'prompt'
        }
        return `prompt_${this.prompt_number}`
    }
}

module.exports = {
    PromptManager:PromptManager,
};