
$('a[href*="#"]').click(function () {
  // console.log('CLICKED')

	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos-$('header').height()*1.2}, 500); 
	return false;

});
