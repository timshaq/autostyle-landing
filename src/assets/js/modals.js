export default function () {

	function disableScroll () {
		$('body').css('overflow-y', 'hidden')
	}

	function enableScroll () {
		$('body').css({'overflow-y': 'auto'})
	}

	function getModal (name) {
		$(name).css(
			{
				"opacity"   : 1,
				'visibility': 'visible',
				'overflow': 'auto'
			})
	}

	function hiddenModal (name) {
		$(name).css(
			{
				"opacity"   : 0,
				'visibility': 'hidden',
				'z-index'   : '-1'
			})
	}

	function addZIndex (name) {
		$(name).css('z-index','102')
	}


	// Call Container

	$('.btn-call').on('click touch', function() {
		disableScroll()
		hiddenModal('#helper')
		addZIndex('#form1')
		getModal('#form1')
	})

	$('#closeForm').on('click touch', function() {
		enableScroll()
		hiddenModal('#form1')
	})

	$('#form1').on('click touch', function(ev) {
		if(ev.target == this) {
			enableScroll()
			hiddenModal('#form1')
		}
	})

	$('#form1').on('submit', function(ev) {
		ev.preventDefault()
		var sendBody = $('#form1 form').serialize()

		console.log('sendBody')
		console.log( sendBody )

		$('#form1 button').text('Отправка...')
		var pointList = ['.','..','...']
		var i = 2
		function sendAnimate ()  {
			console.log('sendAnimate')
			$('#form1 button').text(`Отправка${pointList[i]}`)
			switch(i) {
				case 0:
				case 1:
						i++
						break;
				case 2:
						i=0
						break;
			}
		}
		var timer = setInterval(sendAnimate,100)

		$('#form1 button').attr('disabled','disabled')
		$('#form1 button').css('cursor','not-allowed')

		function getSendResult (res) {
			clearTimeout(timer)
			console.log(res)
			if (res!=='ok') {

				$('#form1 button').text('Отправить снова')

				$('#form1 button').css('transform','translate(0,0)')

				$('#form1 .error-msg').css(
					{
						'opacity'   : 1,
						'visibility': 'visible',
						'transform' : 'translate(0,0)'
					})

				var errorTextList = ['через 5 сек.','через 4 сек.','через 3 сек.','через 2 сек.','через 1 сек.','снова.']
				var errorCounter = 0
				function errorAnimate() {
					$('#form1 .error-msg').text(`Ошибка отправки. Попробуйте\u00A0${errorTextList[errorCounter]}`)
					errorCounter++
				}

				var timerError = setInterval(errorAnimate,1000)

				setTimeout(function(){
					clearTimeout(timerError)
					$('#form1 button').removeAttr('disabled')
					$('#form1 button').css('cursor','pointer')
					
				}, 6000)

			} else {
				$('.modal__title').text('Заявка отправлена')
				$('.modal__title').css('margin','0 0 20px 0')
				$('#form1 input').css(
				{
					'opacity': 0,
					'visibility': 'hidden',
					'position': 'absolute'
				})
				$('#form1 label').css(
				{
					'opacity': 0,
					'visibility': 'hidden',
					'position': 'absolute'
				})
				$('#form1 button').css(
				{
					'opacity': 0,
					'visibility': 'hidden',
					'position': 'absolute'
				})
				$('#form1 .error-msg').css(
				{
					'opacity': 0,
					'visibility': 'hidden',
					'transform' : 'translate(0,-35px)'
				})
				$('#form1 form').css(
				{
					'height': 'fit-content'
				})
			}
		}

	    fetch("mail.php", { 
	        method: "POST",
	        body: sendBody,   
	        headers:{"content-type": "application/x-www-form-urlencoded"} 
	      })
	    .then(res => {return res.text()})
	    .then(text => {getSendResult(text)})
	})


	// Help container

	$('.helper').on('click touch', function(ev) {
		var nameService = ev.target.textContent
		var headliner = document.getElementById('nameService')
		disableScroll()
		addZIndex('#helper')
		getModal('#helper')
		headliner.textContent = nameService
	})

	$('#closeHelper').on('click touch', function() {
		enableScroll()
		hiddenModal('#helper')
	})

	$('#helper').on('click touch', function(ev) {
		if(ev.target == this) {
			enableScroll()
			hiddenModal('#helper')
		}
	})

}
