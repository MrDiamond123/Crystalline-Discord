const { Command } = require('discord.js-commando')
module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'moderation',
            memberName: 'kick',
            description: 'Kicks people',
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['KICK_MEMBERS'],
            guildOnly: true,
            args: [
                {
                    key: 'member',
                    prompt: 'Who would you like to kick?',
                    type: 'member',
                },
                {
                    key: 'reason',
                    prompt: 'What is the reason for the kick?',
                    type: 'string',
                    default: 'Kicked!'
                }
            ]
        })
    }
    run(message, { member, message }) {
       member.kick({
           reason: reason
       })
       .then(() => {
           message.reply(`Successfully kicked ${member.tag} for '${reason}`)
       })
       .catch(err => {
           message.reply('uhhh i can\'t kick that person...')
       })
    }
}