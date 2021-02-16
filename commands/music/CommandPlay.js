const { Command } = require('discord.js-commando')
module.exports = 
    class PlayCommand extends Command {
        constructor(client) {
            super (client, {
                name: 'play',
                memberName: 'play',
                aliases: ['themusicgoboomboom'],
                group: 'music',
                description: 'it play music',
                clientPermissions: ['ADMINISTRATOR'],
                userPermissions: ['SPEAK'],
                args: [
                    {
                        key: 'song',
                        prompt: 'What song would you like to play?',
                        type: 'string',
default: 'Never gonna give you up'
                    }
                ]
            })
        }
        async run(play, {song}) {
           await this.client.player.play(message, song, true)
        }
    }
