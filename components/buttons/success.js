module.exports = {
  data: {
    name: "success",
  },
  async execute(interaction) {
    await interaction.reply({
      content: "Green Light.",
    });
  },
};
