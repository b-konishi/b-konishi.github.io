
const defRatio = 0.8;

$(function () {
  //const defHeight = $('header').height();
  //defRatio = Math.floor($('#header-toc').height() / defHeight * 10) / 10;

  console.log('defRatio: ', defRatio);

  changeFont();
});

$(window).resize(function() {
  console.log('Resized');

  
  console.log(parseInt($('header').css('font-size')))
  console.log($('#header-toc').height() / $('header').height(), defRatio)

  changeFont();

});

function changeFont () {
  console.log('Change font')

  var convergence = false;
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




