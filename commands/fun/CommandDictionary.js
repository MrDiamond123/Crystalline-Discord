const { Command } = require('discord.js-commando')
const { MessageEmbed, Message } = require('discord.js')
import { CollegiateDictionary, WordNotFoundError } from 'mw-dict'


module.exports = class CommandDictionary extends Command {
    constructor(client) {
        super (client, {
            name: 'dictionary',
            aliases: ['dict', 'define', 'wtfword'],
            group: 'fun',
            memberName: 'dictionary',
            description: 'Looks up a word from the Dictionary',
            args: [ {
                key: 'word',
                prompt: 'What word would you like to lookup?',
                type: 'string',
                default: 'Hello'
            }]
        })
    }
    async run(message, { word }) {
        const dict = new CollegiateDictionary(process.env.MW_KEY)
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        dict.lookup(word)
            .then(result => {
                const embed = new MessageEmbed()
                .setColor('#EFFF00')
                .setTitle(result.word)
                .addFields(
                    { name: 'Label', value: `${result.functional_label}` }
                );
            })
            .catch(error => {
                if (error instanceof WordNotFoundError) {
                    const embed = new MessageEmbed()
                                      .setColor('#FFFF00')
                                      .setTitle('Unknown Word!')
                                      .setDescription(trim(`Try one of these words instead: ${error.suggestion}`, 1024))
                }
            })



        message.embed(embed);
    }
}