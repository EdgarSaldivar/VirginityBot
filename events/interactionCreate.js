module.exports = {
	name: 'interactionCreate',
    once: false,
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};