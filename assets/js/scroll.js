
$('a[href*="#"]').click(function () {
  // console.log('CLICKED')

	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 500); 
	return false;

});
