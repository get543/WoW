module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.mentions.has("920889526749106197")) {
      message.channel.send(
        "Hello 😊 I support slash (/) command. \nSo maybe you can try `/help` for more info"
      );
      // message.react("👌");
      // message.react("😐");
      // message.react("👎");
    }
  },
};
