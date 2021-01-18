'use strict';
(function () {

  var pageHeader = document.querySelector('.page-header');

  pageHeader.classList.remove('page-header--nojs');
  pageHeader.classList.add('page-header--closed');

  var togglePageHeader = function () {
    if (pageHeader.classList.contains('page-header--closed')) {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');
    } else {
      pageHeader.classList.add('page-header--closed');
      pageHeader.classList.remove('page-header--opened');
    }
  };

  window.vendor = {
    togglePageHeader: togglePageHeader,
  };

})();
