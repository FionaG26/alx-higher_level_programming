#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18';
let count = 0;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const films = JSON.parse(body).results;
  for (const film of films) {
    const characters = film.characters;
    if (characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
      count++;
    }
  }
  console.log(count);
});
