const Service = require('node-windows').Service

const svc = new Service({
    name: "Discord Bot (PromptBot)",
    description: "Discord bot serving No Jokes",
    script: "absolute-path-to-index-js-file-in-this-folder" // You must change this!
})

svc.on('install', function() {
    console.log("Service started...")
    svc.start()
})

svc.install()