module.exports = {
    name: 'ban',
    description: 'Banea a un usuario del servidor',
    async execute(interaction) {
        const member = interaction.options.getMember('target');
        if (!member) return interaction.reply('No se pudo encontrar ese miembro.');

        try {
            await member.ban();
            await interaction.reply(`${member.user.tag} ha sido baneado.`);
        } catch (error) {
            console.error(error);
            await interaction.reply('Hubo un error al intentar banear al miembro.');
        }
    }
};
