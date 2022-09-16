

$(function () {
  changeFooterFont();
});

$('.font-size').on('change', function() {
  console.log('Range was changed');
  console.log($('#header-mobile').outerHeight());

  $('main').css('font-size', '1rem');

  const ratio = $(this).val();
  const defSize = parseInt($('main').css('font-size'));

  console.log(defSize*(1+ratio/100));
  $('main').css('font-size', defSize*(1+ratio/100)+'px');
  $('.fixed-characters').css('height', defSize*(1+ratio/100)+'px');

  $('main').css('padding-top', $('#header-mobile').outerHeight()*1.1+'px');
});

$(window).resize(function() {
  changeFooterFont();
});

function changeFooterFont () {
  console.log('Resized footer-font');

  $('footer').css('font-size', '1rem')
  let size = parseInt($('footer').css('font-size'));

  while (true) {
    console.log(size);

    let listWidth = 0;
    $('footer li').each(function() {
      listWidth += $(this).width();
    });
    
    if (size <= 10) {
      break;
    }
    
    if ($('footer').width() < listWidth) {
      $('footer').css('font-size', --size+'px');
    } else {
      $('footer').css('font-size', size+'px');
      break;
    }
  }
  $('footer').css('height', 3*size+'px');

}


