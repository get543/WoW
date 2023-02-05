const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("add")
    .setDescription("Adding 2 numbers.")
    .addNumberOption((option) =>
      option.setName("firstnumber").setDescription("First number to be added").setRequired(true)
    )
    .addNumberOption((option) =>
      option.setName("secondnumber").setDescription("Second number to be added").setRequired(true)
    ),
  async execute(interaction) {
    const firstNumber = interaction.options.getNumber("firstnumber");
    const secondNumber = interaction.options.getNumber("secondnumber");
    const sum = firstNumber + secondNumber;
    await interaction.reply(`**${firstNumber}** \`+\` **${secondNumber}** \`=\` **${sum}**`);
  },
};
