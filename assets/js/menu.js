
$('#header2 a.toc').click(function () {
  console.log('Hidden');
  $('#h-menu_checkbox').removeAttr("checked").prop("checked", false).change();
});

