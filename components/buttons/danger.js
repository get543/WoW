module.exports = {
  data: {
    name: "danger",
  },
  async execute(interaction) {
    await interaction.reply({
      content: "This is a danger button.",
    });
  },
};
