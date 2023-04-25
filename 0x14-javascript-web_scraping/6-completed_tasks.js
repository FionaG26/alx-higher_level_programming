#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const tasks = JSON.parse(body);
    const completedTasks = {};
    tasks.forEach((task) => {
      if (task.completed) {
        const userId = task.userId;
        if (!completedTasks[userId]) {
          completedTasks[userId] = 1;
        } else {
          completedTasks[userId]++;
        }
      }
    });
    console.log(completedTasks);
  }
});
