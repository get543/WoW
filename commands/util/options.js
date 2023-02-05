const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("options")
    .setDescription("Echo back the information from the input provided.")
    .addStringOption((option) => option.setName("input").setDescription("The input to echo back")),
  async execute(interaction) {
    const value = interaction.options.getString("input");
    if (value) {
      await interaction.reply(`The options value is: \`${value}\``);
    } else if (!value) {
      await interaction.reply({
        content: "No option was provided!",
        ephemeral: true,
      });
    }
  },
};
