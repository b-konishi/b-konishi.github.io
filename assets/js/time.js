
$(function() {

  const MONTHS = ['Jan.','Feb.','Mar.','Apr.','May','June','July','Aug.','Sep.','Oct.','Nov.','Dec.'];

  const time = new Date(document.lastModified);
  console.log(time)

  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  console.log(year, MONTHS[month], date)

  if (lang == 'en') {
    $('#last-modified').text(`${MONTHS[month]} ${date}, ${year}`);
  } else if (lang == 'ja') {
    $('#last-modified').text(`${year}年${month+1}月${date}日`);
  }
});
