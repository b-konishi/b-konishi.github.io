

$(function() {
  // console.log('INITIALIZATION')

  // Awardsにリンクする場合にインデックスを取得する
  $('a[href="#awards"]').each(function () {
    const awardName = $(this).children('span').attr('class');
    const award = $(`#awards-list > #award-${awardName}`)
    const awardIdx = award.parent().children().index(award) + 1;
    $(this).children('span').text(awardIdx);
    // console.log(awardName, awardIdx);
  });

});


