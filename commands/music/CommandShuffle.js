const { Command } = require('discord.js-commando')
module.exports = 
    class ShuffleCommand extends Command {
        constructor(client) {
            super (client, {
                name: 'shuffle',
                memberName: 'shuffle',
                aliases: ['scrambledeggs'],
                group: 'music',
                description: 'it shuffle music',
                clientPermissions: ['ADMINISTRATOR'],
                userPermissions: ['SPEAK'],
            })
        }
        async run(message, {song}) {
           await this.client.player.shuffle(message)
        }
    }
