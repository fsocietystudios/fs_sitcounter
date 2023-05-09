const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removecount')
		.setDescription('Removes the current sit counter for the selected target!')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addSubcommand(subCmd =>
            subCmd
                .setName("target")
                .setDescription('Removes the current sit counter for the selected target!')
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
                .setDescription('Removes the total sit counter (+ every staff member\'s counter)!')
        ),
        
	async execute(client, interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub == 'target') {
            const user = interaction.options.getUser("target");

            client.data.total = client.data.total - client.data.members[user.id];
            client.data.members[user.id] = 0;
        } else {
            client.data.total = 0;
            client.data.members = {};
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
                        The current sit counter for the target user/everyone is now removed.
                    `
                )
            ], 
            ephemeral: true
        })
    }
}