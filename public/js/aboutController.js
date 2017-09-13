'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  aboutController.init = () => {
    $('#projects').hide();
    $('#about').show();
    

  }

  module.aboutController = aboutController;
})(app);