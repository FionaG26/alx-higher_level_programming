$(document).ready(function () {
  $('#INPUTbtn_translate').click(function () {
    const languageCode = $('#INPUTlanguage_code').val();
    if (languageCode !== '') {
      $.ajax({
        url: 'https://www.fourtonfish.com/hellosalut/hello/',
        data: { lang: languageCode },
        success: function (response) {
          $('DIV#hello').text(response.hello);
        }
      });
    }
  });

  $('#INPUTlanguage_code').on('keydown', function (event) {
    if (event.which === 13) {
      event.preventDefault();
      $('INPUT#btn_translate').click();
    }
  });
});
