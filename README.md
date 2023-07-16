<h1 align="center">Discord-Bot-Chad-GPT-3.5-Turbo-0613 NSFW</h1>
<table align="center">
  <tr>
    <td align="center" height="108" width="108">
        <img     src="https://avatars.githubusercontent.com/u/102753505?s=200&v=4"
        width="60"
        height="60"
        />
        <br /><strong>Discord.js</strong>
    </td>
    <td align="center" height="108">
      <p align="center">A simple vanilla javascript Discord bot that takes on the persona of the infamous Chad internet meme.
      </p>
     </td>
   </tr>
 </table>

# Installation and deployment instructions

## !!This bot does NOT respond to DMs, it must be in a server with you!!

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
git clone https://github.com/Lane-G-Smith/discord-bot-chad.git
```
### Navigate to discord-bot-chad folder and install dependencies
```sh
npm install
```
### Rename example.env to .env
### Place your secret Discord bot token from the first step into the .env file
```sh
TOKEN=your_unique_Discord_bot_token_here
```
### Place your secret OpenAI API key from the second step into the .env file
```sh
OPENAI_API_KEY=your_unique_OpenAI_API_key_here
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
