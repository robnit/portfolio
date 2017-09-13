'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  aboutController.init = () => {
      console.log('about clicked');
    $('#projects').hide();
    $('#about').show();
    

  }

  module.aboutController = aboutController;
})(app);