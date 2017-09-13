'use strict';
var app = app || {};

(function(module) {
  const projectController = {};
  projectController.init = () => {

    $('#projects').show();
    $('#about').hide();
  }
  module.projectController = projectController;
})(app);