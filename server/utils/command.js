module.exports = {
    async run(client) {
        const commands = [];
        const commandsPath = path.join(client.resourcePath, client.resourceName, "..", "server/commands");
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        const rest = new REST({ version: '10' }).setToken(client.config.client_token);
        
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            
            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
                commands.push(command.data.toJSON());
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }

        try {
            // await rest.put(
            //     Routes.applicationGuildCommands(client.config.client_id, client.config.guild_id),
            //     { body: [] },
            // );
            
            const data = await rest.put(
                Routes.applicationGuildCommands(client.config.client_id, client.config.guild_id),
                { body: commands },
            );
        
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (e) {
            console.error(e);
        }
    }
}