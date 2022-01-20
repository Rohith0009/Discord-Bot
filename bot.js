require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client({
  partials: ["MESSAGE"]
})

const bot_prefix = "$"
const changecolor_command ="changecolor"

const blue = "Blue"


client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
})

client.on('message', msg => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()$~!%.'":*?<>{}]/, '');
  if (message === "good morning"){
    msg.reply("Good Morning!")
  } 
})

client.on('message', msg => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()$~!%.'":*?<>{}]/, '');
  if (message === "good afternoon"){
    msg.reply("Good Afternoon!")
  } 
})

client.on('message', msg => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()$!~%.'":*?<>{}]/, '');
  if (message === "good night"){
    msg.reply("Good Night!")
  } 
})

client.on('message', msg => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()!$~%.'":*?<>{}]/, '');
  if (message === "hello!"){
    msg.reply("Hello!")
  } 
})

client.on('message', msg => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()$~%!.'":*?<>{}]/, '');
  if (message === "hello"){
    msg.reply("Hello!")
  } 
})

client.on('message', msg => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()$~%!.'":*?<>{}]/, '');
  if (message === "how are you"){
    msg.reply("I Am Fine! How Are You?")
  } 
})

client.on('message', msg => {
  if (msg.content === "${bot_prefix}${changecolor_command}"){
    msg.reply("In Preparation")
  }
})

client.on('message', msg => {
  var message = msg.content.toLowerCase();
  var message = message.replace(/[&\/\\#,+()!$~%.'":*?<>{}]/, '');
  if (message == "i love rohiths tech") {
    msg.react("💖")
    }
  })

  client.on("message", msg => {
    var message = msg.content.toLowerCase();
    var message = message.replace(/[&\/\\#,+()!$~%.'":*?<>{}]/, '');
    if (message == "thank you rohith") {
      msg.react("💖")
      }
    })

client.login(process.env.BOT_TOKEN)
