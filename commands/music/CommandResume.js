const { Command } = require('discord.js-commando')
module.exports = 
    class ResumeCommand extends Command {
        constructor(client) {
            super (client, {
                name: 'resume',
                memberName: 'resume',
                aliases: ['musicgoboomboomagain'],
                group: 'music',
                description: 'it play music again',
                clientPermissions: ['ADMINISTRATOR'],
                userPermissions: ['SPEAK'],
            })
        }
        async run(message, {song}) {
           await this.client.player.resume(message)
        }
    }
