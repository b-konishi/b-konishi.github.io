
var lang = getParam('lang');
if (lang == null) {
  lang = 'en';
}

$(function() {
  // console.log('INITIALIZATION')

  changeLanguage(lang);

  $(`#${lang}-btn`).attr('href', null)

});


$('#en-btn').click(function () {
  console.log('ENGLISH')
  lang = 'en';

  // URLのlang-paramを削除した後更新
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

  // URLのlang-paramをjaにしておく
  var url = new URL(window.location.href);
  var params = url.searchParams;
  params.delete('lang');
  params.append('lang', 'ja');
  console.log(url.toString())
  history.replaceState('', '', url.toString());
  //location.reload();


  $(`#ja-btn`).attr('href', null);
  $(`#ja-btn`).siblings().attr('href', '');

  return false;
});


function changeLanguage (lang) {
  console.log(`changeLanguage: ${lang}`)
  if (lang == 'en') {
    return;
  }

  // 対応するlang-attrを持つ要素を全て変更
  $(`[${lang}]`).each(function () {
    $(this).html($(this).attr(lang));
  });
}

