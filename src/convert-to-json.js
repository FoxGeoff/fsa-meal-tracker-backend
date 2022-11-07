//node script to load data into Db
// run "node src/conver-to-json.js"
const fs = require('fs');
const recipes = require('./fake-data');
const  FILE_NAME = 'recipe.json';

fs.writeFileSync(
    FILE_NAME,
    JSON.stringify(recipes),
    'utf-8',
);

console.log('Done writing file seed data!');