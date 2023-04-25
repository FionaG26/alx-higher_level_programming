#!/usr/bin/node
const request = require('request');
const id = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${id}/`;

request(url, function (error, response, body) {
if (error) {
console.error(error);
}
const title = JSON.parse(body).title;
console.log(title);
});
