<h1 align='center'><b>📊 FSOCIETY'S Discord Sit Counter</b></a></h1>

<p align='center'><b><a href='https://discord.gg/fsociety'>Discord</a> - <a href='https://store.fsocietystudios.com/'>Tebex</a> - <a href='https://media.giphy.com/media/z6EG2su1f5jOTourNL/giphy.gif'>Documentation</a></b></h5>
<p align='center'><b>A simple Discord Sit Counter bot!</b></p>

<p align="center">
  <img align='center' src="https://cdn.discordapp.com/attachments/824324172141559848/1105556742215061584/Screenshot_1.png" />
</p>

<hr>

## <b>🤔 Can you tell me briefly about this resource?</b>
Using this resource, you'll be able to keep track of your staff team and their sit counters! <br />

**DISCLAIMER: THIS RESOURCE MEANT TO WORK WITH [EasyAdmin](https://github.com/Blumlaut/EasyAdmin) BUT WILL WORK WITH ANY OTHER RESOURCE THAT PROVIDES THE SITS THROUGH A DISCORD WEBHOOK!**

## <b>⚙️ Great! What dependencies do i need?</b>
In order to use this resource, you'll need:
- A running server.
- [EasyAdmin](https://github.com/Blumlaut/EasyAdmin) / every other resource that provides the sits through a Discord webhook.

## <b>❓ Ok.. but how do i use it?</b>
1. Download the resource and put it inside of your resources list.
2. Go to [Discord Developers Portal](https://discord.com/developers)
3. Create a new application.
4. Copy the application ID. (under **TAGS** in **General Information** tab), and paste it inside `client_id` value in `server/config.json`
5. Create a bot within your new application.
6. Untick the **Public Bot** option and tick the 3 intents under **Privileged Gateway Intents**.
7. Scroll back up to the **Bot** page, copy the **Bot Token**, and paste it inside `client_token` value in `server/config.json`.
8. At the left-sided menu click on **OAuth2 > URL Generator**
9. Tick the **bot** & **application.commands** options under **Scopes** and tick the **Administrator** option under **Bot Permissions**.
10. Copy the generated URL at the bottom of the page, paste it in your browser and invite the bot to your server.
11. Go into the config of the resource and edit the information. <br />
**`guild_id`** - Your Discord server id. <br />
**`reports_channel_id`** - The channel id of where sits are recieved at by a Discord webhook. <br />
**`logs_channel_id`** - The channel id that the bot will use to log the reactions to sits and total counter for everyone.
12. Edit the other information at the config as you wish.
13. Simply add ``ensure fs_sitcounter`` inside your ``server.cfg``

If you have done that correctly - Congratulations! You got the resource working properly!

## <b>🆘 Wait.. But what if i need help?</b>
- [My Discord server](https://discord.gg/fsociety) is a safe place to ask questions. I'll be more than glad to help in my free time!
