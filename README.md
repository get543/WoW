> Forked from Cyclic.sh
> [![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

# WoW

Simple Discord Bot Created Using [discord.js](https://discord.js.org). Supports slash (/) commands. Using the newest technology available.

# Getting Started

1. Create discord application [here](https://discord.com/developers/applications).

2. [Invite Bot](https://discord.com/api/oauth2/authorize?client_id=920889526749106197&permissions=8&scope=applications.commands%20bot).

- Change `920889526749106197` to your bot's Application ID.

3. Create Tenor API Key [here](https://tenor.com/developer/dashboard)

# Set-up and configuration

1. Download [source code](https://github.com/get543/WoW/archive/refs/heads/main.zip) and extract it.

2. Create `.env` file in the same folder as `main.js`.

3. `.env` file contain :

```
DISCORD_TOKEN = "your-discord-bot-token"

TENORAPIKEY = "your-tenor-api-key"

clientID = "your-discord-bot-application-id"

guildID = "your-discord-server-id"
```

- Find `DISCORD_TOKEN` `clientID` in [Discord Developer Portal](https://discord.com/developers/applications).

  - `DISCORD_TOKEN` in `Bot` section.
  - `clientID` in `General Information > Application ID`.

- Find `guildID` (Server ID) by right click the server icon on your discord, if you already enable `Developer Mode` for in your discord `User Settings > Advanced`.

- Find `TENORAPIKEY` in [Tenor Developer Dashboard](https://tenor.com/developer/dashboard).

4. Open PowerShell or Terminal, type this command.

```bash
# navigate where you download the source code.
cd ~/Downloads/WoW-main

# install missing dependencies
npm install

# run the bot
npm start
```

5. Type `/help` on discord to find out all bot commands.
