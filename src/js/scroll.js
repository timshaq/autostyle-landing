$(function() {

// scrollbar

var thumb = document.getElementById('scrollThumb')

var thumbHeight = thumb.offsetHeight

var thumbPercent = thumbHeight*100/document.body.clientHeight

var fullHeight = document.body.scrollHeight - document.body.clientHeight



document.body.addEventListener('scroll', function(ev) {
	var position = ev.target.scrollTop
	var percent = position*(100-thumbPercent)/fullHeight
	var maxPercent = 100 - thumbPercent
	//console.log(position)
	//console.log(percent+"%")
	thumb.style.top = percent+"%"
})




//smooth anchor

	var linkNodeList = document.querySelectorAll('a[href*="#"]')
	var linkList = Array.prototype.slice.call(linkNodeList)

	linkList.map(link => {

		var html = document.querySelector('html')
		var body = document.querySelector('body')

		link.addEventListener('click', function(ev) {
			ev.preventDefault()
			var el = document.querySelector(ev.target.getAttribute('href'))
			el.scrollIntoView({block: "start", behavior: "smooth"})
		})

	})


})