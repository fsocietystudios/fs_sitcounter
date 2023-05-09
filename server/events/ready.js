module.exports = {
	name: Events.ClientReady,
	once: true,
    
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

        client.user.setPresence({ status: 'dnd' });
        client.user.setActivity(client.config.client_activity, { type: ActivityType.Playing });
	},
};