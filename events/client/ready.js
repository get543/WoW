const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`${client.user.username} is Online!`);

    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_TOKEN
    );

    (async () => {
      try {
        console.log("Registering guild application (/) commands.");

        await rest.put(
          Routes.applicationGuildCommands(
            process.env.clientID,
            process.env.guildID
          ),
          {
            body: client.commandArray,
          }
        );

        console.log("Successfully registered guild application (/) commands.");
      } catch (error) {
        console.error(error);
      }
    })();
  },
};
