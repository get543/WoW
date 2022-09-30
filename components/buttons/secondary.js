module.exports = {
  data: {
    name: `secondary`,
  },
  async execute(interaction) {
    await interaction.reply({
      content: `This is a secondary button`,
    });
  },
};
