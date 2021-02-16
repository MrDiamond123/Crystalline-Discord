const { Command } = require('discord.js-commando')
module.exports = 
    class QueueCommand extends Command {
        constructor(client) {
            super (client, {
                name: 'queue',
                memberName: 'queue',
                aliases: ['whatmusicisgoingboomboom'],
                group: 'music',
                description: 'it say the music',
                clientPermissions: ['ADMINISTRATOR'],
                userPermissions: ['SPEAK'],
            })
        }
        async run(message, {song}) {
           await this.client.player.getQueue(message)
        }
    }
