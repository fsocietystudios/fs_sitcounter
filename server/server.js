process.on('uncaughtException', function(err) {
  console.log('Caught exception: ', err.stack);
});
process.on('unhandledRejection', function(err) {
  console.log('Caught exception: ', err.stack);
});

require("dotenv").config();

const { 
  Client,
  GatewayIntentBits, 
  Partials, 
  Collection, 
  REST, 
  Routes,
  ActivityType,
  EmbedBuilder,
} = require("discord.js");

const fs = require('node:fs');
const path = require('node:path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [
    Partials.Channel, 
    Partials.GuildMember, 
    Partials.GuildScheduledEvent, 
    Partials.Message, 
    Partials.Reaction, 
    Partials.User
  ],
});

client.resourceName = GetCurrentResourceName()
client.resourcePath = GetResourcePath(client.resourceName)
client.commands = new Collection();
client.config = require(`${client.resourcePath}/server/config.json`);
client.data = JSON.parse(LoadResourceFile(client.resourceName, "server/data/data.json"));
client.commandsArr = [];

const commandsFile = require(`${client.resourcePath}/server/utils/command.js`);
const eventsFile = require(`${client.resourcePath}/server/utils/event.js`);
const dataFile = require(`${client.resourcePath}/server/utils/data.js`);

commandsFile.run(client);
eventsFile.run(client);
dataFile.run(client);

client.login(client.config.client_token);