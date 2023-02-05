const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("snipe")
    .setDescription("Sniping someone from a mile away, 🤫 don't tell anyone."),
  async execute(interaction) {
    try {
      const keywords = "discord snipe";

      const url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORAPIKEY}&client_key=my_test_app&limit=8&contentfilter=off&media_filter=gif`;

      const respose = await fetch(url);

      const json = await respose.json();

      const index = Math.floor(Math.random() * json.results.length);

      const gif = json.results[index].media_formats.gif.url;

      const gifEmbed = new Discord.EmbedBuilder()
        .setColor(0x814721)
        .setImage(gif)
        .setTitle(`SNIPE 🔫 😁`);

      await interaction.reply({ embeds: [gifEmbed] });
    } catch (error) {
      console.error();
    }
  },
};
