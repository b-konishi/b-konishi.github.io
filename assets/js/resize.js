

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

    let listWidth = 0;
    $('footer li').each(function() {
      listWidth += $(this).width();
    });
    
    if (size <= 1) {
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




/* unused */
const defRatio = 0.8;
function changeFont2 () {
  console.log('Change font')

  var size = parseInt($('header').css('font-size'));

  if ($('header').css('display') == 'none') {
    $('header').css('font-size', '1px');
    if ($('#header-toc').height() / $('header').height() < 1) {
      $('header').show();
    }
  }

  while (true) {
    var ratio = $('#header-toc').height() / $('header').height();

    if ((ratio > defRatio && ratio < 1) || isNaN(ratio)) {
      console.log('Break')
      break;
    }
    if (size <= 1) {
      console.log('Hidden');
      $('header').hide();
      break;
    }

    console.log('Ratio: ', ratio)
    console.log('Size: ', size)

    if (ratio > 1) {
      console.log('mode1')
      size--;
      $('header').css('font-size', size+'px');

      ratio = $('#header-toc').height() / $('header').height();
      if (ratio < defRatio) {
        break;
      }

    } else if (ratio < defRatio) {
      console.log('mode2')
      size++;
      $('header').css('font-size', size+'px');

      ratio = $('#header-toc').height() / $('header').height();
      if (ratio > 1) {
        size--;
        break;
      }

    } else {
      console.log('Break')
      break;
    }
  }

  $('header').css('font-size', size+'px');
}




