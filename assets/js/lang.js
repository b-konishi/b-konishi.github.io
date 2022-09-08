
$(function() {
  // console.log('INITIALIZATION')

  console.log(getParam('lang'))

  var lang = getParam('lang');
  if (lang == null) {
    lang = 'en';
  }
  changeLanguage(lang);

  $(`#${lang}-btn`).attr('href', null)

});


$('#en-btn').click(function () {
  console.log('ENGLISH')

  lang = 'en';

  var url = new URL(window.location.href);
  var params = url.searchParams;
  params.delete('lang');
  console.log(url.toString())
  history.replaceState('', '', url.toString());
  location.reload();

  return false;
});

$('#ja-btn').click(function () {
  console.log('JAPANESE')

  lang = 'ja';
  changeLanguage('ja');

  var url = new URL(window.location.href);
  var params = url.searchParams;
  params.delete('lang');
  params.append('lang', 'ja');
  console.log(url.toString())
  history.replaceState('', '', url.toString());


  $(`#ja-btn`).attr('href', null);
  $(`#ja-btn`).siblings().attr('href', '');

  return false;
});


function changeLanguage (lang) {
  console.log(`changeLanguage: ${lang}`)
  if (lang == 'en') {
    return;
  }

  $(`[${lang}]`).each(function () {
    console.log($(this).get(0))
    $(this).html($(this).attr(lang));
  });
}

