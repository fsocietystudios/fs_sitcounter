const { Events } = require("discord.js");

module.exports = {
	name: Events.InteractionCreate,
    once: false,

    async execute(client, interaction) {
		const handlers = {
			2: chatInputHandler,
			3: messageComponentHandler,
			5: modalSubmitHandler
		}

		await handlers[interaction.type](interaction);

        async function messageComponentHandler(interaction) {}
        async function modalSubmitHandler(interaction) {}

		async function chatInputHandler(interaction) {
			const command = interaction.client.commands.get(interaction.commandName);
	
			if (!command) return console.error(`No command matching ${interaction.commandName} was found.`);
	
			try {
				await command.execute(client, interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		}
    }
}