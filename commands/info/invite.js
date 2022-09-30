const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite this bot into the server of your choosing."),
  async execute(interaction) {
    const embed = new Discord.EmbedBuilder()
      .setTitle("Click Me to Invite")
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=920889526749106197&permissions=8&scope=applications.commands%20bot`
      );
    await interaction.reply({ embeds: [embed] });
  },
};
