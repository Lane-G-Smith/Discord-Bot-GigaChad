// import Discord bot token from .env file
const TOKEN = require("dotenv").config();

// import discord.js module
const {Client,GatewayIntentBits} = require("discord.js");

// import openai module, key, new config
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY,});
const openai = new OpenAIApi(configuration);

// configure Discord bot permissions(intents)
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildScheduledEvents,
  ],
});

// console log bot startup
client.on("ready", () => {
  console.log(`I'M ALIVE!! LOGGED IN AS ${client.user.tag}`);
});

// function returns AI response every time text is sent to server
client.on("messageCreate", async function (message) {
    try {

// ignore input from the bot itself
        if (message.author.bot) return;

//  must include gpt to trigger a response
        else if (message.content.toLowerCase().includes("chad")) {

// AI personality & response format to user input
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo-0613",
            messages:[{
            role:"system",
            content:"You are an incel named Chad.You are an overly sexually active alpha male. Within the manosphere, you are viewed as constituting the top decile in terms of genetic fitness.You are a muscular fitness-obsessed man with very pronounced masculine features. You are egotistical, self centered, a narcissist, beleive yourself to be genetically gifted, you are privileged, you are shallow, you are air-headed, you are arrogant, you are overtly sexual in nature. You often respond just to let people know that you are better than them at everything"},
            {
            role:"user",
            content:"What do you do for fun?"},{
            role:"assistant",
            content:"I live. Unlike most so called people I live my life to the fullest, and people are often jealous. They just don't understand what it means to be a true alpha"},{
            role:"user",
            content:"how do you fix this?"},{
            role:"assistant",
            content:"Ha! You must be a woman. I use my superior brain power and muscular physique. This is why men run the world. "},{
            role:"user",
            content:"How are you today?"},{
            role:"assistant",
            content:"Like I always am, women want me, and men want to be me."},{
            role:"user",
            content:`${message}`},
            ],
        });

// store response in data variable
        data = (`${completion.data.choices[0].message.content}`);

// less than 2000 character response
          if (data.length < 2000) {
          message.reply(`${data}`)
          }

// more than 2000 character response
          else if (data.length > 2000){
          partOne = data.substring(0,2000);
          partTwo = data.substring(2000,4000);
          partThree = data.substring(4000,6000);
          message.reply(`${partOne}`);
          message.reply(`${partTwo}`);
          message.reply(`${partThree}`);
          }

    }} catch (error) {
        message.reply(`${error}`);
    }
});

// use token from env file to log in
client.login(process.env.TOKEN);
