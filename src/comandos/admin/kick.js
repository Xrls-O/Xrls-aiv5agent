module.exports = {
    name: 'kick',
    description: 'Expulsa a un usuario del servidor',
    async execute(interaction) {
        const member = interaction.options.getMember('target');
        if (!member) return interaction.reply('No se pudo encontrar ese miembro.');

        try {
            await member.kick();
            await interaction.reply(`${member.user.tag} ha sido expulsado.`);
        } catch (error) {
            console.error(error);
            await interaction.reply('Hubo un error al intentar expulsar al miembro.');
        }
    }
};
