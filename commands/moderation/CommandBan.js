const { Command } = require('discord.js-commando')
module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            aliases: ['bye-bye'],
            group: 'moderation',
            memberName: 'ban',
            description: 'Bans people',
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['BAN_MEMBERS'],
            guildOnly: true,
            args: [
                {
                    key: 'member',
                    prompt: 'Who would you like to ban?',
                    type: 'member',
                },
                {
                    key: 'reason',
                    prompt: 'What is the reason for the ban?',
                    type: 'string',
                    default: 'The ban hammer has striked!'
                }
            ]
        })
    }
    run(message, { member, reason }) {
       member.ban({
           reason: reason
       })
       .then(() => {
           message.reply(`Successfully banned ${member.tag} for '${reason}'`)
       })
       .catch(err => {
           message.reply('uhhh i can\'t kick that person...')
       })
    }
}