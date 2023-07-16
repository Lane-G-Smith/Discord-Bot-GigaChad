<h1 align="center">Vanilla-JS-Discord-Bot-GPT-3.5-Turbo</h1>
<table align="center">
  <tr>
    <td align="center" height="108" width="108">
        <img     src="https://camo.githubusercontent.com/2993f7180d5cc3231060f66cfa1f0f65a1d09c0efd68d08d0190902ba9200d81/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3335333635352f646973636f72642d69636f6e2e737667"
        width="48"
        height="48"
        />
        <br /><strong>Discord.js</strong>
    </td>
    <td align="center" height="108">
      <p align="center">A simple vanilla javascript Discord bot for interacting with the new language model GPT-3.5-Turbo by OpenAI. This bot can serve a variety of different functions by changing three simple lines of it's internal prompt. No coding skills required.
      </p>
     </td>
   </tr>
 </table>
<table align="start">
  <tr>
    <td align="center">
    <p align="center">Give personality to a virtual friend in your gaming server
      </p>
        <img src="https://photos.smugmug.com/photos/i-m2ZrXcL/0/fd98caa8/M/i-m2ZrXcL-M.png"
        height="56"
        />
      </td>
   </tr>
 </table>
 <table align="start">
  <tr>
    <td align="center">
    <p align="center">Get answers to random trivia from your pc or phone (Discord Mobile)
      </p>
        <img src="https://photos.smugmug.com/photos/i-FzDPz2B/0/d1a6a56b/L/i-FzDPz2B-L.png"
        height="56"
        />
      </td>
   </tr>
 </table>
 <table align="start">
  <tr>
    <td align="center">
    <p align="center">Create your very own friendly peronal assistant
      </p>
        <img src="https://photos.smugmug.com/photos/i-bDkZn6x/0/47284382/S/i-bDkZn6x-S.png"
        height="56"
        />
      </td>
   </tr>
 </table>

# GPT-3.5-Turbo bot installation and deloyment Instructions

# !!This bot does NOT respond to DMs, it must be in a server with you!!

### Get the bot 'shell' from Discord. It's free, and it takes 5 minutes
```sh
https://discord.com/developers/applications
```
### Go to OpenAI and open an account
```sh
https://platform.openai.com/signup
```
### Install node.js
```sh
https://nodejs.org/en/
```
### Install git
```sh
https://git-scm.com/downloads
```
### Create a new folder and navigate to it in terminal to set up git
```sh
git init
```
### Navigate to new git folder in terminal and clone this repository
```sh
git clone https://github.com/Lane-G-Smith/Vanilla-JS-Discord-Bot-GPT-3.5-Turbo.git
```
### Navigate to Vanilla-JS-DiscordBotGPT-3.5-Turbo folder and install dependencies
```sh
npm install
```
### Rename example_.env to .env
### Place your secret Discord bot token from the first step into the .env file
```sh
TOKEN=your_unique_Discord_bot_token_here
```
### Place your secret OpenAI API key from the second step into the .env file
```sh
OPENAI_API_KEY=your_unique_OpenAI_API_key_here
```
### Modify three lines in the code (40,41,42, self explanatory when you look at it) to personalize functionality
```sh
The characteristics of your AI and how to answer questions, one example question, one example answer
```
### To host the bot locally, open project in terminal and run node
```sh
node index.js
```
### To host the bot locally and keep it running in the background indefinitely, install PM2
```sh
npm install pm2 -g
```
### run your bot locally using pm2 https://pm2.keymetrics.io/
```sh
pm2 start index.js
```
### congratulations, your bot should now be live & confirmation should be logged in the terminal. Use your personal link from the Discord developer portal to invite your bot to a Discord server
```sh
https://discord.com/developers/applications
```
