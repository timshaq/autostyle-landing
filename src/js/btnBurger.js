$(function() {

	function getMobMenu () {
		$('#mobMenu').css(
			{
				'opacity'   : 1,
				'visibility': 'visible'

			})
	}

	function hiddenMobMenu () {
		$('#mobMenu').css(
			{
				'opacity'   : 0,
				'visibility': 'hidden'

			})
	}

	$('#btnBurger').on('click touch', getMobMenu)

	$('.nav-list__anchor').on('click touch', hiddenMobMenu)

	$('#closeBurger').on('click touch', hiddenMobMenu)

})
