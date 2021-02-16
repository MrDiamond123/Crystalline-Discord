const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '^',
	owner: '125411691516133376',
});

const { Player } = require("discord-player");
// Create a new Player (you don't need any API Key)
const player = new Player(client);
// To easily access the player
client.player = player;

player.on('trackStart', (message, track) => message.channel.send(`Now playing ${track.title}...`))

// Send a message when something is added to the queue
.on('trackAdd', (message, queue, track) => message.channel.send(`${track.title} has been added to the queue!`))
.on('playlistAdd', (message, queue, playlist) => message.channel.send(`${playlist.title} has been added to the queue (${playlist.tracks.length} songs)!`))

// Send messages to format search results
.on('searchResults', (message, query, tracks) => {

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Here are your search results for ${query}!`)
    .setDescription(tracks.map((t, i) => `${i}. ${t.title}`))
    .setFooter('Send the number of the song you want to play!')
    message.channel.send(embed);

})
.on('searchInvalidResponse', (message, query, tracks, content, collector) => {

    if (content === 'cancel') {
        collector.stop()
        return message.channel.send('Search cancelled!')
    }

    message.channel.send(`You must send a valid number between 1 and ${tracks.length}!`)

})
.on('searchCancel', (message, query, tracks) => message.channel.send('You did not provide a valid response... Please send the command again!'))
.on('noResults', (message, query) => message.channel.send(`No results found on YouTube for ${query}!`))

// Send a message when the music is stopped
.on('queueEnd', (message, queue) => message.channel.send('Music stopped as there is no more music in the queue!'))
.on('channelEmpty', (message, queue) => message.channel.send('Music stopped as there is no more member in the voice channel!'))
.on('botDisconnect', (message) => message.channel.send('Music stopped as I have been disconnected from the channel!'))

// Error handling
.on('error', (error, message) => {
    switch(error){
        case 'NotPlaying':
            message.channel.send('There is no music being played on this server!')
            break;
        case 'NotConnected':
            message.channel.send('You are not connected in any voice channel!')
            break;
        case 'UnableToJoin':
            message.channel.send('I am not able to join your voice channel, please check my permissions!')
            break;
        case 'LiveVideo':
            message.channel.send('YouTube lives are not supported!')
            break;
        default:
            message.channel.send(`Something went wrong... Error: ${error}`)
    }
})

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['moderation', 'Moderation Stuff'],
		['fun', 'Fun Stuff']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);

});

client.on('error', console.error);
client.login(process.env.TOKEN)
