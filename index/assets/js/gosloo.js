$(window).load(function() {
	'use strict';

	/******************************************************************************
	 * ANIMATION
	 ******************************************************************************/
	$('[data-animation]').each(function() {
		var el = $(this);
		$(this).hover(function() {
			$(this).addClass('animated');
			$(this).addClass(el.attr('data-animation'));
		}, function() {
			$(this).removeClass('animated');
			$(this).removeClass(el.attr('data-animation'));
		});
	});

	/******************************************************************************
	 * ISOTOPE
	 ******************************************************************************/
	var isotope_works = $('.portfolio-items');
	isotope_works.isotope({});

	$('.portfolio-filter a').click(function() {
		$(this).parent().parent().find('li').removeClass('selected');
		$(this).parent().addClass('selected');

  		var selector = $(this).attr('data-filter');
  		isotope_works.isotope({ filter: selector });
  		return false;
	});	

	/******************************************************************************
	 * REVOLUTION SLIDER
	 ******************************************************************************/
	$('.rs-banner').revolution({
		delay: 5000,
		startwidth: 1170,
		startheight: 650,
		hideThumbs: 10,
		fullWidth: "on",
		forceFullWidth:"on"
	});	

	/******************************************************************************
	 * SMOOTH SCROLL
	 ******************************************************************************/	
	 $('.footer-scroll-top').smoothScroll({
	 	scrollTarget: '#wrapper'
	 });
});