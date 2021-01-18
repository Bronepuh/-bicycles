'use strict';
(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');

  pageHeader.classList.remove('page-header--nojs');
  pageHeader.classList.add('page-header--closed');

  if (headerToggle) {
    headerToggle.addEventListener('click', window.vendor.togglePageHeader);
  }
})();
