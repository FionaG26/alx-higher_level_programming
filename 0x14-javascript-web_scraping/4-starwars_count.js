#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18; // ID of Wedge Antilles character
request(apiUrl, function(error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const films = JSON.parse(body).results;
  const count = films.reduce((acc, film) => {
    const characters = film.characters;
    if (characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  console.log(count);
});
