const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'meme',
    description: 'Envía un meme aleatorio',
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setTitle('Meme del Día')
            .setImage('URL_DEL_MEME')
            .setColor(0x00AE86);
        
        await interaction.reply({ embeds: [embed] });
    }
};
