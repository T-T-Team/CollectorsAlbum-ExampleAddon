const filesystem = require('fs');
const location = `${__dirname}/cards`;

const files = filesystem.readdirSync(location);
for (const file of files) {
    const content = require(`${location}/${file}`);
    const newContent = {
        enabled: false,
        ...content
    };
    filesystem.writeFileSync(`${location}/${file}`, JSON.stringify(newContent, null, 2));
}