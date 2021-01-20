'use strict';
(function () {
  var pageBody = document.querySelector('.page-body');
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var menuItems = document.querySelectorAll('.navigation__item');

  if (pageHeader) {
    pageHeader.classList.remove('page-header--nojs');
    pageHeader.classList.add('page-header--closed');
  }

  if (pageHeader && pageBody) {
    var openMenu = function () {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');
      pageBody.classList.add('page-body--fixed');
    };

    var closeMenu = function () {
      pageHeader.classList.add('page-header--closed');
      pageHeader.classList.remove('page-header--opened');
      pageBody.classList.remove('page-body--fixed');
    };

    var togglePageHeader = function () {
      if (pageHeader.classList.contains('page-header--closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    };
  }

  if (headerToggle) {
    headerToggle.addEventListener('click', togglePageHeader);
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', closeMenu);
    }
  }
})();
