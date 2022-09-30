const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("button")
    .setDescription("Testing Discord JS Button."),
  async execute(interaction) {
    let Buttons = [];

    Buttons[0] = new Discord.ButtonBuilder()
      .setCustomId(`testing`)
      .setLabel(`Testing`)
      .setStyle(Discord.ButtonStyle.Primary);

    Buttons[1] = new Discord.ButtonBuilder()
      .setCustomId(`danger`)
      .setLabel(`Danger`)
      .setStyle(Discord.ButtonStyle.Danger);

    Buttons[2] = new Discord.ButtonBuilder()
      .setCustomId(`secondary`)
      .setLabel(`Secondary`)
      .setStyle(Discord.ButtonStyle.Secondary);

    Buttons[3] = new Discord.ButtonBuilder()
      .setCustomId(`success`)
      .setLabel(`Success`)
      .setStyle(Discord.ButtonStyle.Success);

    Buttons[4] = new Discord.ButtonBuilder()
      .setLabel(`Link`)
      .setStyle(Discord.ButtonStyle.Link)
      .setURL(`https://discord.js.org/`);

    await interaction.reply({
      components: [new Discord.ActionRowBuilder().addComponents(Buttons)],
    });
  },
};
