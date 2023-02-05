const Discord = require("discord.js");

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("help")
    .setDescription("List all available bot commands."),
  // .addStringOption((option) =>
  //   option
  //     .setName("category")
  //     .setDescription("What category of the help command ?")
  //     .addChoices(
  //       { name: "Fun", value: "help_fun" },
  //       { name: "Info", value: "help_funny" },
  //       { name: "Math", value: "help_math" },
  //       { name: "Utility", value: "help_utility" },
  //     )
  // ),
  async execute(interaction) {
    const embed = new Discord.EmbedBuilder()
      .setTitle(`***Help*** 😭`)
      .setURL("https://youtu.be/Oqrm-9Wy8iU")
      .setAuthor({
        name: "Created By : Udin",
        iconURL: "https://cf.shopee.co.id/file/e75559dfb6f7fb15db4873b5b760abb4",
        url: "https://cf.shopee.co.id/file/e75559dfb6f7fb15db4873b5b760abb4",
      })
      .setDescription(
        "You can find more about him on his [github page](https://github.com/get543) \n The code is also on github, but you should check [this](https://github.com/get543/android.bot) first"
      )
      .setColor(0xff0000)
      .addFields([
        { name: "/add", value: "pong" },
        { name: "/ping", value: "pong" },
        { name: "/server", value: "display more info about the server" },
        { name: "/user", value: "display more info about the user" },
        { name: "/hai", value: "say hai to the bot" },
        { name: "/beep", value: "beep boop robot" },
        { name: "/echo", value: "send the message the same as you typed in" },
        { name: "/gif", value: "gif command" },
        {
          name: "/avatar",
          value: "see the bigger picture of the profile picture",
        },
        {
          name: "/options",
          value: "same as the echo you can learn a lot as the dev",
        },
        { name: "/help", value: "show this command" },
        { name: "/button", value: "show this command" },
      ])
      .setTimestamp()
      .setFooter({
        text: `Requested by: ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      });

    let Buttons = [];

    Buttons[0] = new Discord.ButtonBuilder()
      .setLabel(`My Github Page!`)
      .setStyle(Discord.ButtonStyle.Link)
      .setURL("https://github.com/get543");

    Buttons[1] = new Discord.ButtonBuilder()
      .setEmoji("😁")
      .setCustomId(`troll`)
      .setStyle(Discord.ButtonStyle.Danger);

    await interaction.reply({
      embeds: [embed],
      components: [new Discord.ActionRowBuilder().addComponents(Buttons)],
    });
  },
};
