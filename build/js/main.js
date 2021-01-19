'use strict';
(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var menuItems = document.querySelectorAll('.navigation__item');

  pageHeader.classList.remove('page-header--nojs');
  pageHeader.classList.add('page-header--closed');

  if (headerToggle) {
    headerToggle.addEventListener('click', window.vendor.togglePageHeader);
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', window.vendor.closeMenu);
    }
  }
})();
