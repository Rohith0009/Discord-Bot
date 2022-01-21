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
  if (message === "$changecolor " + "Red") {
    red(msg.member);
    msg.reply("Successfully Changed Color To Red");
  }
  if (message === "$changecolor " + "Orange") {
    orange(msg.member);
    msg.reply("Successfully Changed Color To Orange");
  }
  if (message === "$changecolor " + "Yellow") {
    yellow(msg.member);
    msg.reply("Successfully Changed Color To Yellow");
  }
  if (message === "$changecolor " + "Green") {
    green(msg.member);
    msg.reply("Successfully Changed Color To Green");
  }
  if (message === "$changecolor " + "Blue") {
    blue(msg.member);
    msg.reply("Successfully Changed Color To Blue");
  }
  if (message === "$changecolor " + "Purple") {
    purple(msg.member);
    msg.reply("Successfully Changed Color To Purple");
  }
});

function red(member) {
  member.roles.add("917624901152677908");
}
function orange(member) {
  member.roles.add("917624903207886918");
}
function yellow(member) {
  member.roles.add("917624903174332448");
}
function green(member) {
  member.roles.add("917624902486458439");
}
function blue(member) {
  member.roles.add("917624903828664351");
}
function purple(member) {
  member.roles.add("917624901563732090");
}

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
