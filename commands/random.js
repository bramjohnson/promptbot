const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const jokes = require('../jokes/jokes.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Prompt a random joke.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const response = jokes.random(interaction.options)
        await interaction.reply({ content: `${response}`, "allowedMentions": { "users": [] } });
    },
};