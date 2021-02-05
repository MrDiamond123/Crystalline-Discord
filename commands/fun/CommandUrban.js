const { Command } = require('discord.js-commando')
const fetch = require('node-fetch')

module.exports = class CommandUrban extends Command {
    constructor(client) {
        super (client, {
            name: 'urban',
            aliases: ['urbandict'],
            group: 'fun',
            memberName: 'urban',
            description: 'Looks up a word from the Urban Dictionary',
            args: [ {
                key: 'word',
                prompt: 'What word would you like to lookup?',
                type: 'string',
                default: 'Hello World'
            }]
        })
    }
    run(message, { word }) {
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const { list } = fetch(`https://api.urbandictionary.com/v0/define?${word}`).then(response => response.json());

        console.log(list)
        if (!list.length) {
            return message.channel.send(`No results found for **${word}**!`);
        }

        const [answer] = list;

        const embed = new MessageEmbed()
            .setColor('#EFFF00')
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields(
                { name: 'Definition', value: trim(answer.definition, 1024) },
                { name: 'Example', value: trim(answer.example, 1024) },
                { name: 'Rating', value: `${answer.thumbs_up} 👍 | ${answer.thumbs_down} 👎` }
            );

        message.embed(embed);
    }
}