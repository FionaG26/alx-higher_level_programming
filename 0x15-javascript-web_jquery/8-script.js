$(document).ready(function () {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
    $.each(data.results, function (i, movie) {
      $('<li>').text(movie.title).appendTo('ul#list_movies');
    });
  });
});
