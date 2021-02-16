const { Command } = require('discord.js-commando')
module.exports = 
    class RandomCommand extends Command {
        constructor(client) {
            super (client, {
                name: 'random',
                memberName: 'random',
                aliases: ['pickasonganysong'],
                group: 'music',
                description: 'Plays a random song from a lkist',
                clientPermissions: ['ADMINISTRATOR'],
                userPermissions: ['SPEAK'],
            })
        }
        async run(message, {song}) {
           const items = ["Never gonna give you up", "Crab Rave", "Megalovania", "Roadtrip", "Astronomina", "Duck Song", "Urix - Drive", "Urix - Neon"]
           let item = items[Math.floor(Math.random() * items.length)];
           await this.client.player.play(message, item, true)
        }
    }
