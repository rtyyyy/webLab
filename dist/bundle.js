/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n  ScrollTrigger.batch(\"section > div\", {\r\n    interval: 1,\r\n    batchMax: 4,\r\n    onEnterBack: (batch) =>\r\n    gsap.to(batch, { autoAlpha: 1, stagger: 0.2, overwrite: true }),\r\n  onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),\r\n    onEnter: (batch) =>\r\n      gsap.to(batch, { autoAlpha: 1, stagger: 0.2, overwrite: false }),\r\n    onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),\r\n   \r\n  });\r\n \r\n\r\n\r\n  \r\n\r\n\r\n  document.querySelectorAll('.menu ul li ').forEach(item => {\r\n    item.addEventListener('click', () => {\r\n      item.querySelector('ul').style.display = item.querySelector('ul').style.display === 'block' ? 'none' : 'block';\r\n    });\r\n  });\r\n  \r\n  function moveMenu() {\r\n    let menu = document.querySelector('.menu__item--main');\r\n    menu.classList.toggle('shifted');\r\n\r\n    \r\n  }\r\n\r\n\r\n\r\n  window.addEventListener('scroll', function() {\r\n    let scrollImage = document.getElementById('mockup2');\r\n    let imagePosition = scrollImage.getBoundingClientRect().top;\r\n    let screenHeight = window.innerHeight * 0.5;\r\n  \r\n    if (imagePosition < screenHeight) {\r\n      scrollImage.classList.add('scrolled');\r\n    } else {\r\n      scrollImage.classList.remove('scrolled');\r\n    }\r\n  });\r\n\r\n\r\n\n\n//# sourceURL=webpack://chernovik/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;