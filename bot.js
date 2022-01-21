/* Main Code*/
require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const bot_prefix = "$";

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!");
});

/* Greeting Messages*/
client.on("message", (msg) => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()$~!%.'":*?<>{}]/, "");
  if (message === "good morning") {
    msg.reply("Good Morning!");
  }
  if (message === "good afternoon") {
    msg.reply("Good Afternoon!");
  }
  if (message === "good evening") {
    msg.reply("Good Evening!");
  }
  if (message === "good night") {
    msg.reply("Good Night!");
  }
});

client.on("message", (msg) => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()!$~%.'":*?<>{}]/, "");
  if (message === "hello") {
    msg.reply("Hello!");
  }
  if (message === "how are you") {
    msg.reply("I Am Fine! How Are You?");
  }
});

/*Theme Color Changing Commands*/
client.on("message", (msg) => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()!~%.'":*?<>{}]/, "");
  if (message === "$changecolor " + "red") {
    msg.member.roles.add("917624901152677908");
    msg.reply("Successfully Changed Color To Red");
  }
  if (message === "$changecolor " + "orange") {
    msg.member.roles.add("917624903207886918");
    msg.reply("Successfully Changed Color To Orange");
  }
  if (message === "$changecolor " + "yellow") {
    msg.member.roles.add("917624903174332448");
    msg.reply("Successfully Changed Color To Yellow");
  }
  if (message === "$changecolor " + "green") {
    msg.member.roles.add("917624902486458439");
    msg.reply("Successfully Changed Color To Green");
  }
  if (message === "$changecolor " + "blue") {
    msg.member.roles.add("917624903828664351");
    msg.reply("Successfully Changed Color To Blue");
  }
  if (message === "$changecolor " + "purple") {
    msg.member.roles.add("917624901563732090");
    msg.reply("Successfully Changed Color To Purple");
  }
});

/*Help Command*/
client.on("message", (msg) => {
  var message = msg.content.toLowerCase();
  if (message === bot_prefix + "help") {
    msg.channel.send("Change Theme Color: $changecolor 'Color Name'");
  }
});

/*Reaction Code*/
client.on("message", (msg) => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()!$~%.'":*?<>{}]/, "");
  if (message == "i love rohiths tech") {
    msg.react("💖");
  }
  if (message == "thank you rohith") {
    msg.react("💖");
  }
});

client.login(process.env.BOT_TOKEN);
/*End Of Code*/