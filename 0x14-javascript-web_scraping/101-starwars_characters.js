#!/usr/bin/node

const request = require('request');

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}/`;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const charactersUrls = JSON.parse(body).characters;
  const charactersNames = [];

  let completedRequests = 0;

  for (const characterUrl of charactersUrls) {
    request(characterUrl, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      }

      charactersNames.push(JSON.parse(body).name);

      completedRequests++;

      if (completedRequests === charactersUrls.length) {
        for (const characterName of charactersNames) {
          console.log(characterName);
        }
      }
    });
  }
});
