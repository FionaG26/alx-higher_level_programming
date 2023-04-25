#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: ./4-starwars_count.js API_URL');
  process.exit(1);
}

console.log('Querying API, please wait...');

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }
  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    process.exit(1);
  }
  const films = JSON.parse(body).results;
  const characterUrl = 'https://swapi-api.alx-tools.com/api/people/18/';
  let count = 0;
  for (const film of films) {
    const characters = film.characters;
    if (characters.includes(characterUrl)) {
      count++;
    }
  }
  console.log(count);
});
