const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Get the avatar URL of the selected user, or your own avatar.")
    .addUserOption((option) =>
      option.setName("target").setDescription("The user's avatar to show")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");

    if (user) {
      const avatar = user.displayAvatarURL({ dynamic: true, size: 1024 });

      const embed = new Discord.EmbedBuilder()
        .setTitle(`${user.username}'s avatar`)
        .setImage(avatar)
        .setColor(0x4cc417);
      await interaction.reply({ embeds: [embed] });
    } else if (!user) {
      const avatar = interaction.user.displayAvatarURL({
        dynamic: true,
        size: 1024,
      });

      const embed = new Discord.EmbedBuilder()
        .setTitle(`${interaction.user.username}'s avatar`)
        .setImage(avatar)
        .setColor(0x4cc417);
      await interaction.reply({ embeds: [embed] });
    }
  },
};
