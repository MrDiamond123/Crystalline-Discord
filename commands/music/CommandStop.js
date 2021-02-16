const { Command } = require('discord.js-commando')
module.exports = 
    class StopCommand extends Command {
        constructor(client) {
            super (client, {
                name: 'stop',
                memberName: 'stop',
                aliases: ['nomoreboomboom'],
                group: 'music',
                description: 'it not play music',
                clientPermissions: ['ADMINISTRATOR'],
                userPermissions: ['SPEAK'],
            })
        }
        async run(message, {song}) {
           await this.client.player.stop(message)
        }
    }
