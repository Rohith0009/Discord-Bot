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
  if (msg.content === "Good Morning"){
    msg.reply("Good Morning!")
  } 
})

client.on('message', msg => {
  if (msg.content === "${bot_prefix}${changecolor_command}"){
    msg.reply("In Preparation")
  }
})

client.login(process.env.BOT_TOKEN)
