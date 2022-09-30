const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const Discord = require("discord.js");

// GIF Function
async function TenorAPI(interaction, keywords, gifTitle, embedColor) {
  const url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORAPIKEY}&client_key=my_test_app&limit=8&contentfilter=off&media_filter=gif`;

  const respose = await fetch(url);
  const json = await respose.json();
  const index = Math.floor(Math.random() * json.results.length);
  const gif = json.results[index].media_formats.gif.url;

  const embed = new Discord.EmbedBuilder()
    .setTitle(gifTitle)
    .setColor(embedColor)
    .setImage(gif);
  return interaction.reply({ embeds: [embed] });
}

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("gif")
    .setDescription("Sends a gif!")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("The gif category ?")
        .setRequired(true)
        .addChoices(
          { name: "Funny", value: "gif_funny" },
          { name: "Meme", value: "gif_meme" },
          { name: "Movie", value: "gif_movie" },
          { name: "Search", value: "gif_search" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("keywords")
        .setDescription("The gif that you want to search")
    ),
  async execute(interaction) {
    if (interaction.options.getString("category") === "gif_funny") {
      if (!interaction.options.getString("keywords")) {
        const keywords = "funny gif";
        const title = "That's some funny shit";
        const color = "DarkPurple";

        TenorAPI(interaction, keywords, title, color);
      } else {
        const keywords =
          "funny gif " + interaction.options.getString("keywords");
        const title =
          "Yeah, that's a funny " +
          interaction.options.getString("keywords") +
          " GIF";
        const color = "DarkPurple";

        TenorAPI(interaction, keywords, title, color);
      }
    } else if (interaction.options.getString("category") === "gif_meme") {
      if (!interaction.options.getString("keywords")) {
        const keywords = "meme";
        const title = "Meme GIF";
        const color = "Blurple";

        TenorAPI(interaction, keywords, title, color);
      } else {
        const keywords = "meme " + interaction.options.getString("keywords");
        const title =
          "Here is some random " +
          interaction.options.getString("keywords") +
          " meme GIF";
        const color = "Blurple";

        TenorAPI(interaction, keywords, title, color);
      }
    } else if (interaction.options.getString("category") === "gif_movie") {
      if (!interaction.options.getString("keywords")) {
        const keywords = "gif about movie";
        const title = "Movie GIF";
        const color = "DarkVividPink";

        TenorAPI(interaction, keywords, title, color);
      } else {
        const keywords =
          "gif about movie " + interaction.options.getString("keywords");
        const title = interaction.options.getString("keywords") + " movie GIF";
        const color = "DarkVividPink";

        TenorAPI(interaction, keywords, title, color);
      }
    } else if (interaction.options.getString("category") === "gif_search") {
      if (!interaction.options.getString("keywords")) {
        await interaction.reply("No Keyword Was Provided");
      } else {
        const keywords = interaction.options.getString("keywords");
        const title = `Search for ${keywords} GIF`;
        const color = "DarkAqua";

        TenorAPI(interaction, keywords, title, color);
      }
    }
  },
};
