const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'json', 'database.json');

const readDatabase = () => {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, JSON.stringify([]));
    }
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data);
};

const writeDatabase = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

module.exports = {
    getUsers: () => {
        return readDatabase();
    },
    addUser: (user) => {
        const users = readDatabase();
        users.push(user);
        writeDatabase(users);
    },
    removeUser: (userId) => {
        let users = readDatabase();
        users = users.filter(user => user.id !== userId);
        writeDatabase(users);
    }
};
