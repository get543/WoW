const Discord = require('discord.js');

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('help')
    .setDescription('List all available bot commands.')
    .addStringOption((option) =>
      option
        .setName('category')
        .setDescription('What category of the help command ?')
        .addChoices({ name: 'music', value: 'help_music' })
    ),
  async execute(interaction) {
    if (interaction.options.getString('category') === 'help_music') {
      const musicEmbed = new Discord.EmbedBuilder()
        .setTitle(`***Music Command*** 🎵`)
        .setURL('https://youtu.be/Oqrm-9Wy8iU')
        .setAuthor({
          name: 'Created By : Udin',
          iconURL:
            'https://cf.shopee.co.id/file/e75559dfb6f7fb15db4873b5b760abb4',
          url: 'https://cf.shopee.co.id/file/e75559dfb6f7fb15db4873b5b760abb4',
        })
        .setDescription('Here are the list of music commands')
        .setColor('#F08080')
        .addFields([
          {
            name: '/autoplay',
            value: 'Turn autoplay on or off. Default to off.',
          },
          { name: '/loop', value: 'pong' },
          { name: '/nowplaying', value: 'Show what music is being played.' },
          { name: '/pause', value: 'Pause playing music.' },
          {
            name: '/play',
            value: 'Play music, supports YouTube, Spotify, and SoundCloud.',
          },
          {
            name: '/playskip',
            value: `The same as 'play' command but add the music on top of the queue and then skip to it.`,
          },
          {
            name: '/playtop',
            value: 'Add the music to the very top of the queue',
          },
          {
            name: '/queue',
            value: 'Show the queue of what music is playing next.',
          },
          { name: '/resume', value: 'Resume paused music.' },
          { name: '/seek', value: 'Fast forward current playing music.' },
          { name: '/shuffle', value: 'Shuffle current queue.' },
          {
            name: '/skip',
            value: 'Skip now playing music to the next one on the queue.',
          },
          {
            name: '/stop',
            value: 'Stop playing music and leave the voice channel.',
          },
        ])
        .setTimestamp()
        .setFooter({
          text: `Requested by: ${interaction.user.username}`,
          iconURL: interaction.user.displayAvatarURL(),
        });

      return interaction.reply({ embeds: [musicEmbed] });
    }

    const embed = new Discord.EmbedBuilder()
      .setTitle(`***Help*** 😭`)
      .setURL('https://youtu.be/Oqrm-9Wy8iU')
      .setAuthor({
        name: 'Created By : Udin',
        iconURL:
          'https://cf.shopee.co.id/file/e75559dfb6f7fb15db4873b5b760abb4',
        url: 'https://cf.shopee.co.id/file/e75559dfb6f7fb15db4873b5b760abb4',
      })
      .setDescription(
        'You can find more about him on his [github page](https://github.com/get543) \n The code is also on github, but you should check [this](https://github.com/get543/android.bot) first'
      )
      .setColor('#ff0000')
      .addFields([
        { name: '/add', value: 'pong' },
        { name: '/ping', value: 'pong' },
        { name: '/server', value: 'display more info about the server' },
        { name: '/user', value: 'display more info about the user' },
        { name: '/hai', value: 'say hai to the bot' },
        { name: '/beep', value: 'beep boop robot' },
        { name: '/echo', value: 'send the message the same as you typed in' },
        { name: '/gif', value: 'gif command' },
        {
          name: '/avatar',
          value: 'see the bigger picture of the profile picture',
        },
        {
          name: '/options',
          value: 'same as the echo you can learn a lot as the dev',
        },
        { name: '/help', value: 'show this command' },
        { name: '/button', value: 'show this command' },
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
      .setURL('https://github.com/get543');

    Buttons[1] = new Discord.ButtonBuilder()
      .setEmoji('😁')
      .setCustomId(`troll`)
      .setStyle(Discord.ButtonStyle.Danger);

    await interaction.reply({
      embeds: [embed],
      components: [new Discord.ActionRowBuilder().addComponents(Buttons)],
    });
  },
};
