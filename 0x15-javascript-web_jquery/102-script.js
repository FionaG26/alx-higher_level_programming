$(document).ready(() => {
  const URL = 'https://www.fourtonfish.com/hellosalut/hello/';

  $('#btn_translate').click(() => {
    const langCode = $('#language_code').val();
    $.get(`${URL}?lang=${langCode}`, function (data) {
      $('#hello').text(data.hello);
    });
  });
});
