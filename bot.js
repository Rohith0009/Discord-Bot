/* Main Code*/
require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

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
  var message = message.replace(/[&\/\\#,+()!$~%'":*?<>{}]/, "");
  if (message === "hello") {
    msg.reply("Hello!");
  }
  if (message === "hi") {
    msg.reply("Hello!");
  }
  if (message === "how are you") {
    msg.reply("I Am Fine! How Are You?");
  }
  if (message === "i am fine") {
    msg.reply("Great!");
  }
  if (message === "i am bored") {
    msg.reply("No Problem! I am There To Chat With You!!");
  }
    if (message === "yt") {
      msg.member.roles.add("887170550647107636");
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
  if (message === "$help") {
    msg.channel.send(`**Help Menu:**
    **Notices:**
    A) Default Prefix Is $
    **Commands:**
    A)Change Theme Color: $changecolor 'Color Name'
    **Upcoming Features**
    A) Will Add Slash Commands To The Bot To Make It Easy To Use
    ㅤ
*©️Rohith M
Made Completely By Rohith M Using Discord.js And VS Code Editor*`);
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
