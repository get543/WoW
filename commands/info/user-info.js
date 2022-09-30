const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("user")
    .setDescription("Display detail info about yourself! (username, id, tag)"),
  async execute(interaction) {
    const embed = new Discord.EmbedBuilder()
      .setTitle(`🙂 ***User Info***`)
      .setThumbnail(interaction.user.displayAvatarURL())
      .setColor("#804000")
      .addFields([
        { name: "Username", value: interaction.user.username },
        { name: "Tag", value: interaction.user.tag },
        { name: "ID", value: interaction.user.id },
      ])
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  },
};
