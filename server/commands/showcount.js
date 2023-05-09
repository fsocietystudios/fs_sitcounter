module.exports = {
	data: new SlashCommandBuilder()
		.setName('showcount')
		.setDescription('Shows the current sit counter for the selected target!')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addSubcommand(subCmd =>
            subCmd
                .setName("target")
                .setDescription('Shows the current sit counter for the selected target!')
                .addUserOption(option =>
                    option
                        .setName('target')
                        .setDescription('The staff member to check the sit counter on')
                        .setRequired(true)
                )
        )
        .addSubcommand(subCmd =>
            subCmd
                .setName("everyone")
                .setDescription('Shows the total sit counter!')
        ),
        
	async execute(client, interaction) {
        const sub = interaction.options.getSubcommand();

        let counter = 0;

        if (sub == 'target') {
            const user = interaction.options.getUser("target");

            counter = client.data.members[user.id];
        } else {
            counter = client.data.total;
        }

        const embed = new EmbedBuilder()
            .setAuthor({
                name: `${client.config.embed_server_name} | Sit Counter System`,
                iconURL: client.user.displayAvatarURL()
            })
            .setTitle(`${client.config.embed_server_name} | Sit Counter System`)
            .setColor(client.config.embed_color)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter({
                text: `${client.config.embed_server_name} | Sit Counter System`,
                iconURL: client.user.displayAvatarURL()
            })
            .setTimestamp();

        return interaction.reply({
            embeds: [
                embed.setDescription(
                    `
                        **Hello, <@${interaction.user.id}>!**
                        The current sit counter for the target user/everyone is \`\`${(!counter || counter === 0) ? '0 or None' : counter }\`\`.
                    `
                )
            ], 
            ephemeral: true
        })
    }
}