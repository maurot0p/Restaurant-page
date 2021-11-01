/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu),
/* harmony export */   "removeMenu": () => (/* binding */ removeMenu)
/* harmony export */ });
const loadMenu = () => {
    const container=document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menucontainer');   

    const item1 = document.createElement('div');
    item1.setAttribute('class','menuitem');
    const item1title = document.createElement('div');
    item1title.setAttribute('class','itemtitle');
    item1title.innerHTML="Margherita";
    const item1description = document.createElement('div');
    item1description.setAttribute('class','itemdescription');
    item1description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item1.appendChild(item1title);
    item1.appendChild(item1description);

    const item2 = document.createElement('div');
    item2.setAttribute('class','menuitem');
    const item2title = document.createElement('div');
    item2title.setAttribute('class','itemtitle');
    item2title.innerHTML="Marinara";
    const item2description = document.createElement('div');
    item2description.setAttribute('class','itemdescription');
    item2description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item2.appendChild(item2title);
    item2.appendChild(item2description);

    const item3 = document.createElement('div');
    item3.setAttribute('class','menuitem');
    const item3title = document.createElement('div');
    item3title.setAttribute('class','itemtitle');
    item3title.innerHTML="Quattro Formaggi";
    const item3description = document.createElement('div');
    item3description.setAttribute('class','itemdescription');
    item3description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item3.appendChild(item3title);
    item3.appendChild(item3description);


    const item4 = document.createElement('div');
    item4.setAttribute('class','menuitem');
    const item4title = document.createElement('div');
    item4title.setAttribute('class','itemtitle');
    item4title.innerHTML="Capricciosa";
    const item4description = document.createElement('div');
    item4description.setAttribute('class','itemdescription');
    item4description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item4.appendChild(item4title);
    item4.appendChild(item4description);

    const item5 = document.createElement('div');
    item5.setAttribute('class','menuitem');
    const item5title = document.createElement('div');
    item5title.setAttribute('class','itemtitle');
    item5title.innerHTML="Diavola";
    const item5description = document.createElement('div');
    item5description.setAttribute('class','itemdescription');
    item5description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item5.appendChild(item5title);
    item5.appendChild(item5description);

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);

    container.appendChild(menu);
}
const removeMenu = () =>{
    const menucontainer=document.querySelector('#menucontainer');
    menucontainer.remove();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudWNvbnRhaW5lcicpOyAgIFxuXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbWVudWl0ZW0nKTtcbiAgICBjb25zdCBpdGVtMXRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTF0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaXRlbXRpdGxlJyk7XG4gICAgaXRlbTF0aXRsZS5pbm5lckhUTUw9XCJNYXJnaGVyaXRhXCI7XG4gICAgY29uc3QgaXRlbTFkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0xZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2l0ZW1kZXNjcmlwdGlvbicpO1xuICAgIGl0ZW0xZGVzY3JpcHRpb24uaW5uZXJIVE1MPVwiIFNhbiBNYXJ6YW5vIHRvbWF0b2VzLCBtb3p6YXJlbGxhIGNoZWVzZSwgZnJlc2ggYmFzaWwsIHNhbHQsIGFuZCBleHRyYS12aXJnaW4gb2xpdmUgb2lsXCI7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoaXRlbTF0aXRsZSk7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoaXRlbTFkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0yLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51aXRlbScpO1xuICAgIGNvbnN0IGl0ZW0ydGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMnRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpdGVtdGl0bGUnKTtcbiAgICBpdGVtMnRpdGxlLmlubmVySFRNTD1cIk1hcmluYXJhXCI7XG4gICAgY29uc3QgaXRlbTJkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0yZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2l0ZW1kZXNjcmlwdGlvbicpO1xuICAgIGl0ZW0yZGVzY3JpcHRpb24uaW5uZXJIVE1MPVwiIFNhbiBNYXJ6YW5vIHRvbWF0b2VzLCBtb3p6YXJlbGxhIGNoZWVzZSwgZnJlc2ggYmFzaWwsIHNhbHQsIGFuZCBleHRyYS12aXJnaW4gb2xpdmUgb2lsXCI7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoaXRlbTJ0aXRsZSk7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoaXRlbTJkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51aXRlbScpO1xuICAgIGNvbnN0IGl0ZW0zdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtM3RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpdGVtdGl0bGUnKTtcbiAgICBpdGVtM3RpdGxlLmlubmVySFRNTD1cIlF1YXR0cm8gRm9ybWFnZ2lcIjtcbiAgICBjb25zdCBpdGVtM2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTNkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaXRlbWRlc2NyaXB0aW9uJyk7XG4gICAgaXRlbTNkZXNjcmlwdGlvbi5pbm5lckhUTUw9XCIgU2FuIE1hcnphbm8gdG9tYXRvZXMsIG1venphcmVsbGEgY2hlZXNlLCBmcmVzaCBiYXNpbCwgc2FsdCwgYW5kIGV4dHJhLXZpcmdpbiBvbGl2ZSBvaWxcIjtcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChpdGVtM3RpdGxlKTtcbiAgICBpdGVtMy5hcHBlbmRDaGlsZChpdGVtM2Rlc2NyaXB0aW9uKTtcblxuXG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbWVudWl0ZW0nKTtcbiAgICBjb25zdCBpdGVtNHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTR0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaXRlbXRpdGxlJyk7XG4gICAgaXRlbTR0aXRsZS5pbm5lckhUTUw9XCJDYXByaWNjaW9zYVwiO1xuICAgIGNvbnN0IGl0ZW00ZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpdGVtZGVzY3JpcHRpb24nKTtcbiAgICBpdGVtNGRlc2NyaXB0aW9uLmlubmVySFRNTD1cIiBTYW4gTWFyemFubyB0b21hdG9lcywgbW96emFyZWxsYSBjaGVlc2UsIGZyZXNoIGJhc2lsLCBzYWx0LCBhbmQgZXh0cmEtdmlyZ2luIG9saXZlIG9pbFwiO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00dGl0bGUpO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00ZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbWVudWl0ZW0nKTtcbiAgICBjb25zdCBpdGVtNXRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTV0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaXRlbXRpdGxlJyk7XG4gICAgaXRlbTV0aXRsZS5pbm5lckhUTUw9XCJEaWF2b2xhXCI7XG4gICAgY29uc3QgaXRlbTVkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW01ZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2l0ZW1kZXNjcmlwdGlvbicpO1xuICAgIGl0ZW01ZGVzY3JpcHRpb24uaW5uZXJIVE1MPVwiIFNhbiBNYXJ6YW5vIHRvbWF0b2VzLCBtb3p6YXJlbGxhIGNoZWVzZSwgZnJlc2ggYmFzaWwsIHNhbHQsIGFuZCBleHRyYS12aXJnaW4gb2xpdmUgb2lsXCI7XG4gICAgaXRlbTUuYXBwZW5kQ2hpbGQoaXRlbTV0aXRsZSk7XG4gICAgaXRlbTUuYXBwZW5kQ2hpbGQoaXRlbTVkZXNjcmlwdGlvbik7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW0xKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW0yKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW0zKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW00KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW01KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcbn1cbmNvbnN0IHJlbW92ZU1lbnUgPSAoKSA9PntcbiAgICBjb25zdCBtZW51Y29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Y29udGFpbmVyJyk7XG4gICAgbWVudWNvbnRhaW5lci5yZW1vdmUoKTtcbn1cbmV4cG9ydCB7IGxvYWRNZW51LHJlbW92ZU1lbnUgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=