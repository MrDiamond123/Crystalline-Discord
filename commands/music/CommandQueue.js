const { Command } = require('discord.js-commando')
const { Pagination } = require('discord-paginationembed')
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
           const queue = await this.client.player.getQueue(message)
           const FieldsEmbed = new Pagination.FieldsEmbed();
   
           FieldsEmbed.embed
               .setColor(data.config.embed.color)
               .addField(`Currently Playing: `, `[${queue.tracks[0].title}](${queue.tracks[0].url})\n*Requested by ${queue.tracks[0].requestedBy}*\n`);
           
           FieldsEmbed.setArray(queue.tracks[1] ? queue.tracks.slice(1, queue.tracks.length) : [])
               .setAuthorizedUsers([message.author.id])
               .setChannel(message.channel)
               .setElementsPerPage(5)
               .setPageIndicator(true)
               .formatField("Queue", (track) => `${++i}. [${track.title}](${track.url})\n*Requested by ${track.requestedBy}*\n`);
    
           FieldsEmbed.build();
        }
    }
