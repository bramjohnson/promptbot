const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const jokes = require('../jokes/jokes.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prompt')
        .setDescription('Prompt a joke.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addSubcommand(subcommand =>
            subcommand
                .setName('sex')
                .setDescription('Sex with me is like [prompt], _______.')
                .addStringOption(option =>
                    option.setName('prompt')
                        .setDescription('Provide a custom prompt.')
                        .setRequired(false))
        ).addSubcommand(subcommand =>
            subcommand
                .setName('threesome')
                .setDescription('Sex With Me, but two words!')
                .addStringOption(option =>
                    option.setName('prompt')
                        .setDescription('Provide a custom prompt.')
                        .setRequired(false))
                .addStringOption(option =>
                    option.setName('prompt_2')
                        .setDescription('Provide a custom prompt.')
                        .setRequired(false))
        ).addSubcommand(subcommand =>
            subcommand
                .setName('back_in_my_day')
                .setDescription('Back in my day we didn\'t have [prompt], ______.')
                .addStringOption(option =>
                    option.setName('prompt')
                        .setDescription('Provide a custom prompt.')
                        .setRequired(false))
        ).addSubcommand(subcommand =>
            subcommand
                .setName('yo_mama')
                .setDescription('Yo mama is so [prompt], that ______.')
                .addStringOption(option =>
                    option.setName('prompt')
                        .setDescription('Provide a custom prompt.')
                        .setRequired(false))
        ).addSubcommand(subcommand =>
            subcommand
                .setName('bar_joke')
                .setDescription('[prompt] walks into a bar, _______.')
                .addStringOption(option =>
                    option.setName('prompt')
                        .setDescription('Provide a custom prompt.')
                        .setRequired(false))
        ).addSubcommand(subcommand =>
            subcommand
                .setName('pickup_lines')
                .setDescription('Are you [prompt]? Because ______.')
                .addStringOption(option =>
                    option.setName('prompt')
                        .setDescription('Provide a custom prompt.')
                        .setRequired(false))
        ),
    async execute(interaction) {
        const options = interaction.options
        const response = jokes.joke(options)
        await interaction.reply({ content: `${response}`, "allowedMentions": { "users": [] } });
    },
};