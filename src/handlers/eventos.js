const fs = require('fs');

module.exports = (client) => {
    const loadEvents = (dir) => {
        const eventFiles = fs.readdirSync(`./src/eventos/${dir}`).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const eventName = file.split('.')[0];
            const event = require(`../eventos/${dir}/${file}`);
            client.on(eventName, event.bind(null, client));
        }
    };

    ['client', 'guild', 'message'].forEach(dir => loadEvents(dir));
};
