"use strict";

import btnBurger from './btnBurger.js';
import mask from './mask.js';
import modals from './modals.js';
import preloader from './preloader.js';
import scroll from './scroll.js';
import slider from './slider.js';
import webp from './webp.js';

document.addEventListener("DOMContentLoaded", function () {

	preloader();
	btnBurger();
	mask();
	modals();
	scroll();
	slider();
	webp();

});