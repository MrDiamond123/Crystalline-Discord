const { Command } = require('discord.js-commando')
module.exports = 
    class SkipCommand extends Command {
        constructor(client) {
            super (client, {
                name: 'skip',
                memberName: 'skip',
                aliases: ['makethissonggonoboomboom'],
                group: 'music',
                description: 'it not play this music',
                clientPermissions: ['ADMINISTRATOR'],
                userPermissions: ['SPEAK'],
            })
        }
        async run(message, {song}) {
           await this.client.player.skip(message)
        }
    }
