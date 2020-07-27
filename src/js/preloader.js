$(function() {

	var detailBg = document.createElement('img');
	var webpTest = document.querySelector('body').classList.contains('webp');
	(webpTest) ? detailBg.src = "./img/bg1.webp" : detailBg.src = "./img/bg1.png";
	var onloadBg = false;
	detailBg.onload = detailBg.onerror = () => {onloadBg=true; getContent()}

	var img = document.images;
	var imgTotalCount = img.length;
	var imgLoadedCount = 0;
	var percent = 0;
	for(var i = 0; i < imgTotalCount; i++) {
		var imgClone = new Image();
		imgClone.onload = imgLoaded;
		imgClone.onerror = imgLoaded;
		imgClone.src = img[i].src;
	}

	function imgLoaded() {
		imgLoadedCount++;
		percent = (((90 / imgTotalCount) * imgLoadedCount) << 0)
		document.getElementById('slideCar').style.width = percent+'%'
		getContent()
	}

	function getContent() {
		if ((imgTotalCount == imgLoadedCount) && (onloadBg)) {
			percent = 100
			document.getElementById('slideCar').style.width = percent+'%'
			setTimeout(function() {
				var preloader = document.getElementById('preloader');
				if (!preloader.classList.contains('done')) {
					preloader.classList.add('done')
				}
			},1000)
		}

	}


})