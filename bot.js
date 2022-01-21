require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const bot_prefix = "$";

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!");
});

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

client.on("message", (msg) => {
    var message = msg.content.toLowerCase();
  if (message === bot_prefix + "changecolor " + "Red") {
    member.roles.add("917624901152677908");
    msg.reply("Successfully Changed Color To Red");
  }
  if (message === bot_prefix + "changecolor " + "Orange") {
    member.roles.add("917624903207886918");
    msg.reply("Successfully Changed Color To Orange");
  }
  if (message === bot_prefix + "changecolor " + "Yellow") {
    member.roles.add("917624903174332448");
    msg.reply("Successfully Changed Color To Yellow");
  }
  if (message === bot_prefix + "changecolor " + "Green") {
    member.roles.add("917624902486458439");
    msg.reply("Successfully Changed Color To Green");
  }
  if (message === bot_prefix + "changecolor " + "Blue") {
    member.roles.add("917624903828664351");
    msg.reply("Successfully Changed Color To Blue");
  }
  if (message === bot_prefix + "changecolor " + "Purple") {
    member.roles.add("917624901563732090");
    msg.reply("Successfully Changed Color To Purple");
  }
});

client.on("message", (msg) => {
  var message = msg.content.toLowerCase();
  if (message === bot_prefix + "help") {
    msg.channel.send("Change Theme Color: $changecolor 'Color Name'");
        msg.channel.send("Alert: Feature Currently Not Working Correctly");
  }
});

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
