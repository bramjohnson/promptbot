const fs = require('node:fs')

function loadPrompts() {
    return JSON.parse(fs.readFileSync('./jokes/prompts.json'))
}

function random_prompt_choice() {
    const prompts = loadPrompts()
    return prompts[Math.floor(Math.random()*prompts.length)]
}

// Input proofs prompts: if user input not provided, pick from random prompt.
function get_prompt(options, name='prompt') {
    return options.getString(name) ?? random_prompt_choice()
}

module.exports = {
    random_prompt_choice: random_prompt_choice,
    get_prompt: get_prompt
};