module.exports = {
    name: 'joke',
    description: 'Cuenta un chiste',
    async execute(interaction) {
        const chistes = [
            '¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.',
            '¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.'
        ];
        const chiste = chistes[Math.floor(Math.random() * chistes.length)];
        await interaction.reply(chiste);
    },
};
