module.exports = {
	name: Events.MessageReactionAdd,
    once: false,

    async execute(client, messageReaction, user) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: `${client.config.embed_server_name} | Sit Counter System`,
                iconURL: client.user.displayAvatarURL()
            })
            .setTitle(`${client.config.embed_server_name} | Sit Counter System`)
            .setColor(client.config.embed_color)
            .setThumbnail(client.user.displayAvatarURL())
            .setImage(client.config.embed_server_banner)
            .setFooter({
                text: `${client.config.embed_server_name} | Sit Counter System`,
                iconURL: client.user.displayAvatarURL()
            })
            .setTimestamp();

        const logsChannel = client.channels.cache.get(client.config.logs_channel_id);
        let counter = await client.data.total || 0;

        if (
            messageReaction.message.channelId === client.config.reports_channel_id && 
            messageReaction.message.embeds.length >= 0
        ) {
            (counter) ? client.data.total = client.data.total + 1 : client.data.total = 1

            if (client.data.members[user.id]) {
                client.data.members[user.id] = client.data.members[user.id] + 1;
            } else {
                client.data.members[user.id] = 1
            }

            counter = client.data.total;

            if (!logsChannel) return console.log("You forgot to setup the `logs_channel_id` value in config.json!");

            return logsChannel.send({
                embeds: [
                    embed.setDescription(`**Successfully** counted the reaction for [**[Click Here!]**](${messageReaction.message.url}) [By: **${user.tag}**, Counter: **${counter}**]`)
                ], 
                ephemeral: true
            })
        }
    }
}