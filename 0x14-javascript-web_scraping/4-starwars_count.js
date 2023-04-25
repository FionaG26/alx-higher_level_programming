#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18';

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  for (const film of films) {
    if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
      count++;
    }
  }

  console.log(count);
});
