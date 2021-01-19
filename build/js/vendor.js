'use strict';
(function () {

  var pageBody = document.querySelector('.page-body');
  var pageHeader = document.querySelector('.page-header');

  pageHeader.classList.remove('page-header--nojs');
  pageHeader.classList.add('page-header--closed');

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

  window.vendor = {
    togglePageHeader: togglePageHeader,
    openMenu: openMenu,
    closeMenu: closeMenu,
  };

})();
