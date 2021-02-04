const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () =>{
    console.log("ready")
})

client.on('message', (message) => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
})

client.login(process.env.TOKEN)