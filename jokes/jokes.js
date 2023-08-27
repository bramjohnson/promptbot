const pm = require('./prompt_manager.js')

const underlines = "\\_\\_\\_\\_\\_\\_\\_\\_.\n"

const jokes = {
    'sex':(prompt_manager)=>{ return `Sex With Me:\nSex with me is like ${prompt_manager.nextPrompt()}, ${underlines}`},
    'threesome':(prompt_manager)=>{ return `Threesome With Me:\nThreesome with me is like ${prompt_manager.nextPrompt()} and ${prompt_manager.nextPrompt()}, ${underlines}`},
    'back_in_my_day':(prompt_manager)=>{ return `Back In My Day:\nBack in my day we didn't have ${prompt_manager.nextPrompt()}, ${underlines}`},
    'yo_mama':(prompt_manager)=>{ return `Yo Mama:\nYo mama is so ${prompt_manager.nextPrompt()}!\n(How ${prompt_manager.samePrompt()} is she?)\nShe's so ${prompt_manager.samePrompt()}, that ${underlines}`},
    'bar_joke':(prompt_manager)=>{ return `185:\n${prompt_manager.nextPrompt().charAt(0).toUpperCase() + prompt_manager.samePrompt().slice(1)} walks into a bar, ${underlines}`},
    'pickup_lines':(prompt_manager)=>{ return `Pickup Lines:\nHey \\_\\_\\_\\_\\_\\_\\_\\_, are you ${prompt_manager.nextPrompt()}? Because ${underlines}`},
}

function joke(options) {
    const prompt_manager = new pm.PromptManager(options)
    return jokes[options.getSubcommand()](prompt_manager)
}

function random(options) {
    var keys = Object.keys(jokes)
    const prompt_manager = new pm.PromptManager(options)
    return jokes[keys[Math.floor(Math.random()*keys.length)]](prompt_manager)
}

module.exports = {
    joke: joke,
    random: random,
};