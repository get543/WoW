module.exports = {
  data: {
    name: "testing",
  },
  async execute(interaction) {
    await interaction.reply({
      content: "This is just a test hahaha",
    });
  },
};
