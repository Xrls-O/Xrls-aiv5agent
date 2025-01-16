const fs = require('fs');

module.exports = (client) => {
    client.commands = new Map();

    const loadCommands = (dir) => {
        const commandFiles = fs.readdirSync(`./src/comandos/${dir}`).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../comandos/${dir}/${file}`);
            client.commands.set(command.name, command);
        }
    };

    ['generales', 'admin', 'diversión'].forEach(dir => loadCommands(dir));
};
