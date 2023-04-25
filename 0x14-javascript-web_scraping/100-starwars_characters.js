#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const characters = JSON.parse(body).characters;

  for (const characterUrl of characters) {
    request(characterUrl, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      }

      const character = JSON.parse(body);
      console.log(character.name);
    });
  }
});
