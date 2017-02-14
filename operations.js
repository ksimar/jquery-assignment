var selector, options, makeActive

selector = '.nav.navbar-nav.navbar-right li'

options = document.querySelectorAll(selector)

function makeActive() {
	for(var i=0; i<options.length; i++) {
		options[i].classList.remove('active')
	}
  this.classList.add('active')
}

function init() {
	for(var i=0; i<options.length; i++) {
	  options[i].addEventListener("mousedown",makeActive)
    }
}

window.onload = init