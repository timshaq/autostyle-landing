$(function() {



$('#slider').slick({
	dots: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	autoplay: false,
	autoplaySpeed: 3000,
	draggable: true,
	fade: true,
	cssEase: 'linear'
})

$('#prev').on('click', function() {
	$('#slider').slick('slickPrev')
})
$('#next').on('click', function() {
	$('#slider').slick('slickNext')
})



})
