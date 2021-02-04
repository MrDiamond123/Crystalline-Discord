const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '?',
	owner: '125411691516133376',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['moderation', 'Moderation Stuff'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);

});

client.on('error', console.error);
client.login(process.env.TOKEN)