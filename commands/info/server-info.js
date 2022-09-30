const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("server")
    .setDescription("Display info about the server! (created, name, member)"),
  async execute(interaction) {
    const embed = new Discord.EmbedBuilder()
      .setTitle(`🖥 ***Server Info***`)
      .setThumbnail(interaction.guild.iconURL())
      .setColor("#804000")
      .addFields([
        { name: "Server Name", value: interaction.guild.name },
        { name: "Total Members", value: `${interaction.guild.memberCount}` },
        { name: "Created At", value: `${interaction.guild.createdAt}` },
      ])
      .setTimestamp()
      .setFooter({
        text: `Requested by: ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      });
    await interaction.reply({ embeds: [embed] });
  },
};
